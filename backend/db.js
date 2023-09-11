const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

const mongodbUrl = process.env.MONGODB_CONNECTION

mongoose.connect(mongodbUrl, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongodb Connected Successfully");
});

db.on("error", (err) => {
  console.error("Mongodb Connection Failed:", err);
});

module.exports = mongoose;
