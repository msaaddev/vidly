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
    this.validate();
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

  validate = e => {
    const options = { abortEarly: false };
    const result = Joi.validate(this.state.data, this.schema, options);
    console.log(result);
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
