import axios, { AxiosResponse } from "axios"
import { Weather } from "../Interfaces/Interfaces";
import { DateTime } from "luxon";

const API_KEY = "53a5e9a45bfbcc7c2d9cd91153e3c982"
const CURRENT_URL = "https://api.openweathermap.org/data/2.5"
const DAILY_HOURLY_URL = "https://api.open-meteo.com/v1"

const getCurrentWeatherData = (infoType, searchParams) => {
  const url = new URL(CURRENT_URL + '/' + infoType);
  url.search = new URLSearchParams({...searchParams, lang: "ru", units:"metric", appid: API_KEY});

  console.log("url current " + url)

  return fetch(url)
    .then((res) => res.json())
};

const getDailyHourlyWeatherData = (infoType, searchParams) => {
  const url = new URL(DAILY_HOURLY_URL + '/' + infoType);
  url.search = new URLSearchParams({...searchParams});

  console.log("url daily hourly " + url)

  return fetch(url)
    .then((res) => res.json())
};

const formatCurrentWeather = (data) => {
  const {
    coord: {lat, lon},
    main: {temp, feels_like, temp_min, temp_max, pressure, humidity},
    name,
    dt,
    sys: {country, sunrise, sunset},
    weather,
    wind: {speed, deg}
  } = data;

  const {main: details, description: description} = weather[0];

  return {lat, lon, temp, feels_like, temp_min, temp_max, pressure, humidity, 
    name, dt, country, sunrise, sunset, details, description, speed, deg}
}

const formatForecastWeather = (data) => {
  let {daily, hourly} = data;
  return { daily, hourly };
}

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getCurrentWeatherData(
    'weather', 
    searchParams)
    .then(formatCurrentWeather);

  const latitude = formattedCurrentWeather.lat;
  const longitude = formattedCurrentWeather.lon;

  console.log("{lat, lon}  " + latitude + "  " + longitude );

  const formattedForecastWeather = await getDailyHourlyWeatherData(
    'forecast',
    {
      latitude, 
      longitude, 
      hourly: "temperature_2m,relativehumidity_2m,windspeed_10m,weathercode",
      daily: "weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max,windspeed_10m_max",
      windspeed_unit: "ms",
      timezone: "Europe/Moscow"
    }
  ).then(formatForecastWeather);

  return {...formattedCurrentWeather, ...formattedForecastWeather};
}

// const formatToLocalTime = (secs, zone, format = 
//   "cccc, dd LLL yyyy' | Local time: ' hh:mm a") => 
//   DateTime.fromSeconds(secs).setZone(zone).toFormat(format);



export default getFormattedWeatherData;