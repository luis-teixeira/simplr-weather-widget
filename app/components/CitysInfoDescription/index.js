import React from 'react';
import styles from './styles.css';

const CitysInfoDescription = ( props ) => {
  const { conditions } = props;
  return(
    <div className={`${styles.description} weather-widget--description`} >
      {conditions}
    </div>
  );
};

CitysInfoDescription.propTypes = {
  conditions: React.PropTypes.string,
};

export default CitysInfoDescription;
