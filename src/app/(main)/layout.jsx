// import React from 'react';
import BreakingNews from "../components/shared/BreakingNews";
import Header from "../components/shared/Header";
import Navbar from "../components/shared/Navbar";

const MainLayout = ({children}) => {
  return (
    <div className="">
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default MainLayout;