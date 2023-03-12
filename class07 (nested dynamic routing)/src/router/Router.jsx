import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../componenets/About'
import Contact from '../componenets/Contact'
import Error from '../componenets/Error'
import Home from '../componenets/Home'
import Javascript from '../componenets/Javascript'
import MyReact from '../componenets/MyReact'
import NavBar from '../componenets/NavBar'
import Technology from '../componenets/Technology'
// import NavBar from '../componenets/NavBar'
const Router = () => {
  return (
    <>
      
        <Routes>
            {/* <Route path='/' element={<NavBar />} /> */}
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} >
              {/* <Route path='react' element={<MyReact />} />
              <Route path='javascript' element={<Javascript />} /> */}
              <Route path=':id' element={<Technology />} />
            </Route>
            <Route path='*' element={<Error />} />
        </Routes>
        
    </>
  )
}

export default Router