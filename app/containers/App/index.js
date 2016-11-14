import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';
import createSagaMiddleware from 'redux-saga';


import VisibledCitys  from 'containers/VisibledCitys';


class App extends Component {

  render() {
    return (
      <div className={`${styles.weatherWidget} weather-widget`}>
        <VisibledCitys />
      </div>
    );
  }
}

export default App;
