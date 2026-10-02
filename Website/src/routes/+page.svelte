<script lang="ts">
	import CrewStat from '$lib/components/CrewStat.svelte';
	import MoonStat from '$lib/components/MoonStat.svelte';
    import DayStat from '$lib/components/DayStat.svelte';
</script>

<div class="overlay">
	<CrewStat playerCount={1} />
	<MoonStat moonName="123 Test" weatherName="None" showWeather={true} />
    <DayStat day={1} dayInQuota={1} maxDaysInQuota={3} />
</div>

<style>
	.overlay {
		height: 75px;
		padding: 0 30px;
		display: flex;
		align-items: center;
		flex-wrap: nowrap;
		gap: 40px;

		/* Debug */
		border: 1px dashed red;
	}
</style>
