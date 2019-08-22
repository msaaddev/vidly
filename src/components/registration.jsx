import React, { Component } from "react";
import Joi from "joi-browser";

class RegistrationForm extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Register</h1>
        <form action="">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input id="username" type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" className="form-control" />
          </div>
          <button type="submit" class="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
