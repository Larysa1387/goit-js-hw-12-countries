var debounce = require('lodash.debounce');
import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import countryCardTpl from '../templates/country-card.hbs';
import countryListTpl from '../templates/country-list.hbs';

import API from './fetchCountries.js';
import getRefs from './get-refs.js';

const refs = getRefs();

refs.input.addEventListener('input', debounce(onInputSearch, 500));

function onInputSearch(e) {
  e.preventDefault();
  refs.countryContainer.innerHTML = '';
  const searchQuery = e.target.value;

  if (searchQuery.length < 1) {
    return;
  }

  API.fetchCountries(searchQuery)
    .then(createPageMarkup)
    .catch(onFetchError);

  console.log('you can do it! after 500ms');
}

function createPageMarkup(country) {
  if (country.length === 1) {
    appendCountryMarkup(country);
  } else if (country.length >= 2 && country.length < 10) {
    appendListMarkup(country);
    console.log('its me');
  } else if (country.length > 10) {
    error({
      title: 'Too many matches found. Please enter a more specific query!',
      delay: 2000,
    });
  }
}

function appendCountryMarkup(country) {
  const markup = countryCardTpl(country);
  refs.countryContainer.insertAdjacentHTML('beforeend', markup);
}

function appendListMarkup(country) {
  const markup = countryListTpl(country);
  refs.countryContainer.insertAdjacentHTML('beforeend', markup);
}

function onFetchError() {
  alert('Sorry, try once more');
}

export default { onFetchError };
