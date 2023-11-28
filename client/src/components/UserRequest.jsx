import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Image from "../assets/yash.jpg";
import Image1 from "../assets/rohit.jpg";
import axios from "axios";

const UserRequest = (props) => {
  const [user, setUser] = useState({});
  // useEffect(() => {
  //   const getUser = async () => {
  //     const email = props.details.email;
  //     const res = await axios.post(
  //       "/getuser",
  //       { email },
  //       {
  //         withCredentials: true,
  //       }
  //     );
  //     console.log("res.data.user : ", res.data);
  //     setUser(res.data);
  //     console.log("user : ", user);
  //   };
  //   getUser();
  // }, []);
  return (
    <>
        <div className="mt-4 p-4 shadow flex flex-row justify-between">
        <div className="flex flex-row">
          <img
            src={props.details.img}
            width={40}
            height={25}
            className="border rounded justify-center"
          />
          <NavLink
            to="/post"
            className="text-lg font-bold text-blue-800 ml-5 no-underline hover:underline"
          >
            {props.details.name}
          </NavLink>
        </div>

        <div className="flex flex-column">
          <button className="bg-blue-700 hover:bg-blue-900 rounded text-white m-2 p-2">Accept</button>
          <button className="bg-red-700 hover:bg-red-900 rounded text-white m-2 p-2">Reject</button>
        </div>
      </div>
    </>
  );
};

export default UserRequest;
