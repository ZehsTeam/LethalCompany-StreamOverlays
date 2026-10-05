<script module lang="ts">
	import { type StatPayload } from './Stat.svelte';

	export type WeatherStatPayload = StatPayload & {
		showIcon: boolean;
		weatherNames: string[];
	};

	export const defaultPayload = {
		template: '',
		showIcon: true,
		weatherNames: ['None']
	} satisfies WeatherStatPayload;
</script>

<script lang="ts">
	import Stat from './Stat.svelte';
	import { fillTemplate } from '$lib/template';
	import { getWeatherSVG } from '$lib/weathers';

	let {
		payload
	}: {
		payload: WeatherStatPayload;
	} = $props();

	let validWeatherSVGs = $derived(
		payload.weatherNames.map(getWeatherSVG).filter((svg) => svg.length > 0)
	);
	let showStat = $derived(payload.showIcon && validWeatherSVGs.length > 0);
</script>

{#if showStat}
	<Stat>
		<span
            class="icon"
            role='img'
            style:--icon-url={`url("${validWeatherSVGs[0]}")`}
            style:--icon-size={'35px'}
            style:--icon-color={'white'}
            ></span>

		{#snippet preferred()}
            <p></p>
		{/snippet}
	</Stat>
{/if}

<style>
    .icon {
        display: inline-block;
        flex-shrink: 0;
        width: var(--icon-size);
        height: var(--icon-size);
        background-color: var(--icon-color);
        -webkit-mask: var(--icon-url) center / contain no-repeat;
        mask: var(--icon-url) center / contain no-repeat;
    }
</style>
