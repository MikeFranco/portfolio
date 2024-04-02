import Image from 'next/image';

const RecentJobs = () => {
  return (
    <div className='flex flex-col text-center pt-10'>
      <div className='flex flex-row justify-center'>
        <p className='text-4xl py-8'>Recent Jobs</p>
      </div>
      <div className='flex justify-center gap-0 w-full mobile:flex-col laptop:flex-row'>
        <div className='flex flex-col tablet:items-center'>
          <div className='mobile:mt-4 mobile:w-full mobile:h-[40rem] tablet:w-[24rem] tablet:h-[50rem] laptop:w-72 laptop:h-[36rem] relative'>
            <Image
              src='/joyapp.png'
              layout='fill'
              objectFit='cover'
              alt='joyapp'
            />
          </div>
          <p>Pepsico: JoyApp</p>
        </div>
        <div className='flex flex-col tablet:items-center'>
          <div className='mobile:mt-4 mobile:w-full mobile:h-[40rem] tablet:w-[24rem] tablet:h-[50rem] laptop:w-72 laptop:h-[36rem] relative'>
            <Image
              src='/meatwalmart.png'
              layout='fill'
              objectFit='cover'
              alt='asistensi'
            />
          </div>
          <p>Me@Walmart International</p>
        </div>
        <div className='flex flex-col tablet:items-center'>
          <div className='mobile:mt-4 mobile:w-full mobile:h-[40rem] tablet:w-[24rem] tablet:h-[50rem] laptop:w-72 laptop:h-[36rem] relative'>
            <Image
              src='/gulf.png'
              layout='fill'
              objectFit='cover'
              alt='arrow-right'
            />
          </div>
          <p>Gulf: E-commerce webapp</p>
        </div>
      </div>
    </div>
  );
};

export default RecentJobs;
