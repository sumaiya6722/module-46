import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='flex justify-center items-center  h-[50vh] bg-gray-200 rounded-2xl m-10 flex-col gap-3'>
      <h2 className=' text-3xl text-gray-700'>This Page is not Found</h2>
      <Link href='/'><button className='btn btn-info text-white'>Back to Home</button></Link>
    </div>
  );
};

export default NotFound;