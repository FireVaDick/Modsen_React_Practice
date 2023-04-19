import React from 'react'
import s from './ThisDayInfo.module.scss'
import clouds from './../../assets/images/Clouds.png'
import { ThisDayItem } from './ThisDayItem'
import { IItem, IWeather } from '../../Interfaces/Interfaces'

interface Props {
  weather: IWeather
}

export const ThisDayInfo = ({weather}: Props) => {
  const items = [
    {
      icon_id: 'temperature',
      name: 'Температура',
      value: `${weather.temp}° - ощущается как ${weather.feels_like}°`,
    },
    {
      icon_id: 'pressure',
      name: 'Давление',
      value: `${Math.round(weather.pressure / 1.333)} мм ртутного столба`,
    },
    {
      icon_id: 'humidity',
      name: 'Влажность',
      value: `${weather.humidity}%`,
    },
    {
      icon_id: 'wind',
      name: 'Ветер',
      value: `${weather.speed} м/с, направление ${weather.deg}°`,
    },
  ];

  return (
    <div className={s.this__day_info}>
      <div className={s.this__day_info_items}>
        {items.map((item: IItem) => (
          <ThisDayItem key={item.icon_id} item={item}/>
        ))}
      </div>
      <img className={s.clouds__img } src={clouds} alt='Облака'/>
    </div>
  )
}