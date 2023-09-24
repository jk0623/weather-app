import weathers from "./weather";


class DataSearch {
  static searchWeather(keyword) {
    return new Promise((resolve, reject) => {
      if (!keyword || keyword.trim() === "") {
        reject("Please enter a city name");
      } else {
        const searchFilter = weathers.filter(weather =>
          weather.city.toUpperCase().includes(keyword.toUpperCase())
        );

        if (searchFilter.length) {
          resolve(searchFilter);
        } else {
          reject(`${keyword} is not found`);
        }
      }
    });
  }
}

export default DataSearch;


