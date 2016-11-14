import {
  ADD_CITY,
  REMOVE_CITY,
  FETCHED_CITY,
  EDITING_CITY,
  FETCH_FORESCAST_SUCCESS,
  FETCH_CONDICTION_SUCCESS,
} from './constants';

// succinct hack for generating passable unique ids
const uid = () => Math.random().toString(34).slice(2);
/**
 *
 * @return {object} An action object with a type of ADD_CITY
 */
export function addCity() {
  return {
    type: ADD_CITY,
    id: uid(),
  };
}

/**
 *
 * @return {object} An action object with a type of DEFAULT
 */
export function fetchedCity({i, name, endpoint }) {
  return {
    type: FETCHED_CITY,
    i,
    name,
    endpoint
  };
}

/**
 * @param  {id} id for a card created
 * @return {object} An action object with a type of REMOVE_CITY
 */
export function removeCity(id) {
  return {
    type: REMOVE_CITY,
    id,
  };
}

/**
 * @param  {id} id for a card created
 * @return {object} An action object with a type of FETCH_FORESCAST_SUCCESS
 */
export function fetchedCityForescast({ i, forecast } ) {
  return {
    type: FETCH_FORESCAST_SUCCESS,
    i,
    forecast,
  };
}

/**
 * @param  {id} id for a card created
 * @return {object} An action object with a type of FETCH_CONDICTION_SUCCESS
 */
export function fetchedCityCondition({ i, conditions } ) {
  return {
    type: FETCH_CONDICTION_SUCCESS,
    i,
    conditions,
  };
}



/**
 * @param  {id} id for a card created
 * @return {object} An action object with a type of EDITING_CITY
 */
export function editingCity({ i, editing } ) {
  return {
    type: EDITING_CITY,
    i,
    editing,
  };
}
