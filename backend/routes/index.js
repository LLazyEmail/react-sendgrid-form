
// import { sendEmail } from '../../frontend/utils/sendEmail';

var express = require('express');
var router = express.Router();
// var {sendEmail} = require('../../frontend/utils/sendEmail');
const sgMail = require('@sendgrid/mail');

router.all('*', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed

  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/send-email', async function(req, res, next) {

  sgMail.setApiKey('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');sgMail.setApiKey('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');

  try {
    if (req.method === 'POST') {

        const { body } = req;
        await sendEmail(body);

        function sendEmail(data) {
       
          data.email = 'abram.room@gmail.com'; 

          let msg = {
            to: data.email,
            from: 'Hackernoon <support@hackernoon.com>', // Use the email address or domain you verified above
            subject: 'Sending with Twilio SendGrid is Fun',
            templateId: data.templateId,
            dynamicTemplateData: data.dynamicTemplateData
          };
          
          console.log(data, 'sendEmail data')

          // (async () => {
            try {
              sgMail.send(msg);
            } catch (error) {
              console.error(error);
              if (error.response) {
                console.error(error.response.body)
              }
            }
          // })();
        };
      }
  } catch (error) {
    return res.json({ error });
  }
  res.status(200).send();
});

module.exports = router;
