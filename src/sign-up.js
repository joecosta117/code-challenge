import React, { Component, Form } from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({email: event.target.value})
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.email);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
          SIGN UP FOR THE TLC NEWSLETTER.
            <input type="text" value={this.state.email} onChange={this.handleChange} />
          </label>
          <button type="submit" >NEXT</button>
        </form>
      </div>
    )
  }
}
