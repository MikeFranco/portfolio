import { IFeaturedProjects, IMyStack } from "./types";

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
