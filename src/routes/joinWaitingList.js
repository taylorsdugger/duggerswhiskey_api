const waitingListHandler = require('../handlers/waitingList.js');
const emailHandler = require('../handlers/emailHandler.js');

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
                from: 'info@duggerswhiskey.net',
                subject: 'New wait list sign-up',
                text: 'A new person signed up on the wait list', 
                html: `<strong>New sign up for ${request.payload.whiskey_type}</strong><div>${request.payload.given_name}  ${request.payload.family_name} has joined the waiting list.</div>`
            }, 'taylorsdugger@gmail.com');
            //Send email to user
            emailHandler.handleEmailRequest(
            { 
                from: 'taylorsdugger@gmail.com', 
                subject: 'You have joined the waiting list!', 
                text: `You have successfully signed up on the waiting list for ${request.payload.whiskey_type}. Hang tight, we will let you know when it is ready!`,
                html: `<strong>You have successfully signed up on the waiting list for ${request.payload.whiskey_type}.<div>Hang tight, we will let you know when it is ready!</div></strong>` 
            }, request.payload.email);

            return h.response(results).code(200);
        } catch (err) {
            return h.response('Error joining list').code(500);
        }
    },
    config: {
        cors: true
    }
}