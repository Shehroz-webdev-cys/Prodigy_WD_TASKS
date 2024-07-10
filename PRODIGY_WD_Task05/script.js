const inputbox = document.querySelector('.searchinput');
const search_btn = document.getElementById('search-btn');
const City_name = document.getElementById('cityname');
const weather_image = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const title = document.querySelector('.title');
const description = document.querySelector('.description');
const humidity = document.getElementById('humi-dity');
const wind_speed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');
const weather_content = document.querySelector('.weather-content');


async function checkWeather(city) {
    const api_key = "813bdf6ac51d12f579e21b0552e460af";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then((response) => response.json());
    console.log(weather_data);
    if (weather_data.cod === `404`) {
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        weather_content.style.display = "none";
        console.log("error");
        return;
    }
    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    weather_content.style.display = "flex";
    City_name.innerHTML = `${city}`;
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}<sup>°C</sup>`;
    title.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weather_image.src = "Assets/cloud.png";
            description.innerHTML = `Every cloud has a silver lining.`;
            break;
        case 'Clear':
            weather_image.src = "Assets/clear.png";
            description.innerHTML = `Clarity is the light that reveals the path ahead`;
            break;
        case 'Rain':
            weather_image.src = "Assets/rain.png";
            description.innerHTML = `A rainy day is the perfect time for a walk in the woods.`;
            break;
        case 'Mist':
            weather_image.src = "Assets/mist.png";
            description.innerHTML = `Lost in the mist, finding clarity.`;
            break;
        case 'Snow':
            weather_image.src = "Assets/snow.png";
            description.innerHTML = `Snowflakes are winter's butterflies.`;
            break;
        case 'Haze':
            weather_image.src = "Assets/clear.png";
            break;

    }
}
search_btn.addEventListener('click' , () => {
    checkWeather(inputbox.value);
});
