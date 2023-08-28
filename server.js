const express = require("express");
const Grocery = require("./models/groceryModel");

const app = express();
const db = require("./db.js");
app.use(express.json());

const groceriesRoute = require("./routes/groceryRoute");
const usersRoute = require("./routes/userRoute");
const orderRoute = require("./routes/orderRoute");

app.use("/api/grocery/", groceriesRoute);
app.use("/api/users/", usersRoute);
app.use("/api/orders/", orderRoute);

app.get("/", (req, res) => {
  res.send("Server working successfully");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
