import React from "react";

const MenuBarBlackKeyBoard = () => {
  const leftPositions = ["9.97%", "23.9%", "52.5%", "66.8%", "80.8%"];

  return (
    <>
      {leftPositions.map((leftPosition, index) => (
        <div
          key={index}
          className="absolute top-0 h-2/5 bg-mainColor"
          style={{ left: leftPosition, width: "9%" }}
        ></div>
      ))}
    </>
  );
};

export default MenuBarBlackKeyBoard;
