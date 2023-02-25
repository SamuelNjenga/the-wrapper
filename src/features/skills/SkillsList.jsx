import React from "react";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import "./SkillsList.css";

const SkillsList = () => {
  return (
    <div>
      <h4 className="skills-header">Skills</h4>
      <h5 className="languages-tools">Programming Languages & Tools</h5>
      <section className="resume-section" id="skills">
        <div className="resume-section-content">
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <FiberManualRecordIcon fontSize="small" />
              <span>HTML</span>
            </li>
            <li className="list-inline-item">
              <FiberManualRecordIcon fontSize="small" />
              <span>CSS</span>
            </li>
            <li className="list-inline-item">
              <FiberManualRecordIcon fontSize="small" />
              <span>JavaScript</span>
            </li>
            <li className="list-inline-item">
              <FiberManualRecordIcon fontSize="small" />
              <span>React</span>
            </li>
            <li className="list-inline-item">
              <FiberManualRecordIcon fontSize="small" />
              <span>NodeJs</span>
            </li>
            <li className="list-inline-item">
              <FiberManualRecordIcon fontSize="small" />
              <span>Express Framework</span>
            </li>
            <li className="list-inline-item">
              <FiberManualRecordIcon fontSize="small" />
              <span>SQL</span>
            </li>
            <li className="list-inline-item">
              <FiberManualRecordIcon fontSize="small" />
              <span>Git</span>
            </li>
          </ul>
          <h5 className="languages-tools">My General Workflow</h5>
          <ul className="fa-ul mb-0 dev-icons">
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Mobile-First, Responsive Design
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Cross Browser Testing & Debugging
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Cross Functional Teams
            </li>
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              Agile Development & Scrum
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default SkillsList;
