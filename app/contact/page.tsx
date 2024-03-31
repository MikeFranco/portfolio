'use client';
import { ChangeEvent, FormEvent, useState } from 'react';
import { IContactData } from '../api/types';
import { sendEmail } from '../api/sendEmail';
import { clsx } from 'clsx';

const Page = () => {
  const inputsInitialState = {
    name: '',
    email: '',
    message: '',
  };
  const [emailSended, setEmailSended] = useState(false);
  const [canSendEmail, setCanSendEmail] = useState(false);
  const [formData, setFormData] = useState<IContactData>(inputsInitialState);
  const [errors, setErrors] = useState(inputsInitialState);

  const showSuccessMessage = () => {
    setEmailSended(true);
    setFormData(inputsInitialState);
    setErrors(inputsInitialState);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendEmail(formData, showSuccessMessage);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    const updatedErrors = { ...errors };
    setFormData(newFormData);

    Object.entries(newFormData).map(([key, value]: [string, string]) => {
      switch (key) {
        case 'name':
          updatedErrors.name = value.length < 2 ? 'Please add your name' : '';
          break;
        case 'email':
          updatedErrors.email = !value
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|.('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            )
            ? 'Invalid email address'
            : '';
          break;
        case 'message':
          updatedErrors.message =
            value.length < 2 ? 'Please add a message' : '';
          break;
      }
    });

    const hasErrors = Object.values(updatedErrors).some(error => !!error);
    setErrors(updatedErrors);
    setCanSendEmail(!hasErrors);
  };

  if (emailSended) {
    return (
      <div className='flex justify-center'>
        <div className='pt-24 text-2xl'>
          Thank you for your message!, I'll answer in a bit
        </div>
      </div>
    );
  }

  return (
    <div className='flex justify-center flex-col max-w-1/5'>
      <div className='w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800'>
        <div className='grid w-full min-h-[400px] items-center text-center px-4 gap-4 sm:grid-cols-2'>
          <div className='space-y-4'>
            <h2 className='text-3xl font-bold'>Let's chat!</h2>
            <p className='text-gray-500 dark:text-gray-400'>
              Fill out the form and I'll get back to you as soon as possible.
            </p>
          </div>
          <div className=' mx-auto'>
            <form
              className='bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4'
              onSubmit={handleSubmit}
            >
              <div className='mb-4'>
                <label
                  className='block text-white text-sm font-bold mb-2'
                  htmlFor='name'
                >
                  Name
                </label>
                <input
                  autoComplete='off'
                  onChange={handleChange}
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline'
                  id='name'
                  type='text'
                  placeholder='Your Name'
                  name='name'
                />
                {errors.name && <p className='text-red-600'>{errors.name}</p>}
              </div>
              <div className='mb-4'>
                <label
                  className='block text-white text-sm font-bold mb-2'
                  htmlFor='email'
                >
                  Email
                </label>
                <input
                  autoComplete='off'
                  onChange={handleChange}
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline'
                  id='email'
                  type='email'
                  placeholder='Your Email'
                  name='email'
                />
                {errors.email && <p className='text-red-600'>{errors.email}</p>}
              </div>
              <div className='mb-6'>
                <label
                  className='block text-white text-sm font-bold mb-2'
                  htmlFor='message'
                >
                  Message
                </label>
                <textarea
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline'
                  id='message'
                  placeholder='Your Message'
                  name='message'
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <p className='text-red-600'>{errors.message}</p>
                )}
              </div>
              <div className='flex items-center justify-center'>
                <button
                  className={clsx('text-white font-bold py-2 px-4 rounded', {
                    'hover:bg-gradient-1 cursor-pointer': canSendEmail,
                    'hover:bg-stone-500 cursor-not-allowed': !canSendEmail,
                  })}
                  disabled={!canSendEmail}
                  type='submit'
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
