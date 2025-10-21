import React, { useState } from 'react';
import "./LoginPage.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/login',{email, password})
    .then(result => {
      console.log(result)
      if(result.data === "Success"){
            navigate('/Maindashboard')
      }
    })
    .catch(err=> console.log(err))
  }

  return (
    <div>
          <div className="hero">
            <div className="login-container">
              <div className="form-header">
                <h1 className="form-title">WELCOME BACK</h1>
                <p> Hey! Good to see you again :)</p>
              </div>
    
              <form onSubmit={handleSubmit}>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input 
                    type="email" 
                    autoComplete="off"
                    className="form-input" 
                    placeholder="Enter Email"
                    onChange={(e)=> setEmail(e.target.value)}
                  />
                </div>
    
                <div className="form-group">
                  <label htmlFor="password" className="form-label">Password</label>
                  <div className="password-container">
                    <input 
                      type={showPassword ? "text" : "password"} 
                      autoComplete="off"
                      className="form-input" 
                      placeholder="Enter Password"
                      onChange={(e)=> setPassword(e.target.value)}
                    />
                    <button 
                      type="button" 
                      className="password-toggle" 
                      onClick={togglePasswordVisibility}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? "👁" : "👁️‍🗨️"}
                    </button>
                  </div>
                </div>
    
                <button type="submit" className="submit-btn">
                  <span className="btn-text">
                  LOG IN
                  </span>
                </button>
                </form>
    
              <div className="login-link">
                Don't have an account?
                <br></br><Link to ="/signup">Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
  )
}

export default LoginPage