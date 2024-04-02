import { stepperData } from '@/app/lib/projects/data';
import Image from 'next/image';

const Changelog = () => {
  return (
    <>
      <p className='font-bold text-lg'>Changelog</p>
      <div className='flex flex-row items-start overflow-x-auto max-h-[26rem] relative gap-5'>
        {stepperData.map((step, index) => (
          <div
            key={index}
            className='flex items-center my-6 min-w-[12rem] max-w-[12rem]'
          >
            <div className='relative'>
              <div
                className={
                  'h-8 w-8 rounded-full flex items-center justify-center'
                }
              >
                <Image
                  src={step.icon ?? ''}
                  width={20}
                  height={20}
                  alt={`${step.icon}`}
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
    </>
  );
};

export default Changelog;
