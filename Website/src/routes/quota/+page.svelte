<script lang="ts">
	import StatHolder from '$lib/components/StatHolder.svelte';
	import QuotaStat from '$lib/components/QuotaStat.svelte';
	import { getOverlayState } from '$lib/OverlayState.svelte';

	const overlayState = getOverlayState();
</script>

<StatHolder>
	<QuotaStat payload={overlayState.quotaPayload} />
</StatHolder>

<style>
</style>
