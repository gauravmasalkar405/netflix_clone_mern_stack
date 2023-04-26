const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      min: 3,
      max: 30,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      min: 3,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      min: 8,
      max: 20,
      required: true,
    },
    profilePicPath: {
      type: String,
      default: "",
    },
    likedMovies: Array,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", userSchema);
