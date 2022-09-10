import { Notify } from 'notiflix/build/notiflix-notify-aio';
export async function fetchCountries(country) {
  const BASE_URL = 'https://restcountries.com/v2/name/';
  const filtersCountries = '?fields=flag,capital,name,population,languages';
  try {
    const data = await fetch(`${BASE_URL}${country}${filtersCountries}`);
    if (!data.ok) {
      throw new Error(
        Notify.failure('Oops, there is no country with that name')
      );
    }
    return await data.json();
  } catch (err) {
    return console.error(err);
  }
}
