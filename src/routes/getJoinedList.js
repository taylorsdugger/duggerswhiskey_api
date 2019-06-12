const getWaitingListHandler = require('../handlers/getWaitingListHandler.js');

module.exports = {
  method: 'GET',
  path: `/getJoinedLists/{email}`,
  handler: async (request, h) => {
    try {
      const results = await getWaitingListHandler.getJoinedLists(request.params.email);
      return h.response(results).code(200);
    } catch (err) {
      return h.response(err, 'Error getting lists').code(500);
    }
  },
  config: {
    cors: true
  }
}