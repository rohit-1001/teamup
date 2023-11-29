import React from "react";
import { NavLink } from "react-router-dom";
import Image from "../assets/event1.jpg";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CloseIconBox } from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { HourglassBottom } from "@mui/icons-material";

const MyRequest = (props) => {
    console.log(props)
  return (
    <div className="row">
      <div>
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
              {props.post._id}
            </Typography>
            {props.post.post.status === "Pending" ? (
              <div
                style={{
                  display: "flex",
                  float: "right",
                  marginRight: "20px",
                }}
                className="align-middle items-center ml-auto"
              >
                <HourglassBottom style={{ color: "orange" }} />
              </div>
            ) : props.post.post.status === "Rejected" ? (
              <div
                style={{
                  display: "flex",
                  float: "right",
                  marginRight: "20px",
                }}
                className="align-middle items-center ml-auto"
              >
                <CloseIcon style={{ color: "red" }} />
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  float: "right",
                  marginRight: "20px",
                }}
                className="align-middle items-center ml-auto"
              >
                <CheckCircleIcon style={{ color: "green" }} />
              </div>
            )}
          </AccordionSummary>
          {/* <AccordionDetails>
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
          </AccordionDetails> */}
        </Accordion>
      </div>
    </div>
  );
};

export default MyRequest;
