// import React from 'react';
import LeftSideBar from "@/app/components/homepage/news/LeftSideBar";
import NewsCard from "@/app/components/homepage/news/NewsCard";
import RightSideBar from "@/app/components/homepage/news/RightSideBar";
import { getCategories, getNewsCategoryById } from "@/lib/data";


const NewsCategoryPage = async ({ params }) => {

  const { id } = await params;
  console.log(id);


  const categoriesData = await getCategories();
  const categories = categoriesData.news_category;
  console.log('the categories are', categories);

  const newsById = await getNewsCategoryById(id);
  console.log('the news by id is', newsById);


  return (
    <div className="grid grid-cols-12 gap-5 rounded container mx-auto my-17">

      <div className="text-2xl font-semibold col-span-3">
        <LeftSideBar categories={categories} activeId={id}></LeftSideBar>

      </div>

      <div className="col-span-6">
        <h2 className="text-[#403F3F] text-2xl font-bold ">Dragon News</h2>
        <div className="space-y-7 mt-5">
          {newsById.length > 0 ? (newsById.map((news) => {
            return <NewsCard news={news} key={news._id}></NewsCard>
          })) : <h2 className="text-3xl font-semibold text-gray-800 p-10 bg-slate-100 rounded text-center">No news found!</h2>}
        </div>

      </div>

      <div className="col-span-3">
        <RightSideBar></RightSideBar></div>
    </div>
  );
};

export default NewsCategoryPage;