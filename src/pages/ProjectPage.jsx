import React from "react";
import ProjectHeader from "../components/project/ProjectHeader";
import ProjectArticle from "../components/project/ProjectArticle";
// main project image url
import NaeiltourLpUrl from "../assets/images/project-img/lp-record/naeiltour-lp.png";
import LiverpoolLpUrl from "../assets/images/project-img/lp-record/liverpool-lp.png";
import PyeongChangLpUrl from "../assets/images/project-img/lp-record/lp-record-3.png";
import NaeiltourUrl from "../assets/images/project-img/website-img/naeiltour-renewal-img.png";
import LiverpoolUrl from "../assets/images/project-img/website-img/liverpool-img.png";
import PyeongChangUrl from "../assets/images/project-img/website-img/PyeongChang2018-img.png";
// sub project image url
import TodoListLpUrl from "../assets/images/project-img/lp-record/todolist-lp.png";
import PokedexLpUrl from "../assets/images/project-img/lp-record/pokedex-lp.png";
import TodoListUrl from "../assets/images/project-img/website-img/todoList-img.png";
import OrderPageLpUrl from "../assets/images/project-img/lp-record/orderpade-lp.png";
import PokedexUrl from "../assets/images/project-img/website-img/pokemon-dex-img.png";
import OrderPageUrl from "../assets/images/project-img/website-img/order-page-img.png";

const ProjectPage = () => {
  // 프로젝트 이미지 URL
  const mainProjectData = [
    { lpBoardUrl: NaeiltourLpUrl, lpBoxUrl: NaeiltourUrl },
    { lpBoardUrl: LiverpoolLpUrl, lpBoxUrl: LiverpoolUrl },
    { lpBoardUrl: PyeongChangLpUrl, lpBoxUrl: PyeongChangUrl },
  ];
  const subProjectData = [
    { lpBoardUrl: TodoListLpUrl, lpBoxUrl: TodoListUrl },
    { lpBoardUrl: PokedexLpUrl, lpBoxUrl: PokedexUrl },
    { lpBoardUrl: OrderPageLpUrl, lpBoxUrl: OrderPageUrl },
  ];

  return (
    <main className="flex relative pt-20" id="container">
      <ProjectHeader />
      <section className="relative w-7/12">
        <ProjectArticle
          headerText={"Main Project"}
          projectData={mainProjectData}
        />
        <ProjectArticle
          headerText={"Sub Project"}
          projectData={subProjectData}
        />
      </section>
    </main>
  );
};

export default ProjectPage;
