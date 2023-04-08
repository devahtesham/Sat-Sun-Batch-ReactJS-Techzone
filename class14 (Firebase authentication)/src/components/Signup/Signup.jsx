import React, { useState } from 'react'
import {auth,createUserWithEmailAndPassword, db, doc, setDoc} from "../../firebase/firebase"
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const navigate=  useNavigate()
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const submitHandler = (e)=>{
        e.preventDefault()
        if(!name || !email || !password){
            alert("Required Fields are missing");
            return
        }

        // sending credentials to firebase
        createUserWithEmailAndPassword(auth,email,password)
            .then(async(response)=>{
                
                

                const objToSend = {
                    name,
                    email,
                    uid:response.user.uid
                }
                const docRef = doc(db,"users",response.user.uid);
                await setDoc(docRef,objToSend)
                navigate("/")
                setName("")
                setEmail("")
                setPassword("")
            })
            .catch((error)=>{
                console.log('error',error)
            })
               
            
    }
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className='my-2 mb-4'>Signup</h1>
                    <form onSubmit={submitHandler}>
                        <div className="username mb-3">
                            <label htmlFor="username" className='mb-2 fw-bolder'>Full Name</label>
                            <input type="text" name="username" id="username" className='form-control w-50' placeholder='Enter Your Name' onChange={(e)=>{setName(e.target.value)}} value={name}
                             />
                        </div>
                        <div className="email mb-3">
                            <label htmlFor="email" className='mb-2 fw-bolder'>Email Address</label>
                            <input type="email" name="email" id="email"  className='form-control w-50' placeholder='Enter Your Email' onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
                        </div>
                        <div className="password">
                            <label htmlFor="password" className='mb-2 fw-bolder'>Password</label>
                            <input type="password" name="password" id="password" className='form-control w-50' placeholder='xxxxxxxxxxxx' onChange={(e)=>{setPassword(e.target.value)}} value={password} />
                        </div>
                        <div className='mt-3'>
                            <button className='btn btn-primary'>SignUp</button>
                        </div>
                    </form>
                </div>
            </div>   
        </div>
        
    </>
  )
}

export default Signup