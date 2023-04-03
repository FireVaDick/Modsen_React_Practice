import React from 'react'
import s from './Days.module.scss'
import { Day } from './Days'
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector'

interface Props {
  someday: Day
}

export const Card = ({someday}: Props) => {
  const {day, date, icon_id, temp_day, temp_night, weather_info} = someday;
  
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
          <div className={s.temp_day}>
            Днём: {temp_day}
          </div>
          <div className={s.temp_night}>
            Ночью: {temp_night}
          </div>
        </div>

        <div className={s.icon_id}>
          <GlobalSvgSelector id={icon_id}/>    
        </div>
      </div>    

      <div className={s.weather_info}>
        {weather_info}
      </div>
    </div>
  )
}
