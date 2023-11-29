import React, { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/react";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextField } from "@material-ui/core";
import { InputLabel, MenuItem, Select, FormControl } from "@mui/material";

const CreatePost = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    description: "",
    domain: "",
    teamsize: 0,
    details: "",
    date: "",
    logo: "data:image/png;base64,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",
  });

  const tags = [
    { key: "Hackathon", value: "Hackathon" },
    { key: "Tech", value: "Tech" },
    { key: "Project", value: "Project" },
    { key: "Sports", value: "Sports" },
    { key: "Machine Learning", value: "Machine Learning" },
    { key: "Artificial Intelligence", value: "Artificial Intelligence" },
    { key: "Blockchain", value: "Blockchain" },
  ];
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Domain"]));
  const [selectedDomain, setSelectedDomain] = useState("Domain");

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  document.addEventListener("DOMContentLoaded", () => {
    console.log("Document loaded");
    const today = new Date();
    const todayString =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

    const dateInput = document.getElementById("date");
    dateInput.setAttribute("min", todayString);
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64Image = event.target.result;
        setPost({ ...post, logo: base64Image });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFieldChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleFormSumbmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/createpostpost", post);
      if (res.status === 200) {
        toast.success(res.data.msg);
        navigate("/myposts");
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.error);
      } else {
        toast.error("Some error occured");
      }
    }
  };

  return (
    // main div
    <div className="pt-24 pl-10 pr-10 w-full h-full ">
      <h1 className="text-3xl text-blue-900 font-bold mb-4 underline">
        Create Post
      </h1>

      <div className="flex flex-row justify-center">
        {/* <div className='flex flex-col items-center justify-center border-2 border-dashed border-black h-full w-1/3 ml-5 p-5'>
                    <div className='text-l text-blue-900 font-bold mb-4 underline'>Upload Event Logo</div>
                    <input type='file' className='pl-2 mt-5' />
                </div> */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            className="text-lg text-blue-900 font-bold mb-4 underline"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            Upload Event Logo
          </div>
          <img
            src={post.logo}
            alt=""
            style={{
              width: "250px",
              height: "250px",
              borderRadius: "50%",
              marginBottom: "10px",
              top: "50%",
              left: "50%",
            }}
            className="pl-2 mt-5"
          />
          <input
            style={{ marginLeft: "120px" }}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
          <br></br>
          <br></br>
        </div>

        <form onSubmit={handleFormSumbmit}>
          <div className="w-1/3 ml-5">
            {/* <input
              className="flex h-10 w-full rounded-md border border-black bg-transparent px-3 py-2 text-md mb-4 "
              type="text"
              id="title"
              placeholder="Title"
              name="title"
              value={post.title}
              onChange={handleFieldChange}
            /> */}
            <TextField
              id="standard-basic"
              label="Title"
              variant="standard"
              name="title"
              value={post.title}
              onChange={handleFieldChange}
              style={{ width: "250px" }}
              required
            />
            <br />
            <br />
            {/* <input
              className="flex h-10 w-full rounded-md border border-black bg-transparent px-3 py-2 text-md mb-4"
              type="text"
              id="description"
              placeholder="Description"
              name="description"
              value={post.description}
              onChange={handleFieldChange}
            /> */}
            <TextField
              id="standard-basic"
              label="Description"
              variant="standard"
              name="description"
              value={post.description}
              onChange={handleFieldChange}
              style={{ width: "250px" }}
              required
            />
            <br />
            <br />

            {/* <Dropdown>
              <DropdownTrigger className="flex justify-start h-10 w-full rounded-md border border-black bg-transparent px-3 py-2 text-md mb-4">
                <Button variant="bordered">{selectedDomain}</Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Action event example"
                onAction={(key) => setSelectedDomain(key)}
                className="z-10 flex justify-start border-black rounded-md items-start"
              >
                {tags.map((item) => {
                  return (
                    <DropdownItem
                      key={item.key}
                      className="text-md mb-2 justify-start bg-white border rounded-md w-full border-black"
                    >
                      {item.value}
                    </DropdownItem>
                  );
                })}
              </DropdownMenu>
            </Dropdown> */}
            <FormControl>
              <InputLabel id="demo-simple-select-label">Domain</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="domain"
                value={post.domain}
                label="Domain"
                onChange={handleFieldChange}
                style={{ width: "250px" }}
                required
              >
                {/* <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem> */}
                {tags.map((item) => {
                  return (
                    <MenuItem value={item.value}>{item.value}</MenuItem>
                    // <DropdownItem
                    //   key={item.key}
                    //   className="text-md mb-2 justify-start bg-white border rounded-md w-full border-black"
                    // >
                    //   {item.value}
                    // </DropdownItem>
                  );
                })}
              </Select>
            </FormControl>
            <br />
            <br />

            {/* <input
              className="flex h-10 w-full rounded-md border border-black bg-transparent px-3 py-2 text-md mb-4"
              type="number"
              id="size"
              placeholder="Team Size"
              name="teamsize"
              value={post.teamsize}
              onChange={handleFieldChange}
            /> */}
            <TextField
              id="standard-basic"
              type="number"
              label="Team Size"
              variant="standard"
              name="teamsize"
              value={post.teamsize}
              onChange={handleFieldChange}
              style={{ width: "250px" }}
              required
            />
            <br />
            <br />
            {/* <input
              className="flex h-10 w-full rounded-md border border-black bg-transparent px-3 py-2 text-md mb-4"
              type="date"
              id="date"
              placeholder="Date of event"
              name="date"
              value={post.date}
              onChange={handleFieldChange}
            /> */}
            <TextField
              id="standard-basic"
              type="date"
              label="Date"
              variant="standard"
              name="date"
              value={post.date}
              onChange={handleFieldChange}
              style={{ width: "250px" }}
              required
            />
            <br />
            <br />

            {/* <textarea
              placeholder="Enter Complete Details"
              className="rounded-md border border-black bg-transparent px-3 py-2 text-md mb-4"
              rows={5}
              cols={68}
              name="details"
              value={post.details}
              onChange={handleFieldChange}
            /> */}
            <TextField
              style={{
                width: "500px",
              }}
              id="outlined-basic"
              label="Additional details"
              multiline
              rows={5}
              name="details"
              value={post.details}
              onChange={handleFieldChange}
              variant="outlined"
            />
            <br />
            <br />
            <Button
              type="submit"
              onClick={handleFormSumbmit}
              variant="contained"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
