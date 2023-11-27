import React from "react";
import UserPost from "../components/UserPost";
import { NavLink } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import Image from "../assets/event1.jpg";
import axios from "axios";
import UserRequest from "../components/UserRequest";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Modal,
  Box,
  TextField,
} from "@mui/material";
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
    setTimeout(() => {
    }, 5000);
    console.log("myposts : ", myposts);
  };

  useEffect(() => {
    getmyposts();
  },[]);

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
        {/* {myposts.map((post, index) => (
                <UserPost
                    key={index}
                    title={post.post.title}
                    description={post.post.description}
                    domain={post.post.domain}
                    teamsize={post.post.teamsize}
                    details={post.post.details}
                    date={post.post.date}
                    logo={post.post.logo}
                    selectedmembers={post.post.selectedmembers}
                    appliedmembers={post.post.appliedmembers}
                />
            ))} */}
        {myposts.map((post, index) => (
          <div
            className="flex flex-row justify-between p-3 pl-10 pr-10 w-full shadow
        rounded-lg mb-3 text-l font-semibold "
          >
            {/* data div */}
            <div className="flex flex-row">
              <img
                src={Image}
                width={50}
                height={25}
                className="border rounded"
              />

              <h4
                onClick={() => {
                  setCurr(post.post);
                  setOpenModal(true);
                }}
                className="text-xl font-bold text-blue-800 ml-5 no-underline hover:underline"
              >
                {post.post.title}
              </h4>
              <Modal open={openModal} onClose={handleCloseModal}>
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "80%",
                    transform: "translate(-50%, -50%)",
                    maxWidth: "100%", // Adjust the maximum width as needed
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 4,
                    overflowY: "auto", // Enable vertical scrolling
                    maxHeight: "90vh", // Limit the maximum height to the viewport height
                  }}
                >
                  {/* <PostRequests details={{ curr }} /> */}
                  <div className="pt-24 pl-24 pr-24">
                    <h1 className="text-3xl text-blue-900 font-extrabold mb-4 underline">
                      Pending Requests
                    </h1>

                    {/* first div */}
                    <div className="flex flex-row">
                      {/* poster div */}

                      <div className="mr-10">
                        <img
                          src={curr.logo}
                          alt="img"
                          className="border-2 border-blue-900 p-4 rounded-xl"
                          height={400}
                          width={400}
                        />
                      </div>

                      {/* details div */}
                      <div>
                        <h1 className="text-3xl text-blue-900 font-extrabold mb-4">
                          {curr.title}
                        </h1>
                        <div className="w-100 mb-3 text-xl text-blue-800 font-semibold">
                          {curr.description}
                        </div>
                      </div>
                    </div>
                    {/* second div */}
                    {/* <div className="flex flex-col">
                        {console.log("curr : ", curr)}
                    {curr.selectedmembers ? curr.selectedmembers.map((mem, index) => (
                        console.log("mem : ", mem),
                        <UserRequest details={{email:mem.email}} />
                    )) : "No selected members"} */}
                    <UserRequest details={{id:1, email:"rohan@gmail.com"}} />
                    <UserRequest details={{id:2, email:"r@gmail.com"}} />
                    {/* </div> */}
                  </div>
                </Box>
              </Modal>
            </div>
          </div>
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
