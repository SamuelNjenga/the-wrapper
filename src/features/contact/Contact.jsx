import React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import SmartphoneIcon from "@mui/icons-material/Smartphone";

import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-main">
      Want to connect with me? Here are my socials
      <div>
        <GitHubIcon />
        <LinkedInIcon />
      </div>
      You can also reach out to me through
      <div>
        <EmailIcon />
        <SmartphoneIcon />
      </div>
    </div>
  );
};

export default Contact;
