const { Router } = require("express");
const { login, register } = require("../controllers/authController");
const verifyToken = require("../middleware/authMiddleware");

const router = Router();

router.post("/register", register);
router.post("/login", login);

module.exports = router;
