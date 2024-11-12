<script lang="ts">
	import Button from '$shared/components/ui/button/button.svelte';
	import { language } from '$shared/stores/language';
	import { colToLetter, buildHref, fetchTableData } from '$lib/utils/fetchTableData';

	const schedule: { [year: string]: string[][] } = {};
	const teacherParams: { [year: string]: number[] } = {};
	const teachers: { [teacher: string]: { year: string; col: number; row: number }[] } = {};
	const ifOpen: { [teacher: string]: boolean } = {};

	const fetchSchedule = async () => {
		for (let i = 1; i <= 4; i++) {
			const data = await fetchTableData(String(i));
			if (data.scheduleError || !data.schedule) {
				return;
			}
			schedule[i] = data.schedule;
		}

		Object.entries(schedule).forEach(([year, col]) => {
			col[1].forEach((cell, index) => {
				if (cell.toLowerCase() === 'преподаватели') {
					if (!teacherParams[year]) teacherParams[year] = [];
					teacherParams[year].push(index);
				}
			});
		});

		Object.entries(schedule).forEach(([year, col]) => {
			col.forEach((row, index) => {
				teacherParams[year].forEach((colIndex) => {
					if (row[colIndex]) {
						if (!teachers[row[colIndex]]) teachers[row[colIndex]] = [];
						teachers[row[colIndex]].push({ year: year, col: colIndex, row: index });
					}
				});
			});
		});
	};
</script>

<div
	class="mx-auto flex min-h-[calc(100dvh_-_3.5rem)] w-full flex-col items-center justify-center bg-gradient-to-br from-white to-sky-200 px-2 py-2 dark:from-sky-800 dark:to-black md:min-h-[calc(100dvh_-_4rem)]"
>
	{#if !(Object.keys(teachers).length > 0)}
		<div class="mb-4 w-full min-w-[256px] p-4 md:w-2/3 lg:w-1/2 2xl:w-1/3">
			<h2 class="mb-4 text-center text-2xl font-semibold">
				{$language === 'ru'
					? 'Эта страница нужна для просмотра всех имен преподавателей и их упоминаний в расписании.'
					: 'This page is needed to view all teacher names and their mentions in the schedule.'}
			</h2>
			<p class="mb-1 text-lg">
				{$language === 'ru'
					? 'После сканирования будет доступен список преподавателей, при нажатии на них будет открыт список их упоминаний, а по нажатию на упоминания будет открыта новая вкладка с таблицей рассписания на нужной ячейки.'
					: 'After scanning, a list of teachers will be available, and clicking on them will open a list of their mentions, and clicking on mentions will open a new tab with tables of schedules on the necessary cells.'}
			</p>
			<blockquote class="mb-1 italic">
				{$language === 'ru'
					? 'Просьба не злоупотреблять сканированием, поскольку на 1 сканирование тратяться 4 api запроса, и если вы оказались здесь случаенно - покинуть страницу и сделать вид что ничего не было.'
					: 'Please do not abuse scanning, as 1 scan consumes 4 api requests, and if you happen to be here by chance - leave the page and make it look like nothing happened.'}
			</blockquote>
			<blockquote class="italic">
				{$language === 'ru'
					? 'Для повторного сканирования - перезагрузите страницу.'
					: 'For a repeated scan - reload the page.'}
			</blockquote>
		</div>
		<Button
			variant="outline"
			class="my-1 w-full min-w-[256px] md:w-2/3 lg:w-1/2 2xl:w-1/3"
			onclick={async () => {
				await fetchSchedule();
			}}
		>
			{$language === 'ru' ? 'Сканировать' : 'Fetch'}
		</Button>
	{:else}
		{#each Object.entries(teachers).sort() as [teacher, lessons]}
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
	{/if}
</div>
