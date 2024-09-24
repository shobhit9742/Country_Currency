const axios = require("axios");
const UserModel = require("../models/User");

const getCountriesByCurrency = async (req, res) => {
  const { currencyCode } = req.params;
  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/currency/${currencyCode}`
    );
    const countries = response.data.map((country) => ({
      name: country.name.common,
      currency: country.currencies,
      capital: country.capital,
      languages: country.languages,
      flag: country.flags.png,
    }));

    const user = await UserModel.findById(req.user.id);
    user.searchHistory = [currencyCode, ...user.searchHistory.slice(0, 4)];
    await user.save();

    res.json(countries);
  } catch (error) {
    res.status(500).json({ message: "Error fetching countries" });
  }
};

module.exports = getCountriesByCurrency;
