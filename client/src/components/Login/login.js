import React from 'react';
import './login.css';
import { Link } from 'react-router-dom'
import Header from '../header'

const Login  = () => {
  return <div className='container-fluid'>
  <Header />
  <div className='card container b1 col-md-4'>
         <h1 className='text-center'>LOGIN</h1>
          <label>Username</label>
          <input className='b3 text-center' placeholder='Please Enter your Username'/>

          <label>Password</label>
          <input className='b3 text-center'placeholder='Please Enter your Password'/>

          <Link to='/dashboard'><button className='btn btn-block b2 '>Submit</button></Link>
  </div>
</div>
}
export default Login;
