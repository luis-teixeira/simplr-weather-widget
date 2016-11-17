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
  getOptions,
  getConditions,
  getForecast,
  getGeoIp,
} from 'api/Wunderground';

import {
  removeCity,
  editingCity,
  fetchedCity,
  fetchedCityForescast,
  fetchedCityCondition,
  errorC,
  errorF,
} from 'containers/App/actions';



export class City extends React.Component { // eslint-disable-line react/prefer-stateless-function

  onChange = (value) => {
    this.fetchAllData(value);
  }

  onGeoIp = () => {
    getGeoIp().then( json => {
      if(!json.response.error) {
        this.fetchAllData({l:json.location.l, name: json.location.city+', '+ json.location.country_name});
      } else {
        // this.props.onErrorF(this.props.index);
        this.props.onErrorC(index);
        console.log( json.response.error.description );
        alert('error fetching geiIP! I have reached the wunderground API Call Limit :( ' + json.response.error.description);
      }
    });
  }

  onClickDelete = () => (
    this.props.onRemoveAction(this.props.id)
  )

  onEditing = () => {
    this.props.onEditing({ i: this.props.index, editing: !this.props.editing });
  }

  fetchAllData = (value) => {

    this.props.onFetched({i: this.props.index, name: value.name, endpoint: value.l });

    getConditions(value.l).then( json => {
        const { index } = this.props;
      //console.log('c ', json );
        if(!json.response.error) {
          this.props.onFetchedCondition({i:index, conditions:json.current_observation})
        } else {
          this.props.onErrorC(index);
          console.log( json.response.error.description );
          alert('error fetching conditions! I have reached the wunderground API Call Limit :( ' + json.response.error.description);
        }
    }).then(getForecast(value.l).then(json => {
        const { index } = this.props;

        if(!json.response.error) {
          this.props.onFetchedForecast({i:index, forecast:json})
        } else {
          this.props.onErrorF(index);
          console.log( json.response.error.description );
          alert('error fetching forecast! I have reached the wunderground API Call Limit :( ' + json.response.error.description);
        }
    }))
  }


  componentDidMount(){
    const { geoip, cached, name, endpoint } = this.props;
    if(geoip) { this.onGeoIp() };
    if(cached) { this.fetchAllData( {name: name, l: endpoint}) };
  }

  render() {
    const {index, id, name, loaded, geoip, forecast, conditions, editing, endpoint } = this.props;

    let mainContent = (!forecast && !conditions) ? (<NoForecast />) : (<Loading />);
    let auxContente = (forecast) ? (<CitysForecast forescast={forecast.forecast.simpleforecast.forecastday} />) : (<div></div>);

    if( forecast && conditions) {
      mainContent = (<CitysInfoToday  {...forecast} {...conditions} />);
    }

    return(
      <div className={`${styles.wwCard} weather-widget--card`}>
        {!editing && (<input className={`${styles.select} weather-widget--search`} onFocus={this.onEditing} type="text" defaultValue={name} />)}
        {editing && (<Select.Async className={` ${styles.select} ${styles.selectCitys}`}
            value={endpoint}
            loadOptions={getOptions}
            onChange={this.onChange}
            labelKey="name"
            valueKey="l"
            onBlur={this.onEditing}
            // onValueClick={this.getForecast}
          />
        )}

        {editing && (
          <button onClick={this.onGeoIp} className={`${styles.btnClose} ${styles.btnGeoip} btn-geoip--city`} >
            <img src={local}  alt="geoip" />
          </button>
        )}

        <button onClick={this.onClickDelete} className={`${styles.btnClose} btn-delete--city`} >
          <img src={remove}  alt="remove more" />
        </button>

        {mainContent}
        {auxContente}
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
  onGeoIp: React.PropTypes.func,
  onError: React.PropTypes.func,
};

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onRemoveAction: (id) => dispatch(removeCity(id)),
    onEditing: ({ i, editing }) => dispatch(editingCity({ i, editing })),
    onFetched: ({i, name, endpoint }) => dispatch(fetchedCity({i, name, endpoint })),
    onFetchedForecast: ({i, forecast}) => dispatch(fetchedCityForescast({i, forecast})),
    onFetchedCondition: ({i, conditions}) => dispatch(fetchedCityCondition({i, conditions})),
    onErrorC: (i) => dispatch(errorC(i)),
    onErrorF: (i) => dispatch(errorF(i)),

    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(City);
