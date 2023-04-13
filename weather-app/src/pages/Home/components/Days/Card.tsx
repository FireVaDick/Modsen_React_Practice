import React from 'react'
import s from './Days.module.scss'
import { Day } from './Days'
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector'
import { Weather } from '../../../../store/types/types'

interface Props {
  weather: Weather,
  someday: Day
}

export const Card = ({weather, someday}: Props) => {
  const {day, date, icon_id, temp_max, temp_min, weather_info} = someday;
  
  return (
    <div className={s.card}>
      <div className={s.day}>
        {day}
      </div>
      <div className={s.date}>
        {date}
      </div>

      <div className={s.wrapper}>
        <div>
          <div className={s.temp_max}>
            Макс: {temp_max}
          </div>
          <div className={s.temp_min}>
            Мин: {temp_min}
          </div>
        </div>

        <div className={s.icon_id}>
          {/* <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/> */}
          <GlobalSvgSelector id={icon_id}/>    
        </div>
      </div>    

      <div className={s.weather_info}>
        {weather_info}
      </div>
    </div>
  )
}
