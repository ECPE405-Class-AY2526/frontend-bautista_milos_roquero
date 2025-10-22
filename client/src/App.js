import "./App.css";
import { Route, Routes} from "react-router-dom";
import {AuthProvider} from './context/AuthContext';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./LandingPage/Home";
import About from "./LandingPage/About";
import Gallery from "./LandingPage/Gallery";
import SignUp from "./LandingPage/SignUp";
import Login from "./LandingPage/Login";
import Dashboard from "./components/dashboard/Dashboard";


export default function App(){
  return(
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path ="/login" element={<Login/>}/>
          <Route path ="/signup" element={<SignUp/>}/>
          <Route path ="/about" element={<About/>}/>
          <Route path ="/gallery" element={<Gallery/>}/>
          <Route path ="/home" element={<Home/>}/>
          <Route path ="/dashboard" element={<Dashboard/>}/>
        </Routes>
         <ToastContainer />   
        </AuthProvider> 
    </div>
  )
}
