import React from "react";
import SubHeader from "../components/common/SubHeader";
import SnowBox from "../components/common/SnowBox";
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
