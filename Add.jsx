import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Add = () => {

  const [book, setBook] = useState({
    title:"",
    description:"",
    price:"",
    cover:""
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setBook(prev=>({...prev, [e.target.name]: e.target.value}))
  }
  console.log(book)

  const handleClick = async (click) => {
    click.preventDefault()
    try{
      await axios.post("http://localhost:8800/books", book)
      navigate("/")
    }catch(err){

    }
  }
  return (
    <div className="form">
      <h1>Add New Book</h1>
      <input type="text" placeholder='title' onChange={handleChange} name="title"/>
      <input type="text" placeholder='description' onChange={handleChange} name="description"/>
      <input type="text" placeholder='price' onChange={handleChange} name="price"/>
      <input type="text" placeholder='cover' onChange={handleChange} name="cover"/>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Add