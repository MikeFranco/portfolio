import NavLinks from '@/app/ui/navbar/nav-links';
import SocialMediaLinks from './social-media-links';
import { MobileNavBar } from './mobile-nav-bar';

export default function NavBar() {
  return (
    <div className='flex flex-row px-3 py-4 bg-black mobile:justify-center laptop:justify-between'>
      <div className='text-lg text-white text-center pl-3 mobile:hidden laptop:block'>
        <p>Miguel Angel Franco Peza</p>
        <p>Full Stack Developer</p>
      </div>
      <div className='flex flex-row justify-between mobile:hidden laptop:flex'>
        <NavLinks />
      </div>
      <div className='flex flex-row justify-between space-x-2 mobile:max-tablet:flex laptop:hidden'>
        <MobileNavBar />
      </div>
      <div className='flex flex-row justify-between space-x-2 mobile:hidden laptop:flex'>
        <SocialMediaLinks />
      </div>
    </div>
  );
}
