import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../componenets/About'
import Contact from '../componenets/Contact'
import Error from '../componenets/Error'
import Home from '../componenets/Home'
import NavBar from '../componenets/NavBar'
// import NavBar from '../componenets/NavBar'
const Router = () => {
  return (
    <>
      <BrowserRouter >
        <Routes>
            <Route path='/' element={<NavBar />} />
            <Route index element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<Error />} />
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default Router