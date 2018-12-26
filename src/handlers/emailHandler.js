'use stict'

const sgMail = require('@sendgrid/mail');
const config = require('../config');

async function handleEmailRequest(payload, toEmail) {
    sgMail.setApiKey(config.sendgrid_api_key);

    const msg = {
        to: toEmail,
        from: payload.email,
        subject: payload.subject,
        text: payload.message,
        html: request.payload.html
      };
      await sgMail.send(msg);
}

module.exports = {
    handleEmailRequest
}