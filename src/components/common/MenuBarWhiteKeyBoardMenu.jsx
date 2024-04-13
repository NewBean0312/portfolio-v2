import React from "react";
import MenuBarMenuButton from "./MenuBarMenuButton";

const MenuBarWhiteKeyBoardMenu = () => {
  // MenuBar 메뉴들
  return (
    <>
      <div className="hidden md:flex justify-center items-end flex-grow relative w-full h-full border-x-2 border-soild border-mainColor hover:bg-gradient-to-b hover:from-mainColor hover:to-backgroundColor"></div>
      <div className="flex justify-center items-end flex-grow relative w-full h-full border-x-2 border-soild border-mainColor hover:bg-gradient-to-b hover:from-mainColor hover:to-backgroundColor">
        <MenuBarMenuButton buttonText={"Main"} />
      </div>
      <div className="flex justify-center items-end flex-grow relative w-full h-full border-x-2 border-soild border-mainColor hover:bg-gradient-to-b hover:from-mainColor hover:to-backgroundColor">
        <MenuBarMenuButton buttonText={"About"} />
      </div>
      {/* 커리어 메뉴는 임시 hidden */}
      {/* <div className="flex justify-center items-end flex-grow relative w-full h-full border-x-2 border-soild border-mainColor hover:bg-gradient-to-b hover:from-mainColor hover:to-backgroundColor">
        <MenuBarMenuButton buttonText={"Career"} />
      </div> */}
      <div className="flex justify-center items-end flex-grow relative w-full h-full border-x-2 border-soild border-mainColor hover:bg-gradient-to-b hover:from-mainColor hover:to-backgroundColor">
        <MenuBarMenuButton buttonText={"Skills"} />
      </div>
      <div className="flex justify-center items-end flex-grow relative w-full h-full border-x-2 border-soild border-mainColor hover:bg-gradient-to-b hover:from-mainColor hover:to-backgroundColor">
        <MenuBarMenuButton buttonText={"Project"} />
      </div>
      <div className="flex justify-center items-end flex-grow relative w-full h-full border-x-2 border-soild border-mainColor hover:bg-gradient-to-b hover:from-mainColor hover:to-backgroundColor">
        <MenuBarMenuButton buttonText={"Contact"} />
      </div>
      <div className="hidden md:flex justify-center items-end flex-grow relative w-full h-full border-x-2 border-soild border-mainColor hover:bg-gradient-to-b hover:from-mainColor hover:to-backgroundColor"></div>
    </>
  );
};

export default MenuBarWhiteKeyBoardMenu;
