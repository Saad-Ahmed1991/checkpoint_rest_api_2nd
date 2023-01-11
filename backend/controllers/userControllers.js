const getAll = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.send(allUsers);
    res.end();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAll };
