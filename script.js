const search_button = document.getElementById('search');
const input = document.getElementById('city_name');

const cityName = document.getElementById("cityName");
const cityTemp = document.getElementById("city_temp");
const cityTime =  document.getElementById("city_time");

search_button.addEventListener( 'click', async () => {
    const city_value   = input.value;
    const data         = await getWeatherInfo( city_value );
    cityName.innerText = data.location.name;
    cityTemp.innerText = data.current.temp_c;
    cityTime.innerText = data.location.localtime;
})

async function getWeatherInfo( city_value ) {
    let weather_data  = await fetch(`http://api.weatherapi.com/v1/current.json?key=74b9cf5a2f2b437eb2561911252304&q=${city_value}&aqi=yes`);
    return await weather_data.json();
}
