'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './mobile-nav-bar.css';

export const MobileNavBar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleActiveMenu = () => {
    setMenuActive(!menuActive);
  };
  return (
    <ul
      className={`menu ${menuActive ? 'active' : ''}`}
      onClick={handleActiveMenu}
    >
      <div className='menu-toggle'>
        {!menuActive ? (
          <Image
            src='/menu-outline.svg'
            width={24}
            height={24}
            alt='gcp'
          />
        ) : (
          <Image
            src='/add-outline.svg'
            width={24}
            height={24}
            alt='gcp'
          />
        )}
      </div>
      <li style={{ '--i': 0, '--clr': '#7C75C2', color: 'transparent' } as any}>
        <Link href='/'>
          <Image
            className={`icon ${!menuActive ? 'hidden' : ''}`}
            src='/home-outline.svg'
            width={24}
            height={24}
            alt='gcp'
          />
        </Link>
      </li>
      <li style={{ '--i': 1, '--clr': '#ff2972', color: 'transparent' } as any}>
        <Link href='/projects'>
          <Image
            className={`icon ${!menuActive ? 'hidden' : ''}`}
            src='/work.svg'
            width={24}
            height={24}
            alt='home'
          />
        </Link>
      </li>
      <li style={{ '--i': 2, '--clr': '#fee800', color: 'transparent' } as any}>
        <Link href='/contact'>
          <Image
            className={`icon ${!menuActive ? 'hidden' : ''}`}
            src='/person-outline.svg'
            width={24}
            height={24}
            alt='gcp'
          />
        </Link>
      </li>
      <li style={{ '--i': 3, '--clr': '#04fc43', color: 'transparent' } as any}>
        <Link
          href='https://www.github.com/MikeFranco'
          target='_blank'
        >
          <Image
            className={`icon ${!menuActive ? 'hidden' : ''}`}
            src='/github.svg'
            width={24}
            height={24}
            alt='gcp'
          />
        </Link>
      </li>
      <li style={{ '--i': 4, '--clr': '#fe00f1', color: 'transparent' } as any}>
        <Link
          href='https://www.linkedin.com/in/miguel-angel-franco/'
          target='_blank'
        >
          <Image
            className={`icon ${!menuActive ? 'hidden' : ''}`}
            src='/linkedin.svg'
            width={24}
            height={24}
            alt='gcp'
          />
        </Link>
      </li>
      <li style={{ '--i': 5, '--clr': '#fea600', color: 'transparent' } as any}>
        <Link
          href='https://www.cloudskillsboost.google/public_profiles/60b72f4c-4678-4cc4-b908-204e98debd54'
          target='_blank'
        >
          <Image
            className={`icon ${!menuActive ? 'hidden' : ''}`}
            src='/gcp.svg'
            width={24}
            height={24}
            alt='gcp'
          />
        </Link>
      </li>
      <li style={{ '--i': 6, '--clr': '#a529ff', color: 'transparent' } as any}>
        <Link href='/projects/Pepsi'>
          <Image
            className={`icon ${!menuActive ? 'hidden' : ''}`}
            src='/pepsi-logo.png'
            width={24}
            height={24}
            alt='gcp'
          />
        </Link>
      </li>
      <li style={{ '--i': 7, '--clr': '#01bdab', color: 'transparent' } as any}>
        <Link
          href='https://www.canva.com/design/DAGBX_h5Fxg/WmVGx0E08OnzNHZR5UbT7Q/edit?utm_content=DAGBX_h5Fxg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
          target='_blank'
        >
          <Image
            className={`icon ${!menuActive ? 'hidden' : ''}`}
            src='/cv.svg'
            width={24}
            height={24}
            alt='gcp'
          />
        </Link>
      </li>
    </ul>
  );
};
