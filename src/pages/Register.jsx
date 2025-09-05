import React, { useState } from 'react'
import { FaGoogle, FaFacebookF, FaYoutube, FaXTwitter } from "react-icons/fa6";

const Register = () => {
   const [isActive, setIsActive] = useState(false);
  return (
    <>
    <div className='mainbody'>

       <div className={`contented ${isActive ? "active" : ""}`} id="container">
      {/* Sign Up Form */}
      <div className="form-container sign-up">
         <form action="#">
          <h1>Create Account</h1>
          <input type="name" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button>Register</button>
        </form>
      </div>

      {/* Sign In Form */}
      <div className="form-container sign-in">
        <form action="#">
          <h1>Create Account</h1>
          <input type="name" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button>Register</button>
        </form>
      </div>

      {/* Toggle Panels */}
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features.</p>
            <button className="hidden" onClick={() => setIsActive(false)}>
              Sign In
            </button>
          </div>

          <div className="toggle-panel toggle-right">
            <h1 style={{color:'#fff'}}>Hello, Subscriber!</h1>
            <p>Register with your personal details to use all of site features.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Register
