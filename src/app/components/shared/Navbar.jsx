// import React from 'react';


// {
//    data: {
//       user: {
//          name: "Ali",
//          email: "ali@gmail.com",
//          image: "photo-url"
//       },
//       session: {
//          id: "abc123"
//       }
//    },
//    error: null,
//    isPending: false
// }




'use client'
import Link from "next/link";
import Image from "next/image";
import userAvatar from '@/assets/user.png';
import NavLinks from "./NavLinks";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {

  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <div className="container mx-auto flex justify-between mt-4">
      <div className="ml-50"></div>
      <ul className="flex gap-3 text-[#706F6F] text-[18px]">
        <li><NavLinks href='/'>Home</NavLinks></li>
        <li><NavLinks href='/about'>About</NavLinks></li>
        <li><NavLinks href='/career'>Career</NavLinks></li>
      </ul>


      {user ?
        <div className="flex gap-2 items-center">
          <h2 className="font-semibold">Hello {user?.name}!</h2>
          <Image src={user?.image || userAvatar} className="rounded-full" alt="user" height={45} width={40} />
          <button className="cursor-pointer rounded bg bg-[#403F3F] text-white h-[44] w-[140]" onClick={async() => await authClient.signOut()}>
            LogOut
          </button>
        </div> : 
        <div className="flex gap-2 items-center">
          <Image src={userAvatar} className="rounded-full" alt="user" height={45} width={40} />
          <button className="cursor-pointer rounded bg bg-[#403F3F] text-white h-[44] w-[140]">
            <Link href={'/login'}>Login</Link>
          </button>
        </div>
      }

    </div>
  );
};

//  <div className="flex gap-2 items-center">
//         <h2 className="font-semibold">Hello {user?.name}!</h2>
//        <Image src={user?.image || userAvatar} className="rounded-full" alt="user" height={45} width={40} />
//         <button className="bg bg-[#403F3F] text-white h-[44] w-[140]">
//           <Link href={'/login'}>Login</Link>
//         </button>     
//        </div>
export default Navbar;