import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='navbar'>
        <Link className="navlink" to="/players">
            Players
        </Link>
        <Link className="navlink" to="/champions">
            Champions
        </Link>
    </div>
  )
}

export default NavBar