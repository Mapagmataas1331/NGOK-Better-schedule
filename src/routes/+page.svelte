<script lang="ts">
	import { onMount } from 'svelte';
	import * as Select from '$shared/components/ui/select';
	import { RangeCalendar } from '$shared/components/ui/range-calendar/index.js';
	import Button from '$shared/components/ui/button/button.svelte';
	import * as Alert from '$shared/components/ui/alert/index.js';
	import * as Table from '$shared/components/ui/table';
	import Separator from '$shared/components/ui/separator/separator.svelte';
	import Skeleton from '$shared/components/ui/skeleton/skeleton.svelte';
	import Ban from 'lucide-svelte/icons/ban';
	import Sticker from 'lucide-svelte/icons/sticker';
	import MousePointerClick from 'lucide-svelte/icons/mouse-pointer-click';
	import Calendar from 'lucide-svelte/icons/calendar';
	import { language } from '$shared/stores/language';
	import { viewport, breakpoints } from '$shared/stores/viewport';
	import { fetchTableData } from '$lib/utils/fetchTableData';
	import { dateValueToDate, dateValueToString } from '$lib/utils/formatDate';
	import { getLocalTimeZone, today } from '@internationalized/date';
	import { type DateRange } from 'bits-ui';

	type Lesson = {
		time: string;
		discipline: string;
		auditorium: string;
		teacher: string;
	};

	let selectedYear = $state('');
	let selectedGroup = $state('');
	let selectedRange: DateRange = $state({
		start: today(getLocalTimeZone()),
		end: today(getLocalTimeZone()).add({ days: 6 })
	});
	let lastQuery = $state({
		year: '',
		group: ''
	});

	let schedule: string[][] | null = null;
	let params: { [key: string]: number } = {};
	let studyDates: { [key: string]: number } = $state({});
	let curWeek: string | null = null;
	let timeIntervals: { [key: string]: number } = $state({});
	let allDates = {};

	let yearOptions: string[] = ['1', '2', '3', '4'];
	let groupOptions: { [key: string]: number } = $state({});
	let buildedSchedule: Record<string, Lesson[]> = $state({});

	let groupVisible = $state(false);
	let rangeVisible = $state(false);
	let scheduleStatus: 'hidden' | 'visible' | 'loading' | 'error' | '' = $state('');
	let scheduleError: string | null = $state(null);

	const handleYearChange = async () => {
		resetSelection(true);
		if (!selectedYear) return;
		scheduleStatus = 'loading';
		const data = await fetchTableData(selectedYear);
		schedule = data.schedule;
		scheduleError = data.scheduleError;
		if (scheduleError || !schedule) {
			scheduleStatus = 'error';
			return;
		}

		scheduleStatus = 'hidden';
		params = extractParams();
		curWeek = schedule[0][0].match(/\b(\d{2}\.\d{2}\.\d{4})\b/)?.[0] || null;
		timeIntervals = extractTimeIntervals();
		groupOptions = extractGroups();
		groupVisible = true;
	};

	const handleGroupChange = () => {
		resetSelection();
		if (!selectedGroup) return;
		rangeVisible = true;

		const updatedParams = extractUpdatedParams();
		Object.assign(params, updatedParams);

		allDates = extractDates(schedule, params);
		studyDates = filterStudyDates(schedule, allDates, params);

		if (selectedYear && selectedGroup && selectedRange) buildSchedule();
	};

	const handleRangeChange = () => {
		if (selectedYear && selectedGroup && selectedRange) buildSchedule();
	};

	const buildSchedule = () => {
		if (!selectedRange.start || !selectedRange.end) {
			scheduleStatus = 'hidden';
			return;
		}

		scheduleStatus = 'loading';
		const startDate = dateValueToDate(selectedRange.start);
		const endDate = dateValueToDate(selectedRange.end);

		let currentDate = startDate;
		let dates = [];
		while (currentDate <= endDate) {
			const day = String(currentDate.getDate()).padStart(2, '0');
			const month = String(currentDate.getMonth() + 1).padStart(2, '0');
			const year = currentDate.getFullYear();
			const formattedDate = `${day}.${month}.${year}`;
			dates.push(formattedDate);
			currentDate.setDate(currentDate.getDate() + 1);
		}

		buildedSchedule = dates.reduce((acc: Record<string, Lesson[]>, date) => {
			if (!schedule) {
				scheduleError = 'Error: Schedule is null';
				scheduleStatus = 'error';
				return {};
			}
			const isStudyDay = studyDates[date] !== undefined;

			let lessons: Lesson[] = [];
			if (isStudyDay) {
				for (
					let i = studyDates[date];
					i < studyDates[date] + Object.keys(timeIntervals).length;
					i++
				) {
					const discipline = schedule[i][params['Дисциплины']];
					const auditorium = schedule[i][params['Ауд.']];
					const time = schedule[i][params['Часы']];
					const teacher = schedule[i][params['Преподаватели']];

					if (discipline) {
						lessons.push({
							time: time || '',
							discipline: discipline || '',
							auditorium: auditorium || '',
							teacher: teacher || ''
						});
					}
				}
			}

			acc[date] = lessons;
			return acc;
		}, {});

		scheduleStatus = 'visible';
		lastQuery = {
			year: selectedYear,
			group: selectedGroup
		};
	};

	const resetSelection = (ifGroup = false) => {
		scheduleStatus = 'hidden';
		buildedSchedule = {};
		rangeVisible = false;
		selectedRange = {
			start: today(getLocalTimeZone()),
			end: today(getLocalTimeZone()).add({ days: 6 })
		};
		if (ifGroup) {
			scheduleStatus = '';
			groupVisible = false;
			selectedGroup = '';
		}
	};

	const extractParams = () => {
		if (!schedule) {
			scheduleError = 'Error: Schedule is null';
			scheduleStatus = 'error';
			return {};
		}
		return schedule[1].reduce((acc: { [key: string]: number }, cell: string, index: number) => {
			if (cell) acc[cell] = index;
			return acc;
		}, {});
	};

	const extractUpdatedParams = () => {
		if (!schedule) {
			scheduleError = 'Error: Schedule is null';
			scheduleStatus = 'error';
			return {};
		}
		return schedule[1].reduce((acc: { [key: string]: number }, cell: string, index: number) => {
			if (index >= groupOptions[selectedGroup] && !acc[cell]) {
				acc[cell] = index;
			}
			return acc;
		}, {});
	};

	const extractTimeIntervals = () => {
		if (!schedule) {
			scheduleError = 'Error: Schedule is null';
			scheduleStatus = 'error';
			return {};
		}
		return schedule.reduce((acc: { [key: string]: number }, row: string[], index: number) => {
			const time = row[params['Часы']];
			if (index > 0 && time && time !== 'Часы') acc[time] = index;
			return acc;
		}, {});
	};

	const extractGroups = () => {
		if (!schedule) {
			scheduleError = 'Error: Schedule is null';
			scheduleStatus = 'error';
			return {};
		}
		return schedule[0].reduce((acc: { [key: string]: number }, cell: string, index: number) => {
			if (index > 0 && cell) acc[cell] = index;
			return acc;
		}, {});
	};

	const getDayOfWeek = (dateStr: string, lang = 'ru') => {
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
		const [day, month, year] = dateStr.split('.').map(Number);
		const date = new Date(year, month - 1, day);
		return daysOfWeek[date.getDay()] || 'Неизвестный день!';
	};

	const filterStudyDates = (
		schedule: string[][] | null,
		allDates: Record<string, number>,
		params: { [key: string]: number }
	): Record<string, number> => {
		if (!schedule) {
			scheduleError = 'Error: Schedule is null';
			scheduleStatus = 'error';
			return {};
		}
		return Object.entries(allDates).reduce(
			(acc, [date, index]) => {
				for (let i = index; i < index + Object.keys(timeIntervals).length; i++) {
					if (schedule[i][params['Дисциплины']]) acc[date] = index;
				}
				return acc;
			},
			{} as Record<string, number>
		);
	};

	const extractDates = (schedule: string[][] | null, params: { [key: string]: number }) => {
		if (!schedule) {
			scheduleError = 'Error: Schedule is null';
			scheduleStatus = 'error';
			return {};
		}
		return schedule.reduce((acc: { [key: string]: number }, row: string[], index: number) => {
			const dateCell = row[params['Дата']];
			if (index > 1 && dateCell && /\b(\d{2}\.\d{2}\.\d{4})\b/.test(dateCell)) {
				acc[dateCell] = index;
			}
			return acc;
		}, {});
	};

	onMount(() => {
		selectedYear = '';

		lastQuery = {
			year: localStorage.getItem('year') || '',
			group: localStorage.getItem('group') || ''
		};

		$effect((lq = lastQuery) => {
			localStorage.setItem('year', lq.year);
			localStorage.setItem('group', lq.group);
		});
	});
