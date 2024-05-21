import React from "react";
import NoteBoxTitle from "./NoteBoxTitle";
import LogoImage from "./LogoImage";
import MobileNoteBoxTitle from "./MobileNoteBoxTitle";

const SkillsArticle = () => {
  const EmptyBox = () => {
    return (
      <div className="flex-grow relative border-b-2 border-solid border-mainColor"></div>
    );
  };

  return (
    <div className="w-11/12 h-auto mx-auto pt-8">
      <article className="flex w-11/12 h-40 mt-2 mb-10 mx-auto border-t-2 border-solid border-mainColor">
        <div className="hidden md:flex flex-grow flex-col relative border-r-8 border-solid border-mainColor">
          <div className="flex-grow relative border-b-2 border-solid border-mainColor">
            <NoteBoxTitle titleText={"Front-End"} />
          </div>
          <EmptyBox />
          <EmptyBox />
          <EmptyBox />
        </div>
        <div className="flex flex-grow flex-col relative border-r-8 border-solid border-mainColor">
          <div className="flex justify-around absolute w-full h-full">
            <LogoImage
              logoSrc={`${process.env.PUBLIC_URL}/images/skills-img/html-logo.png`}
              logoName={"HTML"}
            />
            <LogoImage
              logoSrc={`${process.env.PUBLIC_URL}/images/skills-img/css-logo.png`}
              logoName={"CSS"}
            />
            <LogoImage
              logoSrc={`${process.env.PUBLIC_URL}/images/skills-img/javascript-logo.png`}
              logoName={"JavaScript"}
            />
          </div>
          <div className="flex-grow relative border-b-2 border-solid border-mainColor">
            <MobileNoteBoxTitle titleText={"Front-End"} />
          </div>
          <EmptyBox />
          <EmptyBox />
          <EmptyBox />
        </div>
        <div className="flex flex-grow flex-col relative border-r-8 border-solid border-mainColor">
          <div className="flex justify-around absolute w-full h-full">
            <LogoImage
              logoSrc={`${process.env.PUBLIC_URL}/images/skills-img/react-logo.png`}
              logoName={"React"}
            />
            <LogoImage
              logoSrc={`${process.env.PUBLIC_URL}/images/skills-img/sass-logo.png`}
              logoName={"Sass"}
            />
            <LogoImage
              logoSrc={`${process.env.PUBLIC_URL}/images/skills-img/typescript-logo.png`}
              logoName={"TypeScript"}
            />
          </div>
          <EmptyBox />
          <EmptyBox />
          <EmptyBox />
          <EmptyBox />
        </div>
        <div className="hidden lg:flex flex-grow flex-col relative border-r-8 border-solid border-mainColor">
          <EmptyBox />
          <EmptyBox />
          <EmptyBox />
          <EmptyBox />
        </div>
      </article>
      <article className="flex w-11/12 h-40 mt-2 mb-10 mx-auto border-t-2 border-solid border-mainColor">
        <div className="hidden md:flex flex-grow flex-col relative border-r-8 border-solid border-mainColor">
          <div className="flex-grow relative border-b-2 border-solid border-mainColor">
            <NoteBoxTitle titleText={"Back-End"} />
          </div>
          <EmptyBox />
          <EmptyBox />
          <EmptyBox />
        </div>
        <div className="flex flex-grow flex-col relative border-r-8 border-solid border-mainColor">
          <div className="flex justify-around absolute w-full h-full">
            <LogoImage
              logoSrc={`${process.env.PUBLIC_URL}/images/skills-img/linux-logo.png`}
              logoName={"Linux"}
            />
          </div>
          <div className="flex-grow relative border-b-2 border-solid border-mainColor">
            <MobileNoteBoxTitle titleText={"Back-End"} />
          </div>
          <EmptyBox />
          <EmptyBox />
          <EmptyBox />
        </div>
        <div className="flex flex-grow flex-col relative border-r-8 border-solid border-mainColor">
          <div className="flex justify-around absolute w-full h-full">
            <LogoImage
              logoSrc={`${process.env.PUBLIC_URL}/images/skills-img/mysql-logo.png`}
              logoName={"MySQL"}
            />
          </div>
          <EmptyBox />
          <EmptyBox />
          <EmptyBox />
          <EmptyBox />
        </div>
        <div className="hidden lg:flex flex-grow flex-col relative border-r-8 border-solid border-mainColor">
          <EmptyBox />
          <EmptyBox />
          <EmptyBox />
          <EmptyBox />
        </div>
      </article>
      <article className="flex w-11/12 h-40 mt-2 mb-10 mx-auto border-t-2 border-solid border-mainColor">
        <div className="hidden md:flex flex-grow flex-col relative border-r-8 border-solid border-mainColor">
          <div className="flex-grow relative border-b-2 border-solid border-mainColor">
            <NoteBoxTitle titleText={"Etc."} />
          </div>
          <EmptyBox />
          <EmptyBox />
          <EmptyBox />
        </div>
        <div className="flex flex-grow flex-col relative border-r-8 border-solid border-mainColor">
          <div className="flex justify-around absolute w-full h-full">
            <LogoImage
              logoSrc={`${process.env.PUBLIC_URL}/images/skills-img/git-logo.png`}
              logoName={"Git"}
            />
            <LogoImage
              logoSrc={`${process.env.PUBLIC_URL}/images/skills-img/github-logo.png`}
              logoName={"GitHub"}
            />
          </div>
          <div className="flex-grow relative border-b-2 border-solid border-mainColor">
            <MobileNoteBoxTitle titleText={"Etc."} />
          </div>
          <EmptyBox />
          <EmptyBox />
          <EmptyBox />
        </div>
        <div className="flex flex-grow flex-col relative border-r-8 border-solid border-mainColor">
          <div className="flex justify-around absolute w-full h-full">
            <LogoImage
              logoSrc={`${process.env.PUBLIC_URL}/images/skills-img/sourcetree-logo.png`}
              logoName={"SourceTree"}
            />
            <LogoImage
              logoSrc={`${process.env.PUBLIC_URL}/images/skills-img/vercel-logo.png`}
              logoName={"Vercel"}
            />
          </div>
          <EmptyBox />
          <EmptyBox />
          <EmptyBox />
          <EmptyBox />
        </div>
        <div className="hidden lg:flex flex-grow flex-col relative border-r-8 border-solid border-mainColor">
          <EmptyBox />
          <EmptyBox />
          <EmptyBox />
          <EmptyBox />
        </div>
      </article>
    </div>
  );
};

export default SkillsArticle;
