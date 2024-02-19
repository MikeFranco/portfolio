export interface IWorkData {
  image: string;
  company: string;
  projectType: string;
  description: string;
  isBlurred: boolean;
  startDate: string;
  endDate: string;
  cardDescription: string;
  whatIHaveDone: string;
  workScheme: 'hybrid' | 'remote' | 'on-site';
  jobTitle: string;
  stack: string[];
  projectName: string;
  images: string[];
}

export interface IStepperData {
  date: string;
  description: string;
  icon: string;
}
