import React, { Component } from 'react';
import NameForm from './name-form'
import EmailForm from './email-form'
import CongratsForm from './congrats-form'

class FormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      emailDone: false,
      namesDone: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.isValidEmail = this.isValidEmail.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    if (this.state.firstName || this.state.lastName) {
      if (this.state.firstName && this.state.lastName) {
        this.setState({namesDone: true})
      } else {
        alert('Please enter your first and last name')
      }
    } else if (this.state.email) {
      if (this.isValidEmail(this.state.email)) {
        this.setState({emailDone: true})
      } else {
        alert('Please enter a valid email address')
      }
    }
    event.preventDefault();
  }

  isValidEmail(str) {
    return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(str)
  }

  render() {
    return (
      <div>
        {!this.state.emailDone && (
          <EmailForm
            email={this.state.email}
            emailDone={this.state.emailDone}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />)}
        {(this.state.emailDone && !this.state.namesDone) && (
          <NameForm
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />)}
        {(this.state.namesDone && this.state.emailDone) && (
          <CongratsForm />
        )}
      </div>
    )
  }
}

export default FormContainer
