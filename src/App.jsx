import React from "react";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import MenuBar from "./components/common/MenuBar";

function App() {

  return (
    <>
      <MainPage />
      <AboutPage />
      <SkillsPage />
      <ProjectPage />
      <ContactPage />
      <MenuBar />
    </>
  );
}

export default App;
