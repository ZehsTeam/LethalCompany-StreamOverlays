<script lang="ts">
	import StatHolder from '$lib/components/StatHolder.svelte';
	import LootStat from '$lib/components/LootStat.svelte';
	import { getOverlayState } from '$lib/OverlayState.svelte';

	const overlayState = getOverlayState();
</script>

<StatHolder>
	<LootStat payload={overlayState.lootPayload} />
</StatHolder>

<style>
</style>
