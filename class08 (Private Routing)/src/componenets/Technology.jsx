import React from 'react'
import { useParams } from 'react-router-dom'

const Technology = () => {
    const {id} = useParams()
    // console.log("param",id)
  return (
    <div>Hello, I am {id}  componenet</div>
  )
}

export default Technology