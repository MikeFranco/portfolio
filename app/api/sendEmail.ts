import type { Dispatch, SetStateAction } from 'react';
import { IContactData } from './types';

export const sendEmail = async (
  params: IContactData,
  showSuccessMessage: () => void,
) => {
  showSuccessMessage();
};
