import React from 'react';
import './login.css';
import { Link } from 'react-router-dom'
import Header from '../header'

const Login  = () => {
  return <div className='container-fluid'>
  <Header />
  <div className='card container b1 col-md-3 shadow'>
          <h1 className='text-center b5'>Cheetah</h1>
          <br />
          <span className='text-center b4'>Please Enter Your Information</span>
          <hr />

          <input className='b3 text-center' placeholder='Please Enter your Username'/>

          <input className='b3 text-center'placeholder='Please Enter your Password'/>

          <Link to='/dashboard'><button className='btn btn-block b2 '>Login to Cheetah</button></Link>

          <button className='btn btn-block b6'>I forgot my password/ Reset password</button>

  </div>
</div>
}
export default Login;
