const postReviewsHandler = require('../handlers/postReviewsHandler.js');

module.exports = {
  method: 'POST',
  path: `/reviews`,
  handler: async (request, h) => {
    try {
      const results = await postReviewsHandler.addReview(request.payload);
      return h.response(results).code(201);
    } catch (err) {
      return h.response(err, 'Error posting reviews').code(500);
    }
  },
  config: {
    cors: true
  }
}