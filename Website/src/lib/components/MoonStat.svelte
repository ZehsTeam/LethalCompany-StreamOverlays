<script module lang="ts">
	import { type StatPayload } from './Stat.svelte';

	export type MoonStatPayload = StatPayload & {
		moonName: string;
	};

	export const defaultPayload = {
		template: 'Moon: {value}',
		moonName: ''
	} satisfies MoonStatPayload;
</script>

<script lang="ts">
	import Stat from './Stat.svelte';
	import { getTextWithValues } from '$lib/formatter';

	let {
		payload
	}: {
		payload: MoonStatPayload;
	} = $props();

	let text = $derived(getTextWithValues(payload.template, [payload.moonName]));
	let preferredText = $derived(getTextWithValues(payload.template, ['41 Experimentation']));
</script>

<Stat grow={true}>
	<p>{text}</p>

	{#snippet preferred()}
		<p>{preferredText}</p>
	{/snippet}
</Stat>

<style>
</style>
