import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom'
import App from './components/app';
import Login from './components/Login/login'
import Dashboard from './components/Dashboard/dashboard'
import Contact from './components/Dashboard/Contact/contact'
import AddContact from './components/Dashboard/Contact/AddContact/addcontact'
import AllContact from './components/Dashboard/Contact/AllContact/allcontact'
import UpdateContact from './components/Dashboard/Contact/UpdateContact/updatecontact'
import DeleteContact from './components/Dashboard/Contact/DeleteContact/deletecontact'


ReactDOM.render(
   <BrowserRouter>
      <Route path='/' exact component={App} />
      <Route path='/login' component={Login} />
      <Route path='/dashboard'   component={Dashboard} />
      <Route path='/dashboard/contact'   component={Contact} />
      <Route path='/dashboard/contact/addcontact'   component={AddContact} />
      <Route path='/dashboard/contact/allcontact'   component={AllContact} />
      <Route path='/dashboard/contact/updatecontact'   component={UpdateContact} />
      <Route path='/dashboard/contact/deletecontact'   component={DeleteContact} />
   </BrowserRouter>, document.getElementById('root'));
