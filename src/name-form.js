import React, { Component } from 'react';

class NameForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      noNames: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    if (this.state.firstName && this.state.lastName) {
      alert(`A name was submitted: ${this.state.firstName} ${this.state.lastName}`);
    } else {
      this.setState({noNames: true})
    }
    event.preventDefault();
  }

  render() {
    console.log('this.state: ', this.state)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
          {this.state.noNames === true && (
            <span>ALMOST DONE! PLEASE ENTER YOUR FIRST AND LAST NAME.</span>
          )}
          {this.state.noNames === false && (
            <span>SIGN UP FOR THE TLC NEWSLETTER.</span>
          )}
            <input type="text" name="firstName" value={this.state.firstName} placeholder="First Name" onChange={this.handleChange} />
            <input type="text" name="lastName" value={this.state.lastName} placeholder="Last Name" onChange={this.handleChange} />
          </label>
          <button type="submit" >SIGN UP</button>
        </form>
      </div>
    )
  }
}

export default NameForm
