<script lang="ts">
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import GitHub from 'lucide-svelte/icons/github';
	import { language } from '$lib/stores/language';
</script>

<div
	class="mx-auto flex min-h-[calc(100dvh_-_3.5rem)] w-full flex-col bg-gradient-to-br from-white to-sky-200 px-1 dark:from-sky-800 dark:to-black md:min-h-[calc(100dvh_-_4rem)]"
>
	<div class="my-1 bg-background/75 p-2 pb-4 shadow-md md:m-4 md:rounded-md md:p-4 md:pb-6">
		<h1 class="mb-2 ml-2 text-lg font-semibold md:text-xl">
			{$language === 'ru' ? 'Привет, я — автор этого сайта!' : 'Hi, I’m the creator of this site!'}
		</h1>
		<Separator />
		<div class="flex w-full flex-col p-2 pb-4 md:p-4 md:pb-6">
			<p class="ml-1 p-px text-sm font-medium md:text-base">
				{$language === 'ru'
					? '- Я постарался и за день обновил сайт под новую версию расписания.'
					: '- I worked diligently to update the site with the new schedule within a day.'}
			</p>
			<p class="p-px text-sm font-normal md:text-base">
				{$language === 'ru'
					? 'Теперь вместо выбора курса и группы идет только выбор группы. Версия для преподавателей появится совсем скоро.'
					: 'Now, year and group selections has been replaced by only group-selection. A version for teachers is coming soon.'}
			</p>
			<p class="p-px text-sm font-normal md:text-base">
				{$language === 'ru'
					? 'Из-за приоритета скорости могут возникать мелкие ошибки. Если заметите что‑нибудь странное, пишите в Telegram'
					: 'Since speed was our top priority, you might encounter some minor glitches. If you do, please message me on Telegram'}
				<a
					class="italic !text-cyan-700 hover:underline dark:!text-cyan-400"
					href="https://t.me/mapagmataas">@mapagmataas</a
				>
			</p>
		</div>
		<Separator />
		<div class="flex w-full flex-col items-center justify-center p-2 pb-4 md:p-4 md:pb-6">
			<p class="mb-2 text-base font-medium italic md:text-lg">
				{$language === 'ru'
					? 'Мир, если бы меня заранее предупреждали об изменениях в расписании:'
					: 'Imagine a world where I was warned about schedule changes ahead of time:'}
			</p>
			<img
				src="https://ru.meming.world/images/ru/a/a4/The_World_If.jpg"
				alt="The World If"
				class="w-full max-w-[512px]"
			/>
		</div>
		<Separator />
		<div class="flex w-full flex-col p-2 pb-4 md:p-4 md:pb-6">
			<p class="ml-1 p-px text-sm font-medium md:text-base">
				{$language === 'ru'
					? '- Я делаю это один, вас много, а подписка на мой GitHub до сих пор редкость...'
					: '- I’m handling all of this solo, yet you still haven’t hit that GitHub subscribe button...'}
			</p>
			<p class="p-px text-sm font-normal md:text-base">
				{$language === 'ru'
					? 'Пожалуйста, уделите минутку своего времени 🥺'
					: 'Please spare a minute of your time 🥺'}
			</p>
			<Button
				variant="default"
				href="https://github.com/Mapagmataas1331"
				class="!my-2 w-fit self-center font-semibold shadow-md md:!my-3"
			>
				<GitHub class="mr-1 !size-5" />
				{$language === 'ru' ? 'Подписаться' : 'Subscribe'}
			</Button>
		</div>
		<Separator />
		<div class="flex w-full flex-col items-center justify-center p-2 pb-4 md:p-4 md:pb-6">
			<p class="mb-2 text-base font-medium italic md:text-lg">
				{$language === 'ru'
					? 'Тот самый единственный человек, который подписался на мой GitHub (ZanMagic Легенда):'
					: 'The one person who actually subscribed to my GitHub (ZanMagic Legend):'}
			</p>
			<img
				src="https://sun9-76.userapi.com/impf/c850224/v850224721/f9dea/2USiLvmGtqI.jpg?size=1016x810&quality=96&sign=10f15ec20bce1feefca007cf64e69a33&type=album"
				alt="That one subscriber"
				class="w-full max-w-[512px]"
			/>
		</div>
	</div>
</div>
