const express = require("express");
const router = express.Router();

module.exports = router;

router.get("/", async (req, res) => {
  const queryPrice = req.query.price || 0;
  try {
    const allProducts = await Product.find({
      price: { $gte: queryPrice },
    });
    res.send(allProducts);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
router.get("/update/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const Prod = await Product.findById(id);
    res.send(Prod);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/add", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.send({ msg: "product added", newProduct });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.delete("/:idDelete", async (req, res) => {
  try {
    const response = await Product.deleteOne({ _id: req.params.idDelete });
    res.send(response);
  } catch (error) {
    console.log(error);
    res.end();
  }
});
/*
router.put("/update/:id", async (req, res) => {
  try {
    const searchProduct = await Product.findOne({ _id: req.params.id });
    searchProduct.name = req.body.name;
    searchProduct.save();
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});
*/

router.put("/update/:id", async (req, res) => {
  try {
    let searchProduct = await Product.updateOne(
      { _id: req.params.id },
      { ...req.body }
    );
    if (!searchProduct.modifiedCount) {
      return res.status(400).send({ msg: "product already updated" });
    }

    res.send({ msg: "product updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});
