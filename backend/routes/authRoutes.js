const { Router } = require("express");
const { login, register } = require("../controllers/authController");
const verifyToken = require("../middleware/authMiddleware");

const router = Router();

router.post("/register", verifyToken, register);
router.post("/login", verifyToken, login);

module.exports = router;
