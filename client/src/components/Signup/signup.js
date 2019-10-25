import React,{ Component } from 'react';
import Header from '../header'
import { Link } from 'react-router-dom'
import './signup.css'

class Signup extends Component {

 state = {
   firstName: '',
   lastName: '',
   emailID: '',
   phoneNumber: '',
   password: ''
 }

CreateNewUser = (e) => {
 e.preventDefault()

 fetch('http://localhost:5000/signup', {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
          "firstName":this.state.firstName, "lastName": this.state.lastName, "emailID": this.state.emailID, "phoneNumber": this.state.phoneNumber,"password":this.state.password
          })
        }).then(res => {
            if (res.ok) {
              return res.json();
            } else {
              throw Error(res.statusText);
            }
          })
          .then(json =>  console.log(json))
      .catch( err => console.log(err))
 }


 render(){

   return <div>
   <Header />
   <div className='card container n1 col-md-4 shadow'>
           <h1 className='text-center n5'>Cheetah</h1>
           <br />
           <span className='text-center n4'>Please Enter Your Information</span>
           <hr />

           <input className='n3 text-center' placeholder='First Name' onChange={(e) => this.setState({ firstName: e.target.value })} value={this.state.firstName} />
           <input className='n3 text-center'placeholder='Last Name'onChange={(e) => this.setState({ lastName: e.target.value })} value={this.state.lastName}/>
           <input className='n3 text-center'placeholder='Email ID'onChange={(e) => this.setState({ emailID: e.target.value })} value={this.state.emailID}/>
           <input className='n3 text-center'placeholder='Phone Number'onChange={(e) => this.setState({ phoneNumber: e.target.value })} value={this.state.phoneNumber}/>
           <input className='n3 text-center'placeholder='Password'onChange={(e) => this.setState({ password: e.target.value })} value={this.state.password}/>


           <Link to='/dashboard'><button className='btn btn-block n2 ' onClick={this.CreateNewUser}>Sign Up Now</button></Link>



   </div>
   </div>
 }
}
export default Signup;
