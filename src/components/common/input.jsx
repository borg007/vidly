import React from "react";
// ...rest gets the other properties from the props object
const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>

      <input {...rest} name={name} id={name} />

      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
