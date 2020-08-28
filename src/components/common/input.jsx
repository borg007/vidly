import React from "react";

const Input = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>Username</label>
      <input
        value={account.username}
        onChange={this.handleChange}
        id={props.name}
        name={props.name}
        type="text"
        maxLength="20"
        className="form-control"
      />
    </div>
  );
};

export default Input;
