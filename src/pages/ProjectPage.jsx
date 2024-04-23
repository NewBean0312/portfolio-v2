import React from "react";
import ProjectHeader from "../components/project/ProjectHeader";
import ProjectArticle from "../components/project/ProjectArticle";

const ProjectPage = () => {
  // 프로젝트 이미지 URL
  const mainProjectUrl = [
    {
      lpBoardUrl: `${process.env.PUBLIC_URL}/images/project-img/lp-record/naeiltour-lp.png`,
      lpBoxUrl: `${process.env.PUBLIC_URL}/images/project-img/website-img/naeiltour-renewal-img-0.png`,
    },
    {
      lpBoardUrl: `${process.env.PUBLIC_URL}/images/project-img/lp-record/liverpool-lp.png`,
      lpBoxUrl: `${process.env.PUBLIC_URL}/images/project-img/website-img/liverpool-img.png`,
    },
    {
      lpBoardUrl: `${process.env.PUBLIC_URL}/images/project-img/lp-record/pyeongchang-lp.png`,
      lpBoxUrl: `${process.env.PUBLIC_URL}/images/project-img/website-img/PyeongChang2018-img.png`,
    },
  ];
  const subProjectUrl = [
    {
      lpBoardUrl: `${process.env.PUBLIC_URL}/images/project-img/lp-record/todolist-lp.png`,
      lpBoxUrl: `${process.env.PUBLIC_URL}/images/project-img/website-img/todoList-img.png`,
    },
    {
      lpBoardUrl: `${process.env.PUBLIC_URL}/images/project-img/lp-record/pokedex-lp.png`,
      lpBoxUrl: `${process.env.PUBLIC_URL}/images/project-img/website-img/pokemon-dex-img.png`,
    },
    {
      lpBoardUrl: `${process.env.PUBLIC_URL}/images/project-img/lp-record/orderpage-lp.png`,
      lpBoxUrl: `${process.env.PUBLIC_URL}/images/project-img/website-img/order-page-img.png`,
    },
  ];

  return (
    <main className="flex relative pt-20" id="container">
      <ProjectHeader />
      <section className="relative w-7/12">
        <ProjectArticle
          headerText={"Main Project"}
          projectUrl={mainProjectUrl}
        />
        <ProjectArticle
          headerText={"Sub Project"}
          projectUrl={subProjectUrl}
        />
      </section>
    </main>
  );
};

export default ProjectPage;
