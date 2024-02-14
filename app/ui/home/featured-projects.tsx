import Image from 'next/image';

const FeaturedProjects = () => {
  return (
    <div className='flex flex-col text-center pt-10'>
      <div className='flex flex-row justify-between'>
        <p className='text-4xl py-8'>FEATURED PROJECTS</p>
        <div className='flex flex-row text-center align-bottom'>
          <p className='text-xl py-8 align-bottom'>View all projects </p>
          <Image
            src='/arrow-right.svg'
            width={15}
            height={15}
            alt='arrow-right'
          />
        </div>
      </div>
      <div className='flex justify-between'>
        <p>PepsiCo</p>
        <div className='flex justify-between'>
          <p className='w-full text-start'>Software Engineer Assoc Manager</p>
          <p className='text-sm text-end'>September 2023 - Present</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
