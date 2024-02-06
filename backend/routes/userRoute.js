const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

// Route to get all users
router.post("/signup", async (req, res) => {
  const { fullName, email, password } = req.body;

  // Create a new User instance using the User model
  const newUser = new User({ fullName, email, password });

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email Already Exists." });
    }
    await newUser.save();
    res.send("User Registered Successfully.");
    // res.status(201).json(newUser);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.find({ email, password });
    if (user.length > 0) {
      const currentUser = {
        fullName: user[0].fullName,
        email: user[0].email,
        isAdmin: user[0].isAdmin,
        _id: user[0]._id,
      };
      res.send(currentUser);
      console.log(currentUser)
      // res.status(202).json(currentUser);
    } else {
      return res.status(406).json({ message: "User Logging Failed." });
    }
  } catch (error) {
    return res.status(400).json({ message: "Something Went Wrong." });
  }
});

module.exports = router;
