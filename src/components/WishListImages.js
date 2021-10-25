import React, { useState } from "react";
import setAuthToken from "../utils/setAuthToken";
import Axios from "axios";

import style from "./ImageList.module.css";

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
    <div className={style.grid_block}>
      <h1>{props.name}</h1>
      <p>{props.location}</p>
      <div className={style.tile_link}>
        <img
          className={`${style.tile_img} ${style.tile_img1}`}
          src={props.url}
          alt=""
        />
      </div>
      <div className={style.text_box}>
        <div className={style.btn_box}>
          <button
            className={`${style.btn} ${style.btn_white}`}
            onClick={handleSubmit}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishListImages;
