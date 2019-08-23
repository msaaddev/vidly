import React, { Component } from "react";
import Joi from "joi-browser";
import MovieInput from "./movieInput";

class NewMovieFrom extends Component {
  state = {
    data: {},
    errors: {}
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
  };

  handleChange = e => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(e.currentTarget);
    if (errorMessage) errors[e.currentTarget.name] = errorMessage;
    else delete errors[e.currentTarget.name];

    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data, errors });
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);

    if (!error) return null;

    const errors = {};

    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  renderMovieInput = (name, label, tag) => {
    const { data, errors } = this.state;
    return (
      <MovieInput
        data={data}
        name={name}
        label={label}
        error={errors[name]}
        onChange={this.handleChange}
        tag={tag}
      />
    );
  };

  renderButton = label => {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  };
}

export default NewMovieFrom;
