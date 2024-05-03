import React from "react";
import SubHeader from "../common/SubHeader";
import SkillsArticle from "./SkillsArticle";

const SkillsSection = () => {
  return (
      <section className="section-container relative" id="SkillsSection">
        <header className="w-2/5 h-auto my-0 mx-auto border-b-4 border-solid border-mainColor text-center">
          <SubHeader headerText={"Skills"} />
          <div className="pr-3 pt-2 border-t-2 border-solid border-mainColor text-mainColor font-DNFForgedBladeNormal text-right">
            로고를 클릭해 보세요!
          </div>
        </header>
        <SkillsArticle />
      </section>
  );
};

export default SkillsSection;
