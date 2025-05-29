<script lang="ts">
	import { onMount, onDestroy, tick } from 'svelte';
	import { page } from '$app/state';
	import * as Command from '$lib/components/ui/command/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { RangeCalendar } from '$lib/components/ui/range-calendar/index.js';
	import * as Table from '$lib/components/ui/table';
	import * as Alert from '$lib/components/ui/alert/index.js';
	import { toast } from 'svelte-sonner';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import Skeleton from '$lib/components/ui/skeleton/skeleton.svelte';
	import {
		Ban,
		X,
		HeartHandshake,
		MousePointerClick,
		Check,
		ChevronsUpDown,
		Calendar,
		Share
	} from '@lucide/svelte';
	import { cn } from '$lib/utils.js';
	import { language } from '$lib/stores/language';
	import { viewport, breakpoints } from '$lib/stores/viewport';
	import { fetchTableData } from '$lib/utils/fetchTableData';
	import { dateValueToDate, dateValueToString } from '$lib/utils/formatDate';
	import { getLocalTimeZone, today } from '@internationalized/date';
	import { type DateRange } from 'bits-ui';

	const params = {
		teachNum: { x: 0, firstY: 3, step: 2 }, // x: 0, firstY: 5, step: 2
		teacher: { x: 1, firstY: 3, step: 2 }, // x: 1, firstY: 5, step: 2
		// hours: { x: 2, firstY: 5, step: 2 },
		date: { y: 0, firstX: 2, step: 2 * 6 }, // y: 1, firstX: 3, step: 2 * 6
		lesNum: { y: 1, firstX: 2, step: 2 }, // y: 2, firstX: 3, step: 2
		// time: { y: 3, firstX: 3, step: 2 },
		group: { firstY: 3, firstX: 2, step: 2 }, // firstY: 5, firstX: 3, step: 2
		type: { firstY: 4, firstX: 2, step: 2 }, // firstY: 6, firstX: 3, step: 2
		auditorium: { firstY: 3, firstX: 3, step: 2 } // firstY: 5, firstX: 4, step: 2
	};

	const times = [
		'09:00 - 10:30',
		'10:40 - 12:10',
		'12:30 - 14:00',
		'14:20 - 15:50',
		'16:00 - 17:30',
		'17:40 - 19:10'
	];

	type Lesson = {
		time: string;
		group: string;
		type: string;
		auditorium: string;
	};

	let selectedTeacher = $state('');

	let teacherSelectOpen = $state(false);
	let triggerRef = $state<HTMLButtonElement>(null!);
	function closeAndFocusTrigger() {
		teacherSelectOpen = false;
		tick().then(() => {
			triggerRef.focus();
		});
	}

	let selectedRange: DateRange = $state({
		start: today(getLocalTimeZone()),
		end: today(getLocalTimeZone()).add({ days: 6 })
	});
	let lastQuery = $state('');

	let schedule: string[][] | null = null;
	let dates: Record<string, number> = {};
	let teacherOptions: { [key: string]: number[] } = $state({});
	let buildedSchedule: Record<string, Lesson[]> = $state({});

	let rangeVisible = $state(false);
	let scheduleStatus: 'hidden' | 'visible' | 'loading' | 'error' | '' = $state('');
	let scheduleError: string | null = $state(null);

	let interval: ReturnType<typeof setInterval> | null = null;

	const onLoad = async () => {
		scheduleStatus = 'loading';

		if (localStorage.getItem('tdata')) {
			schedule = JSON.parse(localStorage.getItem('tdata')!);
			getInitialParams();

			scheduleStatus = 'hidden';
			setTimeout(() => {
				if (selectedTeacher) buildSchedule();
			}, 1000);
		}

		const data = await fetchTableData('teacher');
		if (data.scheduleError || !data.schedule) {
			if (scheduleError || !schedule) {
				scheduleStatus = 'error';
				scheduleError = data.scheduleError;
				interval && clearInterval(interval);
				return;
			}
		}
		schedule = data.schedule;
		scheduleError = data.scheduleError;

		getInitialParams();

		scheduleStatus = 'hidden';

		if (selectedTeacher) buildSchedule();
		localStorage.setItem('tdata', JSON.stringify(schedule));
	};

	const getInitialParams = async () => {
		if (!schedule) {
			scheduleError = 'Error: Schedule is null';
			scheduleStatus = 'error';
			return {};
		}

		teacherOptions = schedule.reduce(
			(acc: { [key: string]: number[] }, row: string[], index: number) => {
				const cell = row[params.teacher.x];
				if (cell && !cell.includes('Преподаватель') && !cell.includes('!Аудитория')) {
					if (!acc[cell]) acc[cell] = [];
					acc[cell].push(index);
				}
				return acc;
			},
			{}
		);

		dates = schedule.reduce((acc: { [key: string]: number }, row: string[], index: number) => {
			if (row[2]) {
				const dateCell = row[2].split(' ')[1];
				if (dateCell && dateCell !== 'undefined' && /\b(\d{2}\.\d{2}\.\d{4})\b/.test(dateCell))
					acc[`${dateCell.slice(0, -4)}${dateCell.split('.')[2].slice(-2)}`] = index;
			}
			return acc;
		}, {});
	};

	const handleTeacherChange = async (saveLastQuery = true) => {
		resetSelection();
		if (!selectedTeacher) return;
		rangeVisible = true;

		if (selectedTeacher && selectedRange) {
			buildSchedule();
			if (saveLastQuery) {
				lastQuery = selectedTeacher;
			}
		}

		if (interval) clearInterval(interval);
		await tick();
		interval = setInterval(async () => {
			if (!selectedTeacher) {
				interval && clearInterval(interval);
				return;
			}
			const data = await fetchTableData('teacher');
			if (data.scheduleError || !data.schedule) {
				if (scheduleError || !schedule) {
					scheduleStatus = 'error';
					scheduleError = data.scheduleError;
					interval && clearInterval(interval);
					return;
				}
			}
			schedule = data.schedule;
			getInitialParams();
			toast.success(
				$language === 'ru'
					? 'Расписание обновлено в ' + new Date().toLocaleString('ru-RU', { hour12: false })
					: 'Schedule updated at ' + new Date().toLocaleString('en-US', { hour12: false })
			);

			if (!selectedTeacher) {
				interval && clearInterval(interval);
				return;
			}
			buildSchedule();

			localStorage.setItem('tdata', JSON.stringify(schedule));
		}, 300000);
	};

	const handleRangeChange = () => {
		if (selectedTeacher && selectedRange) buildSchedule();
	};

	const buildSchedule = () => {
		if (!selectedRange.start || !selectedRange.end) {
			scheduleStatus = 'hidden';
			return;
		}

		scheduleStatus = 'loading';
		const startDate = dateValueToDate(selectedRange.start);
		const endDate = dateValueToDate(selectedRange.end);

		let selectedDates = [];
		let currentDate = startDate;

		while (currentDate <= endDate) {
			const day = String(currentDate.getDate()).padStart(2, '0');
			const month = String(currentDate.getMonth() + 1).padStart(2, '0');
			const year = currentDate.getFullYear().toString().slice(-2);
			const formattedDate = `${day}.${month}.${year}`;
			selectedDates.push(formattedDate);
			currentDate.setDate(currentDate.getDate() + 1);
		}

		buildedSchedule = selectedDates.reduce((acc: Record<string, Lesson[]>, date) => {
			if (!schedule) {
				scheduleError = 'Error: Schedule is null';
				scheduleStatus = 'error';
				return {};
			}

			let teacher = teacherOptions[selectedTeacher];
			let teacherForDate: number = 0;
			for (let i = 0; i < teacher.length; i++) {
				if (!teacher[i + 1] || teacher[i] > dates[date]) {
					teacherForDate = teacher[i];
					break;
				}
			}

			if (teacherForDate === 0) {
				return acc;
			}

			let lessons: Lesson[] = [];
			for (let i = params.lesNum.firstX; i < params.lesNum.step * 6; i += params.lesNum.step) {
				const time = times[Number(schedule[params.lesNum.y][i]) - 1];
				const group = schedule[teacherForDate][i];
				const type = schedule[teacherForDate + 1][i];
				const auditorium = schedule[teacherForDate][i + 1];

				if (group) {
					lessons.push({
						time: time || '',
						group: group || '',
						type: type || '',
						auditorium: auditorium || ''
					});
				}
			}

			acc[date] = lessons;
			return acc;
		}, {});

		scheduleStatus = 'visible';
	};

	const resetSelection = () => {
		scheduleStatus = 'hidden';
		buildedSchedule = {};
		rangeVisible = false;
		selectedRange = {
			start: today(getLocalTimeZone()),
			end: today(getLocalTimeZone()).add({ days: 6 })
		};
	};

	const getDayOfWeek = (date: string, lang = 'ru') => {
		let daysOfWeek = [];
		if (lang === 'ru') {
			daysOfWeek = [
				'Воскресенье',
				'Понедельник',
				'Вторник',
				'Среда',
				'Четверг',
				'Пятница',
				'Суббота'
			];
		} else {
			daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		}
		const [day, month, year] = date.split('.');
		const dateObj = new Date(`20${year}-${month}-${day}`);
		return daysOfWeek[dateObj.getDay()] || 'Неизвестный день!';
	};

	onMount(async () => {
		onLoad();

		lastQuery = localStorage.getItem('tlq') || '';

		$effect((tlq = lastQuery) => {
			localStorage.setItem('tlq', tlq);
		});

		const urlQ = page.url.searchParams.get('q') || '';

		if (urlQ) {
			const qTeachher = decodeURI(urlQ);
			const parseUrl = () => {
				if (!teacherOptions[qTeachher]) {
					toast.error(
						$language === 'ru'
							? `Некорректный преподаватель передан в URL: "${qTeachher}"`
							: `Incorrect teacher passed in URL: "${qTeachher}"`
					);
					return;
				}
				selectedTeacher = qTeachher;
				handleTeacherChange();

				toast.success(
					$language === 'ru'
						? `Преподаватель "${qTeachher}" успешно загружен из URL`
						: `"${qTeachher}" teacher are successfully loaded from URL`
				);

				const url = new URL(window.location.href);
				url.searchParams.delete('q');
				history.replaceState({}, '', url.toString());
			};

			if (schedule) {
				parseUrl();
			} else {
				const checkSchedule = setInterval(() => {
					if (schedule) {
						clearInterval(checkSchedule);
						parseUrl();
					}
				}, 500);
			}
		}
	});

	onDestroy(() => {
		interval && clearInterval(interval);
	});
