import './component/search-cont.js';
import DataSearch from "./data-search.js";

const init = () => {
    const searchInput = document.querySelector('search-container');
    const weatherList = document.querySelector('.weatherList');
    

    const onClickSearch = async () => {
        try {
            const result = await DataSearch.searchWeather(searchInput.value);
            resultRender(result);
        } catch (message) {
            fallbackResult(message);
        }
    };

    const resultRender = result => {
        weatherList.innerHTML = '';
        result.forEach(weather => {
            const { city, temp, humidity, wind } = weather;

            const weatherElement = document.createElement('div');
            weatherElement.setAttribute('class', 'weather ');

            weatherElement.innerHTML = `<img src="asset/images/rain.png" class="weather-icon" alt="">
                <h1 class="temp">${temp}°</h1>
                <h2 class="city">${city}</h2>
                <div class="details">
                    <div class="col">
                        <img src="asset/images/humidity.png" alt="">
                        <div>
                            <p class="humidity">${humidity}%</p>
                            <p>Humidity</p>
                        </div>
                    </div>
                    <div class="col">
                        <img src="asset/images/wind.png" alt="">
                        <div>
                            <p class="wind">${wind}</p>
                            <p>Wind</p>
                        </div>
                    </div>
                </div>
            </div>`;
            weatherList.appendChild(weatherElement);
        });
    };

    const fallbackResult = message => {
        weatherList.innerHTML = '';
        weatherList.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }

    searchInput.clickEvent = onClickSearch;

    console.log(weathers);

};

export default init;


