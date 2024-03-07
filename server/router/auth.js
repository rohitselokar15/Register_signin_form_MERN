const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");

router.get("/", (req, res) => {
  res.send("Home page");
});

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Fill all the field properly" });
  }

  try {
    const userExit = await User.findOne({ email: email });

    if (userExit) {
      return res.status(422).json({ error: "Email already exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "password are not matching" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });
      await user.save();
      res.status(201).json({ message: "user registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "plz filled the data" });
    }

    const userLogin = await User.findOne({ email: email });
    console.log(userLogin);

    if (!userLogin) {
      res.status(400).json({ error: "user error" });
    } else {
      res.json({ message: "user login successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
