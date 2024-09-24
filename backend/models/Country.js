const { Schema, model } = require("mongoose");

const CountrySchema = new Schema({
  name: String,
  currency: String,
  capital: String,
  languages: [String],
  flag: String,
});

const CountryModel = model("Country", CountrySchema);

module.exports = CountryModel;
