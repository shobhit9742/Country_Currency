// routes/favoriteRouter.js

const { Router } = require("express");
const {
  addFavorite,
  getFavorites,
} = require("../controllers/favoriteController");

const favoriteRouter = Router();

// Route to add a favorite
favoriteRouter.post("/", addFavorite);

// Route to get all favorites
favoriteRouter.get("/", getFavorites);

module.exports = favoriteRouter;
