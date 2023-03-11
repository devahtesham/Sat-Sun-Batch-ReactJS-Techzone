import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./NavBar.css"
const NavBar = () => {
  return (
    <>
        <header className='header'>
            <h1>LOGO</h1>
            <div className='links-container'>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    </>
  )
}

export default NavBar