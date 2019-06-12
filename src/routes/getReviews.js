const getReviewsHandler = require('../handlers/getReviewsHandler.js');
const joi = require('joi');

module.exports = {
  method: 'GET',
  path: `/reviews`,
  handler: async (request, h) => {
    try {
      const results = await getReviewsHandler.getReviews(request.query);
      return h.response(results).code(200);
    } catch (err) {
      return h.response(err, 'Error getting reviews').code(500);
    }
  },
  options: {
    cors: true,
    validate: {
      query: {
          limit: joi.number().integer().min(1).max(100).default(10),
          page: joi.number().integer().default(1)
      }
    }
  }
}