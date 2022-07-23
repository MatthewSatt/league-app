import React from 'react'
import {useTheme, useThemeUpdate} from '../Context'
import "./NavBar.css"
import { Link } from 'react-router-dom'

function NavBar() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
    // padding: "2rem",
    // margin: "2rem"

  }
  return (
    <div className='navbar'>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>Function Theme</div>
        <Link className="navlink" to="/players">
            Players
        </Link>
        <Link className="navlink" to="/champions">
            Champions
        </Link>

        <Link className="navlink" to="/ranking">
            Champion Stats
        </Link>
    </div>
  )
}

export default NavBar



