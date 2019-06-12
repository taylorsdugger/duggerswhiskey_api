'use stict'

let reviewModel = require('../models/review');

async function addReview(payload) {
  let review = new reviewModel({
    email: payload.email,
    name: payload.name,
    headline: payload.headline,
    body: payload.body,
    rating: payload.rating,
    date: new Date()
  });

  return await review.save();
}

module.exports = {
  addReview
}