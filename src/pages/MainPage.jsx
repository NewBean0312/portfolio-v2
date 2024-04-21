import React from "react";
import Header from "../components/common/Header";
import Typing from "../components/main/Typing";
import SnowBox from "../components/common/SnowBox";

const MainPage = () => {
  return (
      <main>
        <Header />
        <Typing />
        <SnowBox />
      </main>
  );
};

export default MainPage;
