var debounce = require('lodash.debounce');
// import countryCardTpl from '../templates/country-card.hbs';
import fetchCountries from './fetchCountries.js';

const input = document.querySelector('#validation-input');
// const countryContainer = document.querySelector('.country-container')

input.addEventListener('input', debounce(onInputSearch, 500));

function onInputSearch(e) {
  e.preventDefault();
  // countryContainer.innerHTML = '';
  const searchText = e.currentTarget;
  const searchQuery = searchText.elements.query.value;
  fetchCountries(searchQuery).then(appendCountryMarkup).catch(error => console.log(error));
  // const filteredCountry = searchText === '' ? countries : countries.filter(country => country.toLowerCase().includes(searchText.toLowerCase()));

  console.log('you can do it! after 500ms');
}
