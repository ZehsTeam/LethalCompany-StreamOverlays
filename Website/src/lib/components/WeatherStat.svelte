<script module lang="ts">
	import { type StatPayload } from './Stat.svelte';

	export type WeatherStatPayload = StatPayload & {
		weatherNames: string[];
	};

	export const defaultPayload = {
		template: '',
		weatherNames: ['None']
	} satisfies WeatherStatPayload;
</script>

<script lang="ts">
	import Stat from './Stat.svelte';
	import { getTextWithValues } from '$lib/formatter';

	let {
		payload
	}: {
		payload: WeatherStatPayload;
	} = $props();
</script>

{#if payload.weatherNames && payload.weatherNames.length > 0}
	<Stat>
		<p>{payload.weatherNames[0]}</p>

		{#snippet preferred()}
			<p>{payload.weatherNames[0]}</p>
		{/snippet}
	</Stat>
{/if}

<style>
</style>
