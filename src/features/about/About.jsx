import React from "react";

import SkillsList from "../skills/SkillsList";

import "./About.css";

const About = () => {
  return (
    <div className="about-main">
      <h4>About Me</h4>
      <p>
        Ever wondered how you can build an online presence which can help users
        to find you easily on the internet?
      </p>
      <p>You need not worry anymore. Because that's basically how I do serve my clients.</p>
      <p>Feel free to take a look at my current tech stack which am still broadening in terms of learning</p>
      <SkillsList />
    </div>
  );
};

export default About;
