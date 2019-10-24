import React, { Component } from 'react';
import './allcontact.css'





class SeeContacts extends Component {

state = {
   data: []
}

componentDidMount(){

  fetch("https://cheetahserver.herokuapp.com/allContact").then(res => {
            if (res.ok) {
              return res.json();
            } else {
              throw Error(res.statusText);
            }
          })
          .then(json => this.setState({ data: json }))
      .catch( err => console.log(err))




}

AllContact = () => {
const Data = this.state.data.map((contact) => {
    return <>
    <tr>
      <td>{contact._id}</td>
      <td>{contact.name}</td>
      <td>{contact.ph}</td>
    </tr>
    </>
})
return Data;
}


  render(){
    return <div className='container text-center card  col-md-5 j2'>
    <div className='container'>
    <h1 className='j1'>All Contacts</h1>
    <table className='j3'>
      <tr>
        <th>ID</th>
        <th>Contact Name</th>
        <th>Phone Number</th>
      </tr>
      {this.AllContact()}
    </table>

    </div>
    </div>
  }

}
export default SeeContacts;
