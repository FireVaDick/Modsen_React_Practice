import React, {useState} from 'react'
import s from './Home.module.scss'
import { ThisDay } from './../../components/ThisDay/ThisDay'
import { ThisDayInfo } from './../../components/ThisDayInfo/ThisDayInfo'
import { Days } from './../../components/Days/Days'
import { useCustomDispatch, useCustomSelector } from '../../hooks/store'

export interface Props {
  popupActive: boolean,
  setPopupActive: any
}

export const Home: React.FC<Props> = ({popupActive, setPopupActive}: Props) => {
  const {weather} = useCustomSelector((state) => state.
  currentWeatherSliceReducer)

  return (
    <>
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay weather={weather}/>
        <ThisDayInfo weather={weather}/>
      </div>
      <Days weather={weather} popupActive={popupActive} setPopupActive={setPopupActive}/>
    </div>
    </>
  )
}