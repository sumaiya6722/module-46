// import React from 'react';
import RightSideBar from "@/app/components/homepage/news/RightSideBar";
import { getNewsDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export const generateMetaData = async({params}) => {
  const {id} = await params;
  const news = await getNewsDetailsById(id);

   return {
    title: news.title,
    description: news.details,
  }
};


const NewsDetailsPage = async ({ params }) => {

  const { id } = await params;

  const news = await getNewsDetailsById(id);

  return (
    <div className="rounded grid grid-cols-3 gap-5 container mx-auto">

      <div className="rounded p-5 space-y-7 col-span-2 border border-gray-300">
        <Image src={news.image_url} alt='news_images' width={800} height={400} />
        <h2 className="text-2xl font-bold">{news.title}</h2>
        <p className="">{news.details}</p>

        <Link href={`/category/${news.category_id}`}>
          <button className="bg-red-700 text-white btn">All News In This Category</button>
        </Link>
      </div>

      <RightSideBar></RightSideBar>

    </div>
  );
};

export default NewsDetailsPage;