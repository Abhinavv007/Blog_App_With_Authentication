import {Route,Routes} from"react-router-dom"
import Register from "./pages/Register";
import Login from "./pages/Login"
import './App.css';
import Home from "./pages/Home";
import Header from "./components/Header";
import AddBlog from "./pages/AddBlog";
import AddCategory from "./pages/AddCategory";
import SingleBlog from "./pages/SingleBlog";
import Private from "./Services/Private";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
    <Header />
    <Routes>
    
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Private />} >
      <Route path="/" element={<Home />} />
      <Route path="/add-blog" element={<AddBlog />} />
      <Route path="/add-category" element={<AddCategory />} />
      <Route path="/blog/:id" element={<SingleBlog />} />
      </Route>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
