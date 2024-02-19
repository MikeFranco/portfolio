import React from 'react';

interface IProjectDetailsProps {
  params: {
    project: string;
  };
}

const ProjectDetails = ({ params }: IProjectDetailsProps) => {
  return <div>ProjectDetails project {params.project} </div>;
};

export default ProjectDetails;
