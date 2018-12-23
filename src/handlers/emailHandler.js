'use stict'
const sgMail = require('@sendgrid/mail');
const config = require('../config');

async function handleEmailRequest(payload) {
    sgMail.setApiKey(config.sendgrid_api_key);

    const msg = {
        to: 'taylorsdugger@gmail.com',
        from: payload.email,
        subject: payload.subject,
        text: payload.message,
        html: `<strong>New message from: ${payload.given_name} ${payload.family_name} on Dugger's Whiskey</strong><div>${payload.message}</div>`,
      };
      await sgMail.send(msg);
}

module.exports = {
    handleEmailRequest
}