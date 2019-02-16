import React from 'react';

const EmailForm = ({ email, emailDone, checked, handleChange, handleSubmit }) => (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
        <span className="formTitle">SIGN UP FOR THE TLC NEWSLETTER.</span>
          <input type="text" name="email" value={email} placeholder="enter email address" onChange={handleChange} className="formField"/>
        </label>
        <button type="submit" className="button"><span className="buttonText">NEXT</span></button>
      </form>
      <form onSubmit={handleSubmit} className="agreement">
          <input onChange={handleChange} type="checkbox" checked={checked} />
          <label>I agree to receive information from Discovery Communications in accordance with the following <u>Private Policy</u></label>
        </form>
    </div>
)

export default EmailForm
