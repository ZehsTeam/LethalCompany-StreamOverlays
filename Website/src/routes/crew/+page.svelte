<script lang="ts">
	import StatHolder from '$lib/components/StatHolder.svelte';
	import CrewStat from '$lib/components/CrewStat.svelte';
	import { getOverlayState } from '$lib/OverlayState.svelte';

	const overlayState = getOverlayState();
</script>

<StatHolder>
	<CrewStat payload={overlayState.crewPayload} />
</StatHolder>

<style>
</style>
