import React from 'react'
import s from './Popup.module.scss'
import { GlobalSvgSelector } from './../../assets/icons/global/GlobalSvgSelector'
import { Item } from './../ThisDayInfo/ThisDayInfo'
import { ThisDayItem } from './../ThisDayInfo/ThisDayItem'

interface Props {
  popupActive: boolean,
  setPopupActive: any
}

export const Popup = ({popupActive, setPopupActive}: Props) => {
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

  return (
    <div className={popupActive ? s.popupActive : s.popup}>
      <div className={s.content}>
        <div className={s.day}>
          <div className={s.day__temperature}>
            15°
          </div>
          <div className={s.day__name}>
            Среда
          </div>
          <div className={s.day__icon_id}>
            <GlobalSvgSelector id='sun'/>
          </div>
          <div className={s.day__time}>
            Время: <span>10:50</span>
          </div>
          <div className={s.day__city}>
            Город: <span>Могилёв</span>
          </div>
        </div>

        <div className={s.this__day_info_items}>
          {items.map((item: Item) => (
            <ThisDayItem key={item.icon_id} item={item}/>
          ))}
        </div>
        <div className={s.close} onClick={() => setPopupActive(false)}>
          <GlobalSvgSelector id='close'/>
        </div>
      </div>      
    </div>
  )
}