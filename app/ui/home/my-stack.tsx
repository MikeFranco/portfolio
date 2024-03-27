import { myStack } from '@/app/lib/home/data';
import clsx from 'clsx';
import Image from 'next/image';

const MyStack = () => {
  return (
    <div className='flex flex-col text-center pt-10'>
      <p className='text-4xl py-8'>My Stack</p>
      <div className='flex flex-row justify-center gap-10'>
        {Object.keys(myStack).map((header, index) => {
          console.log(header);
          return (
            <div key={`${header}-${index}`}>
              <p className='border-x-2 px-4'>{header}</p>
              <ul className='justify-start text-center mt-5'>
                {Object.entries(myStack[header].technologies).map(([technologyName, technologyIcon], itemIndex: number) => {
                  return (
                    <div
                      key={`${header}-${index}-${itemIndex}`}
                      className={clsx('flex flex-row p-3', {
                        'border-t-2 border-t-gradient-1':
                          itemIndex !== Object.keys(myStack[header].technologies).length - 1,
                        'border-y-2 border-y-gradient-1':
                          itemIndex === Object.keys(myStack[header].technologies).length - 1,
                      })}>
                      <Image
                        className='mr-2'
                        src={technologyIcon}
                        width={20}
                        height={20}
                        alt={technologyName}
                      />
                      <li> {technologyName}</li>
                    </div>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyStack;
