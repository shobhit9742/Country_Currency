// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const UserModel = require("../models/User");

// // Register
// const register = async (req, res) => {
//   const { username, email, password } = req.body;
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = new UserModel({ username, email, password: hashedPassword });
//     await user.save();
//     res.status(201).json({ message: "User Registered Successfully" });
//   } catch (error) {
//     res.status(500).json({ error: "Server error" });
//   }
// };

// // Login
// const login = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await UserModel.findOne({ email });
//     if (!user) {
//       res.status(404).json({ error: "User not Found" });
//     }
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       res.status(401).json({ error: "Invalid Credentials" });
//     }

//     const token = jwt.sign({ userId: user_id }, process.env.JWT_SECRET, {
//       expiresIn: "1h",
//     });
//     res.status(200).json({ token });
//   } catch (error) {
//     res.status(500).json({ error: "Server Error" });
//   }
// };

// module.exports = { register, login };
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/User");

// Register
const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new UserModel({ username, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User Registered Successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Login
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { register, login };
