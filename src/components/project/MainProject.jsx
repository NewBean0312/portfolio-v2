import React from "react";
import ProjectSlideBenner from "./ProjectSlideBenner";

const MainProject = () => {
  return (
    <article className="h-1/2 border-b-4 border-solid border-mainColor">
      <div>
        <h3 className="font-DNFForgedBladeBold text-xl text-mainColor">
          Main Project
        </h3>
      </div>
      <div className="flex justify-center items-center w-full h-full pb-7">
        <ProjectSlideBenner />
      </div>
    </article>
  );
};

export default MainProject;
