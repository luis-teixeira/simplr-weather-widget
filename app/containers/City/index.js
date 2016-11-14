import React from 'react';
import { connect } from 'react-redux';
import request from 'utils/request';
import Select from 'react-select';

import 'react-select/dist/react-select.css';
import styles from './styles.css';
import remove from './delete.svg';
import local from './local.svg';

import CitysInfoToday from 'components/CitysInfoToday';
import CitysForecast from 'components/CitysForecast';
import NoForecast from 'components/NoForecast';
import Loading from 'components/Loading';

import {
  removeCity,
  editingCity,
  fetchedCity,
  fetchedCityForescast,
  fetchedCityCondition
} from 'containers/App/actions';

const getOptions = (input) => {
  //http://autocomplete.wunderground.com/aq?query=
  return fetch(`http://autocomplete.wunderground.com/aq?query=${input}`)
    .then((response) => {
      return response.json();
    }).then((json) => {
      return { options: json.RESULTS };
    });
};

const getConditions = (endpoint) => {
  return fetch(`http://api.wunderground.com/api/0ad35cadfb241898/conditions${endpoint}.json`)
    .then((response) => {
      return response.json();
    }).then((json) => {
      return { ...json };
    });
};

const getForecast = (endpoint) => {
  return fetch(`http://api.wunderground.com/api/0ad35cadfb241898/forecast${endpoint}.json`)
    .then((response) => {
      return response.json();
    }).then((json) => {
      return { ...json };
    });
};

export class City extends React.Component { // eslint-disable-line react/prefer-stateless-function


  onChange = (value) => {

    this.props.onFetched({i: this.props.index, name: value.name, endpoint: value.l });
    getConditions(value.l)
      .then( json => {
        this.props.onFetchedCondition({i:this.props.index, conditions:json.current_observation})
      })
      .then(getForecast(value.l)
      .then(json => {
        this.props.onFetchedForecast({i:this.props.index, forecast:json})
      })
    )

    // getForecast(value.l).then( json => {
    //   this.props.onFetchedForecast({i:this.props.index, wunderground:json})
    // });
  }

  onClickDelete = () => (
    this.props.onRemoveAction(this.props.id)
  )

  onEditing = () => {
    this.props.onEditing({ i: this.props.index, editing: !this.props.editing });
  }

  render() {
    const {index, id, name, loaded, geoip, forecast, conditions, editing, endpoint } = this.props;

    let mainContent = (!loaded && !forecast) ? (<NoForecast />) : (<Loading />);

    if( forecast ) {
      // console.log(forecast.forecast.simpleforecast);
      const simpleforecast = forecast.forecast.simpleforecast;
      const forescastObj = simpleforecast.forecastday;

      mainContent = (
        <div>
          <CitysInfoToday  {...forescastObj[0]} {...conditions} />
          <CitysForecast forescast={forescastObj} />
        </div>
      );
    }

    return(

      <div className={`${styles.wwCard} weather-widget--card`}>
        {!editing && (<input className={`${styles.select} weather-widget--search`} onFocus={this.onEditing} type="text" defaultValue={name} />)}
        {editing && (<Select.Async className={styles.select}
            value={endpoint}
            loadOptions={getOptions}
            onChange={this.onChange}
            labelKey="name"
            valueKey="l"
            // onValueClick={this.getForecast}
          />
        )}

        {editing && (
          <button className={`${styles.btnClose} ${styles.btnGeoip} btn-geoip--city`} >
            <img src={local}  alt="geoip" />
          </button>
        )}

        <button onClick={this.onClickDelete} className={`${styles.btnClose} btn-delete--city`} >
          <img src={remove}  alt="remove more" />
        </button>
        {mainContent}
      </div>

    );
  }

};

City.propTypes = {
  index: React.PropTypes.number.isRequired,
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string,
  endpoint: React.PropTypes.string,
  loaded: React.PropTypes.bool,
  editing: React.PropTypes.bool,
  geoip: React.PropTypes.bool,
  forecast: React.PropTypes.object,
  conditions: React.PropTypes.object,
  onRemoveAction: React.PropTypes.func,
  onEditing: React.PropTypes.func,
  onFetched: React.PropTypes.func,
  onFetchedForecast: React.PropTypes.func,
  onFetchedCondition: React.PropTypes.func,
};

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onRemoveAction: (id) => dispatch(removeCity(id)),
    onEditing: ({ i, editing }) => dispatch(editingCity({ i, editing })),
    onFetched: ({i, name, endpoint }) => dispatch(fetchedCity({i, name, endpoint })),
    onFetchedForecast: ({i, forecast}) => dispatch(fetchedCityForescast({i, forecast})),
    onFetchedCondition: ({i, conditions}) => dispatch(fetchedCityCondition({i, conditions})),
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(City);
