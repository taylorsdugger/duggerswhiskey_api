'use strict';

let reviewModel = require('../models/review');

async function getReviews(queryParams) {
  const reviews = await reviewModel.find({}, null, { skip: (--queryParams.page * queryParams.limit), limit: queryParams.limit });
  const reviewSum = await reviewModel.aggregate().group({_id: null, sum: { $sum: "$rating"}});
  const reviewCount = await reviewModel.count("rating");

  return {
    reviews,
    overallRating: reviewSum[0].sum/reviewCount
  }
}

module.exports = {
  getReviews
}