import React from 'react';
import styles from './styles.css';
import CitysInfoDescription from '../CitysInfoDescription';

const Clock = ( props ) => {
  return(
    <div></div>
  );
};

export const HighRound = (props) => ( <span>{Math.round(props.celsius)}º</span> );
export const MinRound = (props) => ( <span>{Math.round(props.celsius)}º</span> );
export const TempRound = (props) =>( props.temp && <span>{Math.round(props.temp)}º</span> );

const CitysInfoToday = ( props ) => {
  const { forescast, high, low, weather, temp_c } = props;

  return(
    <div>
      <div className={`${styles.infoToday} weather-widget--today`} >
        <div className={`${styles.infoBoard} weather-widget--today--info`} >
          <div className={`${styles.infoBoardTemp} weather-widget--today--temp`} > <TempRound temp={temp_c} /></div>
          <div className={`${styles.infoBoardMinHig} weather-widget--today--min-high`} >
            <HighRound {...high} />/<strong><MinRound {...low} /></strong>
          </div>
        </div>
        <div className={`${styles.infoBoardExtra} weather-widget--icon`} >
          <div className={`${styles.infoBoardExtraIcon} weather-widget--icon--icon-font`} > 24º </div>
          <div className={`${styles.infoBoardExtraClock} weather-widget--icon--clock`} > <Clock /> </div>
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
