import React,{Fragment} from 'react'
import { useState } from 'react'
import {FiEdit} from "react-icons/fi"
import {RiDeleteBin3Fill} from "react-icons/ri"

const Todo = () => {
    const [todo,setTodo] = useState("")
    const [allTodos,setAllTodos] = useState([])
    const [updatedVal,setUpdatedValue] = useState("")
    const [indexNum,setIndexNum] = useState("")
 
    // value get
    const TodoHandler = (e)=>{
        setTodo(e.target.value)
    }   
    
    // add todo
    const addTodoHandler = ()=>{
        if (!todo){
            alert("Reauired Fields are missing ")
            return
        }
        setAllTodos([...allTodos,todo])
        setTodo("")
    }

    // delete
    const deleteTodoHandler = (index)=>{
        
        //logic 1
        // allTodos.splice(index,1)

        //logic 2
        const filteredItems = allTodos.filter((item,item_index)=> item_index !== index)
        // console.log("allTodos",allTodos)
        // setAllTodos([...allTodos])
        setAllTodos([...filteredItems])

    }

    // edit
    const editTodoHandler = (value,index)=>{
    //    const updatedValue = prompt("Enter updated value ",value)
    //    allTodos.splice(index,1,updatedValue)
    //     setAllTodos([...allTodos])
        setUpdatedValue(value)
    }

    // update
    const updateTodoHandler = (index)=>{
        console.log("update is calling" )
        allTodos[index] = updatedVal
        setAllTodos([...allTodos])
        setIndexNum("")
        setUpdatedValue("")
        // allTodos.splice(index,1,updatedVal);
        // setAllTodos([...allTodos])
        
    }

    // delete all
    const deleteAllTodosHandler = ()=>{
        setAllTodos([])
    }

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
        <div className='d-flex justify-content-center align-items-center'>
            <input type="text" placeholder='Add New Todo' className='form-control w-50' 
            onChange={TodoHandler} value={todo}  />
            <div className='ms-5'>
                <button className='btn btn-primary me-3' onClick={addTodoHandler}>Add Todo</button>
                <button className='btn btn-danger' onClick={deleteAllTodosHandler}>Delete All</button>
            </div>
        </div>
        {/* ============ rendering todos ============= */}
        <section className='mt-5' >
            {
                allTodos.length < 1 ? <h1 className='text-center'>Empty !</h1>
                :
                allTodos.map((item,index)=>
                    <Fragment key={index}>
                       {
                        indexNum === index ? <div className='w-50 mx-auto my-3'>
                            <input value={updatedVal} className='form-control mb-2 ' onChange={(e)=>{
                                setUpdatedValue(e.target.value)
                            }}/>
                            <button className='btn btn-warning' onClick={()=>{
                                updateTodoHandler(index)
                            }}>Update</button>
                        </div>
                        :
                        (<div key={index} className="alert alert-danger w-50 mx-auto d-flex align-items-center justify-content-between">
                                {item}
                                <div>
                                        <span className='me-2' onClick={()=>{
                                            setIndexNum(index)
                                            editTodoHandler(item,index)
                                        }}>
                                            <FiEdit color={"black"} />
                                        </span>
                                        <span onClick={()=>{
                                            deleteTodoHandler(index)
                                        }}>
                                            <RiDeleteBin3Fill color={"black"} />
                                        </span>
                                </div>
                            </div>)
                       } 
                    </Fragment>
                )
            }
        </section>
    </div>
    </>
  )
}

export default Todo