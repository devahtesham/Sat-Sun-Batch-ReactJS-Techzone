import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../componenets/About'
import Contact from '../componenets/Contact'
import Error from '../componenets/Error'
import Home from '../componenets/Home'
import Javascript from '../componenets/Javascript'
import Login from '../componenets/Login'
import MyReact from '../componenets/MyReact'
import NavBar from '../componenets/NavBar'
import PrivateRoutes from '../componenets/PrivateRoutes/PrivateRoutes'
import Technology from '../componenets/Technology'
// import NavBar from '../componenets/NavBar'
const Router = () => {
  return (
    <>
      
        <Routes>
            <Route path='/' element={<Login />} />
            <Route element={<PrivateRoutes />} >
              <Route path='/home' element={<Home />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} >
                {/* <Route path='react' element={<MyReact />} />
                <Route path='javascript' element={<Javascript />} /> */}
                <Route path=':id' element={<Technology />} />
              </Route>
            </Route>
            <Route path='*' element={<Error />} />
        </Routes>
        
    </>
  )
}

export default Router