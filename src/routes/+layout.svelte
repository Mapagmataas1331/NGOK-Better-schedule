<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import { Toaster } from '$lib/components/ui/sonner/index.js';
	import Footer from '$lib/components/Footer.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import { areCookiesEnabled, getCookie, setCookie } from '$lib/utils/cookies';
	import '$lib/../app.css';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		let ifFirstVisit = getCookie('visited');
		if (!ifFirstVisit && areCookiesEnabled(true)) {
			setCookie('visited', 'true', 365, 'ngok.ma.cyou');
			window.location.href = '/home/';
			console.log('first visit');
		}
	});
</script>

<Header
	links={{
		'/home/': { name: 'Home', nameRu: 'Главная' },
		'/': { name: 'Student', nameRu: 'Студенту' },
		'/teacher/': { name: 'Teacher', nameRu: 'Преподавателю' }
	}}
	title="НГОК"
	titleLink="/home/"
	{Logo}
	profile={false}
/>

<Toaster />

{@render children()}

<Footer
	links={{
		'https://ma.cyou/': { name: 'Author', nameRu: 'Автор' },
		'https://opencollege-nsk.ru/': { name: "NGOK's site", nameRu: "Сайт НГОК'а" },
		'https://docs.google.com/spreadsheets/d/1FiMov0r4UUDKT6A56NWMImpoUakDC2YDevgaOpJQ7Qc/': {
			name: 'Schedule table',
			nameRu: 'Таблица расписания'
		},
		'https://github.com/Mapagmataas1331/NGOK-Better-schedule': {
			name: 'Source code',
			nameRu: 'Исходный код'
		}
	}}
/>
