<script lang="ts">
	import { Separator } from './ui/separator/index.js';
	import { language } from '$lib/stores/language';

	let clazz = '';
	export { clazz as class };
	export let links: { [link: string]: { name: string; nameRu: string } } = {
		'https://ma.cyou/': { name: "Author's site", nameRu: 'Сайт Автора' }
	};
</script>

<footer
	class="{clazz !== ''
		? clazz + ' '
		: ''}flex text-muted-foreground flex-col items-center justify-between gap-1 p-2 pb-3 text-xs md:flex-row md:gap-3 md:px-4 md:py-3"
>
	<div>
		© <a class="hover:text-foreground" href="https://ma.cyou/">ma.cyou</a> (<a
			class="hover:text-foreground"
			href="https://github.com/mapagmataas1331/">Mapagmataas</a
		>) 2023 - {new Date().getFullYear()}
	</div>
	<div class="flex gap-1 sm:gap-2">
		{#each Object.entries(links) as [link, { name, nameRu }], i}
			<a href={link} class="hover:text-foreground">
				{$language === 'ru' ? nameRu : name}
			</a>
			{#if i < Object.entries(links).length - 1}
				<Separator orientation="vertical" class="bg-muted-foreground bg-opacity-50" />
			{/if}
		{/each}
	</div>
</footer>
