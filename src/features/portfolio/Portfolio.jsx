import React from "react";

import LinkIcon from "@mui/icons-material/Link";
import Avatar from "@mui/material/Avatar";
import GitHubIcon from "@mui/icons-material/GitHub";
import { deepOrange } from "@mui/material/colors";

import Awards from "../awards/Awards";

import "./Portfolio.css";
const Portfolio = () => {
  return (
    <div className="portfolio-main">
      <h4 className="portfolio-title">
        Take a look at some of the projects am working on currently:
      </h4>
      <div id="portfolio" className="margin-right">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-lg-4 col-sm-6 img-div">
              <span className="number-text">
                <Avatar
                  sx={{ width: 24, height: 24, bgcolor: deepOrange[500] }}
                >
                  1
                </Avatar>
              </span>
              <a
                className="portfolio-box"
                href="https://github.com/SamuelNjenga/restaurant_frontend"
                title="Restaurant App"
              >
                <img
                  className="img-fluid"
                  src="/src/assets/thumbnails/restaurant_caption.jpg"
                  alt="..."
                />
                <div className="portfolio-box-caption">
                  <div className="project-name portfolio-title">
                    RESTAURANT APP
                  </div>
                  <div className="project-category text-white-50 center-icon">
                    App Link <GitHubIcon />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6 img-div">
              <span className="number-text">
                <Avatar
                  sx={{ width: 24, height: 24, bgcolor: deepOrange[500] }}
                >
                  2
                </Avatar>
              </span>
              <a
                className="portfolio-box"
                href="https://github.com/SamuelNjenga/messaging-app"
                title="Messaging App"
              >
                <img
                  className="img-fluid"
                  src="/src/assets/thumbnails/messaging_caption.jpg"
                  alt="..."
                />
                <div className="portfolio-box-caption">
                  <div className="project-name portfolio-title">
                    MESSAGING APP
                  </div>
                  <div className="project-category text-white-50 center-icon">
                    App Link <GitHubIcon />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6 img-div">
              <span className="number-text">
                <Avatar
                  sx={{ width: 24, height: 24, bgcolor: deepOrange[500] }}
                >
                  3
                </Avatar>
              </span>
              <a
                className="portfolio-box"
                href="https://github.com/SamuelNjenga/workout-admin"
                title="Workout App"
              >
                <img
                  className="img-fluid"
                  src="/src/assets/thumbnails/workout_caption.jpg"
                  alt="..."
                />
                <div className="portfolio-box-caption">
                  <div className="project-name portfolio-title">
                    WORKOUT APP
                  </div>
                  <div className="project-category text-white-50 center-icon">
                    <GitHubIcon />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Awards />
    </div>
  );
};

export default Portfolio;
