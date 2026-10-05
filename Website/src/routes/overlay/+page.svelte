<script lang="ts">
	import StatHolder from '$lib/components/StatHolder.svelte';
	import CrewStat from '$lib/components/CrewStat.svelte';
	import MoonStat from '$lib/components/MoonStat.svelte';
	import DayStat from '$lib/components/DayStat.svelte';
	import QuotaStat from '$lib/components/QuotaStat.svelte';
	import LootStat from '$lib/components/LootStat.svelte';
	import { getOverlayState } from '$lib/OverlayState.svelte';

	const overlayState = getOverlayState();
</script>

<StatHolder>
	<CrewStat payload={overlayState.crewPayload} />
	<MoonStat payload={overlayState.moonPayload} weatherPayload={overlayState.weatherPayload} />
	<DayStat payload={overlayState.dayPayload} />
	<QuotaStat payload={overlayState.quotaPayload} />
	<LootStat payload={overlayState.lootPayload} />
</StatHolder>

<style>
</style>
