import { stepperData } from '@/app/lib/projects/data';
import Image from 'next/image';

const Changelog = () => {
  return (
    <>
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
    </>
  );
};

export default Changelog;
