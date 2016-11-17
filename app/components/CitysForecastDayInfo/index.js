import React from 'react';
import styles from './styles.css';
import SimplrWeatherIcons from '../../SimplrWeatherIcons';

export const HighRound = (props) => ( <span>{Math.round(props.celsius)}º</span> );
export const MinRound = (props) => ( <span>{Math.round(props.celsius)}º</span> );

const CitysForecastDayInfo = ( props ) => {
  const { high, low, date, conditions, icon } = props;

  // const highRound = Math.round(high.celsius);
  const lowRound = Math.round(low.celsius);
  // const tempRound = Math.round(temp_c);

  return(
    <div className={`${styles.info} weather-widget--forecast--info`} >
      <div className={`${styles.temp} weather-widget--forescast--temp`} > {date.day} {date.monthname_short} </div>
      <div className={`${styles.icon} weather-widget--forescast--icon-font`} > <SimplrWeatherIcons key={Math.random()} css={styles.iconSVG} name={icon}/> </div>
      <div className={`${styles.minHigh} weather-widget--forescast--min-high`} > <strong><HighRound {...high} /></strong>/<MinRound {...low} /></div>
      {/* <div className={`${styles.minHigh} weather-widget--forescast--min-high`} > {conditions} </div> */}
    </div>
  );
};

CitysForecastDayInfo.propTypes = {
  // forescast: React.PropTypes.object,
  high: React.PropTypes.object,
  low: React.PropTypes.object,
  date: React.PropTypes.object,
  conditions: React.PropTypes.string,
};

export default CitysForecastDayInfo;
