<script lang="ts">
	import StatHolder from '$lib/components/StatHolder.svelte';
	import AveragePerDayStat from '$lib/components/AveragePerDayStat.svelte';
	import { getOverlayState } from '$lib/OverlayState.svelte';

	const overlayState = getOverlayState();
</script>

<StatHolder>
	<AveragePerDayStat payload={overlayState.averagePerDayPayload} />
</StatHolder>

<style>
</style>
