<script lang="ts">
	import StatHolder from '$lib/components/StatHolder.svelte';
	import DayStat from '$lib/components/DayStat.svelte';
	import { getOverlayState } from '$lib/OverlayState.svelte';

	const overlayState = getOverlayState();
</script>

<StatHolder>
	<DayStat payload={overlayState.dayPayload} />
</StatHolder>

<style>
</style>
