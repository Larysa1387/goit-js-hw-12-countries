// export default fetchCountries(searchQuery)

// Есть файл fetchCountries.js с дефолтным экспортом функции fetchCountries(searchQuery),
//   возвращающей промис с массивом стран, результат запроса к API.

import countryCardTpl from '../templates/country-card.hbs';

const f = fetch('https://restcountries.eu/rest/v2/all').then(r =>
  r.json()).then(country => {
    const markup = countryCardTpl(country)
    console.log(markup);
  })
  .catch(error =>
    console.log(error));
// console.log(f);
