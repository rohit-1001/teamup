import React, { useState, useRef, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons'

function Navigationbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="logo me-auto">
            <NavLink to="/">
              {" "}
              <div>
                <img
                  src={logo}
                  alt="Logo Here"
                  className="logo1"
                  style={{
                    width: "150px",
                  }}
                />
              </div>
            </NavLink>
          </Nav>
          <Nav>
            <Nav.Link>
              <NavLink to="/home" style={{textDecoration:"none"}}>Home</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/about" style={{textDecoration:"none"}}>About</NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
