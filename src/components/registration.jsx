import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as userService from "../services/userService";

class RegistrationForm extends Form {
  state = {
    data: { username: "", password: "", nameOfUser: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .email()
      .required()
      .label("Username"),
    password: Joi.string()
      .alphanum()
      .min(5)
      .required()
      .label("Password"),
    nameOfUser: Joi.string()
      .label("Name")
      .required()
  };

  doSubmit = async () => {
    // Call the server
    await userService.register(this.state.data)
  };

  render() {
    return (
      <div>
        <h1>Registration</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("nameOfUser", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
