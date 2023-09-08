const dotenv = require('dotenv');
dotenv.config(); 

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongodb Connected Successfully");
});

db.on("error", () => {
  console.log("Mongodb Connection Failed");
});

module.exports = mongoose;