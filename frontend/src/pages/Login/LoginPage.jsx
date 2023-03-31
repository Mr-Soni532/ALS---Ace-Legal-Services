import React from 'react'
import Login from '../../components/login/Login';
import "./login.css"
const LoginPage = () => {
  return (
    <div className='loginpage'>
        {/* <div className='loginSideImg'>
            <img src="loginsideimg.jpg" alt="" />
        </div> */}
        <div >
            <Login />
        </div>
    </div>
  )
}

export default LoginPage