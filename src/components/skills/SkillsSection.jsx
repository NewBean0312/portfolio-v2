import React from "react";
import SubHeader from "../common/SubHeader";
import SkillsArticleGroup from "./SkillsArticleGroup";

// main skills
const mainFrontEndSkills = [
  {
    logoName: "HTML",
    logoSrc: `${process.env.PUBLIC_URL}/images/skills-img/html-logo.png`,
  },
  {
    logoName: "CSS",
    logoSrc: `${process.env.PUBLIC_URL}/images/skills-img/css-logo.png`,
  },
  {
    logoName: "JavaScript",
    logoSrc: `${process.env.PUBLIC_URL}/images/skills-img/javascript-logo.png`,
  },
  {
    logoName: "React",
    logoSrc: `${process.env.PUBLIC_URL}/images/skills-img/react-logo.png`,
  },
  {
    logoName: "Sass",
    logoSrc: `${process.env.PUBLIC_URL}/images/skills-img/sass-logo.png`,
  },
  {
    logoName: "TypeScript",
    logoSrc: `${process.env.PUBLIC_URL}/images/skills-img/typescript-logo.png`,
  },
];

const mainBackEndSkills = [
  {
    logoName: "RESTAPI",
    logoSrc: `${process.env.PUBLIC_URL}/images/skills-img/restapi-logo.png`,
  },
];

const mainEtcSkills = [
  {
    logoName: "Git",
    logoSrc: `${process.env.PUBLIC_URL}/images/skills-img/git-logo.png`,
  },
  {
    logoName: "GitHub",
    logoSrc: `${process.env.PUBLIC_URL}/images/skills-img/github-logo.png`,
  },
  {
    logoName: "SourceTree",
    logoSrc: `${process.env.PUBLIC_URL}/images/skills-img/sourcetree-logo.png`,
  },
  {
    logoName: "Vercel",
    logoSrc: `${process.env.PUBLIC_URL}/images/skills-img/vercel-logo.png`,
  },
];

// sub skills
const subFrontEndSkills = [
  {
    logoName: "Vue",
    logoSrc: `${process.env.PUBLIC_URL}/images/skills-img/vue-logo.png`,
  },
];
const subBackEndSkills = [
  {
    logoName: "Linux",
    logoSrc: `${process.env.PUBLIC_URL}/images/skills-img/linux-logo.png`,
  },
  {
    logoName: "MySQL",
    logoSrc: `${process.env.PUBLIC_URL}/images/skills-img/mysql-logo.png`,
  },
];
const subEtcSkills = [
  {
    logoName: "Figma",
    logoSrc: `${process.env.PUBLIC_URL}/images/skills-img/figma-logo.png`,
  },
];

const SkillsSection = () => {
  const mainSkills = [mainFrontEndSkills, mainBackEndSkills, mainEtcSkills];
  const subSkills = [subFrontEndSkills, subBackEndSkills, subEtcSkills];

  return (
    <section className="relative" id="SkillsSection">
      <header className="w-3/5 md:w-2/5 h-auto my-0 mx-auto border-b-4 border-solid border-mainColor text-center">
        <SubHeader headerText={"Skills"} />
        <div className="pr-3 pt-2 border-t-2 border-solid border-mainColor text-mainColor font-DNFForgedBladeNormal text-right">
          로고를 클릭해 보세요!
        </div>
      </header>
      <div className="w-11/12 h-auto mx-auto pt-8">
        <SkillsArticleGroup
          skillElement={mainSkills}
          skillContent={"기능 구현 등의 사용 경험이 있는 Skill Set"}
        />
        <SkillsArticleGroup
          skillElement={subSkills}
          skillContent={"사용경험은 없으나, 이론적 지식이 있는 Skill Set"}
        />
      </div>
    </section>
  );
};

export default SkillsSection;
