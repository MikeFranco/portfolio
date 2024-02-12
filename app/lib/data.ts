import { IMyStack, INavItems, ISocialMedia } from "./types";

export const socialMediaData: ISocialMedia[] = [
  { name: 'GitHub', href: '/', icon: '/github.svg' },
  {
    name: 'LinkedIn',
    href: '/work',
    icon: '/linkedin.svg',
  },
  { name: 'GCP', href: '/about', icon: '/gcp.svg' },
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
    header: 'LANGUAGES', items: [
      { name: 'JavaScript', icon: '/javascript.svg' },
      { name: 'TypeScript', icon: '/typescript.svg' },
      { name: 'Dart', icon: '/dart.svg' },
    ]
  },
  {
    header: 'FRONTEND', items: [
      { name: 'HTML', icon: '/html.svg' },
      { name: 'CSS', icon: '/css.svg' },
      { name: 'Nuxt JS', icon: '/nuxtjs.svg' },
      { name: 'VueJS', icon: '/vuejs.svg' },
      { name: 'Svelte', icon: '/svelte.svg' },
      { name: 'React', icon: '/react.svg' },
      { name: 'Angular', icon: '/angular.svg' },
      { name: 'React Native', icon: '/react.svg' },
      { name: 'Flutter', icon: '/flutter.svg' },
    ]
  },
  {
    header: 'BACKEND', items: [
      { name: 'Node', icon: '/nodejs.svg' },
      { name: 'GraphQL', icon: '/graphql.svg' },
      { name: 'TypeORM', icon: '/typeorm.svg' },
      { name: 'MySQL', icon: '/mysql.svg' },
      { name: 'MongoDB', icon: '/mongodb.svg' },
      { name: 'Firebase', icon: '/firebase.svg' },
    ]
  },
  {
    header: 'CLOUD', items: [
      { name: 'GCP', icon: '/googlecloudplatform.svg' },
      { name: 'Docker', icon: '/docker.svg' },
      { name: 'Heroku', icon: '/heroku.svg' },
    ]
  },
  {
    header: 'UI LIBRARIES', items: [
      { name: 'Tailwind', icon: '/tailwindcss.svg' },
      { name: 'Ant Design', icon: '/antdesign.svg' },
      { name: 'BootStrap', icon: '/bootstrap.svg' },
      { name: 'Material Design', icon: '/materialdesign.svg' },
      { name: 'Vuetify', icon: '/vuetify.svg' },
    ]
  },
  {
    header: 'DATA ANALYSIS', items: [
      { name: 'Looker Studio', icon: '/lookerstudio.svg' },
      { name: 'AppsFlyer', icon: '/appsflyer.svg' },
    ]
  }
]


