import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
    const islogin = false
  return (
    <>
        {
            islogin ? <Outlet /> : <Navigate to={"/"} />
        }
    </>
  )
}

export default PrivateRoutes