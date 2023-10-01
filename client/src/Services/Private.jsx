import React from 'react'
import {Navigate,Outlet} from "react-router-dom"
function Private() {
    const auth = localStorage.getItem("token")
  return auth &&auth!=null? <Outlet/> : <Navigate to="login" />
    
  
}

export default Private