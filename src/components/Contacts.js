import React, { Component } from 'react'

class Contacts extends Component {
constructor(){
  super()
  this.state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "john@gmail.com",
        phone: "111-111-1111"
      },
      {
        id: 2,
        name: "Mary Karen",
        email: "mary@gmail.com",
        phone: "222-222-2222"
      },
      {
        id: 3,
        name: "Ashley Thames",
        email: "ashley@gmail.com",
        phone: "333-333-3333"
      }
    ]
  }

}

  render() {
    const {contacts} = this.state;
    return (
      <div>
        {contacts.map(contact => <h4>{contact.name}</h4>)}
      </div>
    )
  }
}

export default Contacts;