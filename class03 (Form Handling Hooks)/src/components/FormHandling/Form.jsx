import React, { useState,useRef } from 'react'
import LearningProps from '../learningProps/LearningProps'
import "./Form.css"
const Form = () => {
    let tech1 = "react";
    let tech2 = "css";
    let tech3 = "js";

    const [nameInputVal,setNameInputVal]=useState("")
    const emailRef = useRef()
    

    const nameInputChangeHandler = (e)=>{
        let val = e.target.value
        setNameInputVal(val)
    }
   
    const formSubmitHandler = (e)=>{
        e.preventDefault()
        console.log("nameInputVal",nameInputVal) // value getting from useState()
        console.log("email input value",emailRef.current.value) // value getting from useRef()
        setNameInputVal("")
        emailRef.current.value = ""
        
    }
  return (
   <>
    <form onSubmit={formSubmitHandler}>
        <div className='name'>
            <label htmlFor="name">Name:- </label>
            <input type="text" name="name" id="name" placeholder='Enter Your Name' onChange={nameInputChangeHandler} value={nameInputVal} />
        </div>
        <div className='email'>
            <label htmlFor="email">Email:- </label>
            <input type="email" name="email" id="email" placeholder='Enter Your Email' ref={emailRef} />
        </div>
        <div className='password'>
            <label htmlFor="password">Password:- </label>
            <input type="password" name="password" id="password" placeholder='Enter Your Password' />
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
    </form>
    <LearningProps techone={tech1} techtwo={tech2} techthree={tech3} />
   </>
  )
}

export default Form