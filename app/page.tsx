import BriefDescription from './ui/home/brief-description';
import Education from './ui/home/education';
import FeaturedProjects from './ui/home/featured-projects';
import MyStack from './ui/home/my-stack';
import RecentJobs from './ui/home/recent-jobs';
import { useState } from 'react';

export default function Home() {
  return (
    <main className='flex justify-center mobile:w-1/4 mobile:p-2'>
      <div className='flex flex-col laptop:p-6 laptop:w-7/12'>
        <BriefDescription />
        <MyStack />
        <Education />
        <RecentJobs />
        <FeaturedProjects />
      </div>
    </main>
  );
}
