import s from './Header.module.scss'
import { GlobalSvgSelector } from './../../assets/icons/global/GlobalSvgSelector'
import { useTheme } from './../../hooks/useTheme'
import { Theme } from './../../context/ThemeContext'
import { useEffect, useState } from 'react'
import { fetchCurrentWeather } from './../../store/thunks/fetchCurrentWeather'
import { useCustomDispatch } from './../../hooks/store'

interface Props {
}

export const Header = (props: Props) => {
  const theme = useTheme();

  // const options = [
  //   { value: 'city-Mogilev', label: 'Могилёв' },
  //   { value: 'city-Minsk', label: 'Минск' },
  //   { value: 'city-Vitebsk', label: 'Витебск' }
  // ]
  
  // const colorStyles = {
  //   control: (styles: any) => ({
  //     ...styles,
  //     backgroundColor: theme.theme === Theme.DARK ? '#393b41': 'rgba(227, 242, 255, 0.8)',
  //     width: '195px',
  //     height: '40px',
  //     border: 'none',
  //     borderRadius: '10px',
  //     zIndex: 100,
  //   }),
  //   singleValue: (styles: any) => ({
  //     ...styles,
  //     color: theme.theme ===  Theme.DARK ? '#fff': '#000',
  //   })
  // }

  function changeTheme() {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT )
  }

  const [location, setLocation] = useState('Могилёв');
  const dispatch = useCustomDispatch();
  
  //dispatch(fetchCurrentWeather(location))
  console.log(location)

  const searchLocation = (event: any) => {
    if(event.key === 'Enter') {
      dispatch(fetchCurrentWeather(location))
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
        onChange={event => 
          setLocation(event.target.value)}/>
        <div className={s.change_theme} onClick={changeTheme}>
          <GlobalSvgSelector id='header-change_theme'/>
        </div>
      </div>  
    </header>
  )
}