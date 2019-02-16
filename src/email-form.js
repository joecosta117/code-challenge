import React from 'react';

const EmailForm = ({ email, emailDone, handleChange, handleSubmit }) => {
  return (
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
}

// class EmailForm extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       email: ''
//     }
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//     this.isValidEmail = this.isValidEmail.bind(this)
//   }

//   handleChange(event) {
//     this.setState({email: event.target.value})
//   }

//   handleSubmit(event) {
//     if (this.isValidEmail(this.state.email)) {
//       alert('A name was submitted: ' + this.state.email);
//     } else {
//       alert('Please enter a valid email address')
//     }
//     event.preventDefault();
//   }

//   isValidEmail(str) {
//     return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(str)
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//           SIGN UP FOR THE TLC NEWSLETTER.
//             <input type="text" value={this.state.email} placeholder="enter email address" onChange={this.handleChange} />
//           </label>
//           <button type="submit" >NEXT</button>
//         </form>
//       </div>
//     )
//   }
// }

export default EmailForm
