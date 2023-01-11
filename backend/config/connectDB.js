const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.URI);
    console.log("connected to Database");
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectDB;
