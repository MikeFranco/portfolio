'use client';
import './work.css';
import WorkCard from '../ui/work/work-card';
import Changelog from '../ui/work/changelog';

const Page = () => {
  return (
    <div className='flex'>
      <div className='flex flex-wrap justify-evenly gap-x-3 gap-y-4 h-2/3'>
        <WorkCard />
      </div>
      <div className='w-full'>
        <Changelog />
      </div>
    </div>
  );
};

export default Page;
