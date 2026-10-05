<script module lang="ts">
	import { type StatPayload } from './Stat.svelte';

	export type MoonStatPayload = StatPayload & {
		moonName: string;
	};

	export const defaultPayload = {
		template: 'Moon: {value}',
		moonName: '41 Experimentation'
	} satisfies MoonStatPayload;
</script>

<script lang="ts">
	import Stat from './Stat.svelte';
	import { fillTemplate } from '$lib/template';
	import WeatherStat from './WeatherStat.svelte';
	import type { WeatherStatPayload } from './WeatherStat.svelte';

	let {
		payload,
		weatherPayload
	}: {
		payload: MoonStatPayload;
		weatherPayload: WeatherStatPayload;
	} = $props();

	let text = $derived(fillTemplate(payload.template, [payload.moonName]));
	let preferredText = $derived(fillTemplate(payload.template, ['41 Experimentation']));
</script>

<Stat grow={true}>
	<p>{text}</p>
	<WeatherStat payload={weatherPayload} />

	{#snippet preferred()}
		<p>{preferredText}</p>
		<WeatherStat payload={weatherPayload} />
	{/snippet}
</Stat>

<style>
</style>
