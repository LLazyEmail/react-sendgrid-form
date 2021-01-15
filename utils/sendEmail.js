const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = ({
  type,
  email,
  first_name,
  article_link,
  article_title,
  brand,
  full_name,
  url,
  time,
  handle,
  storyTitle,
  hasCredits
}) => {
  let msg = {};

  switch (type) {
    case 1:
      msg = {
        to: email,
        from: 'Hackernoon <support@hackernoon.com>', // Use the email address or domain you verified above
        subject: 'Sending with Twilio SendGrid is Fun',
        templateId: 'd-dc18336cd62d40fba8820bccb351aa8f'
      };
      break;
    case 2:
      msg = {
        to: email,
        from: 'Hackernoon <support@hackernoon.com>', // Use the email address or domain you verified above
        subject: 'Sending with Twilio SendGrid is Fun',
        templateId: 'd-5ae6d711deb14a8485a60d7f247cd117',
        dynamicTemplateData: {
          first_name
        }
      };
      break;
    case 3:
      msg = {
        to: email,
        from: 'Hackernoon <support@hackernoon.com>', // Use the email address or domain you verified above
        subject: 'Sending with Twilio SendGrid is Fun',
        templateId: 'd-722b54a3b56a497a9c9124d273b7f641',
        dynamicTemplateData: {
          first_name,
          article_link,
          article_title,
          brand
        }
      };
      break;
    case 4:
      msg = {
        to: email,
        from: 'Hackernoon <support@hackernoon.com>', // Use the email address or domain you verified above
        subject: 'Sending with Twilio SendGrid is Fun',
        templateId: 'd-87d998d5e4064de1be6dc56b0790b9fb',
        dynamicTemplateData: {
          full_name,
          url,
          time
        }
      };
      break;
    case 5:
      msg = {
        to: email,
        from: 'Hackernoon <support@hackernoon.com>', // Use the email address or domain you verified above
        subject: 'Sending with Twilio SendGrid is Fun',
        templateId: 'd-1b0b9282b2bb4b18b5056a22aa25f8fb'
      };
      break;
    case 6:
      msg = {
        to: email,
        from: 'Hackernoon <support@hackernoon.com>', // Use the email address or domain you verified above
        subject: 'Sending with Twilio SendGrid is Fun',
        templateId: 'd-dc18336cd62d40fba8820bccb351aa8f',
        dynamicTemplateData: {
          handle,
          storyTitle,
          hasCredits
        }
      };
      break;
    default: {
      break;
    }
  }

  (async () => {
    try {
      await sgMail.send(msg);
    } catch (error) {
      console.error(error);
  
      if (error.response) {
        console.error(error.response.body)
      }
    }
  })();
};

export { sendEmail };
