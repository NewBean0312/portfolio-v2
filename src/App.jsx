import React from "react";
import MainSection from "./components/main/MainSection";
import AboutSection from "./components/about/AboutSection";
import SkillsSection from "./components/skills/SkillsSection";
import ProjectSection from "./components/project/ProjectSection";
import ContactSection from "./components/contact/ContactSection";
import MenuBar from "./components/common/MenuBar";

function App() {

  return (
    <main className="w-full">
      <MainSection />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
      <MenuBar />
    </main>
  );
}

export default App;
