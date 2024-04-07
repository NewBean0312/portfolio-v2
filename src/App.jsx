import React from "react";
import MainPage from "./pages/MainPage";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import MainMenuBar from "./components/main/MainMenuBar";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname == "/pages/AboutPage" && <div>안녕하세요!</div>}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
      </Routes>
      {location.pathname == "/" && <MainMenuBar />}
    </>
  );
}

export default App;
