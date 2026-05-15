// import React from 'react';
'use client'
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import classroom from '@/assets/class.png'
import playground from '@/assets/playground.png'
import swimming from '@/assets/swimming.png'
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

const RightSideBar = () => {


  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  }
  const handleGithubSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  }
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold text-[#403F3F]">Login With</h2>
        <div className="mt-5 flex flex-col gap-3">
          <button onClick={handleGoogleSignIn} className="btn border-2 border-blue-500 text-blue-500"><FaGoogle />Login With Google</button>
          <button onClick={handleGithubSignIn} className="btn border-2 border-black"><FaGithub />Login With Github</button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mt-10 mb-5 text-[#403F3F]">Find Us On</h2>
        <div className="border border-gray-200 rounded">
          <button className="flex gap-2 border-b border-gray-200 p-6 w-full">
            <div className="bg-slate-100 p-2 w-8 rounded-full"><FaFacebookF /></div>Facebook</button>
          <button className="flex gap-2 border-b border-gray-200 p-6 w-full">
            <div className="bg-slate-100 p-2 w-8 rounded-full"><FaTwitter /></div>Twitter</button>
          <button className="flex gap-2 p-6 w-full">
            <div className="bg-slate-100 p-2 w-8 rounded-full"><FaInstagram /></div>Instagram</button>
        </div>
      </div>

      <div className="bg-slate-100 mt-10 p-3 rounded-md">
        <h2 className="text-2xl font-bold text-[#403F3F]">Q Zone</h2>
        <div className="mt-5 flex flex-col gap-4 items-center">
          <Image src={classroom} alt="classroom" />
          <Image src={playground} alt="playground" />
          <Image src={swimming} alt="swimming" />
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;