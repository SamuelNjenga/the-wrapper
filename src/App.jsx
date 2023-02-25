import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./features/about/About";
import Contact from "./features/contact/Contact";
import Education from "./features/education/Education";
import Experience from "./features/experience/Experience";
import Footer from "./features/footer/Footer";
import Navigation from "./features/header/Navigation";
import InterestsList from "./features/interests/InterestsList";
import Introduction from "./features/intro/Introduction";
import Portfolio from "./features/portfolio/Portfolio";
import ServicesList from "./features/services/ServicesList";
import SkillsList from "./features/skills/SkillsList";

const App = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/skills" element={<SkillsList />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/interests" element={<InterestsList />} />
          <Route path="/services" element={<ServicesList />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