</script>

<div
	class="{selectedTeacher
		? 'justify-start'
		: 'justify-center'} mx-auto flex min-h-[calc(100dvh_-_3.5rem)] w-full flex-col items-center bg-gradient-to-br from-white to-sky-200 px-1 md:min-h-[calc(100dvh_-_4rem)] dark:from-sky-800 dark:to-black"
>
	{#if scheduleStatus !== 'visible'}
		<div class="absolute top-[20dvh]">
			<h1 class="mb-4 text-center text-3xl font-bold md:text-4xl">
				{$language === 'ru' ? 'Расписание НГОК Преподавателям' : 'NGOK Schedule for Teachers'}
			</h1>
			<p class=" text-center">
				{$language === 'ru'
					? 'Выберите преподавателя, чтобы увидеть расписание'
					: 'Select a teacher to see the schedule'}
			</p>
		</div>
	{/if}
	<Button
		variant="outline"
		size="icon"
		class="fixed top-2.5 right-14 z-40 md:top-3.5 md:right-16"
		onclick={() => {
			if (selectedTeacher) {
				navigator.clipboard.writeText(
					`${window.location.origin}/teacher?q=${encodeURI(selectedTeacher)}`
				);
				toast.success(
					$language === 'ru'
						? `Ссылка для преподователя "${selectedTeacher}" скопирована в буфер обмена!`
						: `Link for "${selectedTeacher}" teacher copied to clipboard!`
				);
			} else {
				toast.error(
					$language === 'ru' ? 'Сначала выберите преподавателя' : 'Select a teacher first'
				);
			}
		}}
	>
		<Share class="!size-5" />
	</Button>
	<div class="md:1/2 m-1 mt-3 flex w-full flex-col gap-y-2 md:w-[512px]">
		<div class="flex w-full gap-0">
			<div class="flex-grow">
				<Popover.Root bind:open={teacherSelectOpen}>
					<Popover.Trigger bind:ref={triggerRef}>
						{#snippet child({ props })}
							<Button
								variant="outline"
								{...props}
								role="combobox"
								aria-expanded={teacherSelectOpen}
								class={`w-full justify-between !px-4 py-5${selectedTeacher ? ' rounded-r-none' : ''}`}
							>
								{selectedTeacher
									? selectedTeacher
									: $language === 'ru'
										? 'Выберите преподавателя'
										: 'Select a teacher'}
								<ChevronsUpDown class="opacity-50" />
							</Button>
						{/snippet}
					</Popover.Trigger>
					<Popover.Content class="z-10 mt-[3px] w-[calc(100dvw-8px)] p-0 md:w-[320px]">
						<Command.Root>
							<Command.Input
								placeholder={$language === 'ru' ? 'Искать преподавателя' : 'Search for a teacher'}
								class="h-9"
								onfocusin={() => {
									if ($viewport.vw < breakpoints.md) {
										window.scrollTo({
											top: window.scrollY + triggerRef.getBoundingClientRect().top - 8,
											behavior: 'smooth'
										});
									}
								}}
								onfocusout={() => {
									if ($viewport.vw < breakpoints.md) {
										teacherSelectOpen = false;
										window.scrollTo({
											top: 0,
											behavior: 'smooth'
										});
									}
								}}
							/>
							<Command.List>
								<Command.Empty
									>{$language === 'ru' ? 'Нет результатов' : 'No results'}</Command.Empty
								>
								<Command.Group class="max-h-[256px] overflow-y-auto">
									{#each Object.keys(teacherOptions) as group}
										<Command.Item
											value={group}
											onSelect={() => {
												selectedTeacher = group;
												handleTeacherChange();
												closeAndFocusTrigger();
											}}
										>
											<Check class={cn(selectedTeacher !== group && 'text-transparent')} />
											{group}
										</Command.Item>
									{/each}
								</Command.Group>
							</Command.List>
						</Command.Root>
					</Popover.Content>
				</Popover.Root>
			</div>
			{#if selectedTeacher}
				<Button
					variant="outline"
					size="icon"
					class="shrink-0 rounded-l-none border-l-0 p-5"
					onclick={() => {
						selectedTeacher = '';
						handleTeacherChange();
					}}
				>
					<X class="opacity-50"></X>
				</Button>
			{/if}
		</div>

		{#if rangeVisible}
			{@const numberOfMonths = $viewport.vw >= breakpoints.md ? 2 : 1}
			{@const lang = $language === 'ru' ? 'ru' : 'en'}
			{#key [numberOfMonths, lang]}
				<div
					class="group border-input bg-background flex min-h-9 w-full flex-col items-center justify-center rounded-md px-4 py-3 font-medium shadow-md"
				>
					<div class="flex w-full items-center justify-between text-sm">
						{#if selectedRange.start && selectedRange.end}
							{dateValueToString(selectedRange.start)} - {dateValueToString(selectedRange.end)}
						{:else}
							{$language === 'ru' ? 'Выберите период' : 'Select a range'}
						{/if}
						<Calendar class="size-4 opacity-50" />
					</div>
					<Separator class="mt-2 hidden group-hover:block"></Separator>
					<RangeCalendar
						bind:value={selectedRange}
						weekStartsOn={lang === 'ru' ? 0 : 1}
						{numberOfMonths}
						class="hidden capitalize group-hover:block"
						onValueChange={handleRangeChange}
						locale={lang === 'ru' ? 'ru' : 'en'}
					/>
				</div>
			{/key}
		{/if}
	</div>

	{#if scheduleStatus === 'error'}
		<Alert.Root class="md:1/2 my-1 w-full md:w-[512px]">
			<Ban class="mt-1 !size-8 !text-red-700 dark:!text-red-400" />
			<Alert.Title class="!line-clamp-none !pl-5">
				<p class="text-red-700 dark:text-red-400">
					{$language === 'ru' ? 'Возникла проблема' : 'Error Occurred'}
				</p>
				<p class="text-muted-foreground">{scheduleError}</p>
			</Alert.Title>
		</Alert.Root>
	{:else if scheduleStatus === 'loading'}
		<Skeleton class="md:1/2 my-1 h-10 w-full md:w-[512px]" />
	{:else if scheduleStatus === 'visible' && buildedSchedule}
		<div
			class="mx-auto my-1.5 grid grid-cols-1 justify-items-center gap-x-2 gap-y-3 md:p-2{Object.keys(
				buildedSchedule
			).length > 1
				? ' lg:grid-cols-2 '
				: ''}{Object.keys(buildedSchedule).length > 2 ? ' 2xl:grid-cols-3 ' : ''}{Object.keys(
				buildedSchedule
			).length > 3
				? ' min-[1792px]:grid-cols-4'
				: ''}"
		>
			{#each Object.entries(buildedSchedule) as [key, day]}
				<div
					class="bg-background w-full max-w-[512px] min-w-[320px] rounded-md border p-1 shadow-md"
				>
					<Table.Root>
						<Table.Header
							class="text-base {key === dateValueToString(today(getLocalTimeZone()))
								? 'bg-green-100 dark:bg-green-800/50'
								: day.length > 0
									? 'bg-blue-100 dark:bg-blue-800/50'
									: 'mt-4 bg-red-100 p-4 dark:bg-red-800/50'}"
						>
							<Table.Row>
								<Table.Head class="text-foreground w-1/3 text-right font-semibold">{key}</Table.Head
								>
								<Table.Head class="text-foreground w-2/3 text-left font-semibold"
									>{getDayOfWeek(key, $language)}</Table.Head
								>
							</Table.Row>
						</Table.Header>
						<Table.Body class="bg-background">
							{#if day.length > 0}
								{#if !day[0].time.startsWith('09:00')}
									<Table.Row>
										<Table.Cell class="text-center font-semibold italic" colspan={2}>
											{$language === 'ru' ? 'Пары начинаются с' : 'Lessons start at'}
											{@const lessonTime = day[0]?.time}

											{#if lessonTime}
												{@const time = lessonTime.includes('-')
													? lessonTime.split('-')[0]
													: lessonTime}
												{time.includes('.') ? time.replace(/\./g, ':') : time}
											{/if}
										</Table.Cell>
									</Table.Row>
								{/if}
								{#each day as lesson}
									<Table.Row>
										<Table.Cell class="text-right"
											>{lesson.time.includes('.')
												? lesson.time.replace(/\./g, ':')
												: lesson.time}</Table.Cell
										>
										<Table.Cell class="text-left">{lesson.group}</Table.Cell>
									</Table.Row>
									<Table.Row>
										<Table.Cell class="text-right">
											{#if lesson.auditorium.startsWith('http')}
												<a href={lesson.auditorium} target="_blank" class="underline">
													{$language === 'ru' ? 'Онлайн' : 'Online'}
												</a>
											{:else}
												{lesson.auditorium}
											{/if}
										</Table.Cell>
										<Table.Cell class="text-left">{lesson.type}</Table.Cell>
									</Table.Row>
								{/each}
							{:else}
								<Table.Cell class="text-center font-semibold italic" colspan={2}>
									{$language === 'ru' ? 'Нет пар' : 'No lessons'}
								</Table.Cell>
							{/if}
						</Table.Body>
					</Table.Root>
				</div>
			{/each}
		</div>
	{/if}
	{#if scheduleStatus !== 'visible'}
		{#if lastQuery && scheduleStatus !== 'loading'}
			<Button
				variant="outline"
				class="md:1/2 my-1 w-full !justify-start py-5 duration-0 md:w-[512px]"
				onclick={async () => {
					selectedTeacher = lastQuery;
					handleTeacherChange();
				}}
			>
				<MousePointerClick class="mr-2.5 ml-2 !size-6 !text-cyan-700 dark:!text-cyan-400" />
				<p>{$language === 'ru' ? 'Последний запрос: ' : 'Last query:'}</p>
				<p class="font-semibold !text-cyan-700 dark:!text-cyan-400">
					{lastQuery}
				</p>
			</Button>
		{/if}
		<Alert.Root class="my-1 w-full md:w-[512px]">
			<HeartHandshake class="mt-0.5 !size-8 !text-green-700 dark:!text-green-400" />
			<Alert.Title class="!line-clamp-none !pl-5">
				<p>
					{#if $language === 'ru'}
						Лучшая благодарность
						<a
							class="font-semibold text-green-700 italic hover:underline dark:text-green-400"
							href="https://ma.cyou/">Автору</a
						>
					{:else}
						Best Thanks to the <a
							class="font-semibold text-green-700 italic hover:underline dark:text-green-400"
							href="https://ma.cyou/">Author</a
						>
					{/if}
				</p>
				<p>
					{#if $language === 'ru'}
						это подписка на <a
							class="font-semibold text-green-700 italic hover:underline dark:text-green-400"
							href="https://github.com/Mapagmataas1331">GitHub</a
						>
						и звездочка на
						<a
							class="font-semibold text-green-700 italic hover:underline dark:text-green-400"
							href="https://github.com/Mapagmataas1331/ma">Репозиторий</a
						>
					{:else}
						is a subscription on <a
							class="font-semibold text-green-700 italic hover:underline dark:text-green-400"
							href="https://github.com/Mapagmataas1331">GitHub</a
						>
						and a star on
						<a
							class="font-semibold text-green-700 italic hover:underline dark:text-green-400"
							href="https://github.com/Mapagmataas1331/ma">Repository</a
						>
					{/if}
				</p>
			</Alert.Title>
		</Alert.Root>
	{/if}
</div>
