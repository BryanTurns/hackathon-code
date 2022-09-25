const mongoose = require("mongoose");

const userScehma = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  hedera_id: {
    type: String,
    required: true,
  },
  hedera_private_key: {
    type: String,
    required: true,
  },
  nfts: {
    type: Array,
  },
});

module.exports = mongoose.model("User", userScehma);
