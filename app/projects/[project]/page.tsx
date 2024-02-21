import Image from 'next/image';
import { projectsData } from '@/app/lib/projects/data';
import { IProjectsData } from '@/app/lib/projects/types';

interface IProjectDetailsProps {
  params: {
    project: string;
  };
}

const ProjectDetails = ({ params }: IProjectDetailsProps) => {
  const projectData = projectsData.filter((project: IProjectsData) => project.company === params.project)[0];
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col justify-center w-2/3'>
        <p className='text-xs text-center text-stone-500'>
          {projectData.startDate.toUpperCase()} - {projectData.endDate.toUpperCase()}
        </p>
        <div className='flex justify-center w-full relative my-5'>
          <Image
            src={projectData.image}
            width={200}
            height={200}
            alt={`${projectData.company} logo`}
          />
        </div>
        <div className='flex text-center justify-around'>
          {projectData.images.map((image, index) => (
            <Image
              key={index}
              src={image}
              width={200}
              height={200}
              alt={`${projectData.company} logo`}
              className='w-fit'
            />
          ))}
        </div>
        <div className='flex justify-center text-sm mt-8'>
          <div className='flex flex-col w-1/2 p-4'>
            <div>
              <p className='uppercase font-bold'>My Role</p>
              <p>{projectData.jobTitle}</p>
            </div>
            <div className='mt-5'>
              <p className='uppercase font-bold'>Stack</p>
              <div className='flex flex-wrap'>
                {projectData.stack.map(technology => {
                  return (
                    <Image
                      key={technology}
                      src={technology}
                      alt={technology}
                      height={30}
                      width={30}
                      className='mr-4 mt-2'
                    />
                  );
                })}
              </div>
            </div>
            <div className='mt-5'>
              <p className='uppercase font-bold'>Work Scheme</p>
              <p>{projectData.workScheme}</p>
            </div>
          </div>
          <div className='flex flex-col w-1/2 p-4'>
            <p className='uppercase font-bold'>Overview</p>
            <p className='text-justify'>{projectData.overview}</p>
          </div>
        </div>
        <div className='h-px bg-stone-500 w-full'></div>
        <div className='flex justify-center text-sm mt-8'>
          <p className='uppercase font-bold w-1/2 p-4'>About the product</p>
          <p className='text-justify w-1/2 p-4'>
            Qui ut in dolore nisi elit duis exercitation tempor sit eiusmod sint id consectetur. Irure labore
            aute mollit fugiat reprehenderit incididunt ullamco veniam qui elit ullamco. Nostrud enim amet
            anim occaecat. Occaecat pariatur sit laborum aute occaecat et proident nulla exercitation est
            voluptate. Anim ea amet nostrud minim aliqua incididunt elit enim consectetur. Pariatur nisi nulla
            pariatur consequat cillum duis amet aliquip quis. Ipsum ut fugiat aliquip labore sunt adipisicing
            nisi ipsum nisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
