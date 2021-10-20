import React, { useState } from "react";
import setAuthToken from "../utils/setAuthToken";
import Axios from "axios";

const { REACT_APP_SERVER_URL } = process.env;

const WishListImages = (props) => {
  let token = localStorage.getItem("jwtToken");
  console.log("wishlistimages props", props);

  setAuthToken(token);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.reload();
    
    Axios.delete(`${REACT_APP_SERVER_URL}/wishlists/${props._id}`)
      .then((response) => {
        console.log("===> deleting a image from wishlist");
        console.log("delete image from wishlist response", response);
      })
      .catch((error) => console.log("===> Error in Signup", error));
  };


  return (
    <div>
      <h1>{props.name}</h1>
      <button onClick={handleSubmit}>Delete from WishList</button>
      <p>{props.location}</p>
      <img src={props.url} alt="" />
    </div>
  );
};

export default WishListImages;
