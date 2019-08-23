import React, { Component } from "react";
import Joi from "joi-browser";
import MovieInput from "./movieInput";
import NewMovieFrom from "./newMovieForm";

class NewMovie extends NewMovieFrom {
  state = {
    data: { title: "", genre: "", noOfStock: "", rate: "" },
    errors: {}
  };

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    noOfStock: Joi.number()
      .required()
      .min(0)
      .max(100).label("Number in Stock"),
    rate: Joi.number()
      .required()
      .min(0)
      .max(10).label("Rate")
  };

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderMovieInput("title", "Title")}
          {this.renderMovieInput("genre", "Genre", "select")}
          {this.renderMovieInput("noOfStock", "Number in Stock")}
          {this.renderMovieInput("rate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default NewMovie;
