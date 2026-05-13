// import React from 'react';
import Image from "next/image";
import { FaRegBookmark } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import star from '@/assets/star.png';
import { GrView } from "react-icons/gr";
import Link from "next/link";

const NewsCard = ({ news }) => {
  return (
    // <div  className="border border-gray-200 p-3 rounded">
    //   <h2 className="text-2xl font-bold">{news.title}</h2>
    //   <p>{news.details}</p>
    // </div>
    <div className="card w-full shadow-sm">
      <div className="rounded">

        {/* news_header */}
        <div className="bg-slate-200 p-3 mb-3 flex justify-between rounded">

          <div className="left flex gap-4">
            <Image className="rounded-full" src={news.author.img} alt="author" height={40} width={50} />
            <div>
              <h2 className="font-semibold text-[16px]">{news.author.name}</h2>
              <p>{news.author.published_date}</p>
            </div>
          </div>

          <div className="right flex gap-2 items-center">
            <FaRegBookmark className="text-gray-500" />
            <CiShare2 />
          </div>
        </div>

        {/* news_body */}
        <div className="p-5 space-y-7">
          <h2 className="text-2xl font-bold">{news.title}</h2>
          <Image src={news.image_url} alt='news_images' width={600} height={262} />
          <p className="line-clamp-4">{news.details}</p>
          <Link href={`/news/${news._id}`} className="text-orange-500">Read More....</Link>
        </div>

      </div>

      {/* news_footer */}
      <div className="flex justify-between m-5 pt-5 border-t-2 border-gray-300">

        <div className="left flex gap-2">
          <div className="flex gap-1">
            <Image src={star} alt="star" height={25} width={25} />
            <Image src={star} alt="star" height={25} width={25} />
            <Image src={star} alt="star" height={25} width={25} />
            <Image src={star} alt="star" height={25} width={25} />
            <Image src={star} alt="star" height={25} width={25} />
          </div>
          <h2>{news.rating.number}</h2>
        </div>

        <div className="right flex gap-2 items-center">
          <GrView />
          <h2>{news.total_view}</h2>
        </div>
      </div>


    </div>
  );
};

export default NewsCard;