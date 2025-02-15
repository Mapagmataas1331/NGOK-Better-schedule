<script lang="ts">
	import * as Alert from '$lib/components/ui/alert/index.js';
	import HeartHandshake from 'lucide-svelte/icons/heart-handshake';
	import { language } from '$lib/stores/language';
</script>

<div
	class="mx-auto flex min-h-[calc(100dvh_-_3.5rem)] w-full flex-col items-center justify-center bg-gradient-to-br from-white to-sky-200 px-1 dark:from-sky-800 dark:to-black md:min-h-[calc(100dvh_-_4rem)]"
>
	<div class="absolute top-[20dvh]">
		<h1 class="mb-4 text-center text-3xl font-bold md:text-4xl">
			{$language === 'ru' ? 'Расписание НГОК для преподователей' : 'NGOK Schedule for Teachers'}
		</h1>
		<p class=" text-center">
			{$language === 'ru' ? 'Раздел в разработке' : 'This section is under development'}
		</p>
	</div>
	<Alert.Root class="md:1/2 my-1 w-full md:w-[512px]">
		<HeartHandshake class="size-8 !text-green-700 dark:!text-green-400" />
		<Alert.Title class="!pl-12">
			{#if $language === 'ru'}
				Лучшая <span class="!text-green-700 dark:!text-green-400">благодарность</span>
				<a class="font-semibold hover:underline" href="https://ma.cyou/">Автору</a>
			{:else}
				Best Thanks to the <a class="font-semibold hover:underline" href="https://ma.cyou/"
					>Author</a
				>
			{/if}
		</Alert.Title>
		<Alert.Description class="!pl-12">
			{#if $language === 'ru'}
				это подписка на <a
					class="font-semibold italic !text-green-700 hover:underline dark:!text-green-400"
					href="https://github.com/Mapagmataas1331">GitHub</a
				>
				и звездочка на
				<a
					class="font-semibold italic !text-green-700 hover:underline dark:!text-green-400"
					href="https://github.com/Mapagmataas1331/ma">Репозиторий</a
				>
			{:else}
				is a subscription on <a
					class="font-semibold italic !text-green-700 hover:underline dark:!text-green-400"
					href="https://github.com/Mapagmataas1331">GitHub</a
				>
				and a star on
				<a
					class="font-semibold italic !text-green-700 hover:underline dark:!text-green-400"
					href="https://github.com/Mapagmataas1331/ma">Repository</a
				>
			{/if}
		</Alert.Description>
	</Alert.Root>
</div>
