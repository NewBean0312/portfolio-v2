import React from "react";
import NoteBoxTitle from "./NoteBoxTitle";
import LogoImage from "./LogoImage";
import MobileNoteBoxTitle from "./MobileNoteBoxTitle";

const SkillsSection = () => {
  const EmptyBox = () => {
    return (
      <div className="flex-grow relative border-b-2 border-solid border-mainColor"></div>
    );
  };

  return (
    <section className="w-11/12 h-auto mx-auto pt-8">
      <div className="flex w-11/12 h-40 mt-2 mb-10 mx-auto border-t-2 border-solid border-mainColor">
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
            <LogoImage imageSrc={`${process.env.PUBLIC_URL}/images/skills-img/html-logo.png`} imageAlt={"HTMLLogo"} logoId = {1} />
            <LogoImage imageSrc={`${process.env.PUBLIC_URL}/images/skills-img/css-logo.png`} imageAlt={"CSSLogo"} logoId = {2} />
            <LogoImage imageSrc={`${process.env.PUBLIC_URL}/images/skills-img/javascript-logo.png`} imageAlt={"JavaScriptLogo"} logoId = {3} />
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
            <LogoImage imageSrc={`${process.env.PUBLIC_URL}/images/skills-img/react-logo.png`} imageAlt={"ReactLogo"} logoId = {4} />
            <LogoImage imageSrc={`${process.env.PUBLIC_URL}/images/skills-img/sass-logo.png`} imageAlt={"SassLogo"} logoId = {5} />
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
      </div>
      <div className="flex w-11/12 h-40 mt-2 mb-10 mx-auto border-t-2 border-solid border-mainColor">
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
            <LogoImage imageSrc={`${process.env.PUBLIC_URL}/images/skills-img/linux-logo.png`} imageAlt={"LinuxLogo"} logoId = {6} />
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
            <LogoImage imageSrc={`${process.env.PUBLIC_URL}/images/skills-img/mysql-logo.png`} imageAlt={"MySQLLogo"} logoId = {7} />
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
      </div>
      <div className="flex w-11/12 h-40 mt-2 mb-10 mx-auto border-t-2 border-solid border-mainColor">
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
            <LogoImage imageSrc={`${process.env.PUBLIC_URL}/images/skills-img/git-logo.png`} imageAlt={"GitLogo"} logoId = {8} />
            <LogoImage imageSrc={`${process.env.PUBLIC_URL}/images/skills-img/github-logo.png`} imageAlt={"GitHubLogo"} logoId = {9} />
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
            <LogoImage imageSrc={`${process.env.PUBLIC_URL}/images/skills-img/sourcetree-logo.png`} imageAlt={"SourceTreeLogo"} logoId = {10} />
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
      </div>
    </section>
  );
};

export default SkillsSection;