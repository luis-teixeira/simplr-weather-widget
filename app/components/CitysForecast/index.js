import React from 'react';
import styles from './styles.css';

import CitysForecastDayInfo from '../CitysForecastDayInfo';

const CitysForecast = ( props ) => {
  const  { forescast }  = props;
  return(
    <div className={`${styles.forecast} weather-widget--forecast`} >
      { forescast.map((cast,i) => { if( i !== 0 )
          return (<CitysForecastDayInfo key={`fr-`+ i} {...cast} />);
        })
      }
    </div>
  );
};

CitysForecast.propTypes = {
  forescast: React.PropTypes.array,
};

export default CitysForecast;
