import React from "react";

import InterestsList from "../interests/InterestsList";
import SkillsList from "../skills/SkillsList";

import "./About.css";

const About = () => {
  return (
    <div className="about-main">
      <h4 className="aboutme-text">About Me</h4>
      <p className="about-text">
        Ever wondered how you can build an online presence which can help users
        to find you easily on the internet? You need not worry anymore. Because
        that's basically how I serve my clients. Feel free to take a look at my
        current tech stack below which am still broadening in terms of learning.
        
      </p>
      <SkillsList />
      <InterestsList />
    </div>
  );
};

export default About;
