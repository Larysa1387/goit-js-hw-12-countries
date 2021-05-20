var debounce = require('lodash.debounce');
// import countryCardTpl from '../templates/country-card.hbs';

const input = document.querySelector('#validation-input');
const countryContainer = document.querySelector('.country-container')


function onInputSearch(e) {
  // countryContainer.innerHTML = '';
  const searchText = e.currentTarget.value;
  const filteredCountry = searchText === '' ? countries : countries.filter(country => country.toLowerCase().includes(searchText.toLowerCase()));

  console.log('you can do it! after 500ms');
}

input.addEventListener('input', debounce(onInputSearch, 500));

function appendCountryMarkup() {
  countryContainer.insertAdjacentHTML('beforeend', countryCardTpl(countries))
}
