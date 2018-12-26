const emailHandler = require('../handlers/emailHandler.js');

module.exports = {
    method: 'POST',
    path: '/sendEmailToOwner',
    handler: async (request, h) => {
        try {
            request.payload.html = `<strong>New message from: ${request.payload.given_name} ${request.payload.family_name} on Dugger's Whiskey</strong><div>${request.payload.message}</div>`; 
            const results = await emailHandler.handleEmailRequest(request.payload, 'taylorsdugger@gmail.com');
            return h.response(results).code(200);
        } catch (err) {
            return h.response('Error sending email').code(500);
        }
    },
    config: {
        cors: true
    }
}