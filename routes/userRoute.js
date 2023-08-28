const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

// Route to get all users
router.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // Create a new User instance using the User model
  const newUser = new User({ firstName, lastName, email, password });

  try {
    await newUser.save();
    res.send("User Registered Successfully");
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
        firstName: user[0].firstName,
        lastName: user[0].lastName,
        email: user[0].email,
        isAdmin: user[0].isAdmin,
        _id: user[0]._id,
      };
      res.send(currentUser);
    } else {
      return res.status(400).json({ message: "User Logging Failed" });
    }
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong" });
  }
});

module.exports = router;
