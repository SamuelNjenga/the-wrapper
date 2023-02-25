import React from "react";

import LinkIcon from "@mui/icons-material/Link";

import Awards from "../awards/Awards";

import "./Portfolio.css";
const Portfolio = () => {
  return (
    <div className="portfolio-main">
      <h4 className="portfolio-title">
        Take a look at some of the projects am working on currently
      </h4>
      <div id="portfolio" className="margin-right">
        <div class="container-fluid p-0">
          <div class="row g-0">
            <div class="col-lg-4 col-sm-6">
              <a
                class="portfolio-box"
                href="https://github.com/SamuelNjenga/restaurant_frontend"
                title="Restaurant App"
              >
                <img
                  class="img-fluid"
                  src="/src/assets/thumbnails/restaurant_caption.jpg"
                  alt="..."
                />
                <div class="portfolio-box-caption">
                  <div class="project-name portfolio-title">RESTAURANT APP</div>
                  <div class="project-category text-white-50 center-icon">
                    App Link <LinkIcon />
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-sm-6">
              <a
                class="portfolio-box"
                href="https://github.com/SamuelNjenga/messaging-app"
                title="Messaging"
              >
                <img
                  class="img-fluid"
                  src="/src/assets/thumbnails/messaging_caption.jpg"
                  alt="..."
                />
                <div class="portfolio-box-caption">
                  <div class="project-name portfolio-title">MESSAGING APP</div>
                  <div class="project-category text-white-50 center-icon">
                    App Link <LinkIcon />
                  </div>
                </div>
              </a>
            </div>
            <div class="col-lg-4 col-sm-6">
              <a
                class="portfolio-box"
                href="https://github.com/SamuelNjenga/workout-admin"
                title="Workout App"
              >
                <img
                  class="img-fluid"
                  src="/src/assets/thumbnails/workout_caption.jpg"
                  alt="..."
                />
                <div class="portfolio-box-caption">
                  <div class="project-name portfolio-title">WORKOUT APP</div>
                  <div class="project-category text-white-50 center-icon">
                    App Link <LinkIcon />
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
