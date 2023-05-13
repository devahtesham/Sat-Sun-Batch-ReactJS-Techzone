import React from 'react'
import { useSelector } from 'react-redux'

const CartCount = () => {
    let {cart} = useSelector((state) => state)
  return (
    <>
        <h3>Cart:- {cart < 0 ? 'invalid' : cart}</h3>
    </>
  )
}

export default CartCount