const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  favorites: [{ type: String }],
  searchHistry: [{ type: String }],
});

const UserModel = model("User", UserSchema);

module.exports = UserModel;
