import React, { useState } from 'react'
import "./signupPage.css";
import { Link, Navigate } from 'react-router-dom';
const SignUpPage = () => {

  let [name,setName]=useState("");
  let [email,setEmail]=useState("");
  let [phone,setPhone]=useState("");
  let [gender,setGender]=useState("");
  let [password,setPassword]=useState("");

  const signUp = async (data) => {

		const response = await fetch("http://localhost:4000/user/signup", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data)
		});
		const json = await response.json();
    console.log(json);
		if (json.status=="Pending") {
			alert(json.msg);
    Navigate('/verifyOTP')
		}else{
      alert(json.msg)
    }

	}
  const handleSubmit = (event) => {
    event.preventDefault();
      let data={
        email,
        password,
        name,
        gender,
        phone
      }
    signUp(data);
  }
  return (
    <div className='signUpdiv'>
      <div>
      <form className="Signupform" onSubmit={(event) => handleSubmit(event)}>
      <h1>Register</h1>
    <input type="text" className="input" placeholder="&nbsp;&nbsp;username" required onChange={(event) => {
          setName(event.target.value)}}/>
    <input type="email" className="input" placeholder="&nbsp;&nbsp;email" required onChange={(event) => {
          setEmail(event.target.value)}}/>
    <input type="password" className="input" placeholder="&nbsp;&nbsp;password" required onChange={(event) => {
          setPassword(event.target.value)}}/> 
    <input type="text" className="input" placeholder="&nbsp;&nbsp;Gender" required onChange={(event) => {
          setGender(event.target.value)}}/> 
    <input type="number" className="input" placeholder="&nbsp;&nbsp;Phone number" required onChange={(event) => {
          setPhone(event.target.value)}}/> 
  <span className="sub">Already have an account ? <Link to="/login">Sign in</Link></span>
  <button className='verifyOTP'>Continue</button>
    {/* <Link  to="/verifyOTP">Continue</Link> */}
    {/* <button  >Continue</button> */}
</form>
      </div>
    
    </div>
  )
}

export default SignUpPage