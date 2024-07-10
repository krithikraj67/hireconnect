import mongoose, { Schema } from "mongoose";
const bcrypt = require("bcrypt");

const OptionSchema = new Schema({
  value: "string",
  index: "string",
  disable: "boolean",
  fixed: "boolean",
});

const userSchema = new Schema({
  fname: {
    type: "string",
    required: true,
  },
  lname: {
    type: "string",
    required: true,
  },
  email: {
    type: "string",
    required: true,
    unique: true,
  },
  password: {
    type: "string",
    required: true,
  },
  skills: [OptionSchema],
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
