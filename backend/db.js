const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

const mongodbUrl = "mongodb+srv://ajisegirimorenikeji:olalekan@cluster0.uypagps.mongodb.net/mern-grocery" ;

mongoose.connect(mongodbUrl, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongodb Connected Successfully");
});

db.on("error", (err) => {
  console.error("Mongodb Connection Failed:", err);
});

module.exports = mongoose;
