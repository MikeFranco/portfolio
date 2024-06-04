import BriefDescription from './ui/home/brief-description';
import Education from './ui/home/education';
import FeaturedProjects from './ui/home/featured-projects';
import MyStack from './ui/home/my-stack';
import RecentJobs from './ui/home/recent-jobs';
import { useState } from 'react';

export default function Home() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const totalOfYears = currentYear - 2019;
  return (
    <main className='flex justify-center'>
      <div className='flex flex-col mobile:p-2 mobile:w-11/12 laptop:p-6 laptop:w-8/12'>
        <BriefDescription totalOfYears={totalOfYears}/>
        <MyStack />
        <Education />
        <RecentJobs />
        <FeaturedProjects />
      </div>
    </main>
  );
}
