import React from 'react'

const Login = () => {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className='my-2 mb-4'>Login</h1>
                    <form>
                        <div className="email mb-3">
                            <label htmlFor="email" className='mb-2 fw-bolder'>Email Address</label>
                            <input type="email" name="email" id="email"  className='form-control w-50' placeholder='Enter Your Email'/>
                        </div>
                        <div className="password">
                            <label htmlFor="password" className='mb-2 fw-bolder'>Password</label>
                            <input type="password" name="password" id="password" className='form-control w-50' placeholder='xxxxxxxxxxxx' />
                        </div>
                        <div className='mt-3'>
                            <button className='btn btn-primary'>Login</button>
                        </div>
                    </form>
                </div>
            </div>   
        </div>
    </>
  )
}

export default Login