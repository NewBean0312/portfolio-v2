import React from "react";
import SkillsArticle from "./SkillsArticle";

const SkillsArticleGroup = ({skillElement, skillContent}) => {
  return (
    <>
      <h1 className="w-4/5 mx-auto border-b-2 border-solid border-mainColor font-DNFForgedBladeNormal md:text-xl text-textColor">
        {skillContent}
      </h1>
      <div className="w-full py-10">
        <SkillsArticle data={skillElement[0]} titleText={"Front-End"} />
        <SkillsArticle data={skillElement[1]} titleText={"Back-End"} />
        <SkillsArticle data={skillElement[2]} titleText={"Etc."} />
      </div>
    </>
  );
};

export default SkillsArticleGroup;
