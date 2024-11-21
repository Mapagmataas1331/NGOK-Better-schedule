<script lang="ts">
	import Header from '$shared/components/Header.svelte';
	import { Toaster } from '$shared/components/ui/sonner/index.js';
	import Footer from '$shared/components/Footer.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import '@/app.scss';

	let { children } = $props();
</script>

<Header
	links={{
		// '/home/': { name: 'Home', nameRu: 'Главная' },
		'/': { name: 'Student', nameRu: 'Студенту' }
		// '/teacher/': { name: 'Teacher', nameRu: 'Преподавателю' }
	}}
	title="НГОК"
	titleLink="https://opencollege-nsk.ru/"
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
