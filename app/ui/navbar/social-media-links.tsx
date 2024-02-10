
import Link from 'next/link';
import Image from 'next/image';
import { socialMediaData } from '@/app/lib/data';

export default function SocialMediaLinks() {

  return (
    <>
      {socialMediaData.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={'flex grow items-center gap-2 rounded-md p-2 text-sm font-medium hover:bg-gradient-1 '}
          >
            <Image 
                src={LinkIcon}
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
