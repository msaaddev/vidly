import React from "react";

const MovieInput = ({ data, onChange, name, label, tag }) => {
  return (
    <React.Fragment>
      {(tag && (
        <div className="form-group">
          <label htmlFor="title">{label}</label>
          <select
            name={name}
            value={data[name]}
            id={name}
            type="text"
            className="form-control"
            onChange={onChange}
          >
            <option />
            <option>Action</option>
            <option>Comedy</option>
            <option>Thriller</option>
          </select>
        </div>
      )) || (
        <div className="form-group">
          <label htmlFor="title">{label}</label>
          <input
            name={name}
            value={data[name]}
            id={name}
            type="text"
            className="form-control"
            onChange={onChange}
          />
        </div>
      )}
    </React.Fragment>
  );
};

export default MovieInput;
