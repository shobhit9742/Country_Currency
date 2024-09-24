const express = require("express");
const getCountriesByCurrency = require("../controllers/countrycontroller");
const router = express.Router();

router.get("/:currencyCode", getCountriesByCurrency);

module.exports = router;
