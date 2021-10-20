import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";


const ImageList = (props) => {
  console.log("props of images", props);

  return (
    <div>

      <Link
        to={{
          pathname: `/details/${props._id}`,
          state: props,
        }}
        key={props.day}
      ><img src={props.url} alt="" /></Link>
    </div>
  );
};

export default ImageList;
