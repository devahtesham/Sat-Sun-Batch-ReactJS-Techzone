import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'

const FetchData = () => {
  const [userData,setUserData] = useState("")
  const [username,setUsername] = useState("")
  const [githubUser,setGithubUser] = useState("")
  const [isError,setIsError] = useState(false)
  useEffect(()=>{
    fetchUserData()
    
  },[githubUser])
  const fetchUserData = async()=>{
    try {
      const response = await axios.get(`https://api.github.com/users/${githubUser ? githubUser:'devahtesham'}`);
      setUserData(response.data)      
    } catch (error) {
      setIsError(true)
    }
  }

  const usernameHandler = (e)=>{
    const val = e.target.value;
    setUsername(val)
  }

  const submitHandler = (e)=>{
    e.preventDefault()
    setGithubUser(username)
    setUsername("")
  }
  return (
    <Card userData={userData} onSubmit={submitHandler} onChange={usernameHandler} value={username} error={isError}/>
  )
}

export default FetchData