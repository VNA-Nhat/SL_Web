import React, { Component } from 'react';
import './Login.css'; // Import your CSS


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleLogin = () => {
    // Implement the login functionality here
    // You can use this.state.username and this.state.password to access the input values
    // Redirect the user to their dashboard or another page upon successful login
  };

  render() {
    return (
      <div>
        <h2>Login</h2>
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
        <button onClick={this.handleLogin}>Log In</button>
        <p>
          Not have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    );
  }
}

export default Login;
