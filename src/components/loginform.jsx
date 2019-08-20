import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" }
  };

  handleSubmit = e => {
    e.preventDefault();

    // Call the server
    console.log("Submitted");
  };

  handleChange = e => {
    const account = { ...this.state.account }; // this will copy the state into account
    account[e.currentTarget.name] = e.currentTarget.value; //this statement will dynamically assign the inputed username/password to the account
    this.setState({ account }); // this will then change the state of account
  };

  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={account.password}
              onChange={this.handleChange}
              name="password"
              id="password"
              type="text"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
