import Image from "next/image";
import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-4 lg:px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center gap-y-6 py-4 lg:py-6">
          {/* logo */}
          <Link href="/" aria-label="AbuBakar.Dev home page" className="text-3xl">
            <span className="font-bold">AbuBakar</span>
            <span className="text-accent">.</span>
            <span className="font-thin">Dev</span>
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
