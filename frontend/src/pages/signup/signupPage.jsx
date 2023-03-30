import React from 'react'
import "./signupPage.css";
import { Link } from 'react-router-dom';
const SignUpPage = () => {
  return (
    <div className='signUpdiv'>
      <div>
      <form className="Signupform">
      <h1>Register</h1>
    <input type="text" className="input" placeholder="&nbsp;&nbsp;username"/>
    <input type="email" className="input" placeholder="&nbsp;&nbsp;email"/>
    <input type="password" className="input" placeholder="&nbsp;&nbsp;password"/> 
    <input type="text" className="input" placeholder="&nbsp;&nbsp;Gender"/> 
    <input type="number" className="input" placeholder="&nbsp;&nbsp;Phone number"/> 
  <span className="sub">Already have an account ? <Link to="/login">Sign in</Link></span>
    {/* <Link to="/verifyEmail">Verify Email</Link> */}
    <button>Continue</button>
</form>
      </div>
    
    </div>
  )
}

export default SignUpPage