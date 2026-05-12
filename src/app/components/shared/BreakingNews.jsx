// import React from 'react';
import { Span } from "next/dist/trace";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {

  const news = [
    {
      id: 1,
      title: "AI Technology is Transforming Modern Education"
    },
    {
      id: 2,
      title: "Global Markets Rise After Economic Recovery"
    },
    {
      id: 3,
      title: "New Space Mission Successfully Launches to Mars"
    }
  ];

  return (
    <div className="container mx-auto">
      <div className="flex items-center p-4 my-5 bg-gray-100">
        <button className="btn bg-red-700 text-white">Breaking News</button>
        <Marquee pauseOnHover={true} speed={50}>
            {news.map((n) => (<span key={n.id}>{n.title}</span>))}
        </Marquee>
      </div>
    </div>

  );
};

export default BreakingNews;