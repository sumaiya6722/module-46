// import React from 'react';

import Link from "next/link";

const LeftSideBar = ({categories, activeId}) => {
  return (
    <div>
        <h2 className="font-bold text-[#403F3F]">All Category</h2>
        <ul className="flex flex-col gap-2 text-[#9F9F9F] mt-7">
          {categories.map((c) => {
             return <li className={`${activeId === c.category_id && "bg-slate-200"} p-5 pl-20 rounded-md text-xl`} 
             key={c.category_id}>

              <Link href={`/category/${c.category_id}`} className="block">{c.category_name}</Link>
              
              </li> })}
        </ul>
      
    </div>
  );
};

export default LeftSideBar;