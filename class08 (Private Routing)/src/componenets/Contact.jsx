import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from './NavBar'

const Contact = () => {
  const navigate = useNavigate()
  const logoutHandler = ()=>{
    navigate("/")
  }
  return (
    <>
    {/* <NavBar /> */}
    <div>Contact</div>
    <button className='btn btn-warning' onClick={logoutHandler}>Logout</button>
    </>
  )
}

export default Contact