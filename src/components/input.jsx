import React from "react";

const Input = ({ name, label, value, onChange, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        className="form-control"
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        id={name}
      />
     {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
