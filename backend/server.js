require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const countryRoutes = require("./routes/countryRoute");
const cors = require("cors");
const favoriteRouter = require("./routes/favoriteRoutes");

const corsOptions = {
  origin: process.env.CLIENT_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const app = express();
app.use(express.json());
app.use(cors(corsOptions));

app.use("/auth", authRoutes);
app.use("/countries", countryRoutes);
app.use("/favorite", favoriteRouter);

const port = process.env.PORT || 5000;

connectDB()
  .then(() =>
    app.listen(port, () => {
      console.log(`Server is running at port: ${port}`);
    })
  )
  .catch((error) => console.error("MongoDB Connection Failed", error));
