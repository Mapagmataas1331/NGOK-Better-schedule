<script lang="ts">
	import * as Select from '$shared/components/ui/select';
	import Button from '$shared/components/ui/button/button.svelte';
	import Skeleton from '$shared/components/ui/skeleton/skeleton.svelte';
	import { Input } from '$shared/components/ui/input/index.js';
	import { language } from '$shared/stores/language';
	import { colToLetter, buildHref, fetchTableData } from '$lib/utils/fetchTableData';

	const schedule: { [year: string]: string[][] } = {};
	let scheduleStatus: 'hidden' | 'visible' | 'loading' | 'error' | '' = $state('');
	let scheduleError: string | null = $state(null);
	const paramsWithMentions: { [teacher: string]: { year: string; col: number; row: number }[] } =
		$state({});
	const ifOpen: { [teacher: string]: boolean } = $state({});
	let searchQuery: string = $state('');

	const availableParams = [
		{ value: 'дни', label: 'Дни' },
		{ value: 'часы', label: 'Часы' },
		{ value: 'дисциплины', label: 'Дисциплины' },
		{ value: 'преподаватели', label: 'Преподаватели' },
		{ value: 'ауд.', label: 'Ауд' }
	];
	let selectedParam: string = $state('преподаватели');
	const triggerContent = $derived(
		availableParams.find((f) => f.value === selectedParam)?.label ?? 'Select a fruit'
	);

	const exceptions: string[] = [];

	exceptions.push(...availableParams.map((param) => param.value));

	const fetchSchedule = async () => {
		scheduleStatus = 'loading';
		const gottenParams: { [year: string]: number[] } = {};

		for (let i = 1; i <= 4; i++) {
			const data = await fetchTableData(String(i));
			scheduleError = data.scheduleError ? data.scheduleError + ' in year ' + i : null;
			if (scheduleError || !data.schedule) {
				scheduleStatus = 'error';
				return;
			}
			schedule[i] = data.schedule;
		}

		Object.entries(schedule).forEach(([year, col]) => {
			col[1].forEach((cell, index) => {
				if (cell.toLowerCase() === selectedParam) {
					if (!gottenParams[year]) gottenParams[year] = [];
					gottenParams[year].push(index);
				}
			});
		});

		Object.entries(schedule).forEach(([year, col]) => {
			col.forEach((row, index) => {
				gottenParams[year].forEach((colIndex) => {
					if (index != 0 && row[colIndex] && !exceptions.includes(row[colIndex].toLowerCase())) {
						if (!paramsWithMentions[row[colIndex]]) paramsWithMentions[row[colIndex]] = [];
						paramsWithMentions[row[colIndex]].push({ year: year, col: colIndex, row: index });
					}
				});
			});
		});

		scheduleStatus = 'visible';
	};
</script>

<div
	class="mx-auto flex min-h-[calc(100dvh_-_3.5rem)] w-full flex-col items-center justify-center bg-gradient-to-br from-white to-sky-200 px-2 py-2 dark:from-sky-800 dark:to-black md:min-h-[calc(100dvh_-_4rem)]"
