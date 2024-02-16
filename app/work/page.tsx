'use client';
import Image from 'next/image';
import clsx from 'clsx';
import { useState } from 'react';
import { stepperData, workData } from '../lib/data';
import './work.css';

const Page = () => {
  const [cardHovered, setCardHovered] = useState<number>(-1);

  const onMouseEnter = (cardIndex: number) => {
    setCardHovered(cardIndex);
  };

  const onMouseLeave = () => {
    setCardHovered(-1);
  };

  return (
    <div className='flex'>
      <div className='flex flex-wrap justify-evenly gap-x-3 gap-y-4 h-2/3'>
        {workData.map((card, index) => (
          <div
            className={clsx(
              'custom-card bg-slate-900 flex p-3 rounded-lg sm:w-1/2 md:w-1/5 text-justify cursor-pointer md:max-h-40',
              {
                blurry: index !== cardHovered && cardHovered !== -1,
              }
            )}
            onMouseEnter={() => onMouseEnter(index)}
            onMouseLeave={() => onMouseLeave()}
            key={index}>
            <div className='flex items-center justify-center w-16 sm:w-auto'>
              <div className='p-1'>
                <Image
                  src={card.icon}
                  width={50}
                  height={50}
                  alt={`${card.company} logo`}
                  className='rounded-lg'
                />
                <p className='bg-[#2D2D2D] rounded-lg px-2 py-1 mt-2 shadow-sm text-xs'>{card.projectType}</p>
              </div>
            </div>
            <div className='flex flex-col pl-2 mb-2'>
              <p className='text-lg px-2'>{card.company}</p>
              <p className='text-xs px-2'>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full'>
        <p className='font-bold text-lg'>Changelog</p>
        <div className='flex flex-col items-start'>
          {stepperData.map((step, index) => (
            <div
              key={index}
              className='flex items-center mt-4'>
              <div className='relative'>
                <div className={'h-8 w-8 rounded-full flex items-center justify-center'}>
                  <Image
                    src={step.icon ?? ''}
                    width={20}
                    height={20}
                    alt='check square'
                  />
                </div>
              </div>
              <div className='flex flex-col text-sm'>
                <p className='ml-1 text-stone-500'>{step.date}</p>
                <p className='ml-1'>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
