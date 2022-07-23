import React, {useContext, useState} from 'react'

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function useThemeUpdate(){
    return useContext(ThemeUpdateContext);
}

function ThemeProvider({children}) {
    const [darktheme, setDarktheme] = useState(true);

    function toggleTheme() {
        setDarktheme(!darktheme);
    }


  return (
    <ThemeContext.Provider value={darktheme}>
        <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
        </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
