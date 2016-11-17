import React from 'react';
import styles from './styles.css';
import CitysInfoDescription from '../CitysInfoDescription';
import SimplrWeatherIcons from '../../SimplrWeatherIcons';

// const Clock = ( props ) => {
//   return(
//     <div>
//
//     </div>
//   );
// };

export const HighRound = (props) => ( <span className={`${styles.tempSmallHight}`} >{Math.round(props.celsius)}º</span> );
export const MinRound = (props) => ( <span className={`${styles.tempSmallMin}`} >{Math.round(props.celsius)}º</span> );
export const TempRound = (props) =>( props.temp && <span>{Math.round(props.temp)}<SimplrWeatherIcons css={styles.celciusTemp} name='celcius'/></span> );

const CitysInfoToday = ( props ) => {
  const {  high, low, weather, icon} = props;
  let { temp_c } = props;
  const forecast = props.forecast.simpleforecast.forecastday[0];
  let wrapIcon = (icon) ? (<SimplrWeatherIcons key={Math.random()} css={styles.icon} name={icon}/> ) : (<div></div>);

  return(
    <div>
     <div className={`${styles.infoToday} weather-widget--today`} >
        <div className={`${styles.infoBoard} weather-widget--today--info`} >
          <div className={`${styles.infoBoardTemp} weather-widget--today--temp`} > <TempRound temp={temp_c} /> </div>
          <div className={`${styles.infoBoardMinHig} weather-widget--today--min-high`} >
            <strong><HighRound  {...forecast.high} />/<MinRound {...forecast.low} /></strong>
          </div>
        </div>
        <div className={`${styles.infoBoardExtra} weather-widget--icon`} >
          <div className={`${styles.infoBoardExtraIcon} weather-widget--icon--icon-font`} >  {wrapIcon} </div>
          <div className={`${styles.infoBoardExtraClock} weather-widget--icon--clock`} ></div>
        </div>
      </div>
      <CitysInfoDescription conditions={weather} />
    </div>
  );
};

CitysInfoToday.propTypes = {
  forescast: React.PropTypes.object,
  high: React.PropTypes.object,
  low: React.PropTypes.object,
  weather: React.PropTypes.string,
  temp_c: React.PropTypes.number,
};

export default CitysInfoToday;