>
	{#if !(Object.keys(paramsWithMentions).length > 0)}
		<div class="mb-4 w-full min-w-[256px] p-4 md:w-2/3 lg:w-1/2 2xl:w-1/3">
			<h2 class="mb-4 text-center text-lg font-semibold md:text-2xl">
				{$language === 'ru'
					? `Эта страница нужна для просмотра всех "${selectedParam}" и их упоминаний в расписании.`
					: `This page is needed to view all "${selectedParam}" and their mentions in the schedule.`}
			</h2>
			<p class="mb-1 text-sm md:text-lg">
				{$language === 'ru'
					? `После сканирования будет доступен список всех "${selectedParam}", при нажатии на них будет открыт список их упоминаний, а по нажатию на упоминания будет открыта новая вкладка с таблицей рассписания на нужной ячейки.`
					: `After scanning, a list of all "${selectedParam}" will be available, and clicking on them will open a list of their mentions, and clicking on mentions will open a new tab with tables of schedules on the necessary cells.`}
			</p>
			<blockquote class="mb-1 text-sm italic md:text-lg">
				{$language === 'ru'
					? 'Просьба не злоупотреблять сканированием, поскольку на 1 сканирование уходят 4 api запроса, и если вы оказались здесь случайно - просьба покинуть страницу и сделать вид что ничего не было.'
					: 'Please do not abuse scanning, as 1 scan consumes 4 api requests, and if you happen to be here by chance - leave the page and make it look like nothing happened.'}
			</blockquote>
			<blockquote class="text-sm italic md:text-lg">
				{$language === 'ru'
					? 'Для повторного сканирования - перезагрузите страницу.'
					: 'For a repeated scan - reload the page.'}
			</blockquote>
		</div>
		<Select.Root type="single" name="groupSelect" bind:value={selectedParam}>
			<Select.Trigger
				class="my-1 w-full min-w-[256px] bg-background shadow-md md:w-2/3 lg:w-1/2 2xl:w-1/3"
			>
				{triggerContent}
			</Select.Trigger>
			<Select.Content class="max-h-[256px] overflow-y-auto">
				{#each availableParams as param}
					<Select.Item value={param.value} label={param.label} />
				{/each}
			</Select.Content>
		</Select.Root>
		{#if scheduleStatus === 'loading'}
			<Skeleton class="my-1 h-8 w-full min-w-[256px] md:w-2/3 lg:w-1/2 2xl:w-1/3" />
		{:else}
			<Button
				variant="outline"
				class="my-1 w-full min-w-[256px] md:w-2/3 lg:w-1/2 2xl:w-1/3"
				onclick={async () => await fetchSchedule()}
			>
				{$language === 'ru' ? 'Сканировать' : 'Fetch'}
			</Button>
		{/if}
	{:else}
		<div class="mb-10 flex w-full flex-col items-center">
			{#each Object.entries(paramsWithMentions)
				.filter(([teacher, _]) => teacher
						.toLowerCase()
						.split(' ')
						.some((word) => word.startsWith(searchQuery.toLowerCase())))
				.sort((a, b) => a[0].localeCompare(b[0])) as [teacher, lessons]}
				<Button
					variant="outline"
					class="mb-0.5 w-full min-w-[256px] font-semibold md:w-2/3 lg:w-1/2 2xl:w-1/3"
					onclick={() => {
						ifOpen[teacher] = !ifOpen[teacher];
						setTimeout(() => {
							document.getElementById(teacher)?.focus();
							document.getElementById(teacher)?.blur();
						}, 250);
					}}
				>
					{teacher.replace(/\ /g, '_')}
				</Button>
				{#if ifOpen[teacher]}
					<p
						id={teacher}
						class="w-full min-w-[256px] md:w-2/3 lg:w-1/2 2xl:w-1/3"
						lang="ru"
						spellcheck
						contenteditable
					>
						{teacher}
					</p>
					<div
						class="mb-2 grid w-full min-w-[256px] grid-cols-3 border-l-2 md:w-2/3 md:grid-cols-6 lg:w-1/2 2xl:w-1/3"
					>
						{#each lessons as { year, col, row }}
							<Button variant="ghost" target="_blank" href={buildHref(year, row + 1, col + 1)}
								>{year}-{colToLetter(col + 1)}/{row + 1}</Button
							>
						{/each}
					</div>
				{/if}
			{/each}
		</div>
		<Input
			type="text"
			placeholder={$language === 'ru'
				? 'Поиск (По одному из слов содержащихся в имени)'
				: 'Search (By one of the words contained in the name)'}
			class="fixed bottom-14 w-full min-w-[256px] bg-muted p-4 shadow-2xl md:w-2/3 lg:w-1/2 2xl:w-1/3"
			bind:value={searchQuery}
		></Input>
	{/if}
</div>
