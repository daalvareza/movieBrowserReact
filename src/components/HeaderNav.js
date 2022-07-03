import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
  return (
    <>
        <header className="header">
          <div className="logo">
            <div className="play"></div>
          </div>
          <h1>Movies</h1>
        </header>
        <nav className="nav">
          <ul>                  
            <li>
              <NavLink to='/home' className={({isActive}) => isActive ? "active" : ""}>
                My Movies
              </NavLink>
            </li>
            <li>
              <NavLink to='/add' className={({isActive}) => isActive ? "active" : ""}>
                Add Movies
              </NavLink>
            </li>
            <li>
              <NavLink to='/contact' className={({isActive}) => isActive ? "active" : ""}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
    </>
  )
}
