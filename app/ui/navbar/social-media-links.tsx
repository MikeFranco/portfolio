
import Link from 'next/link';
import Image from 'next/image';
import { socialMediaData } from '@/app/lib/data';

export default function SocialMediaLinks() {

  return (
    <>
      {socialMediaData.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            target='_blank'
            rel='noopener noreferrer'
            className={
              'flex grow items-center gap-2 rounded-md p-2 text-sm font-medium hover:bg-gradient-6 '
            }>
            <Image
              src={link.icon!}
              width={32}
              height={32}
              alt={link.name}
            />
          </Link>
        );
      })}
    </>
  );
}
