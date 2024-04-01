import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavBar from '@/app/ui/navbar/nav-bar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Miguel Angel Franco Peza Portfolio',
  description: 'This is my professional portfolio',
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
          <div className='flex-grow p-6 laptop:overflow-y-auto'>
            <div className='w-full sticky top-[-25px] z-50'>
              <NavBar />
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
