import Image from 'next/image';
import clsx from 'clsx';
import { workData } from '@/app/lib/data';
import { useState } from 'react';

const WorkCard = () => {
  const [cardHovered, setCardHovered] = useState<number>(-1);

  const onMouseEnter = (cardIndex: number) => {
    setCardHovered(cardIndex);
  };

  const onMouseLeave = () => {
    setCardHovered(-1);
  };

  return workData.map((card, index) => (
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
  ));
};

export default WorkCard;
