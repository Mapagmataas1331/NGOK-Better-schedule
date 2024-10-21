<script lang="ts">
	import { onMount } from 'svelte';
	import * as Select from '$shared/components/ui/select';
	import { RangeCalendar } from '$shared/components/ui/range-calendar/index.js';
	import * as Alert from '$shared/components/ui/alert/index.js';
	import * as Table from '$shared/components/ui/table';
	import { language } from '$shared/stores/language';
	import { getLocalTimeZone, today, type DateValue } from '@internationalized/date';
	import type { Selected, DateRange } from 'bits-ui';
	import Skeleton from '$lib/shared/components/ui/skeleton/skeleton.svelte';
	import Ban from 'lucide-svelte/icons/ban';
	import Sticker from 'lucide-svelte/icons/sticker';

	type Lesson = {
		time: string;
		discipline: string;
		auditorium: string;
		teacher: string;
	};

	type ScheduleEntry = {
		dayOfWeek: string;
		lessons: Lesson[];
	};

	let selectedYear = '';
	let selectedGroup = '';
	let selectedRange: DateRange = {
		start: today(getLocalTimeZone()),
		end: today(getLocalTimeZone()).add({ days: 6 })
	};

	const sheetId = '1FiMov0r4UUDKT6A56NWMImpoUakDC2YDevgaOpJQ7Qc';
	const apiKey = 'AIzaSyAxU9vV25C6ylby6cg9BO3SLz7_7xj50wo';

	let schedule: string[][] = [];
	let params: { [key: string]: number } = {};
	let studyDates: { [key: string]: number } = {};
	let curWeek = '';
	let scheduleSpace = 0;
	let allDates = {};

	let yearOptions: string[] = ['1', '2', '3', '4'];
	let groupOptions: { [key: string]: number } = {};
	let buildedSchedule: Record<string, ScheduleEntry> = {};

	let groupVisible = false;
	let rangeVisible = false;
	let scheduleStatus: 'hidden' | 'visible' | 'loading' | 'error' | '' = '';
	let scheduleError: string | null = null;

	const buildUrl = (sheetName: string) =>
		`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(sheetName + ' курс')}?key=${apiKey}`;

	const showError = (code = '400', message = 'Unknown error') => {
		scheduleStatus = 'error';
		scheduleError = `Error ${code}: ${message}>`;
	};

	const formatCalendarDate = (date: DateValue): string => {
		const day = String(date.day).padStart(2, '0');
		const month = String(date.month).padStart(2, '0');
		const year = date.year;

		return `${day}.${month}.${year}`;
	};

	const parseStringDate = (dateStr: string): Date => {
		const [day, month, year] = dateStr.split('.').map(Number);
		return new Date(year, month - 1, day);
	};

	const fetchData = async (url: string) => {
		try {
			scheduleStatus = 'loading';
			const response = await fetch(url);
			const data = await response.json();
			if (!response.ok) {
				showError(data.error.code, data.error.message);
				return;
			}
			scheduleStatus = 'hidden';
			return data;
		} catch (error) {
			if (error instanceof Error) {
				showError(error.name, error.message);
			} else {
				showError(undefined, String(error));
			}
		}
	};

	const handleYearChange = async (value: Selected<unknown> | undefined) => {
		selectedYear = (value?.value as string) ?? '';
		resetSelection(true);
		if (!selectedYear) return;

		const url = buildUrl(selectedYear);
		const data = await fetchData(url);
		if (!data || !data.values) return;

		schedule = data.values;
		params = extractParams();
		curWeek = schedule[0][0].match(/\b(\d{2}\.\d{2}\.\d{4})\b/)?.[0] || '';
		const timeIntervals = extractTimeIntervals();

		scheduleSpace = Object.keys(timeIntervals).length;
		groupOptions = extractGroups();

		groupVisible = true;
	};

	const handleGroupChange = (value: Selected<unknown> | undefined) => {
		selectedGroup = (value?.value as string) ?? '';
		resetSelection();
		if (!selectedGroup) return;

		rangeVisible = true;

		console.log(params);

		const updatedParams = extractUpdatedParams();
		Object.assign(params, updatedParams);

		console.log(params);

		allDates = extractDates(schedule, params);
		studyDates = filterStudyDates(schedule, allDates, scheduleSpace, params);

		buildSchedule();
	};

	const handleRangeChange = (date: DateRange) => {
		selectedRange = date ?? {
			start: today(getLocalTimeZone()),
			end: today(getLocalTimeZone()).add({ days: 6 })
		};
		buildSchedule();
	};

	const buildSchedule = () => {
		if (!selectedRange.start || !selectedRange.end) {
			scheduleStatus = 'hidden';
			return;
		}

		scheduleStatus = 'loading';
		const startDate = parseStringDate(formatCalendarDate(selectedRange.start));
		const endDate = parseStringDate(formatCalendarDate(selectedRange.end));

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

		buildedSchedule = dates.reduce((acc: Record<string, ScheduleEntry>, date) => {
			const dayOfWeek = getDayOfWeek(date);
			const isStudyDay = studyDates[date] !== undefined;

			let lessons: Lesson[] = [];
			if (isStudyDay) {
				for (let i = studyDates[date]; i < studyDates[date] + scheduleSpace; i++) {
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

			acc[date] = { dayOfWeek, lessons };
			return acc;
		}, {});

		scheduleStatus = 'visible';
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
			groupVisible = false;
			selectedGroup = '';
		}
	};

	const extractParams = () => {
		return schedule[1].reduce((acc: { [key: string]: number }, cell: string, index: number) => {
			if (cell) acc[cell] = index;
			return acc;
		}, {});
	};

	const extractUpdatedParams = () => {
		return schedule[1].reduce((acc: { [key: string]: number }, cell: string, index: number) => {
			if (index >= groupOptions[selectedGroup] && !acc[cell]) {
				acc[cell] = index;
			}
			return acc;
		}, {});
	};

	const extractTimeIntervals = () => {
		return schedule.reduce((acc: { [key: string]: number }, row: string[], index: number) => {
			const time = row[params['Часы']];
			if (index > 0 && time && time !== 'Часы') acc[time] = index;
			return acc;
		}, {});
	};

	const extractGroups = () => {
		return schedule[0].reduce((acc: { [key: string]: number }, cell: string, index: number) => {
			if (index > 0 && cell) acc[cell] = index;
			return acc;
		}, {});
	};

	const getDayOfWeek = (dateStr: string) => {
		const daysOfWeek = [
			'Воскресенье',
			'Понедельник',
			'Вторник',
			'Среда',
			'Четверг',
			'Пятница',
			'Суббота'
		];
		const [day, month, year] = dateStr.split('.').map(Number);
		const date = new Date(year, month - 1, day);
		return daysOfWeek[date.getDay()] || 'Неизвестный день!';
	};

	const filterStudyDates = (
		schedule: string[][],
		allDates: Record<string, number>,
		scheduleSpace: number,
		params: { [key: string]: number }
	): Record<string, number> => {
		return Object.entries(allDates).reduce(
			(acc, [date, index]) => {
				for (let i = index; i < index + scheduleSpace; i++) {
					if (schedule[i][params['Дисциплины']]) acc[date] = index;
				}
				return acc;
			},
			{} as Record<string, number>
		);
	};

	const extractDates = (schedule: string[][], params: { [key: string]: number }) => {
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
	});
