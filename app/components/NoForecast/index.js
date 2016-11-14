import React from 'react';
import City from '../../containers/City';
import styles from './styles.css';
import search from './search.svg';
import local from './local.svg';

const NoForecast = () => {

  return(
    <div className={`${styles.noForecast}  weather-widget--no-forecast`}>
      <div className={`${styles.search}  weather-widget--no-forecast--search`} >
          <img src={search} alt='search for a city' />
          <div>Search for a city</div>
      </div>
      <div className={`${styles.or} weather-widget--no-forecast--or`}> <strong>or set</strong></div>
      <div className={`${styles.geoip}  weather-widget--no-forecast--geoip`} >
        <img src={local} alt='geoip' />
        <div>yours current Location.</div>
      </div>
    </div>
  );
};

NoForecast.propTypes = {
  // citys: React.PropTypes.array,
};

export default NoForecast;
