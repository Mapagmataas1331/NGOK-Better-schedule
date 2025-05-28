<script lang="ts">
	import { buttonVariants } from './ui/button/index.js';
	import * as DropdownMenu from './ui/dropdown-menu/index.js';
	import * as Sheet from './ui/sheet/index.js';
	import { Separator } from './ui/separator/index.js';

	import { Menu, Cog, CircleUser } from '@lucide/svelte';

	import defaultSettings, { type Setting } from './Settings.svelte';
	import defaultLogo from './Logo.svelte';

	import { page } from '$app/state';
	import { language } from '../stores/language';

	let {
		class: className = '',
		links = { '/': { name: 'Home', nameRu: 'Главная' } },
		title = 'macyou',
		titleLink = 'https://ma.cyou',
		Logo = defaultLogo,
		additionalSettings = null,
		Settings = defaultSettings,
		AdditionalSettings = null,
		profile = true
	} = $props();

	let activeLink = $derived(page.url.pathname);
</script>

<div class="bg-background fixed inset-0 -top-14 z-20 h-14 w-screen"></div>
<header
	class="{className !== ''
		? className + ' '
		: ''}z-40 bg-background sticky inset-0 flex h-14 w-screen items-center gap-2 border-b px-2 md:h-16 md:gap-4 md:px-4"
>
	<nav class="hidden gap-6 text-base font-medium md:flex md:items-center md:gap-4 lg:gap-6">
		<a href={titleLink} class="flex items-center gap-2 text-lg font-semibold">
			<Logo class="text-foreground size-8 fill-current" />
			<p class="pb-0.5">{title}</p>
		</a>
		<Separator orientation="vertical" class="bg-muted-foreground bg-opacity-50 h-6" />
		{#each Object.entries(links) as [key, link]}
			<a
				href={key}
				class="{activeLink === key
					? 'text-foreground'
					: 'text-muted-foreground'} hover:text-foreground transition-colors"
			>
				{$language === 'ru' ? link.nameRu : link.name}
			</a>
		{/each}
	</nav>
	<Sheet.Root>
		<Sheet.Trigger
			class="{buttonVariants({ variant: 'outline', size: 'icon' })} shrink-0 md:hidden"
		>
			<Menu class="!size-6" />
			<span class="sr-only">
				{$language === 'ru' ? 'Показать меню навигации' : 'Toggle navigation menu'}
			</span>
		</Sheet.Trigger>
		<div class="flex items-center gap-2 font-semibold md:hidden">
			<Logo class="text-foreground size-8 fill-current" />
			<p>
				{$language === 'ru'
					? links[activeLink]?.nameRu || activeLink.split('/')[activeLink.split('/').length - 2]
					: links[activeLink]?.name || activeLink.split('/')[activeLink.split('/').length - 2]}
			</p>
		</div>
		<Sheet.Content side="left" class="p-6">
			<Sheet.Close id="closeSheet" class="hidden" />
			<nav class="grid gap-6 text-lg font-medium">
				<a href={titleLink} class="flex items-center gap-2 text-lg font-semibold md:text-base">
					<Logo class="text-foreground size-8 fill-current" />
					<p>{title}</p>
				</a>
				{#each Object.entries(links) as [key, link]}
					<a
						href={key}
						class="{activeLink === key
							? 'text-foreground'
							: 'text-muted-foreground'} hover:text-foreground transition-colors"
						onclick={() => document.getElementById('closeSheet')?.click()}
					>
						{$language === 'ru' ? link.nameRu : link.name}
					</a>
				{/each}
			</nav>
		</Sheet.Content>
	</Sheet.Root>
	{#if Settings !== null || profile !== null}
		<div class="ml-auto flex items-center gap-2 md:gap-2 lg:gap-4">
			{#if Settings !== null}
				<DropdownMenu.Root>
					<DropdownMenu.Trigger class={buttonVariants({ variant: 'outline', size: 'icon' })}>
						<Cog class="!size-6" />
						<span class="sr-only"
							>{$language === 'ru' ? 'Показать меню настроек' : 'Toggle settings menu'}</span
						>
					</DropdownMenu.Trigger>
					<DropdownMenu.Content align="end">
						<DropdownMenu.Label class="text-center text-sm font-semibold">
							{$language === 'ru' ? 'Настройки' : 'Settings'}
						</DropdownMenu.Label>
						<DropdownMenu.Separator />
						{#if additionalSettings !== null}
							<Settings {additionalSettings} />
						{:else}
							<Settings />
						{/if}
						{#if AdditionalSettings !== null}
							{@const Component = AdditionalSettings}
							<Component />
						{/if}
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			{/if}
			{#if profile}
				<DropdownMenu.Root>
					<DropdownMenu.Trigger
						class="{buttonVariants({
							variant: 'secondary',
							size: 'icon'
						})} animate-pulse rounded-full"
					>
						<!-- <Avatar.Root class="!size-9">
								<Avatar.Image src="https://github.com/mapagmataas1331.png" alt="@mapagmataas1331" />
								<Avatar.Fallback>CN</Avatar.Fallback>
							</Avatar.Root> -->
						<CircleUser class="!size-5" />
						<span class="sr-only">
							{$language === 'ru' ? 'Показать меню пользователя' : 'Toggle user menu'}
						</span>
					</DropdownMenu.Trigger>
					<DropdownMenu.Content align="end" class="z-50">
						<DropdownMenu.Label class="text-center text-sm font-semibold">
							{$language === 'ru' ? 'Меню пользователя' : 'User menu'}
						</DropdownMenu.Label>
						<DropdownMenu.Separator />
						<DropdownMenu.Item>{$language === 'ru' ? 'Профиль' : 'Profile'}</DropdownMenu.Item>
						<DropdownMenu.Separator />
						<DropdownMenu.Item>{$language === 'ru' ? 'Выход' : 'Logout'}</DropdownMenu.Item>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			{/if}
		</div>
	{/if}
</header>
