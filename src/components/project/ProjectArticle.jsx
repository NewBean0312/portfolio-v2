import React from "react";
import ProjectSlideBenner from "./ProjectSlideBenner";

const ProjectArticle = ({headerText, projectData}) => {
  

  return (
    <article className="h-1/2 border-b-4 border-solid border-mainColor">
      <div>
        <h3 className="pt-5 font-DNFForgedBladeBold text-xl text-mainColor">
          {headerText}
        </h3>
      </div>
      <div className="flex justify-center items-center w-full h-full pb-7">
        <ProjectSlideBenner projectData={projectData}/>
      </div>
    </article>
  );
};

export default ProjectArticle;
