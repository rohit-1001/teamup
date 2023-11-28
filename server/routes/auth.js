const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userAuthenticate = require("../middleware/userAuthenticate");
const cookieParser = require("cookie-parser");
router.use(cookieParser());

router.post("/userregister", async (req, res) => {
  const { name, email, phone, password, cpassword, age, location, logo } =
    req.body;
  if (
    !name ||
    !email ||
    !phone ||
    !password ||
    !cpassword ||
    !age ||
    !location
  ) {
    return res.status(422).json({ error: "All fields need to be filled" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(409).json({ error: "Email already registered" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Passwords do not match" });
    }
    if(logo !== ""){
      const user = new User({
        name,
        email,
        phone,
        password,
        cpassword,
        age,
        location,
        logo,
      });
      await user.save();
      console.log("user registered successfully")
      return res.status(200).json({ msg: "User registered successfully" });
    }
    else{
      const user = new User({
        name,
        email,
        phone,
        password,
        cpassword,
        age,
        location,
      });
      await user.save();
      return res.status(200).json({ msg: "User registered successfully" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Some unexpected error occured" });
  }
});

router.post("/usersignin", async (req, res) => {
    const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Please fill all required fields" });
  }
  try {
    const emailExist = await User.findOne({ email: email });
    if (emailExist) {
      const isMatch = await bcrypt.compare(password, emailExist.password);
      if (isMatch) {
        token = await emailExist.generateAuthToken();
        res.cookie(
          "teamup",
          { token },
          {
            expires: new Date(Date.now() + 604800),
            httpOnly: true,
          }
        );
        return res.status(200).json({ msg: "Login successful" });
      } else {
        return res.status(400).json({ error: "Login failed" });
      }
    } else {
      return res.status(400).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Some unexpected error occured" });
  }
});

router.get("/getuserstatus", async(req, res) => {
    if (req.cookies) {
        if (req.cookies.teamup) {
        if (req.cookies.teamup.token) {
            return res.status(200).json({ role: "loggedin" });
        }
        } else {
        return res.status(200).json({ role: "visitor" });
        }
    } else {
        return res.status(200).json({ role: "visitor" });
    }
})

router.post("/updateprofile", async (req, res) => {
  let email;
  if (req.cookies) {
    if (req.cookies.teamup) {
      if (req.cookies.teamup.token) {
        const token = req.cookies.teamup.token;
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        email = decodedToken.email;
      }
    } else {
      return res.status(500).json({ error: "Please login to continue" });
    }
  } else {
    return res.status(500).json({ error: "Please login to continue" });
  }
  const { name, phone, age, location, interests } = req.body;
  if (!name || !phone || !age || !location || !interests) {
    return res.status(422).json({ error: "All fields need to be filled" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      userExist.name = name;
      userExist.phone = phone;
      userExist.age = age;
      userExist.location = location;
      userExist.interests = interests;
      await User.replaceOne({ email: email }, userExist);
      return res.status(409).json({ error: "Profile updated successfully" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Some unexpected error occured" });
  }
});

router.post("/createpost", async (req, res) => {
  let email;
  if (req.cookies) {
    if (req.cookies.teamup) {
      if (req.cookies.teamup.token) {
        const token = req.cookies.teamup.token;
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        email = decodedToken.email;
      }
    } else {
      return res.status(500).json({ error: "Please login to continue" });
    }
  } else {
    return res.status(500).json({ error: "Please login to continue" });
  }
  const {  title, description, domain, teamsize, details, date, logo } =
    req.body.post;
  if (!title || !description || !domain || !details || !date) {
    return res.status(422).json({ error: "All fields need to be filled" });
  }
  if(isNaN(teamsize)){
    return res.status(422).json({ error: "Team size should be a number" });
  }

  try {
    let post;
    if (logo !== null) {
      post = {
        title,
        description,
        domain,
        teamsize,
        details,
        date,
      };
    } else {
      post = {
        title,
        description,
        domain,
        teamsize,
        details,
        date,
        logo,
      };
    }
    const newpost = new Post({ email, post });
    await newpost.save();
    return res.status(200).json({ msg: "Post created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Some unexpected error occured" });
  }
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.post("/createnewpost", async (req, res) => {
  const email = req.body.email;
  const { title, description, domain, teamsize, details, date, logo } =
    req.body.post;
  if (!title || !description || !domain || !details || !date) {
    return res.status(422).json({ error: "All fields need to be filled" });
  }
  if(isNaN(teamsize)){
    return res.status(422).json({ error: "Team size should be a number" });
  }

  try {
    let post;
    if (logo !== null) {
      post = {
        title,
        description,
        domain,
        teamsize,
        details,
        date,
      };
    } else {
      post = {
        title,
        description,
        domain,
        teamsize,
        details,
        date,
        logo,
      };
    }
    const newpost = new Post({ email, post });
    await newpost.save();
    console.log("post created successfully")
    return res.status(200).json({ msg: "Post created successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Some unexpected error occured" });
  }
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get("/allposts", async (req, res) => {
  try {
    const posts = await Post.find();
    return res.status(200).json({ posts: posts.reverse().slice(0, 10) });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Some unexpected error occured" });
  }
});

router.get("/myposts", async (req, res) => {
  let email;
  if (req.cookies) {
    if (req.cookies.teamup) {
      if (req.cookies.teamup.token) {
        const token = req.cookies.teamup.token;
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        email = decodedToken.email;
      }
    } else {
      return res.status(500).json({ error: "Please login to continue" });
    }
  } else {
    return res.status(500).json({ error: "Please login to continue" });
  }
  try {
    const posts = await Post.find({ email: email });
    return res.status(200).json({ posts: posts.reverse() });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Some unexpected error occured" });
  }
});

router.get("/myrequests", async (req, res) => {
  let email;
  if (req.cookies) {
    if (req.cookies.teamup) {
      if (req.cookies.teamup.token) {
        const token = req.cookies.teamup.token;
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        email = decodedToken.email;
      }
    } else {
      return res.status(500).json({ error: "Please login to continue" });
    }
  } else {
    return res.status(500).json({ error: "Please login to continue" });
  }
  try {
    const user = await User.find({ email: email });
    const appliedposts = user.appliedposts
    let posts = []
    for(let id in appliedposts){
        posts.push(await Post.find({ _id: id }));
    }
    return res.status(200).json({ posts: posts.reverse() });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Some unexpected error occured" });
  }
});

router.post("/userlogout", (req, res) => {
    res.clearCookie("teamup", { path: "/" });
    return res.status(200).json({ msg: "Logged out successfully" });
});

router.post('/getuser', async (req, res) => {
  const email = req.body.email;
  console.log("email : ",email)
  try {
    const user = await User.findOne({ email: email });
    console.log("user : ",user)
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ error: "Some error occured" });
  }
})

module.exports = router;
