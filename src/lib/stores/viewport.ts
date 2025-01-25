import { writable } from 'svelte/store';

interface Viewport {
	vw: number;
	vh: number;
}

const DEFAULT_THROTTLE_DELAY = 100;

export const breakpoints = {
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280,
	'2xl': 1400
};

const getInitialViewport = (): Viewport => ({
	vw: typeof window !== 'undefined' ? window.innerWidth : 0,
	vh: typeof window !== 'undefined' ? window.innerHeight : 0
});

export const createViewportStore = (throttleDelay = DEFAULT_THROTTLE_DELAY) => {
	const viewport = writable<Viewport>(getInitialViewport());

	if (typeof window !== 'undefined') {
		let resizeTimeout: ReturnType<typeof setTimeout>;

		const updateViewport = () => {
			viewport.set({ vw: window.innerWidth, vh: window.innerHeight });
		};

		const handleResize = () => {
			clearTimeout(resizeTimeout);
			resizeTimeout = setTimeout(updateViewport, throttleDelay);
		};

		window.addEventListener('resize', handleResize);
		updateViewport();

		viewport.subscribe(() => () => {
			window.removeEventListener('resize', handleResize);
		});
	}

	return viewport;
};

export const viewport = createViewportStore();
