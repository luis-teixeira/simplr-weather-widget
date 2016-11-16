import {
  ADD_CITY,
  REMOVE_CITY,
  FETCHED_CITY,
  EDITING_CITY,
  FETCH_FORESCAST_SUCCESS,
  FETCH_CONDICTION_SUCCESS,
  ERROR_C,
  ERROR_F,
} from './constants';

import { fromJS, Map, Record } from 'immutable';

export const citySchema = new Record({
  id: null,
  name: null,
  endpoint:null,
  loaded: false,
  geoip: false,
  editing: true,
  forecast: null,
  conditions: null,
  error: false,
  cached: false,
});

// The initial state of the App
const initialState = fromJS({
  citys:[new citySchema({
    id: '0',
    geoip: false,
    loaded: false,
    geoip: true,
    cached: false,
  })]
});

// const initialState = fromJS({
//   citys:[]
// });

function appReducer(state = initialState, action) {
  // console.log(action);
  switch (action.type) {
    case ADD_CITY:
      return state
        .set('citys', state.get('citys').push( new citySchema({id:action.id,loaded:false})));
    case FETCHED_CITY:
      return state
        .setIn(['citys', action.i, 'name'], action.name)
        .setIn(['citys', action.i, 'endpoint'], action.endpoint)
        .setIn(['citys', action.i, 'editing'], false)
        .setIn(['citys', action.i, 'loaded'], true)
        .setIn(['citys', action.i, 'cached'], true)
        .setIn(['citys', action.i, 'geoip'], false)
    case FETCH_FORESCAST_SUCCESS:
      return state
        .setIn(['citys', action.i, 'forecast'], action.forecast)
    case FETCH_CONDICTION_SUCCESS:
      return state
        .setIn(['citys', action.i, 'conditions'], action.conditions)
    case EDITING_CITY:
      return state
        .setIn(['citys', action.i, 'editing'], action.editing)
    case REMOVE_CITY:
      return state
        .set('citys', state.get('citys').filter( city => city.get('id') !==  action.id ));
    case ERROR_C:
      return state
        .setIn(['citys', action.i, 'error'], true)
        .setIn(['citys', action.i, 'loaded'], true)
        .setIn(['citys', action.i, 'conditions'], null)
        .setIn(['citys', action.i, 'forecast'], null);
    case ERROR_F:
      return state
        .setIn(['citys', action.i, 'error'], true)
        .setIn(['citys', action.i, 'loaded'], true)
        .setIn(['citys', action.i, 'forecast'], null)
        .setIn(['citys', action.i, 'conditions'], null);

    default:
      return state;
  }
}

export default appReducer;
