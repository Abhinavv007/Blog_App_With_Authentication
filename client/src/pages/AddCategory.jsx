import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from"axios"
import {useNavigate} from "react-router-dom"
function AddCategory() {
  const navigate = useNavigate()
 const[input,setInput] = useState({
  title:""
 }) 
 const handleSubmit = async(e)=>{
  e.preventDefault()
  try {
   const result = await axios.post("http://localhost:9000/api/v1/add/category",input,{
    headers:{
      "Authorization":`Bearer ${localStorage.getItem("token")}`
    }
   })
   if(result){
   alert(result.data.msg)
   navigate("/")
  }
} catch (error) {
alert(error.response.data.msg)
}
 }
  return (
   <div className="addCategory">
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title"name='title' value={input.title} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} />
        
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>
   </div>
  )
}

export default AddCategory