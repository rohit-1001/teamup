import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './components/Login';
import AllPosts from './Pages/AllPosts';
import Post from './Pages/Post';
<<<<<<< HEAD
import LoginPage from './Pages/LoginPage';
=======
import './CSS files/HomeStyle.css';
>>>>>>> 3e5aafd800b330caf9a569f7d021f3dac8e27bf5


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
<<<<<<< HEAD
            <Route path="/login" element={<LoginPage />} />
=======
            <Route path="/login" element={<Login />} />
>>>>>>> 3e5aafd800b330caf9a569f7d021f3dac8e27bf5
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
