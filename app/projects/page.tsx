'use client';
import './projects.css';
import ProjectCard from '../ui/projects/project-card';
import Changelog from '../ui/projects/changelog';

const Page = () => {
  return (
    <div className='flex'>
      <div className='flex flex-wrap justify-evenly gap-x-3 gap-y-4 h-2/3'>
        <ProjectCard />
      </div>
      <div className='w-full'>
        <Changelog />
      </div>
    </div>
  );
};

export default Page;
