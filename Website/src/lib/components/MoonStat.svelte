<script lang="ts">
	import Stat from './Stat.svelte';
	import { getTextWithValues } from '$lib/formatter';

	let {
		format = 'Moon: {value}',
		moonName,
		weatherName,
		showWeather
	}: {
		format?: string;
		moonName: string;
		weatherName: string;
		showWeather: boolean;
	} = $props();

	let text = $derived(getTextWithValues(format, [moonName]));
	let preferredText = $derived(getTextWithValues(format, ['41 Experimentation']));
</script>

<Stat grow={true}>
	<p>{text}</p>

	{#snippet preferred()}
		<p>{preferredText}</p>
	{/snippet}
</Stat>

<style>
</style>
