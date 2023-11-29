import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { TextField } from "@material-ui/core";

const CreateProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
    age: "",
    location: "",
    logo: "",
  });
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64Image = event.target.result;
        console.log(base64Image);
        setUser({ ...user, logo: base64Image });
      };
      reader.readAsDataURL(file);
    }
  };
  const handleFieldChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleRegister = async (e) => {
    e.preventDefault()
    try {
        console.log("register2")
        const res = await axios.post("/userregister", user)
        if (res.status === 200) {
        // toast.success(res.data.msg);
        toast.success(res.data.msg);
        navigate("/login");
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
    <>
    <form>
      <div className="pt-24 pl-10 pr-10 w-full h-full">
        <h1 className="text-3xl text-blue-900 font-bold mb-4 underline ml-10">
          Register
        </h1>
        <div className="flex flex-row justify-center">
          {/* <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              verticalAlign: "center",
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
              Upload Profile Photo
            </div>
            <div
              className="flex flex-col items-center justify-center ml-5 p-5 w-35 h-30"
              style={{ borderRadius: "100px", border: "2px solid black" }}
            >
              <img
                style={{ height: "50px" }}
                src={user.logo}
                alt="Upload Profile Photo"
              />
            </div>
            <input
              type="file"
              accept="image/*"
              className="pl-2 mt-5"
              onChange={handleImageUpload}
            />
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
              Upload Profile Photo
            </div>
            <img
              src={user.logo}
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

          <div className="w-1/3 ml-5">
            {/* <input
              className="flex h-10 w-full rounded-md border border-black bg-transparent px-3 py-2 text-md mb-4 "
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={user.name}
              onChange={handleFieldChange}
              required
            /> */}
            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              name="name"
              value={user.name}
              onChange={handleFieldChange}
              style={{ width: "250px" }}
              required
            />
            <br />
            <br />

            {/* <input
              className="flex h-10 w-full rounded-md border border-black bg-transparent px-3 py-2 text-md mb-4"
              type="email"
              id="email"
              name="email"
              placeholder="email"
              value={user.email}
              onChange={handleFieldChange}
              required
            /> */}
            <TextField
              id="standard-basic"
              type="email"
              label="E-mail"
              variant="standard"
              name="email"
              value={user.email}
              onChange={handleFieldChange}
              style={{ width: "250px" }}
              required
            />
            <br />
            <br />

            {/* <input
              className="flex h-10 w-full rounded-md border border-black bg-transparent px-3 py-2 text-md mb-4"
              type="number"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              value={user.phone}
              onChange={handleFieldChange}
              required
            /> */}
            <TextField
              id="standard-basic"
              type="number"
              label="Phone"
              variant="standard"
              name="phone"
              value={user.phone}
              onChange={handleFieldChange}
              style={{ width: "250px" }}
              required
            />
            <br />
            <br />

            {/* <input
              className="flex h-10 w-full rounded-md border border-black bg-transparent px-3 py-2 text-md mb-4"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleFieldChange}
              required
            /> */}
            <TextField
              id="standard-basic"
              type="password"
              label="Password"
              variant="standard"
              name="password"
              value={user.password}
              onChange={handleFieldChange}
              style={{ width: "250px" }}
              required
            />
            <br />
            <br />

            {/* <input
              className="flex h-10 w-full rounded-md border border-black bg-transparent px-3 py-2 text-md mb-4"
              type="password"
              id="cpassword"
              name="cpassword"
              placeholder="Confirm Password"
              value={user.cpassword}
              onChange={handleFieldChange}
              required
            /> */}
            <TextField
              id="standard-basic"
              type="password"
              label="Confirm Password"
              variant="standard"
              name="cpassword"
              value={user.cpassword}
              onChange={handleFieldChange}
              style={{ width: "250px" }}
              required
            />
            <br />
            <br />

            {/* <input
              className="flex h-10 w-full rounded-md border border-black bg-transparent px-3 py-2 text-md mb-4"
              type="number"
              id="age"
              name="age"
              placeholder="Age"
              value={user.age}
              onChange={handleFieldChange}
              required
            /> */}
            <TextField
              id="standard-basic"
              type="number"
              label="Age"
              variant="standard"
              name="age"
              value={user.age}
              onChange={handleFieldChange}
              style={{ width: "250px" }}
              required
            />
            <br />
            <br />

            {/* <input
              className="flex h-10 w-full rounded-md border border-black bg-transparent px-3 py-2 text-md mb-4"
              type="text"
              id="location"
              name="location"
              placeholder="Enter City"
              value={user.location}
              onChange={handleFieldChange}
              required
            /> */}
            <TextField
              id="standard-basic"
              type="text"
              label="City"
              variant="standard"
              name="location"
              value={user.location}
              onChange={handleFieldChange}
              style={{ width: "250px" }}
              required
            />
            <br />
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
            <Button  onClick={handleRegister}>
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </>
  );
};

export default CreateProfile;
