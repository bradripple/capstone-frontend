import React, { useState } from "react";
import { Redirect } from "react-router";
import setAuthToken from "../utils/setAuthToken";
import Axios from "axios";

const { REACT_APP_SERVER_URL } = process.env;

const Details = (props) => {
  const [image, setImage] = useState(props.location.state);
  const [redirect, setRedirect] = useState(false);
  let token = localStorage.getItem("jwtToken");
  console.log("details props", image);

  setAuthToken(token);

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.put(`${REACT_APP_SERVER_URL}/wishlists`, {image: image._id})
      .then((response) => {
        console.log("===> Yay, new exercise add to routine");
        console.log("add exercise to routine response", response);
        setRedirect(true);
      })
      .catch((error) => console.log("===> Error in Signup", error));
  };

  if (redirect) return <Redirect to="/profile" />;

  return (
    <div>
      <h1>{image.name}</h1>
      <button onClick={handleSubmit}>Add to wishlist</button>
      <img src={image.url} alt="" />
    </div>
  );
};

export default Details;
