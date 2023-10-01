import React,{useEffect, useState} from 'react'
import axios from"axios"
import {useNavigate} from "react-router-dom"
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function AddBlog() {
  const navigate  = useNavigate()
  const[file,setFile] = useState()
  const[input,setInput] = useState({
    title:"",
    category:"",
    description:"",
   }) 
   const[categories,setCategories] = useState([])
   useEffect(()=>{
    const fecthAllCategories = async () => {
      try {
        const result = await axios.get("http://localhost:9000/api/v1/get/categories", {
          headers:{
            "Authorization": `Bearer ${localStorage.getItem("token")}`
          }
        });
        setCategories(result.data);
      } catch (error) {
        alert(error.response.data.msg)
       
      }
    };
    
    fecthAllCategories()
   },[])
   
   
   
   const handleSubmit = async(e)=>{
    e.preventDefault()
    const formData = new FormData();
  formData.append("title", input.title);
  formData.append("category", input.category);
  formData.append("description", input.description);
  formData.append("thumbnail", file);
  


       try {
        const result = await axios.post("http://localhost:9000/api/v1/get/addblog",formData,{
          headers:{
            
            "Authorization": `Bearer ${localStorage.getItem("token")}`

          }
        })
        alert(result.data.msg)
        navigate("/")
        
      } catch (error) {
        alert(error.response.data.msg)
      }
   }
  return (
    <div className="addBlog">
     <Container>
      <Row>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={input.title} onChange={(e)=>setInput({...input,title:e.target.value})}
                required
              />
            </Form.Group>

            <Form.Group controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Select custom  onChange={(e)=>setInput({...input,category:e.target.value})}>
                {categories && categories.map((item)=>{
                  return <option value={item._id}>{item.title}</option>
                })}
         
            
          </Form.Select>
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="description"
                value={input.description} onChange={(e)=>setInput({...input,description:e.target.value})}
                
                
                required
              />
            </Form.Group>

            <Form.Group controlId="thumbnail">
              <Form.Label>Thumbnail</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                name="thumbnail"
                onChange={(e)=>setFile(e.target.files[0])}
                required
              />
            </Form.Group>

            <Button className='btn' variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default AddBlog