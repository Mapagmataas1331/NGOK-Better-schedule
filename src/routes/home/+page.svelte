<script lang="ts">
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Accordion from '$lib/components/ui/accordion/index.js';
	import { Github } from '@lucide/svelte';
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
			<p class="ml-1 p-px text-lg font-semibold md:text-lg">
				{$language === 'ru' ? '• Карта сайта:' : '• With the last update, there are now:'}
			</p>
			<p class="mb-px p-px text-sm font-normal md:text-base">
				-
				<a
					href="/home/"
					class="font-semibold italic text-cyan-700 hover:underline dark:text-cyan-400"
				>
					{$language === 'ru' ? 'Главная страница (эта страница)' : 'Home page (this page)'}
				</a>
				:
				{$language === 'ru'
					? 'Здесь я буду иногда рассказывать о новых функциях, обновлениях и прочем.'
					: 'Here I will sometimes tell you about new features, updates and other things.'}
			</p>
			<p class="mb-px p-px text-sm font-normal md:text-base">
				-
				<a href="/" class="font-semibold italic text-cyan-700 hover:underline dark:text-cyan-400">
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
				<a
					href="/teacher/"
					class="font-semibold italic text-cyan-700 hover:underline dark:text-cyan-400"
				>
					{$language === 'ru'
						? 'Страница для просмотра расписания преподавателям'
						: 'Schedule viewer for teachers'}
				</a>
				:
				{$language === 'ru'
					? 'А тут уже преподаватель может просматривать своё расписание.'
					: 'And here, the teacher can view their schedule.'}
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
					? '• Я делаю это все один, вас много, а подписок на GitHub мало'
					: '• I’m handling all of this solo, yet you still haven’t hit that GitHub subscribe button'}
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
					? 'Всем кто подписался, от меня миска риса и большое спасибо!'
					: 'A bowl of rice and best wishes to everyone who subscribed!'}
			</p>
			<img
				src="https://avatars.dzeninfra.ru/get-zen_doc/9846546/pub_64abce0f285e1f488d2ebf92_64abf2e26b91d965cf1202d6/scale_1200"
				alt="miska risa"
				class="w-full max-w-[512px]"
			/>
			<Button
				variant="default"
				href="https://github.com/Mapagmataas1331"
				class="!my-4 w-fit font-semibold shadow-md md:!my-8"
			>
				<Github class="mr-1 !size-5" />
				{$language === 'ru' ? 'Подписаться' : 'Subscribe'}
			</Button>
		</div>

		<h1 id="news" class="mb-1 ml-1 text-lg font-semibold md:mb-2 md:ml-2 md:text-2xl">
			{$language === 'ru' ? '# Новости и События' : '# News and Events'}
		</h1>

		<div class="mb-2 border-2 md:mb-4">
			<h1
				class="my-1 ml-2 text-lg font-semibold text-green-700 dark:text-green-400 md:my-2 md:text-xl"
			>
				{$language === 'ru' ? 'Обновление 12.03.25' : 'Update 12.03.25'}
			</h1>
			<Separator />
			<div class="flex w-full flex-col p-2 pb-4 md:p-4 md:pb-6">
				<p class="ml-1 p-px text-base font-medium md:text-lg">
					{$language === 'ru'
						? '• В общем, вроде как всё, что заметил, починил и всё работает.'
						: '• Overall, I fixed everything I noticed and now everything is working.'}
				</p>
				<p class="p-px text-sm font-normal md:text-base">
					{$language === 'ru'
						? 'Опять же, если что-то заметите — пишите. Кроме исправлений, удалил старую версию расписания, поскольку нужные для неё таблицы удалили.'
						: 'Again, if you notice anything, please let me know. Additionally, I removed the old schedule version since the necessary tables for it were deleted.'}
				</p>
				<p class="p-px text-sm font-normal md:text-base">
					{$language === 'ru'
						? 'Всем, кто написал добрые слова, подписался на GitHub или просто изредка проверял, заработал ли сайт — огромное спасибо!'
						: 'A huge thank you to everyone who wrote kind words, followed on GitHub, or simply checked occasionally if the site was running!'}
				</p>
				<p class="p-px text-sm font-normal md:text-base">
					{$language === 'ru'
						? 'Без вас этого обновления, как и сайта, никогда бы и не было! Поскольку колледжу, похоже, абсолютно безразлична жизнь этого ресурса('
						: 'Without you, neither this update nor the site would have been possible! It seems the college is completely indifferent to the life of this resource ('}
				</p>
			</div>
			<div class="flex w-full flex-col items-center justify-center pb-4 md:pb-6">
				<img src="/12-03-25_stats.png" alt="12.03.25 stats" class="w-full max-w-[640px]" />
			</div>
		</div>

		<div class="mb-2 border-2 md:mb-4">
			<h1 class="my-1 ml-2 text-lg font-semibold text-red-700 dark:text-red-400 md:my-2 md:text-xl">
				{$language === 'ru' ? 'Поломка 07.03.25' : 'Issue 07.03.25'}
			</h1>
			<Separator />
			<div class="flex w-full flex-col p-2 pb-4 md:p-4 md:pb-6">
				<p class="ml-1 p-px text-base font-medium md:text-lg">
					{$language === 'ru'
						? '• Кто-то в коллеже опять решил изменить рабочее расписание...'
						: '• Someone in the collage once again decided to change the working schedule...'}
				</p>
				<p class="p-px text-sm font-normal md:text-base">
					{$language === 'ru'
						? 'У меня пока что нету свободного времени на обновление.'
						: 'For now, I have no free time to update.'}
				</p>
				<p class="p-px text-sm font-normal md:text-base">
					{$language === 'ru'
						? 'Если вы хотите мне помочь / ускорить работу над обновлением - помогите разузнать что изменилось в расписании и что вообще с ним планируется, или если у вас уже есть информация - сообщите мне в Telegram'
						: 'If you want to help me / speed up the work on the update - help me understand what has changed in the schedule and what is planned with it, or if you already have information - message me in Telegram'}
					<a
						class="italic !text-cyan-700 hover:underline dark:!text-cyan-400"
						href="https://t.me/mapagmataas">@mapagmataas</a
					>
				</p>
			</div>
		</div>

		<div class="border-2">
			<h1
				class="my-1 ml-2 text-lg font-semibold text-green-700 dark:text-green-400 md:my-2 md:text-xl"
			>
				{$language === 'ru' ? 'Обновление 16.02.25' : 'Update 16.02.25'}
			</h1>
			<Separator />
			<div class="flex w-full flex-col p-2 pb-4 md:p-4 md:pb-6">
				<p class="ml-1 p-px text-base font-medium md:text-lg">
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
