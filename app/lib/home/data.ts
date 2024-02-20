import { IFeaturedProjects } from './types';

export const myStack: Record<string, { header: string; technologies: Record<string, string> }> = {
  LANGUAGES: {
    header: 'LANGUAGES',
    technologies: {
      JavaScript: '/javascript.svg',
      TypeScript: '/typescript.svg',
      Dart: '/dart.svg',
    },
  },
  FRONTEND: {
    header: 'FRONTEND',
    technologies: {
      HTML: '/html.svg',
      CSS: '/css.svg',
      'Nuxt JS': '/nuxtjs.svg',
      VueJS: '/vuejs.svg',
      Svelte: '/svelte.svg',
      React: '/react.svg',
      Angular: '/angular.svg',
      'React Native': '/react.svg',
      Flutter: '/flutter.svg',
    },
  },
  BACKEND: {
    header: 'BACKEND',
    technologies: {
      Node: '/nodejs.svg',
      GraphQL: '/graphql.svg',
      TypeORM: '/typeorm.svg',
      MySQL: '/mysql.svg',
      MongoDB: '/mongodb.svg',
      Firebase: '/firebase.svg',
    },
  },
  CLOUD: {
    header: 'CLOUD',
    technologies: {
      GCP: '/googlecloudplatform.svg',
      Docker: '/docker.svg',
      Heroku: '/heroku.svg',
    },
  },
  'UI LIBRARIES': {
    header: 'UI LIBRARIES',
    technologies: {
      Tailwind: '/tailwindcss.svg',
      'Ant Design': '/antdesign.svg',
      BootStrap: '/bootstrap.svg',
      'Material Design': '/materialdesign.svg',
      Vuetify: '/vuetify.svg',
    },
  },
  'DATA ANALYSIS': {
    header: 'DATA ANALYSIS',
    technologies: {
      'Looker Studio': '/lookerstudio.svg',
      AppsFlyer: '/appsflyer.svg',
    },
  },
};

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
