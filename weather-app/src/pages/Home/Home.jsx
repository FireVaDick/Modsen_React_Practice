import React, { useState, useEffect } from 'react'
import s from './Home.module.scss'
import { ThisDay } from '../../components/ThisDay/ThisDay'
import { ThisDayInfo } from '../../components/ThisDayInfo/ThisDayInfo'
import { Days } from '../../components/Days/Days'
import getFormattedWeatherData from '../../services/WeatherService'


export const Home = ({city, popupActive, setPopupActive}) => {
  const [weather, setWeather] = useState(null);
  
  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({...city}).then((data) => {
          setWeather(data);
        });
      console.log("city with weather");
      console.log(city);
    }
    
    fetchWeather();
  }, [city])

  if (weather != null) {
    // console.log("weather " + weather)
    // console.log("weather.lat " + weather.lat)
    // console.log("weather.lon " + weather.lon)
    // console.log("weather.temp " + weather.temp)
    // console.log("weather.feels_like " + weather.feels_like)
    // console.log("weather.temp_min " + weather.temp_min)
    // console.log("weather.temp_max " + weather.temp_max)
    // console.log("weather.humidity " + weather.humidity)
    // console.log("weather.name " + weather.name)
    // console.log("weather.dt " + weather.dt)
    // console.log("weather.country " + weather.country)
    // console.log("weather.sunrise " + weather.sunrise)
    // console.log("weather.sunset " + weather.sunset)
    // console.log("weather.details " + weather.details)
    // console.log("weather.description " + weather.description)
    // console.log("weather.speed " + weather.speed)
    // console.log("weather.deg " + weather.deg)

    return (
      <>
      <div className={s.home}>
        <div className={s.wrapper}>
          <ThisDay weather={weather}/>
          <ThisDayInfo weather={weather}/>
        </div>
        <Days weather={weather} popupActive={popupActive} setPopupActive={setPopupActive}/>
      </div>
      </>
    )
  } else return <></>;
}