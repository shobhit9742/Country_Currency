require("dotenv").config();
const { connect } = require("mongoose");

const connectDB = async (req, res) => {
  try {
    await connect(process.env.MONGO_URI, {
      dbName: "country_currency",
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Error Connecting to DB", error);
    process.exit(1);
  }
};

module.exports = connectDB;
