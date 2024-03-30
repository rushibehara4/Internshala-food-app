import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./index.css";

class RegisterPage extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    showError: false,
    errorMsg: "",
  };

  onInputUsernameChange = (event) => {
    this.setState({username: event.target.value})
  }

  onInputEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onInputPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onInputConfirmPasswordChange = (event) => {
    this.setState({ confirmpassword: event.target.value });
  };

  onSubmitForm = async (event) => {
    event.preventDefault();

    const { username, email, password, confirmpassword } = this.state;

    axios
      .post("http://localhost:5001/register", {
        username,
        email,
        password,
        confirmpassword,
      })
      .then((response) => alert(response.data));

    this.setState({
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    });
  };

  render() {
    const { username, email, password, confirmpassword, showError, errorMsg } =
      this.state;
    return (
      <div className="register-container">
        <div className="register-card">
          <h1 className="register-heading">Register Now</h1>
          <form
            className="register-form-container"
            onSubmit={this.onSubmitForm}
            autoComplete="off"
          >
            <div className="register-input-container">
              <label htmlFor="registerUsername" className="register-label-element">
                Username
              </label>
              <input
                type="text"
                className="register-input-element"
                placeholder="Username"
                value={username}
                id="registerUsername"
                name="username"
                onChange={this.onInputUsernameChange}
                required
              />
            </div>
            <div className="register-input-container">
              <label htmlFor="registerEmail" className="register-label-element">
                Email
              </label>
              <input
                type="email"
                className="register-input-element"
                placeholder="Email"
                value={email}
                id="registerEmail"
                name="email"
                onChange={this.onInputEmailChange}
                required
              />
            </div>
            <div className="register-input-container">
              <label
                htmlFor="registerPassword"
                className="register-label-element"
              >
                Password
              </label>
              <input
                type="password"
                className="register-input-element"
                placeholder="Password"
                value={password}
                name="password"
                id="registerPassword"
                onChange={this.onInputPasswordChange}
                required
              />
            </div>
            <div className="register-input-container">
              <label
                htmlFor="registerConfirmPassword"
                className="register-label-element"
              >
                Confirm password
              </label>
              <input
                type="password"
                className="register-input-element"
                placeholder="Confirm Password"
                value={confirmpassword}
                onChange={this.onInputConfirmPasswordChange}
                id="registerConfirmPassword"
                name="confirmpassword"
                autoComplete="new-password"
                required
              />
            </div>
            {showError && (
              <div className="register-error-message">*{errorMsg}</div>
            )}
            <div className="register-login-content-container">
              <p className="register-account-description">
                Already have an account?{" "}
                <Link to="/login" className="register-login-element">
                  Sign In
                </Link>
              </p>
            </div>
            <div className="register-button-container">
              <button type="submit" className="register-button">
                Register Now
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterPage;
