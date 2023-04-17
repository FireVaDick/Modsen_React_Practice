import React from 'react'
import s from './Days.module.scss'
import { Card } from './Card';
import { Tabs } from './Tabs';
import { Weather } from '../../Interfaces/Interfaces';

interface Props {
  weather: Weather
  popupActive: boolean,
  setPopupActive: any
}

export interface Day {
  day: string,
  date: string,
  icon_id: string,
  temp_max: string,
  temp_min: string,
  weather_info: string
}

function getWeekDay(date: any, next: number) {
  let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  return date.getDay() + next > 6 ? days[date.getDay() + next - 7] : days[date.getDay() + next];
}

function getNextDate(date: any, next: number) {
  let dateCopy = new Date(date);
  dateCopy.setDate(date.getDate() + next);
  return dateCopy.toLocaleDateString('ru');
}

export const Days: React.FC<Props> = ({weather, popupActive, setPopupActive}: Props) => {
  var now = new Date();

  const days: Day[] = [
    {
      day: 'Сегодня',
      date: `${getNextDate(now, 0)}`,
      icon_id: `${weather.weather[0].main}`,
      temp_max: `${Math.round(weather.main.temp_max)}°`,
      temp_min: `${Math.round(weather.main.temp_min)}°`,
      weather_info: `${weather.weather[0].description}`,
    },
    {
      day: 'Завтра',
      date: `${getNextDate(now, 1)}`,
      icon_id: `${weather.weather[0].main}`,
      temp_max: `${Math.round(weather.main.temp_max)}°`,
      temp_min: `${Math.round(weather.main.temp_min)}°`,
      weather_info: `${weather.weather[0].description}`,
    },
    {
      day: `${getWeekDay(now, 2)}`,
      date: `${getNextDate(now, 2)}`,
      icon_id: `${weather.weather[0].main}`,
      temp_max: `${Math.round(weather.main.temp_max)}°`,
      temp_min: `${Math.round(weather.main.temp_min)}°`,
      weather_info: `${weather.weather[0].description}`,
    },
    {
      day: `${getWeekDay(now, 3)}`,
      date: `${getNextDate(now, 3)}`,
      icon_id: `${weather.weather[0].main}`,
      temp_max: `${Math.round(weather.main.temp_max)}°`,
      temp_min: `${Math.round(weather.main.temp_min)}°`,
      weather_info: `${weather.weather[0].description}`,
    },
    {
      day: `${getWeekDay(now, 4)}`,
      date: `${getNextDate(now, 4)}`,
      icon_id: `${weather.weather[0].main}`,
      temp_max: `${Math.round(weather.main.temp_max)}°`,
      temp_min: `${Math.round(weather.main.temp_min)}°`,
      weather_info: `${weather.weather[0].description}`,
    },
    {
      day: `${getWeekDay(now, 5)}`,
      date: `${getNextDate(now, 5)}`,
      icon_id: `${weather.weather[0].main}`,
      temp_max: `${Math.round(weather.main.temp_max)}°`,
      temp_min: `${Math.round(weather.main.temp_min)}°`,
      weather_info: `${weather.weather[0].description}`,
    },
    {
      day: `${getWeekDay(now, 6)}`,
      date: `${getNextDate(now, 6)}`,
      icon_id: `${weather.weather[0].main}`,
      temp_max: `${Math.round(weather.main.temp_max)}°`,
      temp_min: `${Math.round(weather.main.temp_min)}°`,
      weather_info: `${weather.weather[0].description}`,
    },
  ];
  
  return (
    <>
    {/* <Tabs/> */}
    <div className={s.days}>
      {days.map((someday: Day) => (
        <Card weather={weather} someday={someday} key={someday.day} popupActive={popupActive} setPopupActive={setPopupActive}/>
      ))}
    </div>
    </>
  )
}