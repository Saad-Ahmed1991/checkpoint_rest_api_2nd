const checkName = (req, res, next) => {
  if (req.body.name) {
    next();
    return;
  } else {
    return res.status(400).send({ msg: "field name is required" });
  }
};

module.exports = checkName;
