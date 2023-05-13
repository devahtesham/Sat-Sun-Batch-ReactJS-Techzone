import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, deleteProduct } from '../store/Actions/Product'
import productImg from "../img/product.jpg"
import "./ProductCard.css"
const Banner = ({getCartValue}) => {
    const dispatch = useDispatch()
    const addToCart = ()=>{
        dispatch(addProduct())
    }
    const deleteFromCart = ()=>{
        dispatch(deleteProduct())
    }
  return (
    <>
        {/* <button onClick={addToCart}>ADD to Cart</button>
        <button onClick={deleteFromCart} >DELETE from Cart</button> */}
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="product-card">
                        <div className='product-img'>
                            <img src={productImg} alt="" className='w-100'/>
                        </div>
                        <div className='mt-4'>
                            <h3>Product title</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus porro ipsum quod vel architecto molestias consequatur dicta fuga officiis animi!</p>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>$15</span>
                                <button onClick={addToCart} className='btn btn-primary'>ADD to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner