import React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { grey } from "@mui/material/colors";
import { Card } from "react-bootstrap";

import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-main">
      <h4>Want to connect with me? Here are my socials</h4>
      <div>
        <div className="margin-right socials-div">
          <div className="card-div">
            <Card>
              <Card.Body>
                <Card.Title>Github</Card.Title>
                <Card.Text className="icon-center icon-color">
                  <GitHubIcon />
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Link here</small>
              </Card.Footer>
            </Card>
          </div>
          <div className="card-div">
            <Card>
              <Card.Body>
                <Card.Title>LinkedIn</Card.Title>
                <Card.Text className="icon-center icon-color">
                  <LinkedInIcon />
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Link here</small>
              </Card.Footer>
            </Card>
          </div>
        </div>
      </div>
      <h4>You can also reach out to me through</h4>
      <div>
        <div className="margin-right socials-div">
          <div className="card-div">
            <Card>
              <Card.Body>
                <Card.Title>Email</Card.Title>
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
