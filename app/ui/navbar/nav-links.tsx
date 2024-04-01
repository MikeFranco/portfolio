'use client';

import { navItemsData } from '@/app/lib/navbar/data';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
  const pathname = usePathname();

  return navItemsData.map(link => (
    <Link
      key={link.name}
      href={link.href}
      className={clsx(
        'flex h-[48px] grow items-center gap-2 rounded-md hover:bg-gradient-3 p-3 text-sm font-medium',
        {
          'hover:bg-gradient-3 text-gradient-6': pathname === link.href,
        },
      )}
    >
      <p>{link.name} </p>
    </Link>
  ));
}
