import React from "react";
import SubHeader from "../components/common/SubHeader";
import AboutSection from "../components/about/AboutSection";

const AboutPage = () => {
  return (
    <main id="container">
      <SubHeader headerText={"About me"} />
      <AboutSection />
    </main>
  )
};

export default AboutPage;
