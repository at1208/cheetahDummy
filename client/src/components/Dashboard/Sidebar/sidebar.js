import  React from 'react';
import './sidebar.css';
import {Link} from 'react-router-dom'

const Sidebar  = () => {
  return <span className='container float-left m1 shadow'>
        <h5 className='m2'>Dashboard</h5>
        <Link to='/dashboard/contact'><button className='container btn btn-block m3 shadow'>Contact</button></Link>
        </span>
}

export default Sidebar;
