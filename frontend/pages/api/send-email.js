// import { sendEmail } from '../../utils/sendEmail';

// export default async (req, res) => {
//   // console.log(req, 'req');
//   try {
//     if (req.method === 'POST') {
//       const { body } = req;

//       // console.log(body, 'body');
//       // console.log(res, 'res');

//       await sendEmail(body);
//       return res.status(200).end();
//     }
//   } catch (error) {
//     return res.json({ error });
//   }
// };
