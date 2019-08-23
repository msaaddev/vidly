import React, { Component } from "react";
import MovieInput from "./movieInput";
import Joi from "joi-browser";

class NewMovie extends Component {
  state = {
    data: { title: "", genre: "", noOfStock: "", rate: "" },
    errors: {}
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({errors: errors || {}})
  };

  handleChange = e => {
    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data });
  };

  schema = {
    title: Joi.string().required(),
    genre: Joi.string().required(),
    noOfStock: Joi.number()
      .required()
      .min(0)
      .max(100),
    rate: Joi.number()
      .required()
      .min(0)
      .max(10)
  };

  validate = () => {
    const options = { abortEarly: false };
    const result = Joi.validate(this.state.data, this.schema, options);
    const { error } = Joi.validate(this.state.data, this.schema, options);
    console.log(result);

    if (!error) return null;

    const errors = {};

    for (let item of error.details) errors[item.path[0]] = item.message;
    console.log(errors);
    return errors;
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          ‏
          <MovieInput
            data={data}
            name="title"
            label="Title"
            onChange={this.handleChange}
          />
          <div className="form-group">
            <label htmlFor="genre">Genre</label>
            <select
              name="genre"
              value={data.genre}
              id="genre"
              type="text"
              className="form-control"
              onChange={this.handleChange}
            >
              <option />
              <option>Action</option>
              <option>Comedy</option>
              <option>Thriller</option>
            </select>
          </div>
          <MovieInput
            data={data}
            name="noOfStock"
            label="Number in Stock"
            onChange={this.handleChange}
          />
          <MovieInput
            data={data}
            name="rate"
            label="Rate"
            onChange={this.handleChange}
          />
          <button className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  }
}

export default NewMovie;
