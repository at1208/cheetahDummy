import React, { Component } from 'react';
import './contact.css'
import { Icon } from 'antd';
import { Link } from 'react-router-dom'

class Contact extends Component {

   state = {
     addContact: false,
     allContact: false,
     updateContact: false,
     deleteContact: false
   }


  render(){

    return <div className='container'>
 

      <div className='container text-center'>
      <Link to="/dashboard/contact/addcontact"><button className='btn   e1 shadow'><Icon type="user-add" className='e2'  />Add Contact</button></Link>
      <Link to="/dashboard/contact/allcontact"><button className='btn   e1 shadow'><Icon type="contacts" className='e3'  />All Contact</button></Link>
      <Link to="/dashboard/contact/updatecontact"><button className='btn   e1 shadow'><Icon type="edit"     className='e4'  />Update Contact</button></Link>
      <Link to="/dashboard/contact/deletecontact"><button className='btn   e1 shadow'><Icon type="delete"   className='e5'  />Delete Contact</button></Link>
      </div>



    </div>
  }
}
export default Contact;
