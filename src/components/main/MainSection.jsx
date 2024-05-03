import React from "react";
import Header from "../common/Header";
import Typing from "./Typing";
import SnowBox from "./SnowBox";
import MainMenuBar from "./MainMenuBar";

const MainPage = () => {
  return (
    <section className="section-container relative" id="MainSection">
      <Header />
      <Typing />
      <SnowBox />
      <MainMenuBar />
    </section>
  );
};

export default MainPage;
