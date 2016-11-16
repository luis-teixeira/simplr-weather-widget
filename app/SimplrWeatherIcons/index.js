// climacons

import React from 'react';
import ReactSVG from 'react-svg';


import chanceflurries from './chanceflurries.svg';
import chancerain from './chancerain.svg';
import chancesleet from './chancesleet.svg';
import chancesnow from './chancesnow.svg';
import chancetstorms from './chancetstorms.svg';
import clearSunny from './clear-sunny.svg';
import cloudyMostlycloudy from './cloudy-mostlycloudy.svg';
import flurriesSnow from './flurries-snow.svg';
import fog from './fog.svg';
import hazy from './hazy.svg';
import mostlysunnyPartlysunnyPartlycloudy from './mostlysunny-partlysunny-partlycloudy.svg';
import ntChanceflurries from './nt_chanceflurries.svg';
import nChancerain from './nt_chancerain.svg';
import ntChancesleet from './nt_chancesleet.svg';
import ntChancesnow from './nt_chancesnow.svg';
import ntChancetstorms from './nt_chancetstorms.svg';
import ntClearSunny from './nt_clear-sunny.svg';
import ntHazy from './nt_hazy.svg';
import ntMostlysunnyPartlysunnyPartlycloudy from './nt_mostlysunny-partlysunny-partlycloudy.svg';
import ntTstorms from './nt_tstorms.svg';
import rain from './rain.svg';
import sleet from './sleet.svg';
import tstorms from './tstorms.svg';

import compass from './compass.svg';
import celcius from './celcius.svg';
import fahrenheit from './fahrenheit.svg';

import fallback from './fallback.png';

const icon = (name) => {
  if(name === 'chanceflurries') return chanceflurries;
  if(name === 'chancerain') return chancerain;
  if(name === 'chancesleet') return chancesleet;
  if(name === 'chancesnow') return chancesnow;
  if(name === 'chancetstorms') return chancetstorms;
  if(name === 'clear' || name === 'sunny') return clearSunny;
  if(name === 'cloudy' || name === 'mostlycloudy' || name === 'nt_cloudy' || name === 'nt_mostlycloudy') return cloudyMostlycloudy;
  if(name === 'flurries' || name === 'snow' || name === 'nt_flurries' || name === 'nt_snow') return flurriesSnow;
  if(name === 'fog' || name === 'nt_fog') return fog;
  if(name === 'hazy') return hazy;
  if(name === 'mostlysunny' || name === 'partlysunny' || name === 'partlycloudy') return mostlysunnyPartlysunnyPartlycloudy;
  if(name === 'rain' || name === 'nt_rain') return rain;
  if(name === 'sleet' || name === 'nt_sleet') return sleet;
  if(name === 'tstorms') return tstorms;
  if(name === 'nt_chanceflurries') return ntChanceflurries;
  if(name === 'nt_chancerain') return nChancerain;
  if(name === 'nt_chancesleet') return ntChancesleet;
  if(name === 'nt_chancesnow') return ntChancesnow;
  if(name === 'nt_chancetstorms') return ntChancetstorms;
  if(name === 'nt_clear' || name === 'nt_sunny') return ntClearSunny;
  if(name === 'nt_hazy') return ntHazy;
  if(name === 'nt_partlycloudy' || name === 'nt_mostlysunny' || name === 'nt_partlysunny') return ntMostlysunnyPartlysunnyPartlycloudy;
  if(name === 'nt_tstorms' ) return ntTstorms;

  if(name === 'compass' ) return compass;
  if(name === 'celcius' ) return celcius;
  if(name === 'fahrenheit' ) return fahrenheit;

};

function SimplrWeatherIcons(props) {
  const { name, css } = props;
  return (
    <ReactSVG
      path={icon(name)}
      className={css}
      evalScript={'once'}
      fallbackPath={fallback} />
  );
}

export default SimplrWeatherIcons;
