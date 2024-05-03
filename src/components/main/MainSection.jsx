import React from "react";
import Header from "../common/Header";
import Typing from "./Typing";
import SnowBox from "./SnowBox";
import MainMenuBar from "./MainMenuBar";

const MainPage = () => {
  return (
    <section id="container" className="relative">
      <Header />
      <Typing />
      <SnowBox />
      <MainMenuBar />
    </section>
  );
};

export default MainPage;
