import { Resend } from 'resend';
import { IContactData } from './types';
import { EmailTemplate } from '../ui/emailTemplate/emailTemplate';
const resend = new Resend('re_4hDaD41m_4W26G1zSW3mygyGJrBVsrEhq');
const ownEmail = process.env.PERSONAL_EMAIL;

export const sendEmail = async (
  params: IContactData,
  showSuccessMessage: () => void,
) => {
  try {
    /* const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['mfrancop.98@gmail.com'],
      subject: 'Contact received',
      react: EmailTemplate({ firstName: 'aló' }),
    }); */
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // 'Acme <onboarding@resend.dev>',
      to: [`${ownEmail}`], //[params.email],
      subject: 'New contact email received',
      react: EmailTemplate(params),
      text: 'alo policia',
    });
    const responseData = await Response.json(data);
    console.log('%c⧭ data', 'color: #73e57c', responseData);
    return responseData;
  } catch (error) {
    console.log('%c⧭ error', 'color: #992626', error);
    return Response.json({ error });
  }
  showSuccessMessage();
};
