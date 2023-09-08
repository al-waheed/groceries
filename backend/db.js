const mongoose = require("mongoose");

var mongoURL = "mongodb+srv://ajisegirimorenikeji:olalekan@cluster0.uypagps.mongodb.net/mern-grocery";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongodb Connected Successfully");
});

db.on("error", () => {
  console.log("Mongodb Connection Failed");
});

module.exports = mongoose;
