require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const countryRoutes = require("./routes/countryRoute");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// app.get("/", () => {
//   console.log("Hello from server");
// });
app.use("/auth", authRoutes);
app.use("/countries", countryRoutes);

const port = process.env.PORT || 5000;

connectDB()
  .then(() =>
    app.listen(port, () => {
      console.log(`Server is running at port: ${port}`);
    })
  )
  .catch((error) => console.error("MongoDB Connection Failed", error));
