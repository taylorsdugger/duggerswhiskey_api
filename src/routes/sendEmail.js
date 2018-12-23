const emailHandler = require('../handlers/emailHandler.js');

module.exports = {
    method: 'POST',
    path: '/sendEmailToOwner',
    handler: async (request, h) => {
        try {
            const results = await emailHandler.handleEmailRequest(request.payload);
            return h.response(results).code(200);
        } catch (err) {
            return h.response('Error sending email').code(500);
        }
    },
    config: {
        cors: true
    }
}