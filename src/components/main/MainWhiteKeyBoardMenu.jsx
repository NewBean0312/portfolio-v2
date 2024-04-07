import React from "react";
import Animation from "./Animation";
import MainMenuButton from "./MainMenuButton";

const MainWhiteKeyBoardMenu = () => {
  return (
    <>
      <div
        className="flex-grow relative h-4/5 border-r-4 border-l-4 border-solid border-backgroundColor bg-mainColor hover:bg-gradient-to-b hover:from-backgroundColor hover:to-mainColor transition duration-500 ease-in-out"
        id="whiteKeyBoard"
      >
        <Animation />
      </div>
      <div
        className="flex-grow relative h-4/5 border-r-4 border-l-4 border-solid border-backgroundColor bg-mainColor hover:bg-gradient-to-b hover:from-backgroundColor hover:to-mainColor transition duration-500 ease-in-out"
        id="whiteKeyBoard"
      >
        <MainMenuButton buttonText={"About"} />
      </div>
      <div
        className="flex-grow relative h-4/5 border-r-4 border-l-4 border-solid border-backgroundColor bg-mainColor hover:bg-gradient-to-b hover:from-backgroundColor hover:to-mainColor transition duration-500 ease-in-out"
        id="whiteKeyBoard"
      >
        <MainMenuButton buttonText={"Career"} />
      </div>
      <div
        className="flex-grow relative h-4/5 border-r-4 border-l-4 border-solid border-backgroundColor bg-mainColor hover:bg-gradient-to-b hover:from-backgroundColor hover:to-mainColor transition duration-500 ease-in-out"
        id="whiteKeyBoard"
      >
        <MainMenuButton buttonText={"Skill"} />
      </div>
      <div
        className="flex-grow relative h-4/5 border-r-4 border-l-4 border-solid border-backgroundColor bg-mainColor hover:bg-gradient-to-b hover:from-backgroundColor hover:to-mainColor transition duration-500 ease-in-out"
        id="whiteKeyBoard"
      >
        <MainMenuButton buttonText={"Project"} />
      </div>
      <div
        className="flex-grow relative h-4/5 border-r-4 border-l-4 border-solid border-backgroundColor bg-mainColor hover:bg-gradient-to-b hover:from-backgroundColor hover:to-mainColor transition duration-500 ease-in-out"
        id="whiteKeyBoard"
      >
        <MainMenuButton buttonText={"Contact"} />
      </div>
      <div
        className="flex-grow relative h-4/5 border-r-4 border-l-4 border-solid border-backgroundColor bg-mainColor hover:bg-gradient-to-b hover:from-backgroundColor hover:to-mainColor transition duration-500 ease-in-out"
        id="whiteKeyBoard"
      >
        <Animation />
      </div>
    </>
  );
};

export default MainWhiteKeyBoardMenu;
