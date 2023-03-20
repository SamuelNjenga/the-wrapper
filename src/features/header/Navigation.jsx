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
          <Navbar.Brand>
            <Avatar
              className="avatar-padding"
              alt="Sam Njenga"
              src={"/assets/samuel_njenga.jpg"}
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
              <Nav.Link
                eventKey={1}
                className="nav-link-class"
                to="/"
                as={Link}
              >
                HOME
              </Nav.Link>
              <Nav.Link
                eventKey={2}
                className="nav-link-class"
                to="/services"
                as={Link}
              >
                SERVICES
              </Nav.Link>
              <Nav.Link
                eventKey={3}
                className="nav-link-class"
                to="/portfolio"
                as={Link}
              >
                PORTFOLIO
              </Nav.Link>
              <Nav.Link
                className="nav-link-class"
                eventKey={4}
                to="/about"
                as={Link}
              >
                ABOUT
              </Nav.Link>
              <Nav.Link
                className="nav-link-class"
                eventKey={5}
                to="/contact"
                as={Link}
              >
                CONTACT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
