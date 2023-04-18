import React from 'react'
import s from './Popup.module.scss'
import { GlobalSvgSelector } from './../../assets/icons/global/GlobalSvgSelector'
import { IHour, IWeather } from '../../Interfaces/Interfaces'

interface Props {
  weather: IWeather,
  somehour: IHour,
}

export const Hour: React.FC<Props> = ({weather, somehour}: Props) => {
  const {time, icon_id, temp, humidity, speed} = somehour;
  
  return (
    <div className={s.card}>
      <div className={s.icon_id}>
        {/* <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/> */}
        <GlobalSvgSelector id={icon_id}/>    
      </div>
      <div className={s.time}>
        {time}
      </div>
      <div className={s.temp}>
        Температура: {temp}°
      </div>
      <div className={s.humidity}>
        Влажность: {humidity}%
      </div>
      <div className={s.speed}>
        Ветер: {speed} м/c
      </div>

    </div>
  )
}
