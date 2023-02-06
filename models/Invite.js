const mongoose = require("mongoose");

const inviteSchema = new mongoose.Schema({
  host: {
    type: String,
    required: true
  },
  visitorEmail: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  purpose: {
    type: String,
    required: true
  },
  message: {
    type: String
  },
  status: {
    type: String,
    default: "pending",
    enum: ["pending", "accepted", "declined"]
  }
});

module.exports = mongoose.model("Invite", inviteSchema);
