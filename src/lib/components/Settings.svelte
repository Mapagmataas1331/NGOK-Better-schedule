<script lang="ts" module>
	interface SelectItem {
		label: string;
		labelRu: string;
		value: string;
	}

	export interface Setting {
		store: Writable<string>;
		name: string;
		nameRu: string;
		values: SelectItem[];
	}
</script>

<!-- svelte-ignore non_reactive_update -->
<script lang="ts">
	import * as Select from './ui/select/index.js';

	import { theme } from '../stores/theme';
	import { language } from '../stores/language';
	import { fromStore, type Writable } from 'svelte/store';

	let { additionalSettings = null }: { additionalSettings?: { [key: string]: Setting } | null } =
		$props();
	let clazz = '';
	export { clazz as class };

	let settings: { [key: string]: Setting } = {
		theme: {
			store: theme,
			name: 'Theme',
			nameRu: 'Тема',
			values: [
				{ label: 'Light', labelRu: 'Светлая', value: 'light' },
				{ label: 'Dark', labelRu: 'Темная', value: 'dark' }
			]
		},
		language: {
			store: language,
			name: 'Lingo',
			nameRu: 'Язык',
			values: [
				{ label: 'English', labelRu: 'Английский', value: 'en' },
				{ label: 'Russian', labelRu: 'Русский', value: 'ru' }
			]
		}
	};

	settings = { ...settings, ...(additionalSettings ?? {}) };

	const triggerContent = (setting: Setting) => {
		const selectedValue = setting.values.find(
			(value) => value.value === fromStore(setting.store).current
		);
		return $language === 'ru' ? selectedValue?.labelRu : selectedValue?.label;
	};
</script>

<div
	class="{clazz !== '' ? clazz + ' ' : ''}flex min-w-[240px] flex-col space-y-4 px-2 py-4 text-sm"
>
	{#each Object.entries(settings) as [key, setting]}
		{@const state = fromStore(setting.store)}
		<div class="flex items-center space-x-2">
			<p class="min-w-[48px]">{$language === 'ru' ? setting.nameRu : setting.name}:</p>
			<Select.Root type="single" name={key} bind:value={state.current}>
				<Select.Trigger>
					{triggerContent(setting)}
				</Select.Trigger>
				<Select.Content>
					{#each setting.values as value}
						<Select.Item value={value.value}>
							{$language === 'ru' ? value.labelRu : value.label}
						</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
		</div>
	{/each}
</div>
