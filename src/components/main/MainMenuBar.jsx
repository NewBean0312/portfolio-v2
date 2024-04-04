import React from "react";
import MainWhiteKeyBoard from "./MainWhiteKeyBoard";
import MainBlakcKeyBoard from "./MainBlackKeyBoard";

function BoxGroup() {
  const mainWhiteBoxs = Array.from({ length: 7 }, (_, index) => (
    <MainWhiteKeyBoard key={index} />
  ));

  return (
    <div className="flex items-end relative flex-grow" id="boxGroup">
      {mainWhiteBoxs}
      <MainBlakcKeyBoard />
    </div>
  );
}

const MainMenuBar = () => {
  return (
    <div className="flex absolute bottom-0 w-full h-72 select-none">
      <BoxGroup />
      <BoxGroup />
      <BoxGroup />
      <BoxGroup />
    </div>
  );
};

export default MainMenuBar;
