// Vanilla
import DustClouds from '$lib/assets/weather-icons/_vanilla/DustClouds.svg';
import Eclipsed from '$lib/assets/weather-icons/_vanilla/Eclipsed.svg';
import Flooded from '$lib/assets/weather-icons/_vanilla/Flooded.svg';
import Foggy from '$lib/assets/weather-icons/_vanilla/Foggy.svg';
import None from '$lib/assets/weather-icons/_vanilla/None.svg';
import Rainy from '$lib/assets/weather-icons/_vanilla/Rainy.svg';
import Stormy from '$lib/assets/weather-icons/_vanilla/Stormy.svg';

// Cobe Rebirth
import MeteorShower from '$lib/assets/weather-icons/code-rebirth/MeteorShower.svg';
import Tornado from '$lib/assets/weather-icons/code-rebirth/Tornado.svg';

// Generic Weathers
import Anomaly from '$lib/assets/weather-icons/generic-weathers/Anomaly.svg';
import Downpour from '$lib/assets/weather-icons/generic-weathers/Downpour.svg';
import Radiation from '$lib/assets/weather-icons/generic-weathers/Radiation.svg';
import Slimy from '$lib/assets/weather-icons/generic-weathers/Slimy.svg';

// Kenjis Weathers
import AcidRain from '$lib/assets/weather-icons/kenjis-weathers/AcidRain.svg';
import Gusty from '$lib/assets/weather-icons/kenjis-weathers/Gusty.svg';
import Infested from '$lib/assets/weather-icons/kenjis-weathers/Infested.svg';

// Legend Weathers
import BloodMoon from '$lib/assets/weather-icons/legend-weathers/BloodMoon.svg';
import MajoraMoon from '$lib/assets/weather-icons/legend-weathers/MajoraMoon.svg';

// Lethal Elements Theta
import Blizzard from '$lib/assets/weather-icons/lethal-elements-theta/Blizzard.svg';
import Heatwave from '$lib/assets/weather-icons/lethal-elements-theta/Heatwave.svg';
import Snowfall from '$lib/assets/weather-icons/lethal-elements-theta/Snowfall.svg';
import SolarFlare from '$lib/assets/weather-icons/lethal-elements-theta/SolarFlare.svg';
import ToxicSmog from '$lib/assets/weather-icons/lethal-elements-theta/ToxicSmog.svg';

// Mrov Weathers
import Blackout from '$lib/assets/weather-icons/mrov-weathers/Blackout.svg';
import Cloudy from '$lib/assets/weather-icons/mrov-weathers/Cloudy.svg';

// Temporal Storm
import TemporalStorm from '$lib/assets/weather-icons/temporal-storm/TemporalStorm.svg';

// Wesleys Weathers
import Earthquakes from '$lib/assets/weather-icons/wesleys-weathers/Earthquakes.svg';
import Forsaken from '$lib/assets/weather-icons/wesleys-weathers/Forsaken.svg';
import Hallowed from '$lib/assets/weather-icons/wesleys-weathers/Hallowed.svg';
import Hurricane from '$lib/assets/weather-icons/wesleys-weathers/Hurricane.svg';
import Minefield from '$lib/assets/weather-icons/wesleys-weathers/Minefield.svg';

const weatherSVGs: Record<string, string> = {
	// Vanilla
	none: None,
	dustclouds: DustClouds,
	rainy: Rainy,
	foggy: Foggy,
	flooded: Flooded,
	stormy: Stormy,
	eclipsed: Eclipsed,

	// Code Rebirth
	meteorshower: MeteorShower,
	tornado: Tornado,

	// Generic Weathers
	anomaly: Anomaly,
	downpour: Downpour,
	radiation: Radiation,
	slimy: Slimy,

	// Kenjis Weathers
	acidrain: AcidRain,
	gusty: Gusty,
	infested: Infested,

	// Legend Weathers
	bloodmoon: BloodMoon,
	majoramoon: MajoraMoon,

	// Lethal Elements Theta
	blizzard: Blizzard,
	heatwave: Heatwave,
	snowfall: Snowfall,
	solarflare: SolarFlare,
	toxicsmog: ToxicSmog,

	// Mrov Weathers
	blackout: Blackout,
	cloudy: Cloudy,

	// Temporal Storm
	temporalstorm: TemporalStorm,

	// Wesleys Weathers
	earthquakes: Earthquakes,
	forsaken: Forsaken,
	hallowed: Hallowed,
	hurricane: Hurricane,
	minefield: Minefield
};

export const getWeatherSVG = (weatherName: string): string => {
	let input = weatherName.replaceAll(' ', '').toLowerCase();
	return weatherSVGs[input];
};
