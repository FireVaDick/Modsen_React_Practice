import React from 'react'
import s from './Days.module.scss'
import { GlobalSvgSelector } from './../../assets/icons/global/GlobalSvgSelector'
import { Day, Weather } from '../../Interfaces/Interfaces'

interface Props {
  weather: Weather,
  someday: Day,
  popupActive: boolean,
  setPopupActive: any
}

export const Card: React.FC<Props> = ({weather, someday, popupActive, setPopupActive}: Props) => {
  const {day, date, icon_id, temp_max, temp_min, precipitation_prob, windspeed_max} = someday;
  
  return (
    <div className={s.card} onClick={() => setPopupActive(true)}>
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

      <div className={s.precipitation_prob}>
        Вероятность осадков: {precipitation_prob}
      </div>
      <div className={s.windspeed_max}>
        Макс скорость ветра: {windspeed_max}
      </div>
    </div>
  )
}
