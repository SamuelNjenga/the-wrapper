import React from "react";
import { Link } from "react-router-dom";

import "./Introduction.css";

const Introduction = () => {
  return (
    <div className="introduction-main masthead">
      <h1 className="welcome-text">Welcome.</h1>
      <div className="introduction-description">
        <h5 className="padding-left justify-text">
          My name is Samuel Njenga, I'm a Software Engineer that welcomes
          challenges and architects solutions. I am based in Nairobi, Kenya. I
          have developed many types of applications from workout applications to
          Ecommerce platforms.
        </h5>
        <h5 className="padding-left justify-text">
          I am passionate about cutting-edge, pixel-perfect, beautiful
          interfaces and intuitively implemented UX.
        </h5>
        <Link to="/portfolio" style={{ textDecoration: "none" }}>
          <h6 className="padding-left text-italics">
            View Portfolio
            <div className="arrow bounce">
              <a className="fa fa-arrow-down fa-2x"></a>
            </div>
          </h6>
        </Link>
      </div>
    </div>
  );
};

export default Introduction;
