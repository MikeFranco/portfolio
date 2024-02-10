'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItemsData } from '@/app/lib/data';

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {navItemsData.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center gap-2 rounded-md hover:bg-gradient-3 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600',
              {
                'hover:bg-gradient-3 text-gradient-6': pathname === link.href,
              }
            )}
          >
            <p className={"hidden md:block"}>{link.name} </p>
          </Link>
        );
      })}
    </>
  );
}
