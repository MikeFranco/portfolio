import { IFeaturedProjects, IMyStack, INavItems, ISocialMedia, IStepperData, IWorkData } from './types';

export const socialMediaData: ISocialMedia[] = [
  { name: 'GitHub', href: 'https://www.github.com/MikeFranco', icon: '/github.svg' },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/miguel-angel-franco/',
    icon: '/linkedin.svg',
  },
  {
    name: 'GCP',
    href: 'https://www.cloudskillsboost.google/public_profiles/60b72f4c-4678-4cc4-b908-204e98debd54',
    icon: '/gcp.svg',
  },
];

export const navItemsData: INavItems[] = [
  { name: 'Home', href: '/' },
  {
    name: 'Work',
    href: '/work',
  },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const myStack: IMyStack[] = [
  {
    header: 'LANGUAGES',
    items: [
      { name: 'JavaScript', icon: '/javascript.svg' },
      { name: 'TypeScript', icon: '/typescript.svg' },
      { name: 'Dart', icon: '/dart.svg' },
    ],
  },
  {
    header: 'FRONTEND',
    items: [
      { name: 'HTML', icon: '/html.svg' },
      { name: 'CSS', icon: '/css.svg' },
      { name: 'Nuxt JS', icon: '/nuxtjs.svg' },
      { name: 'VueJS', icon: '/vuejs.svg' },
      { name: 'Svelte', icon: '/svelte.svg' },
      { name: 'React', icon: '/react.svg' },
      { name: 'Angular', icon: '/angular.svg' },
      { name: 'React Native', icon: '/react.svg' },
      { name: 'Flutter', icon: '/flutter.svg' },
    ],
  },
  {
    header: 'BACKEND',
    items: [
      { name: 'Node', icon: '/nodejs.svg' },
      { name: 'GraphQL', icon: '/graphql.svg' },
      { name: 'TypeORM', icon: '/typeorm.svg' },
      { name: 'MySQL', icon: '/mysql.svg' },
      { name: 'MongoDB', icon: '/mongodb.svg' },
      { name: 'Firebase', icon: '/firebase.svg' },
    ],
  },
  {
    header: 'CLOUD',
    items: [
      { name: 'GCP', icon: '/googlecloudplatform.svg' },
      { name: 'Docker', icon: '/docker.svg' },
      { name: 'Heroku', icon: '/heroku.svg' },
    ],
  },
  {
    header: 'UI LIBRARIES',
    items: [
      { name: 'Tailwind', icon: '/tailwindcss.svg' },
      { name: 'Ant Design', icon: '/antdesign.svg' },
      { name: 'BootStrap', icon: '/bootstrap.svg' },
      { name: 'Material Design', icon: '/materialdesign.svg' },
      { name: 'Vuetify', icon: '/vuetify.svg' },
    ],
  },
  {
    header: 'DATA ANALYSIS',
    items: [
      { name: 'Looker Studio', icon: '/lookerstudio.svg' },
      { name: 'AppsFlyer', icon: '/appsflyer.svg' },
    ],
  },
];

export const featuredProjects: IFeaturedProjects[] = [
  {
    image: '/joyapp-logo.png',
    backgroundColor: '#2C45FF',
    jobTitle: 'Software Engineer Assoc Manager',
    dates: 'September 2023 - Present',
    company: 'PepsiCo',
    project: 'Joy App',
    description:
      'The Joy App by PepsiCo offers seamless access to PepsiCo products, promotions, and rewards,aiming to enhance customer engagement and satisfaction. Users explore diverse PepsiCo brands, discover new products, and enjoy exclusive offers. With personalized content and interactive features, the app fosters brand loyalty and positive experiences, enriching consumer interactions with PepsiCo.',
    path: 'joyapp',
  },
  {
    image: '/asistensi-logo.svg',
    backgroundColor: '#FFFFFF',
    jobTitle: 'Full Stack Developer',
    dates: 'June 2022 - April 2023',
    company: 'Asistensi',
    project: 'Asistensi mobile app',
    description:
      'Asistensi is a comprehensive assistance service designed to provide support and guidance in various aspects of life. From personalized assistance with tasks and problem-solving to offering valuable advice, Asistensi aims to enhance and simplify the daily lives of its users.',
    path: 'joyapp',
  },
];

export const workData: IWorkData[] = [
  {
    icon: '/joyapp-logo.png',
    company: 'Pepsi',
    projectType: 'App',
    description:
      'The Joy App by PepsiCo offers seamless access to PepsiCo products, promotions, and rewards, aiming to enhance customer engagement and satisfaction.',
    isBlurred: false,
  },
  {
    icon: '/walmart-logo.svg',
    company: 'Walmart',
    projectType: 'App',
    description:
      'Global retail giant offering a wide range of products including groceries, household goods, electronics, and apparel at competitive prices through its extensive network of stores and online platforms.',
    isBlurred: false,
  },
  {
    icon: '/gulf-logo.png',
    company: 'Gulf',
    projectType: 'Web',
    description:
      'Gulf is a multinational company specializing in energy, petroleum refining, and related services. It operates across various sectors, including oil exploration, production, refining, and distribution.',
    isBlurred: false,
  },
  {
    icon: '/pentalog-logo.webp',
    company: 'Pentalog',
    projectType: 'Web',
    description:
      'Pentalog is a global digital services platform offering end-to-end IT solutions, including software development, consulting, and digital transformation services.',
    isBlurred: false,
  },
  {
    icon: '/asistensi-logo.svg',
    company: 'Asistensi',
    projectType: 'App',
    description:
      'Innovative platform connecting users with personalized, on-demand assistance services such as ambulance, medicine delivery and online medical assistance',
    isBlurred: false,
  },
  {
    icon: '/kavak-logo.svg',
    company: 'Kavak',
    projectType: 'App',
    description:
      'Premier platform for transparent, hassle-free buying and selling of pre-owned cars. Trusted by individuals and dealerships for its reliability and streamlined experience.',
    isBlurred: false,
  },
  {
    icon: '/am-logo.jpeg',
    company: 'Advanced Mankind',
    projectType: 'App',
    description:
      'AM offer expert guidance for optimizing technology infrastructure and processes, including strategic planning, system design, software development, and project management.',
    isBlurred: false,
  },
  {
    icon: '/axend-logo.png',
    company: 'Axend',
    projectType: 'Web',
    description:
      'Axend is a platform dedicated to fostering growth for individuals and businesses through investments.',
    isBlurred: false,
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
