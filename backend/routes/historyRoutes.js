// routes/historyRouter.js

const { Router } = require("express");
const {
  addSearchHistory,
  getSearchHistory,
} = require("../controllers/historyController");

const historyRouter = Router();

// Route to add search history
historyRouter.post("/", addSearchHistory);

// Route to get search history
historyRouter.get("/", getSearchHistory);

module.exports = historyRouter;
