'use stict'

const sgMail = require('@sendgrid/mail');
const sgClient = require('@sendgrid/client');
const config = require('../config');

async function handleEmailRequest(payload, toEmail, html) {
    sgMail.setApiKey(config.sendgrid_api_key);

    const msg = {
        to: toEmail,
        from: payload.email,
        subject: payload.subject,
        text: payload.message,
        html: html
      };
      
      await sgMail.send(msg);
}

async function handleTemplateEmailRequest(toEmail, whiskey_type) {
    sgClient.setApiKey(config.sendgrid_api_key);

    const request = {
        method: 'POST',
        url: 'v3/mail/send',
        personalizations: [
            {
                to: [ { email: toEmail } ]
            }
        ],
        from: {
            email: 'info@duggerswhiskey.net'
        },
        template_id: 'd-97b6fd1f5d4c48a2989fff5b3af72024',
        dynamic_template_data: {
            "whiskey_type": whiskey_type
        }
    }

    return await sgClient.request(request); 
}

module.exports = {
    handleEmailRequest,
    handleTemplateEmailRequest
}