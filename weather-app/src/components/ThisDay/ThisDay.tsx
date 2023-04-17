import React from 'react'
import s from './ThisDay.module.scss'
import { GlobalSvgSelector } from './../../assets/icons/global/GlobalSvgSelector'
import { Weather } from '../../Interfaces/Interfaces'

interface Props {
  weather: Weather
}

export const ThisDay = ({weather}: Props) => {
  var now = new Date();

  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temperature}>
            {Math.round(weather.main.temp)}°
          </div>
          <div className={s.this__day_name}>
            Сегодня
          </div>
        </div>
        {/* <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/> */}
        <GlobalSvgSelector id={weather.weather[0].main}/>
      </div>
      <div className={s.bottom__block}>
        <div className={s.this__time}>
          Время: <span>{now.getHours()}:{now.getMinutes()}</span>
        </div>
        <div className={s.this__city}>
          Город: <span>{weather.name}</span>
        </div>
      </div>
    </div>
  )
}