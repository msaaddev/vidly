import React, { Component } from "react";

class NewMovie extends Component {
  state = {
    data: { title: "", genre: "", noOfStock: "", rate: "" }
  };
  render() {
    const { data } = this.state;
    return (
      <div>
        <h1>Movie Form</h1>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            name="title"
            value={data.title}
            id="title"
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <select
            name="genre"
            value={data.genre}
            id="genre"
            type="text"
            className="form-control"
          >
            <option />
            <option>Action</option>
            <option>Comedy</option>
            <option>Thriller</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="noOfStock">Number in Stock</label>
          <input
            name="noOfStock"
            value={data.noOfStock}
            id="noOfStock"
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="rate">Rate</label>
          <input
            name="rate"
            value={data.rate}
            id="rate"
            type="text"
            className="form-control"
          />
        </div>
      </div>
    );
  }
}

export default NewMovie;
