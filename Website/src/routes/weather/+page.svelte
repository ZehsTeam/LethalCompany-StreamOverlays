<script lang="ts">
	import StatHolder from '$lib/components/StatHolder.svelte';
	import WeatherStat from '$lib/components/WeatherStat.svelte';
	import { getOverlayState } from '$lib/OverlayState.svelte';

	const overlayState = getOverlayState();
</script>

<StatHolder>
	<WeatherStat payload={overlayState.weatherPayload} />
</StatHolder>

<style>
</style>
