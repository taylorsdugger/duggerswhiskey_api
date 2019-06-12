const waitingListHandler = require('../handlers/waitingList.js');
const emailHandler = require('../handlers/emailHandler.js');
const config = require('../config');

module.exports = {
  method: 'POST',
  path: '/joinWaitingList',
  handler: async (request, h) => {
    try {
      //Join wait list
      const results = await waitingListHandler.handleWaitListJoin(request.payload);
      //Send email to owner
      emailHandler.handleEmailRequest(
        {
          email: 'info@duggerswhiskey.net',
          subject: 'New wait list sign-up',
          message: 'A new person signed up on the wait list'
        },
        `${config.adminEmail}`,
        `<strong>New sign up for ${request.payload.whiskey_type}</strong><div>${request.payload.given_name}  ${request.payload.family_name} has joined the waiting list.</div>`);
      //Send email to user
      emailHandler.handleEmailRequest(
        {
          email: 'noreply@duggerswhiskey.net',
          subject: 'You have joined the waiting list!',
          message: `You have successfully signed up on the waiting list for ${request.payload.whiskey_type}. Hang tight, we will let you know when it is ready!`
        },
        request.payload.email,
        `<strong>You have successfully signed up on the waiting list for ${request.payload.whiskey_type}.<div>Hang tight, we will let you know when it is ready!</div></strong>`);

      return h.response(results).code(200);
    } catch (err) {
      return h.response('Error joining list').code(500);
    }
  },
  config: {
    cors: true
  }
}