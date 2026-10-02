<script lang="ts">
	import Stat from './Stat.svelte';

	let {
        moonName,
        weatherName,
        showWeather,
    }: {
        moonName: string;
        weatherName: string;
        showWeather: boolean;
    } = $props();
</script>

<Stat grow={true}>
	<p>Moon: {moonName}</p>

	{#snippet preferred()}
		<p>Moon: 41 Experimentation</p>
	{/snippet}
</Stat>

<style>
</style>
