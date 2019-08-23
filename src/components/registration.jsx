import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";


class LoginForm extends Form {
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

  doSubmit = () => {
    // Call the server
    console.log("Submitted");
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

export default LoginForm;
