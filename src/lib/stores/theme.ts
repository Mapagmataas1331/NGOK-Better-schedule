import { writable } from 'svelte/store';
import { getCookie, setCookie } from '$lib/utils/cookies';

type Theme = 'dark' | 'light';

const getInitialTheme = (): Theme => {
	if (typeof window !== 'undefined') {
		const savedTheme = getCookie('theme');
		if (savedTheme === 'dark' || savedTheme === 'light') {
			return savedTheme;
		}
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}
	return 'light';
};

export const theme = writable<Theme>(getInitialTheme());

let lastTheme: Theme | null = null;

theme.subscribe((value) => {
	if (typeof window !== 'undefined' && value !== lastTheme) {
		setCookie('theme', value, 365, 'ma.cyou');
		document.documentElement.classList.toggle('dark', value === 'dark');

		document
			.querySelector('meta[name="theme-color"]')
			?.setAttribute('content', value === 'dark' ? '#090a0b' : '#ffffff');
		lastTheme = value;
	}
});
