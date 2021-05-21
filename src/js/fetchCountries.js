// export default fetchCountries(searchQuery)

// Есть файл fetchCountries.js с дефолтным экспортом функции fetchCountries(searchQuery),
//   возвращающей промис с массивом стран, результат запроса к API.

import countryCardTpl from '../templates/country-card.hbs';

const countryContainer = document.querySelector('.country-container')

// fetchCountries(eesti).then(appendCountryMarkup).catch(error => console.log(error));

export default function fetchCountries(name) {
  return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(r => {
      return r.json()})
};


function appendCountryMarkup(country) {
  const markup = countryCardTpl(country);
  // countryContainer.innerHTML = markup;
  countryContainer.insertAdjacentHTML('beforeend', markup);
}
