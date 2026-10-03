<script lang="ts">
	import StatHolder from '$lib/components/StatHolder.svelte';
	import MoonStat from '$lib/components/MoonStat.svelte';
</script>

<StatHolder>
	<MoonStat moonName="123 Test" weatherName="None" showWeather={true} />
</StatHolder>

<style>
</style>
