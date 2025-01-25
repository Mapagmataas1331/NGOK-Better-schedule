import { writable } from 'svelte/store';
import { getCookie, setCookie } from '$lib/utils/cookies';

type Language = 'en' | 'ru';

const getInitialLanguage = (): Language => {
	if (typeof window !== 'undefined') {
		const savedLanguage = getCookie('language');
		if (savedLanguage === 'en' || savedLanguage === 'ru') {
			return savedLanguage;
		}
		return navigator.language.startsWith('ru') ? 'ru' : 'en';
	}
	return 'en';
};

export const language = writable<Language>(getInitialLanguage());

let lastLanguage: Language | null = null;

language.subscribe((value) => {
	if (typeof window !== 'undefined' && value !== lastLanguage) {
		setCookie('language', value, 365, 'ma.cyou');
		document.documentElement.setAttribute('lang', value);
		lastLanguage = value;
	}
});
