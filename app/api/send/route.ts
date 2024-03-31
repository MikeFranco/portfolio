import { Resend } from 'resend';
import { EmailTemplate } from '../../ui/emailTemplate/emailTemplate';
import { NextRequest } from 'next/server';
const resend = new Resend(process.env.RESEND_API_KEY);
const ownEmail = process.env.PERSONAL_EMAIL;

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [`${ownEmail}`],
      subject: 'New contact email received',
      react: EmailTemplate({ name, email, message }),
      text: '',
    });
    const responseData = await Response.json(data);
    console.log('%c⧭ data', 'color: #73e57c', responseData);
    return responseData;
  } catch (error) {
    console.log('%c⧭ error', 'color: #992626', error);
    return Response.json({ error });
  }
}
