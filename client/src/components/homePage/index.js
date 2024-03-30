import React, { useState, useContext, useEffect } from "react";
import { store } from "../../App";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

import Header from "../Header";

import "./index.css";

const HomePage = () => {
  const [token, setToken] = useContext(store);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) return;

    axios
      .get("http://localhost:5001/", {
        headers: {
          "x-token": token,
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [token]);

  const handleLogout = () => {
    setToken(null);
  };

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="home-container">
          <Header
            username={data ? data.username : ""}
            logout={handleLogout}
          />
          <div className="home-card-container">
            <p className="home-user-info">
              Welcome back,{" "}
              <span className="home-span-username">
                {" "}
                {data ? data.username : ""}
              </span>
            </p>
            <h1 className="home-title">
              <span className="home-title-span-2">Explore Our Menu</span>
              <br/>
              Find Best Dishes for you! The Flavour of Your Wish
            </h1>
            <p className="home-para">Call us; We"ll Be There</p>
            <div className="home-button-container">
              <Link to="/menu"><button className="home-order-button">Full Menu</button></Link>
              <Link to="/contacts"><button className="home-menu-button">Call Us</button></Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
