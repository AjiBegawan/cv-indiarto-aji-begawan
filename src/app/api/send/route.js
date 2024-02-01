// import { Resend } from 'resend';
// import { NextResponse } from 'next/server';

// // const resend = new Resend(process.env.local.RESEND_API_KEY);
// // const fromEmail = process.env.local.FROM_EMAIL;

// export async function POST(req, res) {
//   const { email, subject, message } = await req.json();
//   try {
//     const data = await resend.emails.send({
//       from: fromEmail,
//       to: [fromEmail, email],
//       subject: subject,
//       react: (
//         <>
//           <h1>{subject}</h1>
//           <p>Thank you for contacting us!</p>
//           <p>New message submitted : </p>
//           <p>{message}</p>
//         </>
//       ),
//     });
//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ error });
//   }
// }
