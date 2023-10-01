import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from"axios"
import {useNavigate} from "react-router-dom"


function Login() {
  const navigate = useNavigate()
 const[input,setInput] = useState({
  email:"",password:""
 }) 
 const handleChange = async(e)=>{
     e.preventDefault()
       try {
        const result = await axios.post("http://localhost:9000/api/v1/user/login",input)
        if(result){
        alert(result.data.msg)
        localStorage.setItem("token",result.data.token)
        localStorage.setItem("username",result.data.name)
        navigate("/")
       }
 } catch (error) {
  alert(error.response.data.msg)
 }
}
  return (
    <div className="loginForm">

   
     <Form onSubmit={handleChange}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' value={input.email} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' value={input.password} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Login