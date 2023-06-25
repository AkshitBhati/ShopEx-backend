const mongoose = require("mongoose");


const ProductsSchema = new mongoose.Schema(
  {
    title: { type: String, require: true }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Products = mongoose.model("Products", ProductsSchema);
module.exports = Products;
