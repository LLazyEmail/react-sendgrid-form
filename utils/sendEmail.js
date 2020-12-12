const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = ({ email }) => { 
    const msg = {
        to: email,
        from: 'Hackernoon <support@hackernoon.com>', // Use the email address or domain you verified above
        subject: 'Sending with Twilio SendGrid is Fun',
        templateId: 'd-dc18336cd62d40fba8820bccb351aa8f',
    };
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
// const sendEmail = async ({ email }) => {
//     try {
//         const res = await fetch(SENDGRID_API, {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//               Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
//             },
//             body: JSON.stringify({
//                 from: {
//                     email: 'support@hackernoon.com',
//                     name: 'Hackernoon',
//                   },
//                 personalizations: [
//                     {
//                     to: [
//                         {
//                         email,
//                         },
//                     ],
//                     subject: 'Demo success :)',
//                     },
//                 ],
//                 template_id: 'd-dc18336cd62d40fba8820bccb351aa8f',
//             })
//           })
//           const status = await res.text();
//           console.log(status);
//     } catch (error) {
//         console.log(error);
//     }
  
// };

export { sendEmail };
