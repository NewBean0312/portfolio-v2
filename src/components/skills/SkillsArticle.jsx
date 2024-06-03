import React from "react";
import LogoImage from "./LogoImage";
import MobileNoteBoxTitle from "./MobileNoteBoxTitle";

function EmptyBoxColumn({ number }) {
  const EmptyBox = Array.from({ length: number }, (_, index) => (
    <div className="flex-grow relative border-b-2 border-solid border-mainColor"></div>
  ));

  return <>{EmptyBox}</>;
}

const NoteBoxTitle = ({ titleText }) => {
  return (
    <div className="invisible md:visible absolute font-bold text-lg text-mainColor transform translate-y-[-30px]">
      {titleText}
    </div>
  );
};

const SkillsArticle = ({ data, titleText }) => {
  return (
    <article className="flex w-11/12 h-40 mt-2 mb-10 mx-auto border-t-2 border-solid border-mainColor">
      <div className="hidden md:flex flex-grow flex-col relative border-r-8 border-solid border-mainColor">
        <div className="flex-grow relative border-b-2 border-solid border-mainColor">
          <NoteBoxTitle titleText={titleText} />
        </div>
        <EmptyBoxColumn number={3} />
      </div>
      <div className="flex flex-grow flex-col relative border-r-8 border-solid border-mainColor">
        <div className="flex justify-around absolute w-full h-full">
          {data
            .slice(0, data.length === 1 ? data.length : data.length / 2)
            .map((item, index) => (
              <LogoImage
                key={index}
                logoSrc={item.logoSrc}
                logoName={item.logoName}
              />
            ))}
        </div>
        <div className="flex-grow relative border-b-2 border-solid border-mainColor">
          <MobileNoteBoxTitle titleText={"Front-End"} />
        </div>
        <EmptyBoxColumn number={3} />
      </div>
      <div className="flex flex-grow flex-col relative border-r-8 border-solid border-mainColor">
        <div className="flex justify-around absolute w-full h-full">
          {data
            .slice(
              data.length === 1 ? data.length : data.length / 2,
              data.length
            )
            .map((item, index) => (
              <LogoImage
                key={index}
                logoSrc={item.logoSrc}
                logoName={item.logoName}
              />
            ))}
        </div>
        <EmptyBoxColumn number={4} />
      </div>
      <div className="hidden lg:flex flex-grow flex-col relative border-r-8 border-solid border-mainColor">
        <EmptyBoxColumn number={4} />
      </div>
    </article>
  );
};

export default SkillsArticle;
