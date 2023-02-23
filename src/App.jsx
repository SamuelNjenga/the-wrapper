import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./features/about/About";
import Education from "./features/education/Education";
import Experience from "./features/experience/Experience";
import InterestsList from "./features/interests/InterestsList";
import Introduction from "./features/intro/Introduction";
import SkillsList from "./features/skills/SkillsList";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/skills" element={<SkillsList />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/interests" element={<InterestsList />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
