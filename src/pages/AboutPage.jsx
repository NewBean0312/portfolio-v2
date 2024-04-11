import React from "react";
import SnowBox from "../components/main/SnowBox";
import SubHeader from "../components/common/SubHeader";
import AboutSection from "../components/about/AboutSection";

const AboutPage = () => {
  return (
    <>
      <SnowBox />
      <SubHeader headerText={"About me"} />
      <AboutSection />
    </>
  )
};

export default AboutPage;
