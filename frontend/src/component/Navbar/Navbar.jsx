"use client";
import useSidebarStore from '@/store/Store.zust';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [menuImg, setMenuImg] = useState("menu.svg")
  const toggleMenu = useSidebarStore((state) => state.toggleSidebar);
  const handleToggleMenu = () => {
    toggleMenu();
    menuImg == "menu.svg" ? setMenuImg("cross.svg") : setMenuImg("menu.svg");
  }

  return (
    <nav className="bg-[var(--blue)] w-full px-2.5 shadow-md h-[70px] flex items-center justify-between gap-40 max-lg:gap-10  max-md:gap-1.5 max-md:h-[60px]">
      {/* menu Btn */}
      <button className='menu-btn' onClick={handleToggleMenu}>
        <Image src={`/icons/${menuImg}`} width={50} height={50} alt='menu.svg' />
      </button>
      {/* Logo + Title */}
      <div className="flex items-center gap-2 justify-center max-md:hidden">

        <Image src="/icons/python.svg" width={40} height={40} alt="logo" />
        <h1 className="text-white mt-4">BCA</h1>
      </div>
      {/* Search Box */}
      <div className="flex items-center gap-2 bg-[#ffffff] rounded-md px-2 py-1 flex-1 h-[80%] relative">
        <input
          type="text"
          placeholder="Search topics"
          className="w-full outline-none text-black placeholder-gray-500 text-2xl max-md:text-[18px]"
        />
        <button className='bg-black absolute right-1 top-2 opacity-[0.5]  cursor-pointer hover:opacity-100 transition duration-150 max-md:top-1.5'>
          <Image src="/icons/search.svg" width={40} height={40} alt="search" />
        </button>
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-6 max-md:hidden">
        <li>
          <Link href="/" className="text-white hover:text-[#6aff71] transition duration-200">
            Home
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-white hover:text-[#6aff71] transition duration-200">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/more" className="text-white hover:text-[#6aff71] transition duration-200">
            More
          </Link>
        </li>
        <li>
          <Link href="https://github.com" target="_blank" className="text-white hover:text-[#6aff71] transition duration-200">
            GitHub
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
