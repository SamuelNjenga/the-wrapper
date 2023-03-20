import React from "react";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import "./SkillsList.css";

const SkillsList = () => {
  return (
    <div>
      <h4 className="skills-header">Skills</h4>
      <h5 className="languages-tools">Programming Languages & Tools</h5>
      <section className="resume-section" id="skills">
        <div className="resume-section-content justify-content">
          <ul className="list-inline dev-icons">
            <li className="list-inline-item skill-text">
              <FiberManualRecordIcon
                className="skills-icons"
                fontSize="small"
              />
              <span>HTML</span>
            </li>
            <li className="list-inline-item skill-text">
              <FiberManualRecordIcon
                className="skills-icons"
                fontSize="small"
              />
              <span>CSS</span>
            </li>
            <li className="list-inline-item skill-text">
              <FiberManualRecordIcon
                className="skills-icons"
                fontSize="small"
              />
              <span>JavaScript</span>
            </li>
            <li className="list-inline-item skill-text">
              <FiberManualRecordIcon
                className="skills-icons"
                fontSize="small"
              />
              <span>React</span>
            </li>
            <li className="list-inline-item skill-text">
              <FiberManualRecordIcon
                className="skills-icons"
                fontSize="small"
              />
              <span>NodeJs</span>
            </li>
            <li className="list-inline-item skill-text">
              <FiberManualRecordIcon
                className="skills-icons"
                fontSize="small"
              />
              <span>TypeScript</span>
            </li>
            <li className="list-inline-item skill-text">
              <FiberManualRecordIcon
                className="skills-icons"
                fontSize="small"
              />
              <span>Express Framework</span>
            </li>
            <li className="list-inline-item skill-text">
              <FiberManualRecordIcon
                className="skills-icons"
                fontSize="small"
              />
              <span>SQL</span>
            </li>
            <li className="list-inline-item skill-text">
              <FiberManualRecordIcon
                className="skills-icons"
                fontSize="small"
              />
              <span>Swagger tool</span>
            </li>
            <li className="list-inline-item skill-text">
              <FiberManualRecordIcon
                className="skills-icons"
                fontSize="small"
              />
              <span>Git</span>
            </li>
          </ul>
          <h5 className="languages-tools">My General Workflow</h5>
          <ul className="fa-ul mb-0 dev-icons">
            <li className="skill-text">
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Keeping the code simple & maintainable
            </li>
            <li className="skill-text">
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Code that follows the codebase's conventions as well as best
              practices
            </li>
            <li className="skill-text">
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Code that aligns with the industry standards
            </li>
            <li className="skill-text">
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Reliable, secure, interactive and on-time UI reponse
            </li>
            <li className="skill-text">
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Responsive design & UI
            </li>
            <li className="skill-text">
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Cross browser testing & debugging
            </li>
            <li className="skill-text">
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Quality, seamless progressive web applications
            </li>
            <li className="skill-text">
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Agile development methodology
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default SkillsList;
