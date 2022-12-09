/* eslint-disable */
const getWeather = async (city, date) => {
    const weather = await((await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&daily=temperature_2m_max,temperature_2m_min&timezone=${city.timezone}&start_date=${date.start}&end_date=${date.end}`)).json());
    console.log(weather);
    return weather
}