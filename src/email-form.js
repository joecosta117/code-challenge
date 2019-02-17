import React from 'react';

const EmailForm = ({ email, emailDone, checked, handleChange, handleSubmit }) => (
    <div>
    <span className="
    formTitle item">SIGN UP FOR THE TLC NEWSLETTER</span>
      <form onSubmit={handleSubmit} className="item">
        <div id="inputForm">
          <input type="text" name="email" value={email} placeholder="enter email address" className="formField" onChange={handleChange} />
          <button type="submit" className="button">NEXT</button>
        </div>
      </form>
      <form onSubmit={handleSubmit} className="item" id="checkAgreement">
          <input onChange={handleChange} type="checkbox" checked={checked} />
          <label className="agreement">I agree to receive information from Discovery Communications in accordance with the following <u>Private Policy</u></label>
        </form>
    </div>
)

export default EmailForm
