import React, { Component } from "react";
import Joi from "joi-browser";

class RegistrationForm extends Component {
  state = {
    data: { username: "", password: "", nameOfUser: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .alphanum()
      .min(5)
      .required(),
    nameOfUser: Joi.string().required()
  };

  validate = () => {
    const option = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, option);
    if (!error) return null;

    const errors = {};

    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors });
    console.log(this.state.errors);
    if (errors) return;
  };

  handleChange = e => {
    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data });
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
            {this.state.errors && (
              <div className="alert alert-danger">
                {this.state.errors.username}
              </div>
            )}
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
