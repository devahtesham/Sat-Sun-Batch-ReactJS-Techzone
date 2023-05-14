import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, deleteProduct, getProducts } from '../store/Actions/Product'
import productImg from "../img/product.jpg"
import "./ProductCard.css"
import { useEffect } from 'react'
import Loader from './loader/Loader'
const Banner = ({ getCartValue }) => {
    const dispatch = useDispatch()
    const { data, isLoading } = useSelector(state => state.getProductsReducer)
    // console.log('selector', selector);
    useEffect(() => {
        dispatch(getProducts())
    }, [])
    const addToCart = (cartProduct) => {

        dispatch(addProduct(cartProduct))
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        !isLoading ?
                            data.map((product, index) => <div className="col-lg-3" key={product.id}>
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
                                                addToCart(product)
                                            }} className='btn btn-primary'>ADD to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            ) : <Loader />
                    }

                </div>
            </div>
        </>
    )
}

export default Banner