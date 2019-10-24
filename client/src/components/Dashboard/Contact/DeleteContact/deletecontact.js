import React, { Component } from 'react';
import './deletecontact.css'

class DeleteContacts extends Component {

  state = {
     ID: ''
  }

  deleteCustomer = (e) => {
    e.preventDefault()

    fetch(`https://cheetahserver.herokuapp.com/deleteContact/${this.state.ID}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
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
    return <div className='container text-center card col-md-5 l5'>

    <div>
    <h1 className='l1'>Delete Contact</h1>
    </div>

    <div className='container'>

     <div>
      <label className='l2'>Customer ID</label>
      <input className='l3 text-center' type='text' placeholder='Enter ID' onChange = { e => this.setState({ ID: e.target.value })} value={this.state.ID} />
     </div>

  <button className='btn-sm btn-danger l4' onClick={ this.deleteCustomer }>Delete</button>
    </div>


    </div>
  }

}
export default DeleteContacts;
