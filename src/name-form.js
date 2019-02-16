import React from 'react';

const NameForm = ({ firstName, lastName, handleChange, handleSubmit }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <label>
        ALMOST DONE! PLEASE ENTER YOUR FIRST AND LAST NAME.
        <input type="text" name="firstName" value={firstName} placeholder="First Name" onChange={handleChange} />
        <input type="text" name="lastName" value={lastName} placeholder="Last Name" onChange={handleChange} />
      </label>
      <button type="submit" >SIGN UP</button>
    </form>
  </div>
)

export default NameForm
