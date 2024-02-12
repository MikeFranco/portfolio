import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from '@/app/ui/navbar/nav-bar';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Miguel Angel Franco Peza Portfolio",
  description: "This is my professional portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen flex-col md:flex-row">
          <div className="w-screen">
            <NavBar />
            <div className="flex-grow p-6 md:overflow-y-auto">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
