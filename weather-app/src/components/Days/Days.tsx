import React from 'react'
import s from './Days.module.scss'
import { Card } from './Card';
import { IDay, IWeather } from '../../Interfaces/Interfaces';

interface Props {
  weather: IWeather
  popupActive: boolean,
  setPopupActive: any
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

  // const days: IDay[] = [
  //   {
  //     day: 'Сегодня',
  //     date: `${getNextDate(now, 0)}`,
  //     icon_id: `${weather.daily.weathercode[0]}`,
  //     temp_max: `${Math.round(weather.daily.temperature_2m_max[0])}`,
  //     temp_min: `${Math.round(weather.daily.temperature_2m_min[0])}`,
  //     precipitation_prob: `${weather.daily.precipitation_probability_max[0]}`,
  //     windspeed_max: `${weather.daily.windspeed_10m_max[0]}`,
  //   },
  //   {
  //     day: 'Завтра',
  //     date: `${getNextDate(now, 1)}`,
  //     icon_id: `${weather.daily.weathercode[1]}`,
  //     temp_max: `${Math.round(weather.daily.temperature_2m_max[1])}`,
  //     temp_min: `${Math.round(weather.daily.temperature_2m_min[1])}`,
  //     precipitation_prob: `${weather.daily.precipitation_probability_max[1]}`,
  //     windspeed_max: `${weather.daily.windspeed_10m_max[1]}`,
  //   },
  //   {
  //     day: `${getWeekDay(now, 2)}`,
  //     date: `${getNextDate(now, 2)}`,
  //     icon_id: `${weather.daily.weathercode[2]}`,
  //     temp_max: `${Math.round(weather.daily.temperature_2m_max[2])}`,
  //     temp_min: `${Math.round(weather.daily.temperature_2m_min[2])}`,
  //     precipitation_prob: `${weather.daily.precipitation_probability_max[2]}`,
  //     windspeed_max: `${weather.daily.windspeed_10m_max[2]}`,
  //   },
  //   {
  //     day: `${getWeekDay(now, 3)}`,
  //     date: `${getNextDate(now, 3)}`,
  //     icon_id: `${weather.daily.weathercode[3]}`,
  //     temp_max: `${Math.round(weather.daily.temperature_2m_max[3])}`,
  //     temp_min: `${Math.round(weather.daily.temperature_2m_min[3])}`,
  //     precipitation_prob: `${weather.daily.precipitation_probability_max[3]}`,
  //     windspeed_max: `${weather.daily.windspeed_10m_max[3]}`,
  //   },
  //   {
  //     day: `${getWeekDay(now, 4)}`,
  //     date: `${getNextDate(now, 4)}`,
  //     icon_id: `${weather.daily.weathercode[4]}`,
  //     temp_max: `${Math.round(weather.daily.temperature_2m_max[4])}`,
  //     temp_min: `${Math.round(weather.daily.temperature_2m_min[4])}`,
  //     precipitation_prob: `${weather.daily.precipitation_probability_max[4]}`,
  //     windspeed_max: `${weather.daily.windspeed_10m_max[4]}`,
  //   },
  //   {
  //     day: `${getWeekDay(now, 5)}`,
  //     date: `${getNextDate(now, 5)}`,
  //     icon_id: `${weather.daily.weathercode[5]}`,
  //     temp_max: `${Math.round(weather.daily.temperature_2m_max[5])}`,
  //     temp_min: `${Math.round(weather.daily.temperature_2m_min[5])}`,
  //     precipitation_prob: `${weather.daily.precipitation_probability_max[5]}`,
  //     windspeed_max: `${weather.daily.windspeed_10m_max[5]}`,
  //   },
  //   {
  //     day: `${getWeekDay(now, 6)}`,
  //     date: `${getNextDate(now, 6)}`,
  //     icon_id: `${weather.daily.weathercode[6]}`,
  //     temp_max: `${Math.round(weather.daily.temperature_2m_max[6])}`,
  //     temp_min: `${Math.round(weather.daily.temperature_2m_min[6])}`,
  //     precipitation_prob: `${weather.daily.precipitation_probability_max[6]}`,
  //     windspeed_max: `${weather.daily.windspeed_10m_max[6]}`,
  //   },
  // ];
  
  var days: IDay[] = [];
  for (var i = 0; i < 7; i++)
    days.push({
      day: `${getWeekDay(now, i)}`,
      date: `${getNextDate(now, i)}`,
      icon_id: `${weather.daily.weathercode[i]}`,
      temp_max: `${Math.round(weather.daily.temperature_2m_max[i])}`,
      temp_min: `${Math.round(weather.daily.temperature_2m_min[i])}`,
      precipitation_prob: `${weather.daily.precipitation_probability_max[i]}`,
      windspeed_max: `${weather.daily.windspeed_10m_max[i]}`,
    });

  days[0].day = 'Сегодня';
  days[1].day = 'Завтра';


  return (
    <>
    {/* <Tabs/> */}
    <div className={s.days}>
      {days.map((someday: IDay) => (
        <Card weather={weather} someday={someday} key={someday.day} popupActive={popupActive} setPopupActive={setPopupActive}/>
      ))}
    </div>
    </>
  )
}