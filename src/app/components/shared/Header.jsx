// import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format } from "date-fns";

const Header = () => {
  return (
    <div className='text-center mx-auto space-y-2 mt-7'>
      <Image className='mx-auto' src={logo} height={200} width={500} alt='Logo'/>
      <p className='text-[#706F6F] text-[18px]'>Journalism Without Fear or Favour</p>
      <p className='text-[#444444]'>{format(new Date(), 'EEEE,MMM dd,yyyy')}</p>
      
    </div>
  );
};

export default Header;