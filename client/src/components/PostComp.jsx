import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import JoinButton from "./JoinButton";
import Image from "../assets/event1.jpg";
import { toast } from "react-toastify";
import axios from "axios";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Post = (props) => {
  const handleJoin = async () => {
    if (props.post.role === "visitor") {
      toast.error("Please login to continue");
    } else {
      let confirmapplication = window.confirm(
        "Do you want to apply for this post?"
      );
      if (confirmapplication) {
        try {
          const res = await axios.post(
            "/applyforpost",
            {
              postid: props.post.post._id,
            },
            { withCredentials: true }
          );
          toast.success("Request sent successfully");
        } catch (error) {
          if (error.response) {
            toast.error(error.response.data.error);
          } else {
            toast.error("Some error occured");
          }
        }
      }
    }
  };
  return (
    // <div className='flex flex-row justify-between p-3 pl-10 pr-10 w-full shadow
    // rounded-lg mb-3 text-l font-semibold '>
    //     {/* data div */}
    //     <div>
    //         <NavLink to={`/post?id=${props.post.post._id}`} className='text-2xl font-bold text-blue-800'>{props.post.post.post.title}</NavLink>

    //         <div className='text-blue-600 text-lg'>
    //             Date {props.post.post.post.date}
    //         </div>
    //         <div className='text-blue-600 text-lg'>
    //             Team Size : {props.post.post.post.teamsize}
    //         </div>
    //     </div>
    //     {/* accept/reject div */}
    //     <div className='flex align-middle items-center'
    //     onClick={()=>{
    //         if(props.post.role==='visitor'){
    //               toast.error("Please login to continue");
    //         }
    //         else{

    //         }
    //     }}>
    //         <JoinButton />
    //     </div>

    // </div>

    <div className="row">
      <div>
        {/* <div className="card border-0 shadow rounded-lg">
          <div className="flex flex-row">
            <div className="card-image w-1/2">
              <img
                src={props.post.post.post.logo}
                alt={props.post.post.post.title}
              />
            </div>
            <div className="card-body flex flex-col w-1/2 p-3">
              <h5 className="card-title font-bold text-2xl text-blue-800 mb-3">
                {props.post.post.post.title}
              </h5>
              <p className="card-text text-blue-600 mr-3">
                <span className="font-semibold">Date:</span>{" "}
                {props.post.post.post.date}
              </p>
              <p className="card-text text-blue-600 mr-3">
                <span className="font-semibold">Team Size:</span>{" "}
                {props.post.post.post.teamsize}
              </p>
              <div className="align-middle items-center">
                <JoinButton />
              </div>
            </div>
          </div>
        </div> */}

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
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: "#212121",
              }}
            >
              {props.post.post.post.title}
            </Typography>
            <div
              style={{ display: "flex", float: "right", marginRight: "20px" }}
              className="align-middle items-center ml-auto"
              onClick={handleJoin}
            >
              <JoinButton />
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="flex flex-row">
              <div className="card-image">
                <img
                  src={props.post.post.post.logo}
                  alt={props.post.post.post.title}
                />
              </div>
              <div className="card-body flex flex-col w-1/2 p-3">
                <h5 className="card-title font-bold text-2xl text-blue-800 mb-3">
                  {props.post.post.post.title}
                </h5>
                <p className="card-text text-blue-600 mr-3">
                  <span className="font-semibold">Posted By:</span>{" "}
                  {props.post.post.email}
                </p>
                <p className="card-text text-blue-600 mr-3">
                  <span className="font-semibold">Date:</span>{" "}
                  {props.post.post.post.date}
                </p>
                <p className="card-text text-blue-600 mr-3">
                  <span className="font-semibold">Domain:</span>{" "}
                  {props.post.post.post.domain}
                </p>
                <p className="card-text text-blue-600 mr-3">
                  <span className="font-semibold">Team Size:</span>{" "}
                  {props.post.post.post.teamsize}
                </p>
                <p className="card-text text-blue-600 mr-3">
                  <span className="font-semibold">Description</span>{" "}
                  {props.post.post.post.description}
                </p>
                <p className="card-text text-blue-600 mr-3">
                  <span className="font-semibold">Additional Details:</span>{" "}
                  {props.post.post.post.details}
                </p>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Post;

// import React, {useState} from 'react'
// import { NavLink } from "react-router-dom";
// import JoinButton from './JoinButton'
// import Image from '../assets/event1.jpg'
// import { Modal } from 'react-bootstrap';
// import Post1 from '../Pages/Post';

// const Post = (props) => {
//     const [openModal, setOpenModal] = useState(false);
//     const handleOpenModal = async () => {
//         setOpenModal(true);
//       };

//       const handleCloseModal = () => {
//         setOpenModal(false);
//       };
//     return (
//         // contains two colums one for data and other for accept/reject button
//         <div className='flex flex-row justify-between p-3 pl-10 pr-10 w-full shadow
//         rounded-lg mb-3 text-l font-semibold '>
//             {/* data div */}
//             <div>

//                 <div className='text-2xl font-bold text-blue-800' onClick={handleOpenModal()}>
//                     Title {props.details.posts[0].post.title}
//                 </div>
//                 <div className='text-blue-600 text-lg'>
//                     Date {props.details.posts[0].post.date}
//                 </div>
//                 <div className='text-blue-600 text-lg'>
//                     Team Size : {props.details.posts[0].post.teamsize}
//                 </div>
//             </div>
//             {/* accept/reject div */}
//             <div className='flex align-middle items-center'>
//                 <JoinButton />
//             </div>
//             <Modal open={openModal} onClose={handleCloseModal}>
//                 <Post1 details={props.details.posts[0]} />
//             </Modal>

//         </div>
//     )
// }

// export default Post;
