import { IStepperData, IProjectsData } from './types';
import { myStack } from '../home/data';

export const projectsData: IProjectsData[] = [
  {
    image: '/pepsi-logo.png',
    company: 'Pepsi',
    projectType: 'App',
    cardDescription:
      'The Joy App by PepsiCo offers seamless access to PepsiCo products, promotions, and rewards, aiming to enhance customer engagement and satisfaction.',
    isBlurred: false,
    startDate: 'september 2023',
    endDate: 'present',
    overview:
      'Do incididunt culpa laborum in amet culpa ut cillum exercitation qui duis qui irure. Aute commodo veniam enim voluptate id reprehenderit deserunt eiusmod. Dolore tempor aute tempor aliquip laborum pariatur sint. Et eu cupidatat aute aliqua dolor sit reprehenderit qui cupidatat enim voluptate magna est officia. Ullamco Lorem ea ad officia proident velit qui elit exercitation.',
    whatIHaveDone:
      'Implemented Firebase remote config for dynamic updates and personalized experiences. Added deep links and events to support marketing campaigns and user redirection. Enhanced UX/UI across all screens for a cohesive interface. Addressed bugs and improved app stability using Firebase Crashlytics.',
    workScheme: 'Remote',
    jobTitle: 'Software Engineer Assoc Manager',
    stack: [
      myStack.languages.technologies.Dart,
      myStack.frontend.technologies.Flutter,
      myStack.backend.technologies.Firebase,
      myStack.dataAnalysis.technologies.AppsFlyer,
    ],
    projectName: 'Joy App',
    images: ['/joyapp-0.webp', '/joyapp-old-1.webp', '/joyapp-old-2.webp', '/joyapp-old-3.webp'],
    aboutTheProject:
      'Fugiat dolore nulla incididunt proident pariatur fugiat laboris esse in proident irure minim id. Aute culpa deserunt velit pariatur reprehenderit incididunt veniam excepteur sunt id esse sit sint. Enim cupidatat laborum cupidatat ad officia. Ad magna ad quis et minim dolore tempor labore sit. Eiusmod pariatur cupidatat voluptate irure aliquip et adipisicing cupidatat aliqua eu ad veniam qui.',
  },
  {
    image: '/walmart-logo.svg',
    company: 'Walmart',
    projectType: 'App',
    cardDescription:
      'Global retail giant offering a wide range of products including groceries, household goods, electronics, and apparel at competitive prices through its extensive network of stores and online platforms.',
    isBlurred: false,
    startDate: 'august 2023',
    endDate: 'january 2024',
    overview: '',
    whatIHaveDone: '',
    workScheme: 'Remote',
    jobTitle: 'Freelance Software Engineer UP',
    stack: ['TypeScript', 'React Native', 'React Native CLI', 'micro-frontends'],
    projectName: 'Me@Walmart International',
    images: ['/me-at-walmart-0.webp', '/me-at-walmart-1.webp', '/me-at-walmart-2.webp'],
    aboutTheProject:
      'Aliqua magna velit anim Lorem ea non et irure quis ut dolore fugiat quis in. Qui laboris aliqua minim tempor eu commodo amet magna voluptate. Proident ipsum et ex ea enim ea officia ad ea anim laborum est do. Nulla velit nulla excepteur eiusmod cillum consequat. Dolor esse elit reprehenderit amet exercitation ut culpa duis labore do sint exercitation.',
  },
  {
    image: '/gulf-logo.png',
    company: 'Gulf',
    projectType: 'Web',
    cardDescription:
      'Gulf is a multinational company specializing in energy, petroleum refining, and related services. It operates across various sectors, including oil exploration, production, refining, and distribution.',
    isBlurred: false,
    startDate: 'june 2023',
    endDate: 'august 2023',
    overview: '',
    whatIHaveDone: '',
    workScheme: 'Remote',
    jobTitle: 'Freelance Lead Developer',
    stack: ['TypeScript', 'Angular', 'NodeJs', 'TypeORM'],
    projectName: 'Gulf',
    images: ['/me-at-walmart-0.webp', '/me-at-walmart-1.webp', '/me-at-walmart-2.webp'],
    aboutTheProject:
      'Proident deserunt sunt velit excepteur mollit sunt qui sit. Voluptate incididunt ut proident reprehenderit est reprehenderit ullamco ipsum aliqua ad occaecat ad. Ad reprehenderit aliquip ea laboris et in minim occaecat aute veniam. Fugiat tempor ut proident ex deserunt qui laboris. Pariatur aliquip id dolore veniam labore est voluptate ea. Quis culpa sint eu exercitation in id commodo. Pariatur consequat id adipisicing est culpa sunt anim qui.',
  },
  {
    image: '/pentalog-logo.webp',
    company: 'Pentalog',
    projectType: 'Web',
    cardDescription:
      'Pentalog is a global digital services platform offering end-to-end IT solutions, including software development, consulting, and digital transformation services.',
    isBlurred: false,
    startDate: 'august 2021',
    endDate: 'august 2023',
    overview: '',
    whatIHaveDone: '',
    workScheme: 'Remote',
    jobTitle: 'Software Engineer',
    stack: ['TypeScript', 'React', 'Ant Design', 'GraphQL'],
    projectName: 'Noodle',
    images: ['/me-at-walmart-0.webp', '/me-at-walmart-1.webp', '/me-at-walmart-2.webp'],
    aboutTheProject:
      'Laborum veniam ex nulla duis voluptate anim pariatur occaecat anim voluptate est velit non est. Magna aliquip sint aliqua id Lorem velit sunt proident magna. Excepteur ad commodo ullamco eiusmod ut adipisicing aliquip Lorem magna aute id Lorem occaecat consectetur. Laborum consequat dolor esse nisi excepteur et anim ipsum do enim exercitation eiusmod enim. Fugiat elit reprehenderit cillum tempor et.',
  },
  {
    image: '/asistensi-logo.svg',
    company: 'Asistensi',
    projectType: 'App',
    cardDescription:
      'Innovative platform connecting users with personalized, on-demand assistance services such as ambulance, medicine delivery and online medical assistance',
    isBlurred: false,
    startDate: 'june 2022',
    endDate: 'april 2023',
    overview: '',
    whatIHaveDone: '',
    workScheme: 'Remote',
    jobTitle: 'Mobile Developer',
    stack: ['TypeScript', 'React Native', 'Tailwind CSS'],
    projectName: 'Joy App',
    images: ['/asistensi-0.webp', '/asistensi.png', '/asistensi-2.webp', '/asistensi-3.webp'],
    aboutTheProject:
      'Minim anim officia tempor eiusmod laborum magna. Excepteur incididunt minim ullamco consectetur ex nostrud dolor proident aliqua nostrud cupidatat. Velit veniam ullamco ullamco officia nostrud.',
  },
  {
    image: '/kavak-logo.svg',
    company: 'Kavak',
    projectType: 'App',
    cardDescription:
      'Premier platform for transparent, hassle-free buying and selling of pre-owned cars. Trusted by individuals and dealerships for its reliability and streamlined experience.',
    isBlurred: false,
    startDate: 'august 2021',
    endDate: 'june 2022',
    overview: '',
    whatIHaveDone: '',
    workScheme: 'Remote',
    jobTitle: 'Software Engineer Assoc Manager',
    stack: ['TypeScript', 'GraphQL', 'Angular', 'DataDog'],
    projectName: 'Joy App',
    images: ['/kavak-0.webp', '/kavak-1.webp', '/kavak-2.webp'],
    aboutTheProject:
      'In laboris exercitation cillum nisi enim cillum non magna do mollit. Qui ad officia do deserunt. Elit anim ex ipsum eu magna ex deserunt cupidatat officia minim culpa enim sit.',
  },
  {
    image: '/am-logo.jpeg',
    company: 'Advanced Mankind',
    projectType: 'App',
    cardDescription:
      'AM offer expert guidance for optimizing technology infrastructure and processes, including strategic planning, system design, software development, and project management.',
    isBlurred: false,
    startDate: 'july 2020',
    endDate: 'january 2022',
    overview: '',
    whatIHaveDone: '',
    workScheme: 'Remote',
    jobTitle: 'FullStack Developer',
    stack: [
      'TypeScript',
      'JavaScript',
      'Dart',
      'Flutter',
      'Angular',
      'HTML',
      'CSS',
      'SASS',
      'React Native',
      'React',
      'MapBox',
      'NodeJS',
      'MySQL',
    ],
    projectName: 'Xybrid',
    images: ['/chedraui-0.webp', '/chedraui-1.webp', '/chedraui-2.webp', '/chedraui-3.webp'],
    aboutTheProject:
      'Aute cupidatat quis mollit culpa. Et incididunt est magna minim id fugiat commodo reprehenderit. Ipsum adipisicing qui aute laborum. Do id exercitation dolore minim mollit qui amet tempor ipsum excepteur consectetur reprehenderit ea.',
  },
  {
    image: '/axend-logo.png',
    company: 'Axend',
    projectType: 'Web',
    cardDescription:
      'Axend is a platform dedicated to fostering growth for individuals and businesses through investments.',
    isBlurred: false,
    startDate: 'february 2019',
    endDate: 'february 2021',
    overview: 'descripción chida y mamalona',
    whatIHaveDone: '',
    workScheme: 'Hybrid',
    jobTitle: 'Chief Technology Officer & Full Stack Developer',
    stack: ['JavaScript', 'NuxtJs', 'VueJs', 'NodeJs', 'Express', 'Google Cloud Platform'],
    projectName: 'Axend webapp',
    images: ['/axend-0.png', '/axend.png', '/axend-2.png', '/axend-3.png'],
    aboutTheProject:
      'Proident commodo mollit do officia occaecat sit excepteur fugiat excepteur proident laborum dolor labore esse. Dolore veniam ad dolor non in nostrud duis ad. Est dolor laborum ipsum est est qui et.',
  },
];

export const stepperData: IStepperData[] = [
  {
    date: 'September 15 2023',
    description: 'Started working with PepsiCo for the Joy App',
    icon: '/work.svg',
  },
  {
    date: 'August 31 2023',
    description: "Finished Gulf's project",
    icon: '/work.svg',
  },
  {
    date: 'June 1 2023',
    description: 'Started my first freelance project with Gulf',
    icon: '/work.svg',
  },
  {
    date: 'February 28 2023',
    description: 'Finished all my subjects as a Computer Engineer',
    icon: '/school.svg',
  },
  {
    date: 'August 15 2022',
    description: 'Belog to the top 5% of programmers at Pentalog (2021-2022)',
    icon: '/award.svg',
  },
  {
    date: 'February 1 2021',
    description: 'Started working as a Mobile Developer',
    icon: '/work.svg',
  },
  {
    date: 'February 1 2019',
    description: 'Started working as a Web Developer',
    icon: '/work.svg',
  },
  {
    date: 'December 12 2018',
    description: '3rd place at Local Hack Day by Github',
    icon: '/award.svg',
  },
];
