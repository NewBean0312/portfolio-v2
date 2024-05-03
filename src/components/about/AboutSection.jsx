import React from "react";
import SubHeader from "../common/SubHeader";
import AboutArticle from "./AboutArticle";

const AboutPage = () => {
  return (
    <section id="container">
      <SubHeader headerText={"About me"} />
      <AboutArticle />
    </section>
  )
};

export default AboutPage;
