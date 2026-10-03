<script lang="ts">
	import StatHolder from '$lib/components/StatHolder.svelte';
	import CrewStat from '$lib/components/CrewStat.svelte';
	import MoonStat from '$lib/components/MoonStat.svelte';
	import DayStat from '$lib/components/DayStat.svelte';
	import QuotaStat from '$lib/components/QuotaStat.svelte';
	import LootStat from '$lib/components/LootStat.svelte';
	import AveragePerDayStat from '$lib/components/AveragePerDayStat.svelte';
</script>

<StatHolder>
	<CrewStat playerCount={1} />
	<MoonStat moonName="123 Test" weatherName="None" showWeather={true} />
	<DayStat day={1} dayInQuota={1} maxDaysInQuota={3} />
	<QuotaStat quotaValue={130} quotaIndex={1} />
	<LootStat lootValue={999} />
	<AveragePerDayStat averagePerDayValue={999} />
</StatHolder>

<style>
</style>
