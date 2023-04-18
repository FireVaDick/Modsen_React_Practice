import s from './Header.module.scss'
import { GlobalSvgSelector } from './../../assets/icons/global/GlobalSvgSelector'
import { useTheme } from './../../hooks/useTheme'
import { Theme } from './../../context/ThemeContext'
import { useEffect, useState } from 'react'

interface Props {
  city: {q: string},
  setCity: any,
}

export const Header = ({city, setCity}: Props) => {
  const theme = useTheme();

  const [location, setLocation]= useState("Могилёв");

  function changeTheme() {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT )
  }

  const searchLocation = (event: any) => {
    if(event.key === 'Enter' && location !== '') {
      setCity({q: location});
      console.log("new city: " + location)
    }
  }

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id='header-logo'/>
        </div>
        <div className={s.title}>
          Приложение прогноза погоды
        </div>
      </div>

      <div className={s.wrapper}>
        <input 
        value={location}
        type="text" 
        placeholder='Введите город'
        onKeyPress={searchLocation}
        onChange={e => 
          setLocation(e.currentTarget.value)}/>  
        <div className={s.change_theme} onClick={changeTheme}>
          <GlobalSvgSelector id='header-change_theme'/>
        </div>
      </div>  
    </header>
  )
}