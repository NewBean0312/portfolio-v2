import React, { useEffect, useState } from "react";

function BlackKeyBoard() {
  // 검은 키보드 건반 위치 및 너비 설정
  const leftPositions = ["9.97%", "23.9%", "52.5%", "66.8%", "80.8%"];

  return (
    <>
      {leftPositions.map((leftPosition, index) => (
        <div
          key={index}
          className="absolute top-0 h-1/3 bg-mainColor"
          style={{ left: leftPosition, width: "9%" }}
        ></div>
      ))}
    </>
  );
}

function MobileBlackKeyBoard() {
  // 검은 키보드 건반 위치 및 너비 설정
  const leftPositions = ["15%", "35%", "55%", "75%"];

  return (
    <>
      {leftPositions.map((leftPosition, index) => (
        <div
          key={index}
          className="absolute top-0 h-1/3 bg-mainColor"
          style={{ left: leftPosition, width: "9%" }}
        ></div>
      ))}
    </>
  );
}

const MenuBarBlackKeyBoard = () => {
  // 브라우저 크기 상태
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 500);
    };

    handleResize(); // 초기 실행
    window.addEventListener("resize", handleResize); // 창 크기 변경 감지
    return () => {
      window.removeEventListener("resize", handleResize); // 초기화
    };
  }, []);

  return <>{isWideScreen ? <BlackKeyBoard /> : <MobileBlackKeyBoard />}</>;
};

export default MenuBarBlackKeyBoard;
