import React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { Card } from "react-bootstrap";

import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-main">
      <h4 className="text-title connect-title">
        Want to connect with me? Here are my socials
      </h4>
      <div>
        <div className="margin-right socials-div">
          <div className="card-div github-div">
            <Card>
              <Card.Body>
                <Card.Title>
                  <span className="socials-title">Github</span>
                </Card.Title>
                <Card.Text className="icon-center icon-color">
                  <GitHubIcon />
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <a
                  href="https://github.com/SamuelNjenga"
                  className="text-muted link-text"
                >
                  Link Here
                </a>
              </Card.Footer>
            </Card>
          </div>
          <div className="card-div linkedin-text">
            <Card>
              <Card.Body>
                <Card.Title>
                  <span className="socials-title">LinkedIn</span>
                </Card.Title>
                <Card.Text className="icon-center icon-color">
                  <LinkedInIcon />
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <a
                  href="https://www.linkedin.com/in/samuel-njenga-493736192/"
                  className="text-muted link-text"
                >
                  Link Here
                </a>
              </Card.Footer>
            </Card>
          </div>
        </div>
      </div>
      {/* <h3>Want to work together or have any questions?</h3> */}
      <div className="email-div">
        <div className="margin-right socials-div">
          <div className="card-div">
            <Card>
              <Card.Body>
                <Card.Title>
                  <h4 className="text-title">
                    Want to work together or have any questions?
                  </h4>
                </Card.Title>
                <Card.Text className="icon-center icon-color">
                  <EmailIcon />
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">snjenga704@gmail.com</small>
              </Card.Footer>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
