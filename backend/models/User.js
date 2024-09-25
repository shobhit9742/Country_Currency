// const { Schema, model } = require("mongoose");

// const UserSchema = new Schema({
//   username: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   favorites: [{ type: String }],
//   searchHistory: [{ type: String }],
// });

// const UserModel = model("User", UserSchema);

// module.exports = UserModel;

const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  favorites: [{ type: Schema.Types.ObjectId, ref: "Country" }],
  searchHistory: [{ type: String }],
});

const UserModel = model("User", UserSchema);

module.exports = UserModel;
