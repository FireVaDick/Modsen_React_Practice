import React from 'react'
import s from './Days.module.scss'
import { Card } from './Card';

interface Props {
}

export interface Day {
  day: string,
  date: string,
  icon_id: string,
  temp_day: string,
  temp_night: string,
  weather_info: string
}

export const Days = (props: Props) => {
  const days: Day[] = [
    {
      day: 'Сегодня',
      date: '28 авг',
      icon_id: 'sun',
      temp_day: '+18',
      temp_night: '+15',
      weather_info: 'Солнечно',
    },
    {
      day: 'Завтра',
      date: '29 авг',
      icon_id: 'small_rain_sun',
      temp_day: '+18',
      temp_night: '+15',
      weather_info: 'Небольшой дождь и солнце',
    },
    {
      day: 'Среда',
      date: '30 авг',
      icon_id: 'small_rain',
      temp_day: '+18',
      temp_night: '+15',
      weather_info: 'Небольшой дождь',
    },
    {
      day: 'Четверг',
      date: '28 авг',
      icon_id: 'mainly_cloudy',
      temp_day: '+18',
      temp_night: '+15',
      weather_info: 'Облачно',
    },
    {
      day: 'Пятница',
      date: '28 авг',
      icon_id: 'rain',
      temp_day: '+18',
      temp_night: '+15',
      weather_info: 'Дождь',
    },
    {
      day: 'Суббота',
      date: '28 авг',
      icon_id: 'sun',
      temp_day: '+18',
      temp_night: '+15',
      weather_info: 'Солнечно',
    },
    {
      day: 'Воскресенье',
      date: '28 авг',
      icon_id: 'rain',
      temp_day: '+18',
      temp_night: '+15',
      weather_info: 'Гроза',
    },
  ];
  
  return (
    <div className={s.days}>
      {days.map((someday: Day) => (
        <Card someday={someday}/>
      ))}
    </div>
  )
}