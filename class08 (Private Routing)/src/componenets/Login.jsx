import React, { useEffect } from 'react'

const Login = () => {
    useEffect(()=>{
        
    },[])
  return (
    <>
        <div className='container'>
            <div className="row d-flex justify-content-center align-items-center mt-5">
                <div className="col-lg-6">
                    <form> 
                        <div className='username mb-3'>
                            <label htmlFor="email" className='mb-2'>Email Address:- </label>
                            <input type="email" className='form-control' placeholder='Enter Your Email' />
                        </div> 
                        <div className='password'>
                            <label htmlFor="password" className='mb-2'>Email password:- </label>
                            <input type="password" className='form-control' placeholder='Enter Your password' />
                        </div> 
                        <div className='text-center mt-3'>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login