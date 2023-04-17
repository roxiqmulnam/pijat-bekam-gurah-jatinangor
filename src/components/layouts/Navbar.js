import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="bg-slate-800 lg:bg-slate-900 text-white sticky top-0 z-50">
      <div className="wrapper-components flex justify-between items-center h-16">
        <h1 className="font-bold text-sm md:text-xl lg:text-2xl">
          Pijat Bekam Gurah <span className="text-green-500">Jatinangor</span>.
        </h1>
        <nav className="hidden lg:flex items-center gap-8 text-lg">
          <Link href={'/'}>Beranda</Link>
          <Link href="/">Tentang Kami</Link>
          <Link href={'/'}>Menu</Link>
          <Link href={'/'}>Kontak</Link>
        </nav>
        <div onClick={handleNav} className="block lg:hidden z-50">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>
      <div
        className={
          nav
            ? 'flex flex-col fixed right-1 top-18 w-1/2 border bg-slate-900 ease-in-out duration-100'
            : 'ease-in-out duration-100 fixed left-[-150%]'
        }
      >
        <Link href={'/'} className="p-4  border-gray-600">
          Beranda
        </Link>
        <Link href="/" className="p-4 border-gray-600">
          Tentang Kami
        </Link>
        <Link href={'/'} className="p-4  border-gray-600">
          Menu
        </Link>
        <Link href={'/'} className="p-4  border-gray-600">
          Kontak
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
