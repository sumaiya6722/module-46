// import React from 'react';
'use client'

import Link from "next/link"
import { usePathname } from "next/navigation";

const NavLinks = ({href, children}) => {

  const pathname = usePathname();

  // const isActive = (href === pathname? 'true' : 'false');
  const isActive = href === pathname;
  return (
    <Link href={href} className={`${isActive ? 
    'border-b-2 border-b-blue-700':''}`}>
      {children}
    </Link>
  );
};

export default NavLinks;