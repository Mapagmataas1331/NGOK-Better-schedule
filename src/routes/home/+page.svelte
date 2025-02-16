<script lang="ts">
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Accordion from '$lib/components/ui/accordion/index.js';
	import GitHub from 'lucide-svelte/icons/github';
	import { language } from '$lib/stores/language';
</script>

<div
	class="mx-auto flex min-h-[calc(100dvh_-_3.5rem)] w-full flex-col bg-gradient-to-br from-white to-sky-200 px-1 dark:from-sky-800 dark:to-black md:min-h-[calc(100dvh_-_4rem)]"
>
	<div class="my-1 bg-background/75 p-2 pb-4 shadow-md md:m-4 md:rounded-md md:p-4 md:pb-6">
		<h1 class="mb-1 ml-1 text-lg font-semibold md:mb-2 md:ml-2 md:text-2xl">
			{$language === 'ru' ? 'Привет, на связи автор сайта!' : 'Hi, the site creator is here!'}
		</h1>
		<Separator />
		<div class="flex w-full flex-col p-2 md:p-4">
			<p class="ml-1 p-px text-base font-medium md:text-lg">
				{$language === 'ru'
					? '• С последним обновлением сайта на нём появились:'
					: '• With the last update, there are now:'}
			</p>
			<p class="mb-px p-px text-sm font-normal md:text-base">
				-
				<a href="/home/" class="font-semibold italic hover:underline">
					{$language === 'ru' ? 'Главная страница (эта страница)' : 'Home page (this page)'}
				</a>
				:
				{$language === 'ru'
					? 'Здесь я буду иногда рассказывать о новых функциях, обновлениях и прочем.'
					: 'Here I will sometimes tell you about new features, updates and other things.'}
			</p>
			<p class="mb-px p-px text-sm font-normal md:text-base">
				-
				<a href="/" class="font-semibold italic hover:underline">
					{$language === 'ru'
						? 'Страница для просмотра расписания студентам '
						: 'Schedule viewer for students'}
				</a>
				:
				{$language === 'ru'
					? 'На ней студент может в удобном формате просматривать расписание своей группы.'
					: 'On this page, a student can view their group schedule in a convenient format.'}
			</p>
			<p class="mb-px p-px text-sm font-normal md:text-base">
				-
				<a href="/teacher/" class="font-semibold italic hover:underline">
					{$language === 'ru'
						? 'Страница для просмотра расписания преподавателям'
						: 'Schedule viewer for teachers'}
				</a>
				:
				{$language === 'ru'
					? 'А тут уже преподаватель может просматривать своё расписание.'
					: 'And here, the teacher can view their schedule.'}
			</p>
			<p class="mb-px p-px text-sm font-normal md:text-base">
				-
				<a href="/old/" class="font-semibold italic hover:underline">
					{$language === 'ru'
						? 'Старая версия страницы для просмотра расписания'
						: 'Old schedule viewer'}
				</a>
				:
				{$language === 'ru'
					? 'Только для просмотра устаревшего расписания'
					: 'Only for viewing the outdated schedule'}
			</p>
		</div>

		<Accordion.Root type="single">
			<Accordion.Item value="item-1">
				<Accordion.Trigger class="ml-2 text-base font-semibold md:ml-3 md:text-xl">
					{$language === 'ru' ? 'Установка как веб-приложение' : 'Setup as a web application'}
				</Accordion.Trigger>
				<Accordion.Content>
					<div class="flex w-full flex-col p-2 md:p-4">
						<a
							href="https://nickparts.ru/how-to-install-webapp/"
							class="text-sm font-medium italic hover:underline md:text-base"
						>
							nickparts.ru/how-to-install-webapp
						</a>
						<iframe
							title="nickparts.ru/how-to-install-webapp"
							src="https://nickparts.ru/how-to-install-webapp#content"
							frameborder="0"
							class="h-[64dvh] w-full"
						></iframe>
					</div>
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>

		<div class="flex w-full flex-col p-2 md:p-4">
			<p class="ml-1 p-px text-sm font-medium md:text-base">
				{$language === 'ru'
					? '• Я делаю это все один, вас много, а подписок на GitHub мало... Исправляйтесь...'
					: '• I’m handling all of this solo, yet you still haven’t hit that GitHub subscribe button...'}
			</p>
			<p class="p-px text-sm font-normal md:text-base">
				{$language === 'ru'
					? 'Пожалуйста, уделите минутку своего времени 🥺'
					: 'Please spare a minute of your time 🥺'}
			</p>
		</div>
		<div class="flex w-full flex-col items-center justify-center p-2 md:p-4">
			<p class="mb-2 text-center text-sm font-medium italic md:text-lg">
				{$language === 'ru'
					? 'Тот самый единственный чел, который реально подписался (Легенда):'
					: 'The one person who actually subscribed (Legend):'}
			</p>
			<img
				src="https://sun9-76.userapi.com/impf/c850224/v850224721/f9dea/2USiLvmGtqI.jpg?size=1016x810&quality=96&sign=10f15ec20bce1feefca007cf64e69a33&type=album"
				alt="That one subscriber"
				class="w-full max-w-[512px]"
			/>
			<Button
				variant="default"
				href="https://github.com/Mapagmataas1331"
				class="!my-4 w-fit font-semibold shadow-md md:!my-8"
			>
				<GitHub class="mr-1 !size-5" />
				{$language === 'ru' ? 'Подписаться' : 'Subscribe'}
			</Button>
		</div>

		<h1 class="mb-1 ml-1 text-lg font-semibold md:mb-2 md:ml-2 md:text-2xl">
			{$language === 'ru' ? '# Новости и События' : '# News and Events'}
		</h1>

		<div class="border-2">
			<h1 class="my-1 ml-2 text-lg font-semibold md:my-2 md:text-xl">
				{$language === 'ru' ? 'Обновление 16.02.25' : 'Update 16.02.25'}
			</h1>
			<Separator />
			<div class="flex w-full flex-col p-2 pb-4 md:p-4 md:pb-6">
				<p class="ml-1 p-px text-sm font-medium md:text-base">
					{$language === 'ru'
						? '• Я постарался и за день обновил сайт под новую версию расписания.'
						: '• I worked diligently to update the site with the new schedule within a day.'}
				</p>
				<p class="p-px text-sm font-normal md:text-base">
					{$language === 'ru'
						? 'Теперь вместо выбора курса и группы идет только выбор группы. Версия для преподавателей работает в тестовом режиме.'
						: 'Now, year and group selections has been replaced by only group-selection. A version for teachers works in test mode.'}
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
				<p class="mb-2 text-center text-sm font-medium italic md:text-lg">
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
		</div>
	</div>
</div>
