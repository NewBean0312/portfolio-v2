import React from "react";
import Header from "../components/common/Header";
import Typing from "../components/main/Typing";
import SnowBox from "../components/main/SnowBox";
import MainMenuBar from "../components/main/MainMenuBar";

const MainPage = () => {
  return (
    <main id="container" className="relative">
      <Header />
      <Typing />
      <SnowBox />
      <MainMenuBar />
    </main>
  );
};

export default MainPage;
