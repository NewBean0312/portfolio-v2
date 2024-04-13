import React from "react";
import NoteBoxTitle from "./NoteBoxTitle";
import LogoImage from "./LogoImage";
// 이미지 불러오기
import HTMLLogo from "../../assets/images/skills-img/html-logo.png";
import CSSLogo from "../../assets/images/skills-img/css-logo.png";
import JavaScriptLogo from "../../assets/images/skills-img/javascript-logo.png";
import ReactLogo from "../../assets/images/skills-img/react-logo.png";
import SassLogo from "../../assets/images/skills-img/sass-logo.png";
import LinuxLogo from "../../assets/images/skills-img/linux-logo.png";
import MySQLLogo from "../../assets/images/skills-img/mysql-logo.png";
import GitLogo from "../../assets/images/skills-img/git-logo.png";
import GitHubLogo from "../../assets/images/skills-img/github-logo.png";
import SourceTreeLogo from "../../assets/images/skills-img/sourcetree-logo.png";
import MobileNoteBoxTitle from "./MobileNoteBoxTitle";

const SkillsSection = () => {
  const EmptyBox = () => {
    return (
      <div className="flex-grow relative border-b-2 border-solid border-mainColor"></div>
    );
  };

  return (
    <>
      <section className="w-11/12 h-auto mx-auto pt-8">
        <div className="flex w-11/12 h-40 mt-2 mb-10 mx-auto border-t-2 border-solid border-mainColor">
          <div className="flex flex-grow flex-col relative border-r-8 border-solid border-mainColor">
            <div className="flex-grow relative border-b-2 border-solid border-mainColor">
              <NoteBoxTitle titleText={"Front-End"} />
            </div>
            <EmptyBox />
            <EmptyBox />
            <EmptyBox />
          </div>
          <div className="flex flex-grow flex-col relative border-r-8 border-solid border-mainColor">
            <div className="flex justify-around absolute w-full h-full">
              <LogoImage imageSrc={HTMLLogo} imageAlt={"HTMLLogo"} />
              <LogoImage imageSrc={CSSLogo} imageAlt={"CSSLogo"} />
              <LogoImage
                imageSrc={JavaScriptLogo}
                imageAlt={"JavaScriptLogo"}
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
              <LogoImage imageSrc={ReactLogo} imageAlt={"ReactLogo"} />
              <LogoImage imageSrc={SassLogo} imageAlt={"SassLogo"} />
            </div>
            <EmptyBox />
            <EmptyBox />
            <EmptyBox />
            <EmptyBox />
          </div>
          <div className="flex flex-grow flex-col relative border-r-8 border-solid border-mainColor">
            <EmptyBox />
            <EmptyBox />
            <EmptyBox />
            <EmptyBox />
          </div>
        </div>
        <div className="flex w-11/12 h-40 mt-2 mb-10 mx-auto border-t-2 border-solid border-mainColor">
          <div className="flex flex-grow flex-col relative border-r-8 border-solid border-mainColor">
            <div className="flex-grow relative border-b-2 border-solid border-mainColor">
              <NoteBoxTitle titleText={"Back-End"} />
            </div>
            <EmptyBox />
            <EmptyBox />
            <EmptyBox />
          </div>
          <div className="flex flex-grow flex-col relative border-r-8 border-solid border-mainColor">
            <div className="flex justify-around absolute w-full h-full">
              <LogoImage imageSrc={LinuxLogo} imageAlt={"LinuxLogo"} />
              <LogoImage imageSrc={MySQLLogo} imageAlt={"MySQLLogo"} />
            </div>
            <div className="flex-grow relative border-b-2 border-solid border-mainColor">
              <MobileNoteBoxTitle titleText={"Back-End"} />
            </div>
            <EmptyBox />
            <EmptyBox />
            <EmptyBox />
          </div>
          <div className="flex flex-grow flex-col relative border-r-8 border-solid border-mainColor">
            <EmptyBox />
            <EmptyBox />
            <EmptyBox />
            <EmptyBox />
          </div>
          <div className="flex flex-grow flex-col relative border-r-8 border-solid border-mainColor">
            <EmptyBox />
            <EmptyBox />
            <EmptyBox />
            <EmptyBox />
          </div>
        </div>
        <div className="flex w-11/12 h-40 mt-2 mb-10 mx-auto border-t-2 border-solid border-mainColor">
          <div className="flex flex-grow flex-col relative border-r-8 border-solid border-mainColor">
            <div className="flex-grow relative border-b-2 border-solid border-mainColor">
              <NoteBoxTitle titleText={"Etc."} />
            </div>
            <EmptyBox />
            <EmptyBox />
            <EmptyBox />
          </div>
          <div className="flex flex-grow flex-col relative border-r-8 border-solid border-mainColor">
            <div className="flex justify-around absolute w-full h-full">
              <LogoImage imageSrc={GitLogo} imageAlt={"GitLogo"} />
              <LogoImage imageSrc={GitHubLogo} imageAlt={"GitHubLogo"} />
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
                imageSrc={SourceTreeLogo}
                imageAlt={"SourceTreeLogo"}
              />
            </div>
            <EmptyBox />
            <EmptyBox />
            <EmptyBox />
            <EmptyBox />
          </div>
          <div className="flex flex-grow flex-col relative border-r-8 border-solid border-mainColor">
            <EmptyBox />
            <EmptyBox />
            <EmptyBox />
            <EmptyBox />
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsSection;
