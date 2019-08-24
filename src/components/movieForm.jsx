import React from "react";
import Joi from "joi-browser";
import NewMovieFrom from "./newMovieForm";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

class EditMovie extends NewMovieFrom {
  state = {
    data: { title: "", genre: "", noOfStock: "", rate: "" },
    errors: {},
    movies: []
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  schema = {
    title: Joi.string()
      .required()
      .label("Title"),
    genre: Joi.string()
      .required()
      .label("Genre"),
    noOfStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number in Stock"),
    rate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Rate")
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

export default EditMovie;
