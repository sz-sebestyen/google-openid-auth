const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authEntitySchema = Schema({
  sub: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "google",
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = AuthEntity = mongoose.model("AuthEntity", authEntitySchema);
