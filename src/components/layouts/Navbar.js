import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="flex justify-between items-center h-20 wrapper-components text-white">
      
      <h1 className="font-bold text-sm md:text-xl lg:text-2xl">
        Pijat Bekam Gurah <span className="text-green-500">Jatinangor</span>.
      </h1>
      <nav className="hidden lg:flex items-center gap-8 text-lg">
        <Link href={'/'}>Beranda</Link>
        <Link href="#about" passHref>
          Tentang Kami
        </Link>
        <Link href={'/'}>Menu</Link>
        <Link href={'/'}>Kontak</Link>
      </nav>
      <div onClick={handleNav} className="block lg:hidden z-50">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? 'flex flex-col fixed right-0 top-10 w-1/2 border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out duration-500 fixed left-[-150%]'
        }
      >
        <Link href={'/'} className="p-4 border-b border-gray-600">
          Beranda
        </Link>
        <Link href="#about" className="p-4 border-b border-gray-600">
          Tentang Kami
        </Link>
        <Link href={'/'} className="p-4 border-b border-gray-600">
          Menu
        </Link>
        <Link href={'/'} className="p-4 border-b border-gray-600">
          Kontak
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
