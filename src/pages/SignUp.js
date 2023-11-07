import React, { Component } from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      // Add more fields for sign-up as needed (e.g., email, name, etc.)
    };
  }

  handleSignUp = () => {
    // Implement the sign-up functionality here
    // You can use this.state to access the input values
    // After successful sign-up, you can redirect the user to the login page or another page
  };

  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={this.state.username}
            onChange={(e) => this.setState({ username: e.target.value })}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>
        {/* Add more input fields for other sign-up information */}
        <button onClick={this.handleSignUp}>Sign Up</button>
        <p>
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    );
  }
}

export default SignUp;
