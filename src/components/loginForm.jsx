import React, { Component } from "react";

class LoginForm extends Component {
  username = React.createRef(); // only use refs to access the react dom if you have to

  /* componentDidMount() {
    this.username.current.focus(); // causes username input field to appear active or focused
  }*/

  handleSubmit = e => {
    e.preventDefault();
    // Call the server

    const username = this.username.current.value;
  };
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              autoFocus
              ref={this.username}
              id="username"
              type="text"
              maxLength="20"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="text"
              maxLength="20"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
