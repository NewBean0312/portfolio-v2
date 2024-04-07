import React from "react";
import MenuBarWhiteKeyBoard from "./MenuBarWhiteKeyBoard";
import MenuBarBlackKeyBoard from "./MenuBarBlackKeyBoard";
import MenuBarWhiteKeyBoardMenu from "./MenuBarWhiteKeyBoardMenu";

function MenuBarBoxGroup() {
  const menuBarWhiteBoxs = Array.from({ length: 7 }, (_, index) => (
    <MenuBarWhiteKeyBoard key={index} />
  ));

  return (
    <div className="flex items-end relative flex-grow" id="boxGroup">
      {menuBarWhiteBoxs}
      <MenuBarBlackKeyBoard />
    </div>
  );
}

function MenuBarBoxGroupMenu() {
    return (
      <div className="flex items-end relative flex-grow" id="boxGroupMenu">
        <MenuBarWhiteKeyBoardMenu />
        <MenuBarBlackKeyBoard />
      </div>
    );
  }

const MenuBar = () => {
  return (
    <nav
      className="flex fixed top-0 overflow-hidden z-50 w-full h-20 hover:h-52 border-b-4 border-solid border-mainColor bg-backgroundColor"
      id="menuBar"
    >
      <MenuBarBoxGroup />
      <MenuBarBoxGroup />
      <MenuBarBoxGroup />
      <MenuBarBoxGroupMenu />
    </nav>
  );
};

export default MenuBar;
