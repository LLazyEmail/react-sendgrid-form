import fetch from 'node-fetch';

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send';

const sendEmail = async ({ email }) => {
    try {
        const res = await fetch(SENDGRID_API, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
            },
            body: JSON.stringify({
                from: {
                    email: 'support@hackernoon.com',
                    name: 'Hackernoon',
                  },
                personalizations: [
                    {
                    to: [
                        {
                        email,
                        },
                    ],
                    subject: 'Demo success :)',
                    },
                ],
                template_id: 'd-dc18336cd62d40fba8820bccb351aa8f',
            })
          })
          const status = await res.text();
          console.log(status);
    } catch (error) {
        console.log(error);
    }
  
};

export { sendEmail };
