import React from 'react';
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return <div className='container-fluid a1'>

       <Link to='/signup'><button className='float-right btn btn-md a2'>SIGN UP</button></Link>
       <Link to='/login'><button className='float-right btn btn-md a2'>LOGIN</button></Link>

         </div>
}
export default Header;
