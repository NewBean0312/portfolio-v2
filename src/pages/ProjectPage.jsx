import React from "react";

import ProjectHeader from "../components/project/ProjectHeader";
import ProjectArticle from "../components/project/ProjectArticle";
import NaeiltourLpUrl from "../assets/images/project-img/lp-record/naeiltour-lp.png";
import LiverpoolLpUrl from "../assets/images/project-img/lp-record/liverpool-lp.png";
import PyeongChangLpUrl from "../assets/images/project-img/lp-record/lp-record-3.png";
import NaeiltourUrl from "../assets/images/project-img/website-img/naeiltour-renewal-img.png";
import LiverpoolUrl from "../assets/images/project-img/website-img/liverpool-img.png";
import PyeongChangUrl from "../assets/images/project-img/website-img/PyeongChang2018-img.png";

const ProjectPage = () => {
  // 프로젝트 이미지 URL
  const mainProjectData = [
    { lpBoardUrl: NaeiltourLpUrl, lpBoxUrl: NaeiltourUrl },
    { lpBoardUrl: LiverpoolLpUrl, lpBoxUrl: LiverpoolUrl },
    { lpBoardUrl: PyeongChangLpUrl, lpBoxUrl: PyeongChangUrl },
  ];

  return (
    <main className="flex relative pt-24" id="container">
      <ProjectHeader />
      <section className="relative w-7/12">
        <ProjectArticle
          headerText={"Main Project"}
          projectData={mainProjectData}
        />
        <ProjectArticle
          headerText={"Sub Project"}
          projectData={mainProjectData}
        />
      </section>
    </main>
  );
};

export default ProjectPage;
