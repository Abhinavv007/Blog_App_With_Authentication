import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from"axios"
import {useNavigate} from "react-router-dom"
function Register() {
  const navigate = useNavigate()
 const[input,setInput] = useState({
  username:"",email:"",password:""
 })
 const handleSubmit = async(e)=>{
      e.preventDefault()
      try {
        const result = await axios.post("http://localhost:9000/api/v1/user/register",input)
        if(result){
        alert("Registration Done Successfully")
        navigate("/login")
        }
      } catch (error) {
        alert(error.response.data.msg)
      }
 }
  return (
    <div className="register">
         <Form onSubmit={handleSubmit}>
         <Form.Group className="mb-3" controlId="formBasicName" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter name" name='username'value={input.username}  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} />
        </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' value={input.email}  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' value={input.password} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>

    
  )
}

export default Register