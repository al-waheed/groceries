const express = require("express");
const router = express.Router();
const Grocery = require("../models/groceryModel");

// Route to get all groceries
router.get("/getallgroceries", async (req, res) => {
  try {
    const groceries = await Grocery.find({});
    res.send(groceries);
    // res.status(200).json(groceries)
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

module.exports = router;
