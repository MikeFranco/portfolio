export interface IProjectsData {
  image: string;
  company: string;
  projectType: string;
  overview: string;
  isBlurred: boolean;
  startDate: string;
  endDate: string;
  cardDescription: string;
  whatIHaveDone: string | string[];
  workScheme: 'Hybrid' | 'Remote' | 'On site';
  jobTitle: string;
  stack: string[];
  projectName: string;
  images: string[];
  imagesSize?: number;
  aboutTheProject: string;
}

export interface IStepperData {
  date: string;
  description: string;
  icon: string;
}
