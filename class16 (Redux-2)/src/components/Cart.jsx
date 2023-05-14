import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import Header from './Header';
import { deleteProduct } from '../store/Actions/Product';

const Cart = () => {
  const dispatch = useDispatch()
  const removeFromCart = (index) => {
    dispatch(deleteProduct(index))
  }
  const { cartItems } = useSelector(state => state.ProductReducer);
  return (
    <>
      <Header />
      <div className="container">
        <div className='row w-100'>
          {
            cartItems.length === 0 ?
              <h1 className='text-center text-danger'>Empty !!</h1>
              :
              cartItems.map((product, index) => <div className="col-lg-3" key={product.id}>
                <div className="product-card mb-5">
                  <div className='product-img'>
                    <img src={product.image} alt="" className='w-100' style={{ height: '300px' }} />
                  </div>
                  <div className='mt-4'>
                    <h3>{product.category}</h3>
                    <p>{product.description.substring(0, 100)}</p>
                    <div className='d-flex justify-content-between align-items-center'>
                      <span>$ {Math.ceil(product.price)}</span>
                      <button onClick={() => {
                        removeFromCart(index)
                      }} className='btn btn-primary'>Remove</button>
                    </div>
                  </div>
                </div>
              </div>

              )


          }

        </div>
      </div>
    </>

  )
}

export default Cart