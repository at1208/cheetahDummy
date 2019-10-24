import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './addcontact.css'


class AddCustomer extends Component {

  state = {
    Id: null,
    CustomerName : '',
    PhoneNumber : null,

  }

 AddCustomer = (e) => {
   e.preventDefault()

      fetch("https://cheetahserver.herokuapp.com/addContact", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
          "_id":this.state.Id, "name": this.state.CustomerName, "ph": this.state.PhoneNumber
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
    return <div className='container text-center card col-md-5 i5'>
    <div>
    <h1 className='i1'>Add Contact</h1>
          <div className='container'>

          <div>
           <label className='i2'>Id</label>
           <input  className='i3 text-center' type='text' placeholder='Enter Id' onChange = { e => this.setState({ Id: e.target.value })} value={this.state.Id} />
          </div>


           <div>
            <label className='i2'>Name</label>
            <input  className='i3 text-center' type='text' placeholder='Enter Name' onChange = { e => this.setState({ CustomerName: e.target.value })} value={this.state.CustomerName} />
           </div>

           <div>
            <label className='i2'>Phone Number</label>
            <input   className='i3 text-center'  type='text' placeholder='Enter Phone Number' onChange = { e => this.setState({ PhoneNumber: e.target.value })} value={this.state.PhoneNumber} />
           </div>


      <button className='btn-sm i4' onClick = {this.AddCustomer}>Submit</button>
          </div>
    </div>
    </div>
  }

}
export default AddCustomer;
