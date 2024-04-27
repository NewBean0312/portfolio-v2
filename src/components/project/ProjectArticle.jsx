import React from "react";
import ProjectSlideBanner from "./ProjectSlideBanner";

const ProjectArticle = ({headerText, projectUrl, projectElement}) => {
  return (
    <article className="h-1/2 border-b-4 border-solid border-mainColor">
      <div>
        <h3 className="pt-5 font-DNFForgedBladeBold text-xl text-mainColor">
          {headerText}
        </h3>
      </div>
      <div className="flex justify-center items-center w-full h-full pb-7">
        <ProjectSlideBanner projectUrl={projectUrl} projectElement={projectElement}/>
      </div>
    </article>
  );
};

export default ProjectArticle;
