import React from 'react';
import styles from './styles.css';
import CitysInfoDescription from '../CitysInfoDescription';

const Clock = ( props ) => {
  console.log(props.date);
    return(
      <div>oooo</div>
    );
}


const CitysInfoToday = ( props ) => {
  const { forescast, high, low, weather, temp_c } = props;

  // const highRound = Math.round(high.celsius);
  // const lowRound = Math.round(low.celsius);
  //let tempRound = Math.round(temp_c);
  const highRound = high.celsius;
  const lowRound = low.celsius;
  const tempRound = temp_c;
  let now = new Date(props.local_epoch);
  return(
    <div>
      <div className={`${styles.infoToday} weather-widget--today`} >
        <div className={`${styles.infoBoard} weather-widget--today--info`} >
          <div className={`${styles.infoBoardTemp} weather-widget--today--temp`} > {tempRound}º </div>
          <div className={`${styles.infoBoardMinHig} weather-widget--today--min-high`} >
            {highRound}º/<strong>{lowRound}º</strong>
          </div>
        </div>
        <div className={`${styles.infoBoardExtra} weather-widget--icon`} >
          <div className={`${styles.infoBoardExtraIcon} weather-widget--icon--icon-font`} > 24º </div>
          <div className={`${styles.infoBoardExtraClock} weather-widget--icon--clock`} > <Clock date={now} /> </div>
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