</script>

<div
	class="mx-auto flex min-h-[calc(100dvh_-_3.5rem)] w-full flex-col items-center justify-center bg-gradient-to-br from-white to-sky-200 px-1 dark:from-sky-800 dark:to-black md:min-h-[calc(100dvh_-_4rem)]"
>
	<Select.Root onSelectedChange={handleYearChange}>
		<Select.Trigger
			class="my-1 w-full min-w-[256px] bg-background shadow-md md:w-2/3 lg:w-1/2 2xl:w-1/3"
		>
			<Select.Value placeholder={$language === 'ru' ? 'Выберите курс' : 'Select year'} />
		</Select.Trigger>
		<Select.Content>
			{#each yearOptions as option}
				<Select.Item value={option}>{option} {$language === 'ru' ? 'курс' : 'year'}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>

	{#if groupVisible}
		<Select.Root onSelectedChange={handleGroupChange}>
			<Select.Trigger
				class="my-1 w-full min-w-[256px] bg-background shadow-md md:w-2/3 lg:w-1/2 2xl:w-1/3"
			>
				<Select.Value placeholder={$language === 'ru' ? 'Выберите группу' : 'Select group'} />
			</Select.Trigger>
			<Select.Content>
				{#each Object.keys(groupOptions) as group}
					<Select.Item value={group}>{group}</Select.Item>
				{/each}
			</Select.Content>
		</Select.Root>
	{/if}

	{#if rangeVisible}
		<RangeCalendar
			value={selectedRange}
			onValueChange={handleRangeChange}
			weekStartsOn={1}
			numberOfMonths={2}
			class="my-1 items-center justify-center rounded-md border bg-background px-4 shadow-md"
		/>
	{/if}

	{#if scheduleStatus === 'error'}
		<Alert.Root class="my-1 w-full min-w-[256px] md:w-2/3 lg:w-1/2 2xl:w-1/3">
			<Ban class="h-8 w-8" />
			<Alert.Title class="!pl-12"
				>{$language === 'ru' ? 'Возникла проблема' : 'Error Occurred'}</Alert.Title
			>
			<Alert.Description class="!pl-12">{scheduleError}</Alert.Description>
		</Alert.Root>
	{:else if scheduleStatus === 'loading'}
		<Skeleton class="my-1 h-8 w-full min-w-[256px] md:w-2/3 lg:w-1/2 2xl:w-1/3" />
	{:else if scheduleStatus === 'visible' && buildedSchedule}
		{#each Object.entries(buildedSchedule) as [key, day]}
			<div
				class="mb-2 mt-1 w-full min-w-[256px] rounded-md border bg-background p-1 shadow-md md:w-2/3 lg:w-1/2 2xl:w-1/3"
			>
				<Table.Root>
					<Table.Header
						class="text-base {key === formatCalendarDate(today(getLocalTimeZone()))
							? 'bg-green-100 dark:bg-green-800/50'
							: studyDates[key]
								? 'bg-blue-100 dark:bg-blue-800/50'
								: 'mt-4 bg-red-100 p-4 dark:bg-red-800/50'}"
					>
						<Table.Row>
							<Table.Head class="w-1/3 text-right font-semibold text-foreground">{key}</Table.Head>
							<Table.Head class="w-2/3 text-left font-semibold text-foreground"
								>{day.dayOfWeek}</Table.Head
							>
						</Table.Row>
					</Table.Header>
					<Table.Body class="bg-background">
						{#if studyDates[key]}
							{#each day.lessons as lesson}
								<Table.Row>
									<Table.Cell class="text-right">{lesson.time}</Table.Cell>
									<Table.Cell class="text-left">{lesson.discipline}</Table.Cell>
								</Table.Row>
								<Table.Row>
									<Table.Cell class="text-right">
										{#if lesson.auditorium.startsWith('http')}
											<a href={lesson.auditorium} class="underline">
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
							<Table.Cell class="text-center" colspan={2}>
								{$language === 'ru' ? 'Нет пар' : 'No lessons'}
							</Table.Cell>
						{/if}
					</Table.Body>
				</Table.Root>
			</div>
		{/each}
	{:else if scheduleStatus !== 'hidden'}
		<Alert.Root class="my-1 w-full min-w-[256px] md:w-2/3 lg:w-1/2 2xl:w-1/3">
			<Sticker class="h-8 w-8" />
			<Alert.Title class="!pl-12"
				>{$language === 'ru'
					? 'Лучшая благодарность автору'
					: 'Best Thanks to the Author'}</Alert.Title
			>
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
