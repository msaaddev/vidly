import React from "react";

const Input = ({ name, label, value, onChange }) => {
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
    </div>
  );
};

export default Input;
