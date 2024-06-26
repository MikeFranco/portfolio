import Image from 'next/image';
import Link from 'next/link';
import FeaturedProjectCard from './featured-project-card';

const FeaturedProjects = () => {
  return (
    <div className='flex flex-col text-center pt-10'>
      <div className='flex justify-between'>
        <p className='mobile:text-xl tablet:text-4xl py-8'>FEATURED PROJECTS</p>
        <Link href='/projects'>
          <div className='flex items-center hover:text-gradient-4'>
            <p className='mobile:text-lg tablet:text-lg py-8 hover:text-gradient-4'>
              View all projects
            </p>
            <Image
              src='/arrow-right.svg'
              width={14}
              height={14}
              alt='arrow-right'
            />
          </div>
        </Link>
      </div>
      <FeaturedProjectCard />
    </div>
  );
};

export default FeaturedProjects;
