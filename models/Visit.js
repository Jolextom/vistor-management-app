const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  host: {
    type: String,
    required: true
  },
  checkIn: {
    type: Date,
    default: Date.now
  },
  checkOut:{
    type:Date,
  },
  purpose: {
    type: String,
    required: true
  }
});



module.exports = mongoose.model("Visitor", visitorSchema);
