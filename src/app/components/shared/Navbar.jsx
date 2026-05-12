// import React from 'react';
import Link from "next/link";
import Image from "next/image";
import userAvatar from '@/assets/user.png';
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div className="container mx-auto flex justify-between">
      <div className="ml-50"></div>
      <ul className="flex gap-3 text-[#706F6F]">
        <li><NavLinks href='/'>Home</NavLinks></li>
        <li><NavLinks href='/about'>About</NavLinks></li>
        <li><NavLinks href='/career'>Career</NavLinks></li>
      </ul>

      <div className="flex gap-2">
        <Image src={userAvatar} alt="user" height={41} width={41}/>
        <button className="bg bg-[#403F3F] text-white h-[44] w-[140]">
          <Link href={'/login'}>Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;