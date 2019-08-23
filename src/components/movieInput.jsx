import React from "react";

const MovieInput = ({ data, onChange, name, label }) => {
  return (
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
  );
};

export default MovieInput;
