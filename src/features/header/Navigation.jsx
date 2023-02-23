import React, { useState, useEffect } from "react";

import { Container, Nav, Navbar } from "react-bootstrap";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

import "./Navigation.css";

const Navigation = () => {
  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    // Remove listener (just like componentWillUnmount)
    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, []);

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        fixed="top"
        style={{
          padding: scrollY > 40 ? "10px 10px" : "12px 10px",
          transition: "0.4s",
        }}
      >
        <Container>
          <Navbar.Brand href="#home" className="nav-link-title">
            <Avatar
              alt="Sam Njenga"
              src={window.location.origin + "/src/assets/samuel_njenga.jpg"}
              sx={{ width: 56, height: 56 }}
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="navbar-toggler"
          >
            <span>
              MENU
              <i className="bi bi-list"></i>
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Link to="services" style={{ textDecoration: "none" }}>
                <Nav.Link eventKey={1} className="nav-link-class">
                  SERVICES
                </Nav.Link>
              </Link>
              <Link to="porfolio" style={{ textDecoration: "none" }}>
                <Nav.Link eventKey={2} className="nav-link-class">
                  PORTFOLIO
                </Nav.Link>
              </Link>
              <Link to="about" style={{ textDecoration: "none" }}>
                <Nav.Link className="nav-link-class" eventKey={3}>
                  ABOUT
                </Nav.Link>
              </Link>
              <Link to="contact" style={{ textDecoration: "none" }}>
                <Nav.Link className="nav-link-class" eventKey={5}>
                  CONTACT
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
