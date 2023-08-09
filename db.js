const mongoose = require("mongoose");

var mongoURL = "mongodb+srv://olalekan:olalekan@cluster1.tbvc5vc.mongodb.net/";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log("mongodb connected successfully");
});

db.on("error", () => {
  console.log("mongodb connection failed");
});

module.exports = mongoose;
