import { Divider } from "@mui/material";

import React from "react";

import "./Introduction.css";

const Introduction = () => {
  return (
    <div className="introduction-main">
      <h1 className="welcome-text">Welcome.</h1>
      <div className="introduction-description">
        <h5 className="padding-left">
          My name is Samuel Njenga, I am a full stack software developer based
          in Nairobi, Kenya. I have developed many types of applications from
          workout applications to Ecommerce platforms.
        </h5>
        <h5 className="padding-left">
          I am passionate about cutting-edge, pixel-perfect, beautiful
          interfaces and intuitively implemented UX.
        </h5>
      </div>
    </div>
  );
};

export default Introduction;