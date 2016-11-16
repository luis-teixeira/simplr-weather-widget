export const getOptions = (input) => {
  //http://autocomplete.wunderground.com/aq?query=
  return fetch(`http://autocomplete.wunderground.com/aq?query=${input}`)
    .then((response) => {
      return response.json();
    }).then((json) => {
      return { options: json.RESULTS };
    });
};

export const getConditions = (endpoint) => {
  return fetch(`http://api.wunderground.com/api/0ad35cadfb241898/conditions${endpoint}.json`)
    .then((response) => {
      return response.json();
    }).then((json) => {
      return { ...json };
    });
};

export const getForecast = (endpoint) => {
  return fetch(`http://api.wunderground.com/api/0ad35cadfb241898/forecast${endpoint}.json`)
    .then((response) => {
      return response.json();
    }).then((json) => {
      return { ...json };
    });
};

export const getGeoIp = () => {
  return fetch(`http://api.wunderground.com/api/0ad35cadfb241898/geolookup/q/autoip.json`)
    .then((response) => {
      return response.json();
    }).then((json) => {
      return { ...json };
    });
};
