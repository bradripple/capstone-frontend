import React from "react";
import { FaInstagramSquare, FaEnvelope } from "react-icons/fa";

import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="text-center">
        <a href="http://www.instagram.com/b_radical_ripple/" target="_blank" rel="noopener noreferrer" className={style.icon} ><FaInstagramSquare size="3em" /></a>
        <a href="mailto:bradripple@gmail.com" target="_blank" rel="noopener noreferrer" className={style.icon}><FaEnvelope size="3em" /></a> 
        <br/>
        <span className="text-muted">@2021 Built by RIPPLE</span>
      </div>
    </footer>
  );
};

export default Footer;