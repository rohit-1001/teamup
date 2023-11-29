import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { Button } from "@material-ui/core";
import { toast } from "react-toastify";
import axios from 'axios'

function Navigationbar(props) {
  const navigate = useNavigate();
  const logout = async () => {
    let confirmLogout = window.confirm("Are you sure, you want to log out?");
    if (confirmLogout) {
      try {
        const res = await axios.post("/userlogout", {
          withCredentials: true,
        });

        if (res.status === 200) {
          toast.info(res.data.msg);
          props.details.setRole("visitor");
          navigate("/login");
        }
      } catch (error) {
        if (error.response) {
          toast.error(error.response.data.error);
        } else {
          toast.error("Some error occured");
        }
      }
    }
  };
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
            <NavLink
              to="/"
              className="nav-link mx-3"
              style={{
                fontWeight: "bold",
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="nav-link mx-3"
              style={{
                fontWeight: "bold",
              }}
            >
              About Us
            </NavLink>
            <NavLink
              to="/allposts"
              className="nav-link mx-3"
              style={{
                fontWeight: "bold",
              }}
            >
              All Posts
            </NavLink>
            <NavLink
              to="/myposts"
              className="nav-link mx-3"
              style={{
                fontWeight: "bold",
              }}
            >
              My Posts
            </NavLink>
            <NavLink
              to="/myrequests"
              className="nav-link mx-3"
              style={{
                fontWeight: "bold",
              }}
            >
              My Requests
            </NavLink>
          </Nav>
          <Nav>
            <NavLink onClick={logout} to="/login" className="nav-link">
              <Button variant="outlined">Logout</Button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
