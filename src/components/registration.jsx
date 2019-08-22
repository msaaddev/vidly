import React, { Component } from "react";
import Joi from "joi-browser";

class RegistrationForm extends Component {
  state = {
    data: { username: "", password: "", nameOfUser: "" },
    errors: {}
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = e => {
    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data });
  };

  schema = {
    username: Joi.email().required(),
    password: Joi.min(5).required(),
    nameOfUser: Joi.string().required()
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              name="username"
              value={this.state.data.username}
              id="username"
              type="text"
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              value={this.state.data.password}
              id="password"
              type="text"
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              name="nameOfUser"
              value={this.state.data.nameOfUser}
              id="name"
              type="text"
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
