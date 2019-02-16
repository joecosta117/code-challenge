import React from 'react';

const EmailForm = ({ email, emailDone, handleChange, handleSubmit }) => (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
        SIGN UP FOR THE TLC NEWSLETTER.
          <input type="text" name="email" value={email} placeholder="enter email address" onChange={handleChange}/>
        </label>
        <button type="submit" >NEXT</button>
      </form>
    </div>
)

export default EmailForm
