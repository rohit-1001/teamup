import React, { useState, useRef, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { Button } from "@material-ui/core";


function Navigationbar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      style={{
        position: "fixed",
        left: "0",
        width: "100%",
        zIndex: "10",
      }}
    >
      <Container>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="logo me-auto">
            <NavLink to="/">
              <div>
                <img
                  src={logo}
                  alt="Logo Here"
                  className="logo1"
                  style={{
                    width: "120px",
                  }}
                />
              </div>
            </NavLink>
          </Nav>
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link mx-3" style={{
              fontWeight: "bold"
            }}>
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link mx-3" style={{
              fontWeight: "bold"
            }}>
              About Us
            </NavLink>
            <NavLink to="/allposts" className="nav-link mx-3" style={{
              fontWeight: "bold"
            }}>
              All Posts
            </NavLink>
          </Nav>
          <Nav>
            <NavLink to="/login" className="nav-link">
              <Button variant="outlined">Login</Button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
