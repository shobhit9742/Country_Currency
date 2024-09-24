const UserModel = require("../models/User");

// Add to search history
exports.addSearchHistory = async (req, res) => {
  const { searchQuery } = req.body;
  try {
    const user = await UserModel.findById(req.user.id);
    user.searchHistory = [
      searchQuery,
      ...user.searchHistory.filter((item) => item !== searchQuery),
    ].slice(0, 5);
    await user.save();
    res.json(user.searchHistory);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Get search history
exports.getSearchHistory = async (req, res) => {
  try {
    const user = await UserModel.findById(req.user.id);
    res.json(user.searchHistory);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
