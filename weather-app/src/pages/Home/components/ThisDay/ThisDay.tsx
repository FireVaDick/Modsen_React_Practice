import React from 'react'
import s from './ThisDay.module.scss'
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector'

interface Props {
}

export const ThisDay = (props: Props) => {
  return (
    <header className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_wrapper}>
          <div className={s.this__temperature}>
            15°
          </div>
          <div className={s.this__day_day}>
            Сегодня
          </div>
        </div>
        <GlobalSvgSelector id='sun'/>
      </div>
      <div className={s.bottom__block}>
        <div className={s.this__time}>
          Время: <span>10:50</span>
        </div>
        <div className={s.this__city}>
          Город: <span>Могилёв</span>
        </div>
      </div>
    </header>
  )
}