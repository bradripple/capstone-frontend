import React from "react";
import ripple from "../video/ripples.mp4";
import video from "./Video.module.css";

import style from "./About.module.css";

const About = () => {
  return (
    <div>
      <video id={video.videoBG} autoPlay loop muted>
        <source src={ripple} type="video/mp4" />
      </video>
      <h1 className={style.about}>Bradley Ripple</h1>
      <div className={style.about_container}>
        <img
          src="https://i.imgur.com/WCxAqiW.jpg"
          alt=""
          className={style.img}
        />
        <p className={style.item1}>
          Born and raised in the Rocky Mountains of Utah. I have lived on Maui,
          Oahu and in Denver. Out of the last 12 years I have spent 6 of them
          traveling and exploring foreign lands and cultures. My photography is
          primarily documenting the most beautiful scenery I have come across. I
          hope you enjoy this peak through my lens on life.
        </p>
      </div>
    </div>
  );
};

export default About;
