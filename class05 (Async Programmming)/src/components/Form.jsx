import React, { useState } from 'react'

const Form = () => {
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")

    const usernameHandler = (e)=>{
        const val = e.target.value
        setUsername(val)
    }
    const emailHandler = (e)=>{
        const val = e.target.value
        setEmail(val)
    }
    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(username,email)
        setEmail("")
        setUsername("")
    }

    
  return (
    <>
        <form className='w-25 m-auto' onSubmit={submitHandler}>
            <div className='mb-3'>
                <label htmlFor="" className='fw-bolder mb-2'>Username</label>
                <input type="text" name="" id="" className='form-control' onChange={usernameHandler} value={username} />
            </div>
            <div >
                <label htmlFor="" className='fw-bolder mb-2'>Email</label>
                <input type="email" name="" id="" className='form-control' onChange={emailHandler}  value={email}/>
            </div>
            <div className='text-center mt-4'>
            <button className='btn btn-outline-primary '>Submit</button>
            </div>
        </form>
    </>
  )
}

export default Form