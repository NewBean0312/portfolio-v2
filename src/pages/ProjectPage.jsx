import React from "react";

import ProjectHeader from "../components/project/ProjectHeader";
import MainProject from "../components/project/MainProject";

const ProjectPage = () => {
  return (
    <main className="flex relative w-full h-screen pt-24">
      <ProjectHeader />
      <section className="relative w-7/12">
        <MainProject />
        <article className="h-1/2"></article>
      </section>
    </main>
  );
};

export default ProjectPage;
