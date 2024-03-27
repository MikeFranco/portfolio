import { INavItems, ISocialMedia } from "./types";

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
    name: 'Projects',
    href: '/projects',
  },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];
