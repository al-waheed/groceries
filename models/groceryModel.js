const mongoose = require("mongoose");

const grocerySchema = mongoose.Schema(
  {
    name: { type: String, require },
    varients: [],
    prices: [],
    category: { type: String, require },
    images: { type: String, require },
    features: { type: String, require },
  },
  {
    timestamps: true,
  }
);

const groceryModel = mongoose.model('grocery', grocerySchema);

module.exports = groceryModel;
