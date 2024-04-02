import Image from 'next/image';
import { projectsData } from '@/app/lib/projects/data';
import { IProjectsData } from '@/app/lib/projects/types';

interface IProjectDetailsProps {
  params: {
    project: string;
  };
}

const ProjectDetails = ({ params }: IProjectDetailsProps) => {
  const projectData = projectsData.filter(
    (project: IProjectsData) =>
      project.company === params.project.replaceAll('%20', ' '),
  )[0];
  return (
    <div>
      <div className='flex justify-center mobile:max-laptop:hidden'>
        <div className='flex flex-col justify-center w-2/3'>
          <p className='text-xs text-center text-stone-500'>
            {projectData.startDate.toUpperCase()} -{' '}
            {projectData.endDate.toUpperCase()}
          </p>
          <div className='flex justify-center w-full relative my-5'>
            <Image
              src={projectData.image}
              width={200}
              height={200}
              alt={`${projectData.company} logo`}
            />
          </div>
          <div className='flex text-center justify-around max-w-50 overflow-x-auto'>
            {projectData.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                width={projectData.imagesSize ?? 400}
                height={projectData.imagesSize ?? 400}
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
            <p className='uppercase font-bold w-1/2 p-4'>What's been done</p>
            <div className='text-justify w-1/2 p-4'>
              {typeof projectData.whatIHaveDone == 'string' ? (
                <p> {projectData.whatIHaveDone}</p>
              ) : (
                projectData.whatIHaveDone.map((project, index) => (
                  <li
                    className='mb-2'
                    key={index}
                  >
                    {project}
                  </li>
                ))
              )}
            </div>
          </div>
          <div className='h-px bg-stone-500 w-full'></div>
          <div className='flex justify-center text-sm mt-8'>
            <p className='uppercase font-bold w-1/2 p-4'>About the product</p>
            <p className='text-justify w-1/2 p-4'>
              {projectData.aboutTheProject}
            </p>
          </div>
        </div>
      </div>

      <div className='flex justify-center laptop:hidden'>
        <div className='flex flex-col justify-center w-4/5'>
          <p className='text-xs text-center text-stone-500'>
            {projectData.startDate.toUpperCase()} -{' '}
            {projectData.endDate.toUpperCase()}
          </p>
          <div className='flex justify-center w-full relative my-5'>
            <Image
              src={projectData.image}
              width={200}
              height={200}
              alt={`${projectData.company} logo`}
            />
          </div>
          <div className='flex text-center justify-around max-w-50 overflow-x-auto'>
            {projectData.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                width={projectData.imagesSize ?? 400}
                height={projectData.imagesSize ?? 400}
                alt={`${projectData.company} logo`}
                className='w-fit'
              />
            ))}
          </div>
          <div className='flex flex-col justify-center text-sm mt-8'>
            <div className='flex flex-row flex-wrap justify-between p-4'>
              <div>
                <p className='uppercase font-bold'>My Role</p>
                <p>{projectData.jobTitle}</p>
              </div>
              <div className='h-px bg-stone-500 w-full mt-4'></div>
              <div className=''>
                <p className='uppercase font-bold mt-5'>Stack</p>
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
              <div className='h-px bg-stone-500 w-full mt-4'></div>
            </div>
            <div className='flex flex-col p-4'>
              <p className='uppercase font-bold pb-2'>Overview</p>
              <p className='text-justify'>{projectData.overview}</p>
              <div className='h-px bg-stone-500 w-full my-4'></div>
            </div>
          </div>
          <div className='flex flex-col justify-center text-sm'>
            <p className='uppercase font-bold px-4 pb-2'>What's been done</p>
            <div className='text-justify px-4'>
              {typeof projectData.whatIHaveDone == 'string' ? (
                <p> {projectData.whatIHaveDone}</p>
              ) : (
                projectData.whatIHaveDone.map((project, index) => (
                  <li
                    className='mb-2'
                    key={index}
                  >
                    {project}
                  </li>
                ))
              )}
              <div className='h-px bg-stone-500 w-full mt-4'></div>
            </div>
          </div>
          <div className='flex flex-col justify-center text-sm mt-8'>
            <p className='uppercase font-bold px-4 pb-2'>About the product</p>
            <p className='text-justify px-4'>{projectData.aboutTheProject}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
