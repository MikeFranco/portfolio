import Image from 'next/image';
import { IFeaturedProjects } from '@/app/lib/home/types';
import { featuredProjects } from '@/app/lib/home/data';
import Link from 'next/link';

const FeaturedProjectCard = () => (
  <>
    <div className='mobile:max-tablet:hidden'>
      {featuredProjects.map((project: IFeaturedProjects, index: number) => (
        <div
          className='flex items-center w-full mb-10'
          key={index}
        >
          <div
            className={`w-1/2 h-[24rem] relative ${project.backgroundColor} flex items-center justify-center`}
          >
            <Image
              src={project.image}
              width={300}
              height={300}
              alt={project.company}
            />
          </div>
          <div className='flex flex-col justify-between h-96 pl-5 w-1/2'>
            <div className='flex flex-col text-start'>
              <p className='w-full'>{project.jobTitle}</p>
              <p className='text-sm text-stone-500'>{project.dates}</p>
            </div>
            <div className='text-start'>
              <div className='flex flex-row justify-between'>
                <p className='text-3xl'>{project.company}</p>
                <p className='text-3xl'> - </p>
                <p className='text-3xl mb-3'>{project.project}</p>
              </div>
              <p className='text-justify'>{project.description}</p>
            </div>
            <Link href={`/projects/${project.path}`}>
              <div className='flex justify-end'>
                <p className='hover:text-gradient-4'>Read More</p>
                <Image
                  src='/arrow-right.svg'
                  width={15}
                  height={15}
                  alt='arrow-right'
                  className='ml-2'
                />
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
    <div className='tablet:hidden'>
      {featuredProjects.map((project: IFeaturedProjects, index: number) => (
        <div
          className='w-full'
          key={index}
        >
          <div
            className={`w-full h-[18rem] relative ${project.backgroundColor} flex items-center justify-center`}
          >
            <Image
              src={project.image}
              width={250}
              height={250}
              alt={project.company}
            />
          </div>
          <div className='flex flex-col justify-between'>
            <div className='flex flex-col justify-between text-start my-3'>
              <div className='flex flex-row justify-evenly'>
                <p className='text-3xl'>{project.company}</p>
                <p className='text-3xl mb-3'>{project.project}</p>
              </div>
              <div className='text-center'>
                <p className=''>{project.jobTitle}</p>
                <p className='text-sm text-stone-500'>{project.dates}</p>
              </div>
            </div>
            <div className='text-start'>
              <p className='text-justify'>{project.description}</p>
            </div>
            <Link href={`/projects/${project.path}`}>
              <div className='flex justify-end mb-10 mt-3'>
                <p className='hover:text-gradient-4'>Read More</p>
                <Image
                  src='/arrow-right.svg'
                  width={15}
                  height={15}
                  alt='arrow-right'
                  className='ml-2'
                />
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default FeaturedProjectCard;
