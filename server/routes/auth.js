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
        interests: [],
        appliedposts: [],
        tokens: [],
      });
      await user.save();
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
        interests: [],
        appliedposts: [],
        tokens: [],
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

router.post("/createpostpost", async (req, res) => {
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
    req.body;
  if (!title || !description || !domain || !details || !date) {
    return res.status(422).json({ error: "All fields need to be filled" });
  }
  if(isNaN(teamsize)){
    return res.status(422).json({ error: "Team size should be a number" });
  }

  try {
      const post = {
        title,
        description,
        domain,
        teamsize,
        details,
        date,
        logo,
        appliedmembers: [],
        selectedmembers: [],
      };
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
    const posts = await Post.find({status : "active"});
    return res.status(200).json({ posts: posts.reverse() });
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
    const user = await User.findOne({ email: email });
    if(!user){
      return res.status(400).json({ error: "User not found" });
    }
    console.log(user)
    const appliedposts = user.appliedposts
    console.log(user.appliedposts)
    if(typeof(appliedposts)==="undefined"){
      return res.status(400).json({ error: "No requests found" });
    }
    let posts = []
    for(let data in appliedposts){
      console.log(data)
        posts.push(await Post.find({ _id: data.id }));
    }
    console.log(posts)
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

router.post('/applyforpost', async (req, res) => {
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
  const postid = req.body.postid;
  try {
    const user = await User.findOne({email: email})
    if(!user){
      return res.status(400).json({ error: "User not found" });
    }
    const post = await Post.findOne({ _id: postid });
    if(!post){
      return res.status(400).json({ error: "Post not found" });
    }
    let appliedposts = user.appliedposts;
    if(typeof(appliedposts)==="undefined"){
      appliedposts = []
    }
    for(let i=0;i<appliedposts.length;i++){
      if(appliedposts[i].id === postid){
        return res.status(400).json({ error: "Already applied for this post" });
      }
    }
    let selectedmembers = post.post.selectedmembers ? post.post.selectedmembers : [];
    if(selectedmembers.length === post.post.teamsize){
      return res.status(400).json({ error: "Team is full" });
    }
    appliedposts.push({id:postid, status:"pending"});
    let appliedmembers = post.post.appliedmembers ? post.post.appliedmembers : [];
    post.post.appliedmembers.push({email:email});
    await Post.replaceOne({ _id: postid }, post);
    await User.replaceOne({ email: email }, user);
    return res.status(200).json({ msg: "Applied successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Some error occured" });
  }
})

router.post('/acceptapplication', async (req, res) => {
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
  const postid = req.body.postid;
  const applicantemail = req.body.applicantemail;
  try {
    const post = await Post.findOne({ _id: postid });
    if(!post){
      return res.status(400).json({ error: "Post not found" });
    }
    let selectedmembers = post.post.selectedmembers;
      if(typeof(selectedmembers)==="undefined"){
        selectedmembers = []
      }
    if(selectedmembers.length === post.post.teamsize){
      return res.status(400).json({ error: "Team is full" });
    }
    else{
      let appliedmembers = post.post.appliedmembers;
      if(typeof(appliedmembers)==="undefined"){
        appliedmembers = []
      }
      for (let i = 0; i < appliedmembers.length; i++) {
        if (appliedmembers[i].email === applicantemail) {
          appliedmembers.splice(i, 1);
          break;
        }
      }
      selectedmembers.push({email:applicantemail});
      
      const user = User.findOne({email: applicantemail})
      let appliedposts = user.appliedposts;
      if(typeof(appliedposts)==="undefined"){
        appliedposts = []
      }
      for(let i=0;i<appliedposts.length;i++){
        if(appliedposts[i].id === postid){
          appliedposts[i].status = "accepted"
          break
        }
      }
      if(selectedmembers.length === post.post.teamsize){
        post.status = "inactive"
      }
      await User.replaceOne({ email: applicantemail }, user);
      await Post.replaceOne({ _id: postid }, post);
      return res.status(200).json({ msg: "Application accepted successfully" });
    }
  } catch (error) {
    console.log(error)
    return res.status(400).json({ error: "Some error occured" });
  }
})

router.post('/rejectapplication', async (req, res) => {
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
  const postid = req.body.postid;
  const applicantemail = req.body.applicantemail;
  try {
    const post = await Post.findOne({ _id: postid });
    if(!post){
      return res.status(400).json({ error: "Post not found" });
    }
    let appliedmembers = post.post.appliedmembers;
    if(typeof(appliedmembers)==="undefined"){
      appliedmembers = []
    }
    for (let i = 0; i < appliedmembers.length; i++) {
      if (appliedmembers[i].email === applicantemail) {
        appliedmembers.splice(i, 1);
        break;
      }
    }

    const user = User.findOne({email: applicantemail})
    let appliedposts = user.appliedposts;
    if(typeof(appliedposts)==="undefined"){
      appliedposts = []
    }
    for(let i=0;i<appliedposts.length;i++){
      if(appliedposts[i].id === postid){
        appliedposts[i].status = "rejected"
      }
    }
    await User.replaceOne({ email: applicantemail }, user);
    await Post.replaceOne({ _id: postid }, post);
    return res.status(200).json({ msg: "Application rejected" });
  } catch (error) {
    return res.status(400).json({ error: "Some error occured" });
  }
})

module.exports = router;
