import React from "react";
import SubHeader from "../common/SubHeader";
import AboutArticle from "./AboutArticle";

const AboutPage = () => {
  return (
    <section className="section-container relative pt-12" id="AboutSection">
      <SubHeader headerText={"About me"} />
      <AboutArticle />
    </section>
  )
};

export default AboutPage;
