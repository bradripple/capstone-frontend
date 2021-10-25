// Imports
import React, { useState, useEffect } from "react";
import Axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import ImageList from "../components/ImageList";
import REACT_APP_SERVER_URL from "../config";


import style from '../components/ImageList.module.css';

// const { REACT_APP_SERVER_URL } = process.env;

const Gallery = () => {
  const [images, setImages] = useState();
  let token = localStorage.getItem("jwtToken");
  console.log("hit gallery route");

  setAuthToken(token);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await Axios.get(`${REACT_APP_SERVER_URL}/images`);
      console.log("fetch images", response.data.images);
      setImages(response.data.images);
    };
    fetchImages();
  }, []);

  const allImages = () => {
    return images.map((e, i) => {
      return (
        <ImageList
          key={i}
          _id={e._id}
          name={e.name}
          url={e.url}
          location={e.location}
          subject={e.subject}
        />
      );
    });
  };

  let displayImagesList = images ? allImages() : <h2>Hold your 🐎</h2>;

  return <div className={`${style.grid} ${style.image_grid}`}>{displayImagesList}</div>;
};

export default Gallery;
