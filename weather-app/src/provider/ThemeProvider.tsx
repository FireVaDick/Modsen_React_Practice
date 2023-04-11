import { ReactNode, useState } from 'react';
import { changeSccRootVariables } from '../model/ChangeSccRootVariables';
import { Theme, ThemeContext } from '../context/ThemeContext';

interface Props {
  children: ReactNode,
}

export const ThemeProvider = ({children, ...props}: Props) => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);
  
  function changeTheme(theme: Theme) {
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