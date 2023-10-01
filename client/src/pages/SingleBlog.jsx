import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Container, Row, Col,Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function SingleBlog() {
  const{id} = useParams()
  const[blog,setBlog]=useState({})
  useEffect(()=>{
    const fetchSingleBlog=async()=>{
      const result= await axios.get(`http://localhost:9000/api/v1/get/blog/${id}`,{
        headers:{
          "Authorization":`Bearer ${localStorage.getItem("token")}`
        }
      })
      setBlog(result.data)
    }
    fetchSingleBlog()

  },[id])
    const navigate = useNavigate()
  return (
    <div className="SingleBlog">
         <Container>
      <Row className="mt-4">
        <Col md={6}>
          <Image src={`http://localhost:9000/${blog.thumbnail}` } alt="Blog Image" fluid />
        </Col>
        <Col md={6}>
          <h2>{blog.title}</h2>
          <p>
            {blog.description}
          </p>
          <Button onClick={()=>navigate("/")} variant="primary">Go Back</Button>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default SingleBlog