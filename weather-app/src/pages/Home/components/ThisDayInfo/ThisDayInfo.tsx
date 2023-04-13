import React from 'react'
import s from './ThisDayInfo.module.scss'
import clouds from '../../../../assets/images/Clouds.png'
import { ThisDayItem } from './ThisDayItem'
import { Weather } from '../../../../store/types/types'

interface Props {
  weather: Weather
}

export interface Item {
  icon_id: string,
  name: string,
  value: string
}

export const ThisDayInfo = ({weather}: Props) => {
  const items = [
    {
      icon_id: 'temperature',
      name: 'Температура',
      value: `${weather.main.temp}° - ощущается как ${weather.main.feels_like}°`,
    },
    {
      icon_id: 'pressure',
      name: 'Давление',
      value: `${Math.round(weather.main.pressure / 1.333)} мм ртутного столба`,
    },
    {
      icon_id: 'humidity',
      name: 'Влажность',
      value: `${weather.main.humidity}%`,
    },
    {
      icon_id: 'wind',
      name: 'Ветер',
      value: `${weather.wind.speed} м/с, направление ${weather.wind.deg}°`,
    },
  ];

  return (
    <div className={s.this__day_info}>
      <div className={s.this__day_info_items}>
        {items.map((item: Item) => (
          <ThisDayItem key={item.icon_id} item={item}/>
        ))}
      </div>
      <img className={s.clouds__img } src={clouds} alt='Облака'/>
    </div>
  )
}