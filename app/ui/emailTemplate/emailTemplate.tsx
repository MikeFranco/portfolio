import React from 'react';
import { IContactData } from '../../api/types';

export const EmailTemplate: React.FC<Readonly<IContactData>> = ({
  name,
  email,
  message,
}: IContactData) => {
  return (
    <div className='rounded-lg border w-full'>
      <div className='flex flex-col space-y-1.5 p-6'>
        <p className='text-2xl'>
          Thank you for your message!, I'll answer in a bit
        </p>
        <p>Data received:</p>
      </div>
      <div className='grid items-center p-6 pt-0'>
        <div className='grid gap-1 text-sm w-full mobile:gap-2'>
          <div className='flex justify-between text-2xl'>
            <p>Name</p>
            <p>{name}</p>
          </div>
          <div className='flex justify-between text-2xl'>
            <p>Email</p>
            <p>{email}</p>
          </div>
          <div className='flex justify-between text-2xl'>
            <p>Message</p>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
