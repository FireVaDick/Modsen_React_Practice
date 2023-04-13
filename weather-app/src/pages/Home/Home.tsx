import React, {useEffect} from 'react'
import s from './Home.module.scss'
import { ThisDay } from './components/ThisDay/ThisDay'
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo'
import { Days } from './components/Days/Days'
import { useCustomDispatch, useCustomSelector } from '../../hooks/store'


interface Props {
}

export const Home = (props: Props) => {


  const {weather} = useCustomSelector((state) => state.
  currentWeatherSliceReducer)

  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay weather={weather}/>
        <ThisDayInfo weather={weather}/>
      </div>
      <Days weather={weather}/>
    </div>
  )
}