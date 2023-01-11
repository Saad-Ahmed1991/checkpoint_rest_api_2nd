const express = require("express");
const router = express.Router();
const User = require("../models/User");
const checkName = require("../middlewares/checkName");

router.get("/test", (req, res) => {
  res.send("router user");
});

//user==> request all users

router.get("/", async (req, res) => {
  try {
    const allUsers = await User.find();
    res.send(allUsers);
    res.end();
  } catch (error) {
    console.log(error);
  }
});

router.post("/add", checkName, async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.send({ msg: "user added", newUser });
  } catch (error) {
    console.log(error);
    res.end();
  }
});

router.delete("/:idDelete", async (req, res) => {
  try {
    const response = await User.deleteOne({ _id: req.params.idDelete });
    res.send(response);
  } catch (error) {
    console.log(error);
    res.end();
  }
});

module.exports = router;
