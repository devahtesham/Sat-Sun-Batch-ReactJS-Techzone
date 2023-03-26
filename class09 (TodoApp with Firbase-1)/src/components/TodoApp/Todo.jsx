import React from 'react'

const Todo = () => {
  return (
    <>
    <div className="container-fluid ">
        <div>
            <h1 className='text-center bg-dark text-white py-3'>Todo App</h1>
        </div>
        <div className='d-flex justify-content-around align-items-center'>
            <h3 className='text-center '>Welcome <span className='text-primary fw-bolder'>Ahtesham</span></h3>
            <button className='btn btn-danger'>Logout</button>
        </div>
    </div>
    <div className="container mt-5">
        <form className='d-flex justify-content-center align-items-center'>
            <input type="text" placeholder='Add New Todo' className='form-control w-50'  />
            <div className='ms-5'>
                <button className='btn btn-primary me-3'>Add Todo</button>
                <button className='btn btn-danger'>Delete All</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default Todo