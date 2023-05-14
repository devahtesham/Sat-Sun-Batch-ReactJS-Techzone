import React from 'react'
import CartCount from './CartCount'
import "./Header.css"
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <div className='container'>
            <h1>LOGO</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart">Cart</NavLink>
                    </li>
                
                </ul>
            </nav>
            <CartCount  />
        </div>
    </>
  )
}

export default Header