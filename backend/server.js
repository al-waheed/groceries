const express = require("express");
const path = require('path');
const Grocery = require("./models/groceryModel");
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const db = require("./db.js");
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

const groceriesRoute = require("./routes/groceryRoute");
const usersRoute = require("./routes/userRoute");
const orderRoute = require("./routes/orderRoute");

app.use("/api/grocery/", groceriesRoute);
app.use("/api/users/", usersRoute);
app.use("/api/orders/", orderRoute);

app.get("/", (req, res) => {
  res.send("Server working successfully");
});

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
