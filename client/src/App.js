import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./LandingPage/Home";
import About from "./LandingPage/About";
import Gallery from "./LandingPage/Gallery";
import Contact from "./LandingPage/Contact";
import SignUp from "./LandingPage/SignUp";
import Login from "./LandingPage/Login";

export default function App(){
  return(
    <div className="App">
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path ="/about" element={<About/>}/>
          <Route path ="/gallery" element={<Gallery/>}/>
          <Route path ="/contact" element={<Contact/>}/>
          <Route path ="/signup" element={<SignUp/>}/>
          <Route path ="/login" element={<Login/>}/>
        </Routes>    
    </div>
  )
}