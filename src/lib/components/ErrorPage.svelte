<script lang="ts">
	import { page } from '$app/stores';
	import { language } from '$lib/stores/language';
	import Logo from '$lib/components/Logo.svelte';
	import { ChevronLeft, House } from '@lucide/svelte';

	import { Button } from './ui/button/index.js';
	import * as Tooltip from './ui/tooltip/index.js';

	let errorStatus: number;
	let errorMessage: string;

	$: errorStatus = $page.status || 500;
	$: errorMessage = $page.error?.message || 'An unexpected error occurred.';
</script>

<div
	class="flex h-[calc(100dvh_-_3.5rem)] w-full flex-col items-center justify-center bg-gradient-to-b from-white to-sky-200 p-4 text-center dark:from-sky-800 dark:to-black md:h-[calc(100dvh_-_4rem)]"
>
	<div
		class="mx-8 my-auto aspect-square h-[100vw] max-h-[calc((100dvh_-_3.5rem)_/_2)] max-w-full drop-shadow-xl"
	>
		<Logo class="fill-current text-red-700 dark:text-red-400" />
	</div>

	<div
		class="mb-auto w-full max-w-lg transform rounded-lg bg-background/25 p-4 shadow-xl backdrop-blur-lg transition-transform hover:scale-105 hover:shadow-2xl md:my-auto md:p-8"
	>
		<h1 class="mb-6 text-4xl font-extrabold text-red-700 dark:text-red-400 md:text-5xl">
			{errorStatus}
		</h1>
		<p class="mb-2 text-lg font-medium md:text-xl">{errorMessage}</p>
		<Button
			href="https://github.com/Mapagmataas1331/ma/issues"
			variant="link"
			class="mb-6 text-sm font-medium md:text-base"
		>
			{$language === 'ru' ? 'Сообщить об ошибке' : 'Submit an issue'}
		</Button>

		<div
			class="flex w-full flex-row justify-center space-x-16 md:absolute md:inset-0 md:h-8 md:justify-between md:p-4"
		>
			<Tooltip.Provider>
				<Tooltip.Root>
					<Tooltip.Trigger>
						<Button
							variant="ghost"
							size="icon"
							class="shrink-0 hover:bg-sky-200 dark:hover:bg-sky-800"
							onclick={() => history.back()}
						>
							<ChevronLeft class="!size-6" />
							<span class="sr-only">{$language === 'ru' ? 'Вернуться назад' : 'Go back'}</span>
						</Button>
					</Tooltip.Trigger>
					<Tooltip.Content>
						<p>{$language === 'ru' ? 'Вернуться назад' : 'Go back'}</p>
					</Tooltip.Content>
				</Tooltip.Root>
			</Tooltip.Provider>

			<Tooltip.Provider>
				<Tooltip.Root>
					<Tooltip.Trigger>
						<Button
							href="/"
							variant="ghost"
							size="icon"
							class="shrink-0 hover:bg-sky-200 dark:hover:bg-sky-800"
						>
							<House class="!size-6" />
							<span class="sr-only">{$language === 'ru' ? 'Вернутся на главную' : 'Go home'}</span>
						</Button>
					</Tooltip.Trigger>
					<Tooltip.Content>
						<p>{$language === 'ru' ? 'Вернутся на главную' : 'Go home'}</p>
					</Tooltip.Content>
				</Tooltip.Root>
			</Tooltip.Provider>
		</div>
	</div>
</div>
