'use strict';

let reviewModel = require('../models/review');

async function getReviews(queryParams) {
  const reviews = await reviewModel.find({}, null, { skip: (--queryParams.page * queryParams.limit), limit: queryParams.limit });
  const reviewSum = await reviewModel.aggregate().group({_id: "$rating", total: { $sum: "$rating"}});

  return {
    reviews,
    reviewSum
  }
}

module.exports = {
  getReviews
}