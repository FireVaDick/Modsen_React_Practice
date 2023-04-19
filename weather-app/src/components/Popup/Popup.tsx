import React from 'react'
import s from './Popup.module.scss'
import { GlobalSvgSelector } from './../../assets/icons/global/GlobalSvgSelector'
import { IDay, IHour, IItem, IWeather } from '../../Interfaces/Interfaces'
import { Hour } from './Hour'

interface Props {
  weather: any,
  popupActive: boolean,
  setPopupActive: any
}

export const Popup = ({weather, popupActive, setPopupActive}: Props) => {
  const items = [
    {
      icon_id: 'temperature',
      name: 'Температура',
      value: '20° - ощущается как 17°',
    },
    {
      icon_id: 'pressure',
      name: 'Давление',
      value: '765 мм ртутного столба - нормальное',
    },
    {
      icon_id: 'precipitation',
      name: 'Осадки',
      value: 'Без осадков',
    },
    {
      icon_id: 'wind',
      name: 'Ветер',
      value: '3 м/с юго-запад - легкий ветер',
    },
  ];

  console.log("active: " + popupActive)
  var now = new Date();

  if (weather != null) {
    // const hours: IHour[] = [
    //   {
    //     time: `${weather.hourly.time[0]}`,
    //     temp: `${weather.hourly.temperature_2m[0]}`,
    //     humidity: `${weather.hourly.relativehumidity_2m[0]}`,
    //     speed: `${weather.hourly.windspeed_10m[0]}°`,
    //   },
    // ];

    var hours: IHour[] = [];
    for (var i = 0; i < 24; i++)
      hours.push({
        time: `${weather.hourly.time[i]}`,
        icon_id: `${weather.hourly.weathercode[i]}`,
        temp: `${weather.hourly.temperature_2m[i]}`,
        humidity: `${weather.hourly.relativehumidity_2m[i]}`,
        speed: `${weather.hourly.windspeed_10m[i]}`,
      });

    return (
      <div className={popupActive ? s.popupActive : s.popup}>
        <div className={s.content}>

          <div className={s.hours}>
          {hours.map((somehour: IHour) => (
            <Hour weather={weather} somehour={somehour} key={somehour.time}/>
          ))}
          </div>

          <div className={s.close} onClick={() => setPopupActive(false)}>
            <GlobalSvgSelector id='close'/>
          </div>
        </div>
      </div>
    )
  }
}