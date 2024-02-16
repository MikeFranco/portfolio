import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      gradient: {
        1: '#129BEE',
        2: '#5E88DB',
        3: '#7C75C2',
        4: '#8B63A6',
        5: '#915389',
        6: '#8D476D',
      },
      stone: {
        500: '#78716c',
      },
      slate: {
        900: '#0f172a',
      },
      white: '#FFFFFF',
      black: '#000000',
    },
  },
  plugins: [],
};
export default config;
