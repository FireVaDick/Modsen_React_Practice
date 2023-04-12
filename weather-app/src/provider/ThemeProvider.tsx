import { ReactNode, useState } from 'react';
import { changeSccRootVariables } from '../model/ChangeSccRootVariables';
import { Theme, ThemeContext } from '../context/ThemeContext';
import { storage } from '../model/Storage';

interface Props {
  children: ReactNode,
}

export const ThemeProvider = ({children, ...props}: Props) => {
  const [theme, setTheme] = useState<Theme>(
    storage.getItem('theme') || Theme.LIGHT
  );
  changeSccRootVariables(theme);
  
  function changeTheme(theme: Theme) {
    storage.setItem('theme', theme);
    setTheme(theme);
    changeSccRootVariables(theme);
  }

  return (
      <ThemeContext.Provider 
        value={{theme, changeTheme}}
        {...props}>

        {children}
      </ThemeContext.Provider>
    )
}