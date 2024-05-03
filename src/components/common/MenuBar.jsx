import React, { useEffect, useState } from "react";
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
  // MainPage를 지나갈 시, 메뉴 바 visible 이벤트
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const menuBarScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      // 스크롤 위치가 뷰포트 height의 100%를 넘었을 때, isVisible 상태 변경
      if (scrollPosition > viewportHeight - 1) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", menuBarScroll);

    // 컴포넌트 언마운트 시, 스크롤 이벤트 리스너 해제
    return () => {
      window.addEventListener("scroll", menuBarScroll);
    };
  }, []); // 컴포넌트가 마운트 시에만, 실행

  return (
    <>
      {isVisible && (
        <nav
          className="flex fixed top-0 overflow-hidden z-50 w-full h-20 hover:h-52 border-b-4 border-solid border-mainColor bg-backgroundColor"
          id="menuBar"
        >
          <MenuBarBoxGroup />
          <MenuBarBoxGroup />
          <MenuBarBoxGroup />
          <MenuBarBoxGroupMenu />
        </nav>
      )}
    </>
  );
};

export default MenuBar;
