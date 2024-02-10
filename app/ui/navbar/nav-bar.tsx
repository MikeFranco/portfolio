import NavLinks from '@/app/ui/navbar/nav-links';
import SocialMediaLinks from './social-media-links';

export default function NavBar() {
  return (
    <div className="flex justify-between px-3 py-4">
      <div className="text-lg text-white text-center pl-3">
        <p>Miguel Angel Franco Peza</p>
        <p>Full Stack Developer</p>
      </div>
      <div className="flex flex-row justify-between space-x-2">
        <NavLinks />
      </div>
      <div className="flex flex-row justify-between space-x-2">
        <SocialMediaLinks />
      </div>
    </div>
  );
}
