import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Home from './Pages/Home';
import About from './Pages/About';
import AllPosts from './Pages/AllPosts';
import Post from './Pages/Post';
import LoginPage from './Pages/LoginPage';
import CreatePost from'./Pages/CreatePost'
import './CSS files/HomeStyle.css'
import PostRequests from './Pages/PostRequests';
import MyPosts from './Pages/MyPosts';
import MyRequestsPage from './Pages/MyRequestsPage';
import Register from './Pages/Register';


function App() {
  return (
    <>
      <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/post" element={<Post />} />
            <Route path="/allposts" element={<AllPosts />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/postrequests" element={<PostRequests />} />
            <Route path="/myposts" element={<MyPosts />} />
            <Route path="/myrequests" element={<MyRequestsPage />} />
            <Route path="/register" element={<Register />} />
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
  );
}

export default App;
