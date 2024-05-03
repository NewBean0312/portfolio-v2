import React from "react";
import ProjectHeader from "./ProjectHeader";
import ProjectArticle from "./ProjectArticle";

const ProjectSection = () => {
  // 프로젝트 이미지 URL
  const mainProjectUrl = [
    {
      lpBoardUrl: `${process.env.PUBLIC_URL}/images/project-img/lp-record/naeiltour-lp.png`,
      lpBoxUrl: `${process.env.PUBLIC_URL}/images/project-img/website-img/naeiltour-renewal-img-0.png`,
    },
    {
      lpBoardUrl: `${process.env.PUBLIC_URL}/images/project-img/lp-record/liverpool-lp.png`,
      lpBoxUrl: `${process.env.PUBLIC_URL}/images/project-img/website-img/liverpool-img-0.png`,
    },
    {
      lpBoardUrl: `${process.env.PUBLIC_URL}/images/project-img/lp-record/pyeongchang-lp.png`,
      lpBoxUrl: `${process.env.PUBLIC_URL}/images/project-img/website-img/PyeongChang2018-img-0.png`,
    },
  ];
  const subProjectUrl = [
    {
      lpBoardUrl: `${process.env.PUBLIC_URL}/images/project-img/lp-record/todolist-lp.png`,
      lpBoxUrl: `${process.env.PUBLIC_URL}/images/project-img/website-img/todoList-img-0.png`,
    },
    {
      lpBoardUrl: `${process.env.PUBLIC_URL}/images/project-img/lp-record/pokedex-lp.png`,
      lpBoxUrl: `${process.env.PUBLIC_URL}/images/project-img/website-img/pokemon-dex-img-0.png`,
    },
    {
      lpBoardUrl: `${process.env.PUBLIC_URL}/images/project-img/lp-record/orderpage-lp.png`,
      lpBoxUrl: `${process.env.PUBLIC_URL}/images/project-img/website-img/order-page-img-0.png`,
    },
  ];

  return (
    <section className="flex flex-col lg:flex-row items-center lg:items-start relative pt-20" id="container">
      <ProjectHeader />
      <div className="relative w-full lg:w-2/3 xl:w-7/12">
        <ProjectArticle
          headerText={"Main Project"}
          projectUrl={mainProjectUrl}
          projectElement={"main"}
        />
        <ProjectArticle
          headerText={"Sub Project"}
          projectUrl={subProjectUrl}
          projectElement={"sub"}
        />
      </div>
    </section>
  );
};

export default ProjectSection;
