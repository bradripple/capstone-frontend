import ripple from "../video/ripples.mp4";
import style from "./Form.module.css";
import video from "./Video.module.css";
// Imports
import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import REACT_APP_SERVER_URL from "../config";

// const { REACT_APP_SERVER_URL } = process.env;


const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // at the beginning of a submit function
    // make sure password and confirm password are equal
    // password length >= 8 characters
    if (password === confirmPassword && password.length >= 8) {
      const newUser = { name, email, password };
      axios
        .post(`${REACT_APP_SERVER_URL}/users/signup`, newUser)
        .then((response) => {
          console.log("===> Yay, new user");
          console.log(response);
          setRedirect(true);
        })
        .catch((error) => console.log("===> Error in Signup", error));
    } else {
      if (password !== confirmPassword) return alert("Passwords don't match");
      alert("Password needs to be at least 8 characters. Please try again.");
    }
  };

  if (redirect) return <Redirect to="/login" />; // You can have them redirected to profile (your choice)

  return (
    <div className="row mt-4">
      <video
        id={video.videoBG}
        autoPlay
        loop
        muted
      >
        <source src={ripple} type="video/mp4" />
      </video>
      <div className={style.card_container}>
        <div className={style.card}>
          <h1 className="py-2">Signup</h1>
          <form onSubmit={handleSubmit}>
            <div className={style.form_group}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleName}
                className="form-control"
              />
            </div>
            <div className={style.form_group}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleEmail}
                className="form-control"
              />
            </div>
            <div className={style.form_group}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handlePassword}
                className="form-control"
              />
            </div>
            <div className={style.form_group}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPassword}
                className="form-control"
              />
            </div>
            <button type="submit" className={style.btn}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
