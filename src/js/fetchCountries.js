import { onFetchError } from './input-script.js';

const BASE_URL = 'https://restcountries.eu/rest/v2';

function fetchCountries(searchQuery) {
  const url = `${BASE_URL}/name/${searchQuery}`;
  // if (response.ok) return response.json();
  return fetch(url).then(response => {
    if (response.ok) return response.json();
    onFetchError();
  });
};

export default { fetchCountries };
