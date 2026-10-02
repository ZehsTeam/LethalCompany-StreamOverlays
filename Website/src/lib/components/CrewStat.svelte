<script lang="ts">
	import Stat from './Stat.svelte';

	let {
		playerCount
	}: {
		playerCount: number;
	} = $props();
</script>

<Stat>
	<p>Crew: {playerCount}</p>

	{#snippet preferred()}
		<p>Crew: 99</p>
	{/snippet}
</Stat>

<style>
</style>
