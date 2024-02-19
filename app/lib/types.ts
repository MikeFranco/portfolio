export interface INavItems {
  name: string;
  href: string;
}

export interface ISocialMedia extends INavItems {
  icon: string;
}

export interface IMyStack {
  header: string;
  items: {
    name: string;
    icon: string;
  }[];
}

export interface IFeaturedProjects {
  image: string;
  backgroundColor: string;
  jobTitle: string;
  dates: string;
  company: string;
  project: string;
  description: string;
  path: string;
}

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
  workScheme: 'hybrid' | 'remote' | 'on-site'
  jobTitle: string;
  stack: string[];
  projectName: string;
  images: string[]
}

export interface IStepperData {
  date: string;
  description: string;
  icon: string;
}
