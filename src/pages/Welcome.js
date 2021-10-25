import React from "react";
import { Link } from "react-router-dom";
import ripple from "../video/ripples.mp4";

import video from "../components/Video.module.css";
import style from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div>
      <video
        id={video.videoBG}
        autoPlay
        loop
        muted
        className={style.video}
      >
        <source src={ripple} type="video/mp4" />
      </video>
      <header className={style.header}>
        <div className={style.text_box}>
          <h1 className={`${style.heading_primary} ${style.h1}`}>
            <span className={`${style.heading_primary_main} ${style.flux}`}>Ripple</span>
            <span className={style.heading_primary_sub}>Photography</span>
          </h1>
          <Link to="/gallery" className={`${style.btn} ${style.btn_white} ${style.btn_animated}`}>Gallery</Link>
        </div>
      </header>
    </div>
  );
};

export default Welcome;
