import Image from 'next/image';

const RecentJobs = () => {
  return (
    <div className='flex flex-col text-center pt-10'>
      <div className='flex flex-row justify-center'>
        <p className='text-4xl py-8'>Recent Jobs</p>
      </div>
      <div className='flex justify-center gap-0 w-full'>
        <div className='flex flex-col'>
          <div className='w-72 h-[36rem] relative'>
            <Image
              src='/joyapp.png'
              layout='fill'
              objectFit='cover'
              alt='joyapp'
            />
          </div>
          <p>Pepsico: JoyApp</p>
        </div>
        <div className='flex flex-col'>
          <div className='w-72 h-[36rem] relative'>
            <Image
              src='/meatwalmart.png'
              layout='fill'
              objectFit='cover'
              alt='asistensi'
            />
          </div>
          <p>Me@Walmart International</p>
        </div>
        <div className='flex flex-col'>
          <div className='w-72 h-[36rem] relative'>
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
