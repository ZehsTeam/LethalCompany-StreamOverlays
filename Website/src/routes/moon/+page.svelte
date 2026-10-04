<script lang="ts">
	import StatHolder from '$lib/components/StatHolder.svelte';
	import MoonStat from '$lib/components/MoonStat.svelte';
	import { getOverlayState } from '$lib/OverlayState.svelte';

	const overlayState = getOverlayState();
</script>

<StatHolder>
	<MoonStat payload={overlayState.moonPayload} />
</StatHolder>

<style>
</style>
