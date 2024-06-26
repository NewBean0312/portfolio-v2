import React from "react";
import MainWhiteKeyBoard from "./MainWhiteKeyBoard";
import MainBlackKeyBoard from "./MainBlackKeyBoard";
import MainWhiteKeyBoardMenu from "./MainWhiteKeyBoardMenu";

function MainBoxGroup() {
  const mainWhiteBoxs = Array.from({ length: 7 }, (_, index) => (
    <MainWhiteKeyBoard key={index} />
  ));

  return (
    <div className="flex items-end relative flex-grow" id="boxGroup">
      {mainWhiteBoxs}
      <MainBlackKeyBoard />
    </div>
  );
}

function MainBoxGroupMenu() {
  return (
    <div className="flex items-end relative flex-grow" id="boxGroupMenu">
      <MainWhiteKeyBoardMenu />
      <MainBlackKeyBoard />
    </div>
  );
}

const MainMenuBar = () => {
  return (
    <div className="flex z-50 absolute bottom-0 w-full h-72 select-none">
      <MainBoxGroup />
      <MainBoxGroup />
      <MainBoxGroup />
      <MainBoxGroupMenu />
    </div>
  );
};

export default MainMenuBar;
