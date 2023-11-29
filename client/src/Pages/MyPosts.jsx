import React from "react";
import UserPost from "../components/UserPost";
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import Image from "../assets/event1.jpg";
import axios from "axios";
import UserRequest from "../components/UserRequest";
import PostRequests from "./PostRequests";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container, Grid, Paper, Modal, Box, TextField } from "@mui/material";
import { toast } from "react-toastify";

const MyPosts = () => {
  const [myposts, setMyPosts] = useState([]);
  const [curr, setCurr] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const getmyposts = async () => {
    const c = await axios.get("/myposts", {
      withCredentials: true,
    });
    console.log("c.data : ", c.data.posts);
    setMyPosts(c.data.posts);
    setTimeout(() => {}, 5000);
    console.log("myposts : ", myposts);
  };

  const handleaccept = async (id, email) => {
    let confirmapplication = window.confirm(
      "Do you want to accept the application?"
    );
    if (confirmapplication) {
      try {
        const res = await axios.post(
          "/acceptapplication",
          {
            postid: id,
            applicantemail: email,
          },
          { withCredentials: true }
        );
        toast.success("Request accepted successfully");
      } catch (error) {
        if (error.response) {
          toast.error(error.response.data.error);
        } else {
          toast.error("Some error occured");
        }
      }
    }
  };

  const handlereject = async (id, email) => {
    let confirmapplication = window.confirm(
      "Do you want to reject the application?"
    );
    if (confirmapplication) {
      try {
        const res = await axios.post(
          "/rejectapplication",
          {
            postid: id,
            applicantemail: email,
          },
          { withCredentials: true }
        );
        toast.success("Request rejected");
      } catch (error) {
        if (error.response) {
          toast.error(error.response.data.error);
        } else {
          toast.error("Some error occured");
        }
      }
    }
  };

  useEffect(() => {
    getmyposts();
  }, []);

  const handleOpenModal = async () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      {/* <Header /> */}
      <div className="relative items-start flex-col ml-10 mr-10">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1 className="pt-24 text-3xl text-blue-900 font-extrabold mb-4 underline">
            My Posts
          </h1>
          <nav className="pt-24 text-3xl text-blue-900 font-extrabold mb-4 underline mr-12">
            <NavLink to="/createpost">
              <Button variant="outlined">+ Create Post</Button>
            </NavLink>
          </nav>
        </div>
        {myposts.map((post, index) => (
          <Accordion
            style={{
              width: "80%",
              margin: "auto",
              marginTop: "20px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
            >
              <Typography
                style={{ fontSize: "20px", fontWeight: 600, color: "#212121" }}
              >
                {post.post.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <div className="card-image w-1/2">
                    <img src={post.post.logo} alt={post.post.title} />
                  </div>
                  <div className="card-body flex flex-col w-1/2 p-3">
                    <h5 className="card-title font-bold text-2xl text-blue-800 mb-3">
                      {post.post.title}
                    </h5>
                    <p className="card-text text-blue-600 mr-3">
                      <span className="font-semibold">Posted By:</span>{" "}
                      {post.email}
                    </p>
                    <p className="card-text text-blue-600 mr-3">
                      <span className="font-semibold">Date:</span>{" "}
                      {post.post.date}
                    </p>
                    <p className="card-text text-blue-600 mr-3">
                      <span className="font-semibold">Domain:</span>{" "}
                      {post.post.domain}
                    </p>
                    <p className="card-text text-blue-600 mr-3">
                      <span className="font-semibold">Team Size:</span>{" "}
                      {post.post.teamsize}
                    </p>
                    <p className="card-text text-blue-600 mr-3">
                      <span className="font-semibold">Description</span>{" "}
                      {post.post.description}
                    </p>
                    <p className="card-text text-blue-600 mr-3">
                      <span className="font-semibold">Additional Details:</span>{" "}
                      {post.post.details}
                    </p>
                  </div>
                </div>
                <br />
                <br />
                <div>
                  <h5 className="card-title font-bold text-2xl text-blue-800 mb-3">
                    {"  "}Selected Members
                  </h5>
                  <div className="flex flex-col">
                    {post.post.selectedmembers.length > 0 ? (
                      post.post.selectedmembers.map((member, index) => (
                        <div className="flex flex-row">
                          <p className="card-text text-blue-600 mr-3">
                            {member.email}
                          </p>
                        </div>
                      ))
                    ) : (
                      <h6> No member selected yet</h6>
                    )}
                  </div>
                </div>
                <br />
                <br />
                <div>
                  <h6 className="card-title font-bold text-2xl text-blue-800 mb-3">
                    {"  "}Received Applications
                  </h6>
                  <div className="flex flex-col">
                    {post.post.appliedmembers.length > 0 ? (
                      post.post.appliedmembers.map((member, index) => (
                        <div style={{
                          display:"flex",
                          justifyContent:"space-between",
                          marginTop:"20px",
                        }}>
                          <div className="flex flex-row">
                            <p className="card-text text-blue-600 mr-3">
                              {member.email}
                            </p>
                          </div>
                          <div>
                            <Button
                              type="submit"
                              onClick={(e) => {
                                e.preventDefault();
                                handleaccept(post._id, member.email);
                              }}
                              variant="success"
                              style={{
                                marginRight:"10px",
                              }}
                            >
                              Accept
                            </Button>
                            <Button
                              type="submit"
                              onClick={(e) => {
                                e.preventDefault();
                                handlereject(post._id, member.email);
                              }}
                              variant="danger"
                              color="error"
                              style={{
                                marginRight:"20px",
                              }}
                            >
                              Reject
                            </Button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <h6> No more applications</h6>
                    )}
                  </div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
        {/* <UserPost title={myposts.title} />

        <UserPost title={"Machine Learning Project"} />

        <UserPost title={"Blockchain Hackathon"} />

        <UserPost title={"Cricket Match"} />

        <UserPost title={"Data Science Hackathon"} /> */}
      </div>
    </div>
  );
};

export default MyPosts;
