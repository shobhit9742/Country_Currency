// const axios = require("axios");
// const UserModel = require("../models/User");

// const getCountriesByCurrency = async (req, res) => {
//   const { CURRENCY_CODE } = req.params;
//   try {
//     const response = await axios.get(
//       `https://restcountries.com/v3.1/currency/${CURRENCY_CODE}`
//     );
//     const countries = response.data.map((country) => ({
//       name: country.name.common,
//       currency: country.currencies,
//       capital: country.capital,
//       languages: country.languages,
//       flag: country.flags.png,
//     }));

//     const user = await UserModel.findById(req.user.id);
//     user.searchHistory = [CURRENCY_CODE, ...user.searchHistory.slice(0, 4)];
//     await user.save();

//     res.json(countries);
//   } catch (error) {
//     console.log(CURRENCY_CODE);
//     res.status(500).json({ message: "Error fetching countries" });
//   }
//   console.log(CURRENCY_CODE);
// };

// module.exports = getCountriesByCurrency;

const axios = require("axios");
const UserModel = require("../models/User");

const getCountriesByCurrency = async (req, res) => {
  const { currencyCode } = req.params; // Change CURRENCY_CODE to currencyCode
  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/currency/${currencyCode}` // Ensure currencyCode is correct
    );
    const countries = response.data.map((country) => ({
      name: country.name.common,
      currency: country.currencies,
      capital: country.capital,
      languages: country.languages,
      flag: country.flags.png,
    }));

    // const user = await UserModel.findById(req.user.id);
    // user.searchHistory = [currencyCode, ...user.searchHistory.slice(0, 4)];
    // await user.save();

    res.json(countries);
  } catch (error) {
    console.error(
      "Error in getCountriesByCurrency:",
      error.response ? error.response.data : error.message
    );
    res
      .status(500)
      .json({ message: "Error fetching countries", error: error.message });
  }
};

module.exports = getCountriesByCurrency;
