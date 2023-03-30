import React from 'react'
import "./signupPage.css";
import { Link } from 'react-router-dom';
const SignUpPage = () => {
  return (
    <div className='signUpdiv'>
      <div>
      <form className="Signupform">
      <h1>Register</h1>
    <input type="text" className="input" placeholder="&nbsp;&nbsp;username" required/>
    <input type="email" className="input" placeholder="&nbsp;&nbsp;email" required />
    <input type="password" className="input" placeholder="&nbsp;&nbsp;password" required /> 
    <input type="text" className="input" placeholder="&nbsp;&nbsp;Gender" required /> 
    <input type="number" className="input" placeholder="&nbsp;&nbsp;Phone number" required /> 
  <span className="sub">Already have an account ? <Link to="/login">Sign in</Link></span>
    <Link className='verifyOTP' to="/verifyOTP">Continue</Link>
    {/* <button  >Continue</button> */}
</form>
      </div>
    
    </div>
  )
}

export default SignUpPage