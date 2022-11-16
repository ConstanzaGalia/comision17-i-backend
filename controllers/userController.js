const User = require('../models/UserModel');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    console.log(users)
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).message('Internal Server Error');
  }
}

module.exports = {
  getAllUsers
}