import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"
function Header() {
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  const user = localStorage.getItem("username")
  const handleClick=()=>{
   
    localStorage.clear()
    navigate("/login")
  }
  return (
    <>
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to = "/">Abhinav's Blog App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as= {Link} to="/add-blog">Add Blog</Nav.Link>
            <Nav.Link as= {Link} to="/add-category">Add Category</Nav.Link>
            <div className="reglog">
              {token && token!=null?
              <>
              <h3 style={{"color":"white","fontSize":"10x","textAlign":"center","alignItems":"center","display":"flex"}}>Welcome {user}</h3>
              <button onClick={handleClick} className='lgoutbtn'>Logout</button>
              </>
              : <>
               <Nav.Link as= {Link} to="/register">Register</Nav.Link>
            <Nav.Link as= {Link} to="/login">Login</Nav.Link>
              </>
              }
            
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header