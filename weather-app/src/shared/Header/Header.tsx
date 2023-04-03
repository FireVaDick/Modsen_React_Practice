import React from 'react'
import s from './Header.module.scss'
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector'
import Select from 'react-select'

interface Props {
}

export const Header = (props: Props) => {
  const options = [
    { value: 'city-Mogilev', label: 'Могилёв' },
    { value: 'city-Minsk', label: 'Минск' },
    { value: 'city-Vitebsk', label: 'Витебск' }
  ]
  
const colorStyles = {
  control: (styles: any) => ({
    ...styles,
    backgroundColor: '#d6ebff',
    width: '195px',
    height: '40px',
    border: 'none',
    borderRadius: '10px',
    zIndex: 100,
  })
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
        <Select
          defaultValue={options[0]}
          styles={colorStyles} 
          options={options} />
        <div className={s.change_theme}>
          <GlobalSvgSelector id='header-change_theme'/>
        </div>
      </div>  
    </header>
  )
}