import {
	type CrewStatPayload,
	defaultPayload as defaultCrewPayload
} from './components/CrewStat.svelte';
import {
	type MoonStatPayload,
	defaultPayload as defaultMoonPayload
} from './components/MoonStat.svelte';
import {
	type DayStatPayload,
	defaultPayload as defaultDayPayload
} from './components/DayStat.svelte';
import {
	type QuotaStatPayload,
	defaultPayload as defaultQuotaPayload
} from './components/QuotaStat.svelte';
import {
	type LootStatPayload,
	defaultPayload as defaultLootPayload
} from './components/LootStat.svelte';
import {
	type AveragePerDayStatPayload,
	defaultPayload as defaultAveragePerDayPayload
} from './components/AveragePerDayStat.svelte';
import { getContext, setContext } from 'svelte';

interface OverlayState {
	crewPayload: CrewStatPayload;
	moonPayload: MoonStatPayload;
	dayPayload: DayStatPayload;
	quotaPayload: QuotaStatPayload;
	lootPayload: LootStatPayload;
	averagePerDayPayload: AveragePerDayStatPayload;
}

class OverlayStateClass implements OverlayState {
	crewPayload = $state<CrewStatPayload>(defaultCrewPayload);
	moonPayload = $state<MoonStatPayload>(defaultMoonPayload);
	dayPayload = $state<DayStatPayload>(defaultDayPayload);
	quotaPayload = $state<QuotaStatPayload>(defaultQuotaPayload);
	lootPayload = $state<LootStatPayload>(defaultLootPayload);
	averagePerDayPayload = $state<AveragePerDayStatPayload>(defaultAveragePerDayPayload);
}

const DEFAULT_KEY = '$_overlay_state';

export const getOverlayState = (key = DEFAULT_KEY) => {
	return getContext<OverlayState>(key);
};

export const setOverlayState = (key = DEFAULT_KEY) => {
	const overlayState = new OverlayStateClass();
	return setContext(key, overlayState);
};
