const express = require("express");
const Grocery = require("./models/groceryModel");

const app = express();
const db = require("./db.js");
app.use(express.json());

const groceriesRoute = require("./routes/groceryRoute");

app.use("/api/grocery/", groceriesRoute);

app.get("/", (reg, res) => {
  res.send("Server working successfully");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
