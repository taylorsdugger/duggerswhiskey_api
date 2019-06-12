let mongoose = require('mongoose');

let reviewSchema = new mongoose.Schema({
    email: String,
    name: String,
    headline: String,
    body: String,
    rating: Number,
    date: Date
  });

  module.exports = mongoose.model('Review', reviewSchema);
  