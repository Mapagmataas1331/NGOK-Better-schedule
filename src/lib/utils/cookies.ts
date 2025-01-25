export const setCookie = (
	name: string,
	value: string | number,
	days: number | null = null,
	domain: string | null = null,
	path: string = '/',
	secure: boolean = false,
	sameSite: 'Strict' | 'Lax' | 'None' = 'Lax'
) => {
	// domain = null; // FOR DEV SERVER
	let expires = '';
	if (days === 0) {
		const neverExpireDate = new Date();
		neverExpireDate.setFullYear(neverExpireDate.getFullYear() + 10);
		expires = '; expires=' + neverExpireDate.toUTCString();
	} else if (days) {
		const date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		expires = '; expires=' + date.toUTCString();
	}

	const cookieString =
		`${name}=${value || ''}${expires}; path=${path}` +
		(domain ? `; domain=${domain}` : '') +
		(secure ? '; secure' : '') +
		`; SameSite=${sameSite}`;

	document.cookie = cookieString;
};

export const getCookie = (name: string) => {
	const nameEQ = name + '=';
	const ca = document.cookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) === ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
};

export const removeCookie = (name: string) => {
	document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
};

export const getAllCookies = (): Record<string, string> => {
	const cookies: Record<string, string> = {};
	const cookieString = document.cookie;

	if (cookieString) {
		cookieString.split(';').forEach((cookie) => {
			const [key, value] = cookie.trim().split('=');
			cookies[key] = decodeURIComponent(value);
		});
	}

	return cookies;
};
