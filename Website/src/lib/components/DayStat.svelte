<script lang="ts">
	import Stat from './Stat.svelte';

	let {
		day,
        dayInQuota,
        maxDaysInQuota
	}: {
		day: number;
        dayInQuota: number;
        maxDaysInQuota: number;
	} = $props();
</script>

<Stat>
	<p>Day: {day} ({dayInQuota}/{maxDaysInQuota})</p>
    
	{#snippet preferred()}
		<p>Day: 99 (9/9)</p>
	{/snippet}
</Stat>

<style>
</style>
