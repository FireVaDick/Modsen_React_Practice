import React from 'react'
import logoIcon from ".././SVG/Logo.svg"
import changeThemeIcon from ".././SVG/Change Theme.svg"
import sunIcon from ".././SVG/Sun.svg"

interface Props {
  id: string;
}

export const GlobalSvgSelector = ({id}: Props) => {
  switch (id) {
    case 'header-logo':
      return (
        <img src={logoIcon} />
      )
    case 'header-change_theme':
      return (
        <img src={changeThemeIcon} />
      )
    case 'sun':
      return (
        <img src={sunIcon} />
      )
    default:
      return <svg></svg>;
  }
}