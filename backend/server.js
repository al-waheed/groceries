const express = require("express");
const cors = require('cors');
const path = require('path');
const Grocery = require("./models/groceryModel.js");
const dotenv = require('dotenv');
dotenv.config();
const PORT = 6000
const app = express();
const db = require("./db.js");
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

const groceriesRoute = require("./routes/groceryRoute.js");
const usersRoute = require("./routes/userRoute.js");
const orderRoute = require("./routes/orderRoute.js");

app.use(cors({
  origin: 'http://localhost:3000' 
}));

app.use("/api/grocery/", groceriesRoute);
app.use("/api/users/", usersRoute);
app.use("/api/orders/", orderRoute);

app.get("/", (req, res) => {
  res.send("Server working successfully");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
