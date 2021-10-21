import React from "react";
import { Link } from "react-router-dom";

import style from './ImageList.module.css';

const ImageList = (props) => {
  console.log("props of images", props);
  console.log('style', style);

  return (
      <div className={style.grid_block}>

          <h1>{props.name}</h1>
          <Link
            className={style.tile_link}
            to={{
              pathname: `/details/${props._id}`,
              state: props,
            }}
            key={props.day}
          >
            <img className={`${style.tile_img} ${style.tile_img1}`} src={props.url} alt="" />
          </Link>

      </div>
  );
};

export default ImageList;
