import Image from 'next/image';

const BriefDescription = ({ totalOfYears }: { totalOfYears: number }) => {
  return (
    <>
      <p className='mobile:max-laptop:text-3xl laptop:text-4xl'>
        Full Stack Mobile & Web Developer
      </p>
      <div className='flex flex-row gap-4 mobile:max-laptop:hidden'>
        <p className='text-4xl'>from Mexico City</p>
        <Image
          src='/mexico.svg'
          alt={''}
          width={40}
          height={40}
        />
      </div>
      <div className='flex flex-wrap items-center laptop:hidden'>
        <p className='text-3xl'>from Mexico City</p>
        <Image
          src='/mexico.svg'
          alt={'mexico flag'}
          width={40}
          height={40}
        />
      </div>

      <p className='w-full text-justify text-stone-500 pt-2'>
        Explore my portfolio to witness over {totalOfYears} years of Full Stack
        Development expertise in JavaScript, TypeScript, and Dart. With a track
        record of successful collaborations spanning more than 10 projects, I
        showcase my dedication, creativity, and technical proficiency.
      </p>
      <div className='flex justify-center text-center mobile:gap-7 laptop:gap-10 pt-8'>
        <div className='text-center'>
          <p className='font-bold mobile:text-4xl laptop:text-8xl'>
            {totalOfYears}+
          </p>
          <p className='text-stone-500 pt-3 text-xl'>Years of Experience</p>
        </div>
        <div className='mobile:px-5 laptop:px-10 text-center border-x-2 border-x-gradient-1'>
          <p className='font-bold mobile:text-4xl laptop:text-8xl'>10+</p>
          <p className='text-stone-500 pt-3 text-xl'>Projects</p>
        </div>
        <div className='text-center'>
          <p className='font-bold mobile:text-4xl laptop:text-8xl'>10+</p>
          <p className='text-stone-500 pt-3 text-xl'>Clients</p>
        </div>
      </div>
    </>
  );
};

export default BriefDescription;
