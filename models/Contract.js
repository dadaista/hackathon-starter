const mongoose = require('mongoose');

const contractSchema = new mongoose.Schema({
  //email: { type: String, unique: true },
  type: String,
  premium: Number,
  compensation: Number,
  startDate: Date,
  endDate: Date,
  customer: String,
  insurers:Array

}, { timestamps: true });







const User = mongoose.model('Contract', contractSchema);

module.exports = Contract;
