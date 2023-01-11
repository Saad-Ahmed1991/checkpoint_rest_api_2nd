const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = require("./config/connectDB");
const { create } = require("./models/Product");
const User = require("./models/User");
app.use(express.json());
const cors = require("cors");
app.use(cors());

//database connection

connectDB();

// create_user

const createUser = async (name, age, email) => {
  try {
    const newUser = new User({
      name,
      age,
      email,
    });
    console.log(newUser);
    await newUser.save();
  } catch (error) {
    console.log(error);
  }
};

//createUser("ahmed", 25);

//get all users

const findUsers = async () => {
  try {
    const allUsers = await User.find();
    console.log(allUsers);
  } catch (error) {
    console.log(error);
  }
};

//findUsers();

//find By ID

const findById = async (id) => {
  try {
    const user = await User.findById(id);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};

//findById("639847ec50db1efc57d0c3a4");

//delete one

const deleteOne = async (id) => {
  try {
    await User.deleteOne({ _id: id });
    console.log(`the user with the id=${id} has been deleted`);
  } catch (error) {
    console.log(error);
  }
};

//

//createProduct("laptop", 1500, "gaming laptop", "gaming");

//routes

app.use("/api/user/", require("./routes/userRoutes"));
app.use("/api/product/", require("./routes/productsRoutes"));

const port = process.env.PORT;

app.listen(port, (err) =>
  err ? console.log(err) : console.log(`server running on port: ${port}!`)
);
