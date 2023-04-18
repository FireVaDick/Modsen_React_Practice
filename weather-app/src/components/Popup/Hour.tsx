import React from 'react'
import s from './Popup.module.scss'
import { GlobalSvgSelector } from './../../assets/icons/global/GlobalSvgSelector'
import { IHour, IWeather } from '../../Interfaces/Interfaces'

interface Props {
  weather: IWeather,
  somehour: IHour,
}

export const Hour: React.FC<Props> = ({weather, somehour}: Props) => {
  const {time, temp, humidity, speed} = somehour;
  
  return (
    <div className={s.card}>
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
        Скорость ветра: {speed} м/c
      </div>
    </div>
  )
}
