import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useRef, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import NotFound from "./components/NotFound";
import Home from "./Pages/Home";
import About from "./Pages/About";
import AllPosts from "./Pages/AllPosts";
import Post from "./Pages/Post";
import LoginPage from "./Pages/LoginPage";
import CreatePost from "./Pages/CreatePost";
import "./CSS files/HomeStyle.css";
import PostRequests from "./Pages/PostRequests";
import MyPosts from "./Pages/MyPosts";
import MyRequestsPage from "./Pages/MyRequestsPage";
import Register from "./Pages/CreateProfile";
import axios from "axios";

function App() {
  const [role, setRole] = useState("visitor");
  const getRole = async () => {
    const c = await axios.get("/getuserstatus", {
      withCredentials: true,
    });
    setRole(c.data.role);
  };
  useEffect(() => {
    getRole();
  }, []);
  return (
    <>
      {role === "visitor" ? (
        <>
          <Navbar details={{ setRole }}/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/allposts" element={<AllPosts />} />
            <Route path="/login" element={<LoginPage details={{ setRole }}/>} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      ) : (
        <>
          <Navbar2 details={{ setRole }}/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/post" element={<Post />} />
            <Route path="/allposts" element={<AllPosts />} />
            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/postrequests" element={<PostRequests />} />
            <Route path="/myposts" element={<MyPosts />} />
            <Route path="/myrequests" element={<MyRequestsPage />} />
            {/* <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login details={{ setRole }} />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/admin"
                element={<AdminLogin details={{ setRole }} />}
              /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
