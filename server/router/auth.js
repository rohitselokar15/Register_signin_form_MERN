const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  res.send("Home page");
});

router.post("/register", async (req, res) => {
  const { name, email, phone, password, cpassword } = req.body;

  if (!name || !email || !phone || !password || !cpassword) {
    return res.status(422).json({ error: "Fill all the field properly" });
  }

  try {
    const userExit = await User.findOne({ email: email });

    if (userExit) {
      return res.status(422).json({ error: "Email already exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "password are not matching" });
    } else {
      const user = new User({ name, email, phone, password, cpassword });
      await user.save();
      res.status(201).json({ message: "user registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "please filled the data" });
    }

    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      n = await userLogin.generateAuthToken();

      res.cookie("jwtoken",token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly:true
      });

      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credential" });
      } else {
        res.json({ message: "user login successfully" });
      }
      
    } else {
      res.status(400).json({ error: "Inavalid Credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
