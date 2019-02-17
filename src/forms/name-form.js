import React from 'react';

const NameForm = ({ firstName, lastName, handleChange, handleSubmit }) => (
  <div id="container">
    <form onSubmit={handleSubmit} className="item">
      <p id="formTitle">ALMOST DONE! PLEASE ENTER YOUR FIRST AND LAST NAME.</p>
      <div id="nameForm">
        <input type="text" name="firstName" value={firstName} placeholder="First Name" onChange={handleChange} id="nameField" />
        <input type="text" name="lastName" value={lastName} placeholder="Last Name" onChange={handleChange} id="nameField" />
        <button type="submit" className="finalButton">SIGN UP</button>
      </div>
    </form>
  </div>
)

export default NameForm
