import { featuredProjects } from '@/app/lib/data';
import { IFeaturedProjects } from '@/app/lib/types';
import Image from 'next/image';

const FeaturedProjectCard = () => (
  <>
    {featuredProjects.map((project: IFeaturedProjects, index: number) => (
      <div
        className='flex items-center w-full'
        key={index}>
        <div className={`w-1/2 h-[29rem] relative bg-[${project.backgroundColor}]`}>
          <Image
            src={project.image}
            layout='fill'
            alt='joyapp logo'
          />
        </div>
        <div className='flex flex-col justify-between pl-5 h-full w-1/2'>
          <div className='flex flex-col text-start'>
            <p className='w-full'>{project.jobTitle}</p>
            <p className='text-sm text-stone-500'>{project.dates}</p>
          </div>
          <div className='text-start'>
            <p className='text-4xl'>{project.company}</p>
            <p className='text-4xl mb-3'>{project.project}</p>
            <p className='text-justify'>{project.description}</p>
          </div>
          <div className='flex justify-end'>
            <p>Read More</p>
            <Image
              src='/arrow-right.svg'
              width={15}
              height={15}
              alt='arrow-right'
              className='ml-2'
            />
          </div>
        </div>
      </div>
    ))}
  </>
);

export default FeaturedProjectCard;
