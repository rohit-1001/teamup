import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import JoinButton from "./JoinButton";
import Image from "../assets/event1.jpg";
import { Room } from "@mui/icons-material";
import PostRequests from "../Pages/PostRequests";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  Modal,
  Box,
  TextField,
} from "@mui/material";

const UserPost = (props) => {
    const [curr, setCurr] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = async () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    // contains two colums one for data and other for accept/reject button
    <div
      className="flex flex-row justify-between p-3 pl-10 pr-10 w-full shadow
        rounded-lg mb-3 text-l font-semibold "
    >
      {/* data div */}
      <div className="flex flex-row">
        <img src={Image} width={50} height={25} className="border rounded" />

        <h4
          onClick={()=>{
            // setCurr(props.details)
            handleOpenModal(true);
          }}
          className="text-xl font-bold text-blue-800 ml-5 no-underline hover:underline"
          >
          {props.details.title}
        </h4>
              <PostRequests details={{curr}}/>
      </div>
    </div>
  );
};

export default UserPost;
