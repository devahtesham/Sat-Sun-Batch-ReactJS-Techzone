import React from 'react'
import { Link, Outlet } from 'react-router-dom'
// import NavBar from './NavBar'

const About = () => {
  return (
    <>
    {/* <NavBar /> */}
    <div>About</div>

    <div className="container d-flex justify-content-start">
      <div className='me-4'>
        <button className='btn btn-outline-danger'>
          <Link to="react">About React</Link>
        </button>
      </div> 
      <div>
        <button className='btn btn-outline-warning'>
          <Link to="javascript">About Javascript</Link>
        </button>
      </div> 
    </div>
    <Outlet />
    </>
  )
}

export default About