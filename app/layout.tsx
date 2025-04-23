import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBar from '@/app/ui/navbar/nav-bar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Miguel Angel Franco Peza Portfolio',
  description:
    'Full Stack Developer with expertise in JavaScript, TypeScript, and Dart. Explore my portfolio showcasing over 5 years of experience and 10+ successful projects.',
  openGraph: {
    title: 'Miguel Angel Franco Peza Portfolio',
    description:
      'Full Stack Developer with expertise in JavaScript, TypeScript, and Dart. Explore my portfolio showcasing over 5 years of experience and 10+ successful projects.',
    images: [
      {
        url: '/preview.png',
        width: 800,
        height: 600,
        alt: 'Miguel Angel Franco Peza Portfolio',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miguel Angel Franco Peza Portfolio',
    description:
      'Full Stack Developer with expertise in JavaScript, TypeScript, and Dart. Explore my portfolio showcasing over 5 years of experience and 10+ successful projects.',
    images: ['/preview.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex h-screen flex-col laptop:flex-row'>
          <div className='flex-grow w-full laptop:overflow-y-auto'>
            <div className='w-full sticky top-[-25px] z-50'>
              <NavBar />
            </div>
            <div className='px-6'>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
