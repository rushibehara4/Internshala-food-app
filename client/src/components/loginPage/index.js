import React, { useState, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { store } from "../../App";

import "./index.css";

const LoginPage = () => {
  const [token, setToken] = useContext(store);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToHome, setRedirectToHome] = useState(false);

  const onChangeInputEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangeInputPassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitLoginForm = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:5001/login", { email, password })
      .then((response) => {
        setToken(response.data.token);
        if (response.data.token) {
          setRedirectToHome(true);
          localStorage.setItem("token", token)
        } else {
          alert("Wrong Email or Password!");
        }
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        alert("An error occurred while logging in. Please try again.");
      });
  };

  if (redirectToHome) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-heading">Happy to see you</h1>
        <p>Login to Order</p>
        <img
          src="https://toppng.com/uploads/preview/kebab-food-transparent-background-116679484327o85ke4m3e.png"
          alt="login-food-img"
          className="login-food-image"
        />
        <form
          className="login-form-container"
          onSubmit={onSubmitLoginForm}
          autoComplete="off"
        >
          <input
            type="email"
            className="login-input-element"
            placeholder="Email"
            onChange={onChangeInputEmail}
            id="loginEmail"
            value={email}
            name="email"
            required
          />
          <input
            type="password"
            className="login-input-element"
            placeholder="Password"
            id="loginPassword"
            name="password"
            value={password}
            onChange={onChangeInputPassword}
            required
          />
          <div className="login-links-container">
            <Link to="/forgotPassword" className="login-links-element">
              Forgot Password
            </Link>
            <p className="login-links-description">
              Not a Member:{" "}
              <Link to="/register" className="login-links-element">
                Sign Up
              </Link>
            </p>
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