</script>

<div
	class="{rangeVisible
		? 'justify-start'
		: 'justify-center'} mx-auto flex min-h-[calc(100dvh_-_3.5rem)] w-full flex-col items-center bg-gradient-to-br from-white to-sky-200 px-1 dark:from-sky-800 dark:to-black md:min-h-[calc(100dvh_-_4rem)]"
>
	<div class="m-1 mt-3 flex w-full min-w-[256px] flex-col gap-y-2 md:w-2/3 lg:w-1/2 2xl:w-1/3">
		<div class="flex flex-col gap-2 md:flex-row">
			<Select.Root
				type="single"
				name="yearSelect"
				bind:value={selectedYear}
				onValueChange={handleYearChange}
			>
				<Select.Trigger class="w-full bg-background shadow-md">
					{selectedYear
						? selectedYear + ' ' + ($language === 'ru' ? 'курс' : 'year')
						: $language === 'ru'
							? 'Выберите курс'
							: 'Select year'}
				</Select.Trigger>
				<Select.Content>
					<Select.Item value="">{$language === 'ru' ? 'Сброс' : 'Reset'}</Select.Item>
					{#each yearOptions as option}
						<Select.Item value={option}>{option} {$language === 'ru' ? 'курс' : 'year'}</Select.Item
						>
					{/each}
				</Select.Content>
			</Select.Root>

			{#if groupVisible}
				<Select.Root
					type="single"
					name="groupSelect"
					bind:value={selectedGroup}
					onValueChange={handleGroupChange}
				>
					<Select.Trigger class="w-full bg-background">
						{selectedGroup
							? selectedGroup
							: $language === 'ru'
								? 'Выберите группу'
								: 'Select group'}
					</Select.Trigger>
					<Select.Content class="max-h-[256px] overflow-y-auto">
						{#each Object.keys(groupOptions) as group}
							<Select.Item value={group}>{group}</Select.Item>
						{/each}
					</Select.Content>
				</Select.Root>
			{/if}
		</div>

		{#if rangeVisible}
			{@const numberOfMonths = $viewport.vw >= breakpoints.md ? 2 : 1}
			{#key numberOfMonths}
				<div
					class="group flex min-h-9 w-full flex-col items-center justify-center rounded-md border-input bg-background px-3 py-2 font-medium shadow-md"
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
						weekStartsOn={1}
						{numberOfMonths}
						class="hidden capitalize group-hover:block"
						onValueChange={handleRangeChange}
						locale={$language === 'ru' ? 'ru' : 'en'}
					/>
				</div>
			{/key}
		{/if}
	</div>

	{#if scheduleStatus === 'error'}
		<Alert.Root class="my-1 w-full min-w-[256px] md:w-2/3 lg:w-1/2 2xl:w-1/3">
			<Ban class="size-8" />
			<Alert.Title class="!pl-12"
				>{$language === 'ru' ? 'Возникла проблема' : 'Error Occurred'}</Alert.Title
			>
			<Alert.Description class="!pl-12">{scheduleError}</Alert.Description>
		</Alert.Root>
	{:else if scheduleStatus === 'loading'}
		<Skeleton class="my-1 h-8 w-full min-w-[256px] md:w-2/3 lg:w-1/2 2xl:w-1/3" />
	{:else if scheduleStatus === 'visible' && buildedSchedule}
		<div
			class="mx-auto my-1.5 grid grid-cols-1 justify-items-center gap-x-2 gap-y-3 md:p-2{Object.keys(
				buildedSchedule
			).length > 1
				? ' lg:grid-cols-2 '
				: ''}{Object.keys(buildedSchedule).length > 2 ? ' xl:grid-cols-3 ' : ''}{Object.keys(
				buildedSchedule
			).length > 3
				? '2xl:grid-cols-4'
				: ''}"
		>
			{#each Object.entries(buildedSchedule) as [key, day]}
				<div
					class="w-full min-w-[256px] max-w-[640px] rounded-md border bg-background p-1 shadow-md"
				>
					<Table.Root>
						<Table.Header
							class="text-base {key === dateValueToString(today(getLocalTimeZone()))
								? 'bg-green-100 dark:bg-green-800/50'
								: studyDates[key]
									? 'bg-blue-100 dark:bg-blue-800/50'
									: 'mt-4 bg-red-100 p-4 dark:bg-red-800/50'}"
						>
							<Table.Row>
								<Table.Head class="w-1/3 text-right font-semibold text-foreground">{key}</Table.Head
								>
								<Table.Head class="w-2/3 text-left font-semibold text-foreground"
									>{getDayOfWeek(key, $language)}</Table.Head
								>
							</Table.Row>
						</Table.Header>
						<Table.Body class="bg-background">
							{#if studyDates[key]}
								{#if day[0].time !== Object.keys(timeIntervals)[0]}
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
										<Table.Cell class="text-left">{lesson.discipline}</Table.Cell>
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
										<Table.Cell class="text-left">{lesson.teacher}</Table.Cell>
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
	{:else if scheduleStatus !== 'hidden'}
		{#if lastQuery.year && lastQuery.group}
			<Button
				variant="outline"
				class="my-1 w-full min-w-[256px] !justify-start md:w-2/3 lg:w-1/2 2xl:w-1/3"
				onclick={async () => {
					selectedYear = lastQuery.year;
					await handleYearChange();
					selectedGroup = lastQuery.group;
					handleGroupChange();
				}}
			>
				<MousePointerClick class="ml-1 mr-2.5 !size-6" />
				<p>{$language === 'ru' ? 'Последний запрос: ' : 'Last query:'}</p>
				<p class="font-semibold">
					{lastQuery.year}
					{$language === 'ru' ? 'курс' : 'year'}, {lastQuery.group}
				</p>
			</Button>
		{/if}
		<Alert.Root class="my-1 w-full min-w-[256px] md:w-2/3 lg:w-1/2 2xl:w-1/3">
			<Sticker class="size-8" />
			<Alert.Title class="!pl-12">
				{#if $language === 'ru'}
					Лучшая благодарность <a class="font-semibold hover:underline" href="https://ma.cyou/"
						>Автору</a
					>
				{:else}
					Best Thanks to the <a class="font-semibold hover:underline" href="https://ma.cyou/"
						>Author</a
					>
				{/if}
			</Alert.Title>
			<Alert.Description class="!pl-12">
				{#if $language === 'ru'}
					это подписка на <a
						class="font-semibold hover:underline"
						href="https://github.com/Mapagmataas1331">GitHub</a
					>
					и звездочка на
					<a class="font-semibold hover:underline" href="https://github.com/Mapagmataas1331/ma"
						>Репозиторий</a
					>
				{:else}
					is a subscription on <a
						class="font-semibold hover:underline"
						href="https://github.com/Mapagmataas1331">GitHub</a
					>
					and a star on
					<a class="font-semibold hover:underline" href="https://github.com/Mapagmataas1331/ma"
						>Repository</a
					>
				{/if}
			</Alert.Description>
		</Alert.Root>
	{/if}
</div>
