import React from 'react';

const EmailForm = ({ email, emailDone, checked, handleChange, handleSubmit }) => (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
        SIGN UP FOR THE TLC NEWSLETTER.
          <input type="text" name="email" value={email} placeholder="enter email address" onChange={handleChange}/>
        </label>
        <button type="submit" >NEXT</button>
      </form>
      <form onSubmit={handleSubmit}>
          <input onChange={handleChange} type="checkbox" checked={checked} />
          <label>I agree to receive information from Discovery Communications in accordance with the following <u>Private Policy</u></label>
        </form>
    </div>
)

export default EmailForm
