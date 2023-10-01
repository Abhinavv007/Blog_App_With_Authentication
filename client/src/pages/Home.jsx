import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios"
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate()
  
 
  const [blogs,setBlogs] = useState([])
  useEffect(()=>{
    const fetchAllBlogs = async()=>{
      const result = await axios.get("http://localhost:9000/api/v1/get/allblogs",{
        headers:{
          "Authorization":`Bearer ${localStorage.getItem("token")}`
        }
      })
      setBlogs(result.data)
    }
    fetchAllBlogs()
  },[])
  return (
    <div className="home">
      {blogs && blogs.length>0?
       blogs.map((item)=>{
          return <>
          <Card style={{ width: '18rem' }}>
      <Card.Img className='img' variant="top" src={`http://localhost:9000/${item.thumbnail}` }/>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
        <Button onClick={()=>navigate(`/blog/${item._id}`)} variant="primary">Read more</Button>
      </Card.Body>
    </Card>
          </>
       })
       : 
      <h2>Loading...</h2>}
      
    </div>
  )
}

export default Home