import Image from 'next/image';
import FeaturedProjectCard from './featured-project-card';

const FeaturedProjects = () => {
  return (
    <div className='flex flex-col text-center pt-10'>
      <div className='flex justify-between'>
        <p className='text-4xl py-8'>FEATURED PROJECTS</p>
        <div className='flex items-center'>
          <p className='text-lg py-8'>View all projects </p>
          <Image
            src='/arrow-right.svg'
            width={15}
            height={15}
            alt='arrow-right'
            className='ml-2'
          />
        </div>
      </div>
      <FeaturedProjectCard />
    </div>
  );
};

export default FeaturedProjects;
