// const express = require("express");
// const Grocery = require("./models/groceryModel");

// const app = express();
// const db = require("./db.js");
// app.use(express.json());

// app.get("/", (reg, res) => {
//   res.send("Server working successfully");
// });

// app.get("/getgrocery", (reg, res) => {
//   Grocery.find({}, (err, docs) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(docs);
//     }
//   });
// });

// const port = process.env.PORT || 4000;

// app.listen(port, () => "Server running on port");

const express = require("express");
const Grocery = require('./models/groceryModel');

const app = express();
const db = require("./db.js");
app.use(express.json());

app.get("/", (reg, res) => {
  res.send("Server working successfully");
});

app.get("/getgrocery", async (reg, res) => {
  try {
    const docs = await Grocery.find().exec();
    res.send(docs);
  } catch (err) {
    console.error(err);
    // res.status(500).json({ message: "Internal Server Error" });
  }
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});