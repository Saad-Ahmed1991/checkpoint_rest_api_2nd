const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, lowercase: true, trim: true },
  price: Number,
  category: {
    type: String,
    required: true,
    enum: ["laptop", "food", "gaming", "electronics", "others"],
  },
  description: { type: String, trim: true },
  creationDate: { type: Date, default: Date.now },
  imageSrc: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId },
});

module.exports = Product = mongoose.model("product", productSchema);
