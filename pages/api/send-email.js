import { sendEmail } from '../../utils/sendEmail';

export default async (req, res) => {
  try {
    if (req.method === 'POST') {
      const { body } = req;
      console.log(body);
      // await sendEmail(body);
      return res.status(200).end();
    }
  } catch (error) {
    return res.json({ error });
  }
};
