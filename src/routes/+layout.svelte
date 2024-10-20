<script lang="ts">
	import { onMount } from 'svelte';
	import { language } from '$shared/stores/language';

	import Header from '$shared/components/Header.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import { Separator } from '$shared/components/ui/separator/index.js';

	import '@/app.scss';

	onMount(() => {
		console.log('Layout mounted');
	});
</script>

<Header title="NGOK" titleLink="https://opencollege-nsk.ru/" {Logo} profile={false} />
<slot />
<footer class="flex flex-wrap justify-center gap-2 px-2 py-4 text-xs text-muted-foreground">
	<a href="https://ma.cyou/" class="hover:text-foreground"
		>{$language === 'ru' ? 'Сайт Автора' : "Author's site"}</a
	>
	<Separator orientation="vertical" class="bg-muted-foreground bg-opacity-50" />
	<a href="https://opencollege-nsk.ru/" class="hover:text-foreground"
		>{$language === 'ru' ? "Сайт НГОК'а" : "NGOK's site"}</a
	>
	<Separator orientation="vertical" class="bg-muted-foreground bg-opacity-50" />
	<a
		href="https://docs.google.com/spreadsheets/d/1FiMov0r4UUDKT6A56NWMImpoUakDC2YDevgaOpJQ7Qc/"
		class="hover:text-foreground">{$language === 'ru' ? 'Таблица расписания' : 'Schedule table'}</a
	>
	<Separator orientation="vertical" class="bg-muted-foreground bg-opacity-50" />
	<a href="https://github.com/Mapagmataas1331/NGOK-Better-schedule" class="hover:text-foreground"
		>{$language === 'ru' ? 'Исходный код' : 'Source code'}</a
	>
</footer>
