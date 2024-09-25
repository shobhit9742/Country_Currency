// controllers/favoriteController.js

const CountryModel = require("../models/Country");
const UserModel = require("../models/User");

// Add to favorites
exports.addFavorite = async (req, res) => {
  try {
    const user = await UserModel.findById(req._id);
    const country = new CountryModel(req.body);
    await country.save();
    user.favorites.push(country);
    await user.save();
    res.json(user.favorites);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Get favorites
exports.getFavorites = async (req, res) => {
  try {
    const user = await UserModel.findById(req._id).populate("favorites");
    res.json(user.favorites);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
