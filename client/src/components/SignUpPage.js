import React, { useState } from 'react'
import "./SignUpPage.css"
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/signup',{name, email, password})
    .then(result => {console.log(result)
    navigate('/login')
    })
    .catch(err=> console.log(err))
  }

  return (
    <div>
      <div className="hero">
        <div className="signup-container">
          <div className="form-header">
            <h1 className="form-title">Create Account</h1>
            
          </div>


          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName" className="form-label">Full Name</label>
              <input 
                type="text" 
                autoComplete="off"
                className="form-input" 
                placeholder="Enter Full name"
                onChange={(e)=> setName(e.target.value)}
              />
            
            </div>

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
                  placeholder="Create a strong password"
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
              Create Account
              </span>
            </button>
            </form>

          <div className="signin-link">
            Already have an account? 
            <br></br><Link to ="/login">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage;