import React, { Component } from 'react';
import './updatecontact.css'



class UpdateContact extends Component {

 state = {
  ID: null,
  ph: null

}

updateCustomer = (e) => {
  e.preventDefault()
  fetch(`https://cheetahserver.herokuapp.com/updateContact/${this.state.ID}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
     "ph": this.state.ph
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
    return <div className='container text-center card col-md-5 k5'>


    <div>
    <h1 className='k1'>Update Contact</h1>
    </div>

    <div className='container'>

     <div>
      <label className='k2'>ID</label>
      <input  className='k3 text-center' type='text' placeholder='Enter   ID' onChange = { e => this.setState({  ID: e.target.value })} value={this.state.CustomerID}/>
     </div>

     <div>
      <label className='k2'>Phone Number</label>
      <input  className='k3 text-center' type='text' placeholder='Update Ph. Number' onChange = { e => this.setState({ ph: e.target.value })} value={this.state.ph}/>
     </div>

  <button className='btn-sm btn-success k4' onClick = {this.updateCustomer}>Submit</button>
    </div>

    </div>
  }
}
export default UpdateContact;
