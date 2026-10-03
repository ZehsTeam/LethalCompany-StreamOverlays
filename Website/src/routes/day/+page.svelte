<script lang="ts">
	import StatHolder from '$lib/components/StatHolder.svelte';
	import DayStat from '$lib/components/DayStat.svelte';
</script>

<StatHolder>
	<DayStat day={1} dayInQuota={1} maxDaysInQuota={3} />
</StatHolder>

<style>
</style>
