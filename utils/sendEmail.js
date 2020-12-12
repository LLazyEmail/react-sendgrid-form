const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = ({ type, email, first_name, article_link, article_title, brand, full_name, url, time, handle, storyTitle, hasCredits }) => { 

    let msg = {};

    switch (type) {
        case 1:
            msg = {
                to: email,
                from: 'Hackernoon <support@hackernoon.com>', // Use the email address or domain you verified above
                subject: 'Sending with Twilio SendGrid is Fun',
                templateId: 'd-dc18336cd62d40fba8820bccb351aa8f',
            };
            break;
        case 2:
            msg = {
                to: email,
                from: 'Hackernoon <support@hackernoon.com>', // Use the email address or domain you verified above
                subject: 'Sending with Twilio SendGrid is Fun',
                templateId: 'd-dc18336cd62d40fba8820bccb351aa8f',
            };
            break;
        case 3:
            msg = {
                to: email,
                from: 'Hackernoon <support@hackernoon.com>', // Use the email address or domain you verified above
                subject: 'Sending with Twilio SendGrid is Fun',
                templateId: 'd-dc18336cd62d40fba8820bccb351aa8f',
            };
            break;
        case 4:
            msg = {
                to: email,
                from: 'Hackernoon <support@hackernoon.com>', // Use the email address or domain you verified above
                subject: 'Sending with Twilio SendGrid is Fun',
                templateId: 'd-dc18336cd62d40fba8820bccb351aa8f',
            };
            break;
        case 5:
            msg = {
                to: email,
                from: 'Hackernoon <support@hackernoon.com>', // Use the email address or domain you verified above
                subject: 'Sending with Twilio SendGrid is Fun',
                templateId: 'd-dc18336cd62d40fba8820bccb351aa8f',
            };
            break;
        case 6:
            msg = {
                to: email,
                from: 'Hackernoon <support@hackernoon.com>', // Use the email address or domain you verified above
                subject: 'Sending with Twilio SendGrid is Fun',
                templateId: 'd-dc18336cd62d40fba8820bccb351aa8f',
            };
            break;
        default: {
            msg = {
                to: email,
                from: 'Hackernoon <support@hackernoon.com>', // Use the email address or domain you verified above
                subject: 'Sending with Twilio SendGrid is Fun',
                templateId: 'd-dc18336cd62d40fba8820bccb351aa8f',
            };
            break;
        }
    }   
    // const msg = {
    //     to: email,
    //     from: 'Hackernoon <support@hackernoon.com>', // Use the email address or domain you verified above
    //     subject: 'Sending with Twilio SendGrid is Fun',
    //     templateId: 'd-dc18336cd62d40fba8820bccb351aa8f',
    // };
  //ES6
  
  sgMail
    .send(msg)
    .then(() => {}, error => {
      console.error(error);
  
      if (error.response) {
        console.error(error.response.body)
      }
    });
}

export { sendEmail };
