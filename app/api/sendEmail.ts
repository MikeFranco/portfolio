import { IContactData } from './types';

export const sendEmail = async (
  params: IContactData,
  showSuccessMessage: () => void,
) => {
  try {
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        name: params.name,
        email: params.email,
        message: params.message,
      }),
    });
    const responseData = await response.json();
    console.log('%c⧭', 'color: #bfffc8', responseData);
    if (responseData.error) {
      return new Error(responseData.error.message);
    }
    showSuccessMessage();
    return responseData;
  } catch (error) {
    console.log('%c⧭ error', 'color: #992626', error);
    return Response.json({ error });
  }
};
