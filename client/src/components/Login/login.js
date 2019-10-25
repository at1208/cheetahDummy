import React, { Component } from 'react';
import './login.css';
import { Link } from 'react-router-dom'
import Header from '../header'

class Login extends Component {

 state = {

   emailID: '',
   password: ''
 }

 LoginUser = (e) => {
   e.preventDefault()
console.log(this.state.emailID)
console.log(this.state.password)
   fetch(`http://localhost:5000/login/${this.state.emailID}/${this.state.password}`,{
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }},)
            .then(json =>  console.log(json.status))
        .catch( err => console.log(err))
   }

  render(){
    return <div className='container-fluid'>
    <Header />
    <div className='card container b1 col-md-3 shadow'>
            <h1 className='text-center b5'>Cheetah</h1>
            <br />
            <span className='text-center b4'>Please Enter Your Information</span>
            <hr />

            <input className='b3 text-center' placeholder='Please Enter your Email ID' onChange={(e) => this.setState({ emailID: e.target.value })} value={this.state.emailID} />

            <input className='b3 text-center'placeholder='Please Enter your Password' onChange={(e) => this.setState({ password: e.target.value })} value={this.state.password} />

             <button className='btn btn-block b2 ' onClick={this.LoginUser}>Login to Cheetah</button>

            <button className='btn btn-block b6'>I forgot my password/ Reset password</button>

    </div>
  </div>
  }
}
export default Login;
