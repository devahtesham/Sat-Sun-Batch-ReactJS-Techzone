import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {auth,signInWithEmailAndPassword} from "../../firebase/firebase"

const Login = () => {
    const navigate=  useNavigate()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const loginSubmitHandler = (e)=>{
        e.preventDefault()
        if(!email || !password){
            alert("Required Fields are missing");
            return
        }
        
        // sending login details
        signInWithEmailAndPassword(auth,email,password)
            .then((response)=>{
                localStorage.setItem("uid",response.user.uid)
                navigate('/todo')
                setEmail("")
                setPassword("")
            })
            .catch((error)=>{
                alert(error.message)
            })
    }
  
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className='my-2 mb-4'>Login</h1>
                    <form onSubmit={loginSubmitHandler}>
                        <div className="email mb-3">
                            <label htmlFor="email" className='mb-2 fw-bolder'>Email Address</label>
                            <input type="email" name="email" id="email"  className='form-control w-50' placeholder='Enter Your Email' onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
                        </div>
                        <div className="password">
                            <label htmlFor="password" className='mb-2 fw-bolder'>Password</label>
                            <input type="password" name="password" id="password" className='form-control w-50' placeholder='xxxxxxxxxxxx'  onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
                        </div>
                        <div className='mt-3'>
                            <button className='btn btn-primary'>Login</button>
                        </div>
                        <div className='mt-3 pe-auto' onClick={()=>{navigate('/signup')}} style={{cursor:"pointer"}}>
                            <p className='text-primary'>Don't Have an account</p>
                        </div>
                    </form>
                </div>
            </div>   
        </div>
    </>
  )
}

export default Login