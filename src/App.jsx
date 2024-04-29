import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
// import CareerPage from "./pages/CareerPage";
import SkillsPage from "./pages/SkillsPage";
import MainMenuBar from "./components/main/MainMenuBar";
import MenuBar from "./components/common/MenuBar";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname != "/" && <MenuBar />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        {/* <Route path="/CareerPage" element={<CareerPage />} /> */}
        <Route path="/SkillsPage" element={<SkillsPage />} />
        <Route path="/ProjectPage" element={<ProjectPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
      </Routes>
      {location.pathname == "/" && <MainMenuBar />}
    </>
  );
}

export default App;
