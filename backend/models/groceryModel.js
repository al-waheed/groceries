const mongoose = require("mongoose");

// Define the schema for the "grocery" collection in the database.
const grocerySchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    varients: [],
    prices: [],
    images: { type: String, required: true },
    features: [],
  },
  {
    timestamps: true,
    collection: "grocery",
  }
);
 
const groceryModel = mongoose.model("grocery", grocerySchema);
module.exports = groceryModel;
