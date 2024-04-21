import React from "react";
import SubHeader from "../components/common/SubHeader";
import SnowBox from "../components/common/SnowBox";
import AboutSection from "../components/about/AboutSection";

const AboutPage = () => {
  return (
    <main id="container">
      <SnowBox />
      <SubHeader headerText={"About me"} />
      <AboutSection />
    </main>
  )
};

export default AboutPage;
