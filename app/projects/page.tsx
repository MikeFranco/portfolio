'use client';
import './projects.css';
import ProjectCard from '../ui/projects/project-card';
import Changelog from '../ui/projects/changelog';

const Page = () => {
  return (
    <>
      <div className='flex flex-col'>
        <div className='w-full max-h-64 px-6'>
          <Changelog />
        </div>
        <div className='flex flex-wrap justify-center gap-8 h-2/3 mt-3'>
          <ProjectCard />
        </div>
      </div>
    </>
  );
};

export default Page;
