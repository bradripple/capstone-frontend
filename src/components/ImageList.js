import React from "react";
import { Link } from "react-router-dom";

// import '../pages/Gallery.css';

const ImageList = (props) => {
  console.log("props of images", props);

  return (
      <div className="grid-block">
        <div className="tile">
          <h1>{props.name}</h1>
          <Link
            className="tile-link"
            to={{
              pathname: `/details/${props._id}`,
              state: props,
            }}
            key={props.day}
          >
            <img className="tile-img tile-img1" src={props.url} alt="" />
          </Link>
        </div>
      </div>
  );
};

export default ImageList;
