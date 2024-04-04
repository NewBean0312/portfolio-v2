import React from "react";

const MainBlakcKeyBoard = () => {
  const leftPositions = ["9.97%", "23.9%", "52.5%", "66.8%", "80.8%"];

  return (
    <>
      {leftPositions.map((leftPosition, index) => (
        <div
          key={index}
          className="absolute h-40 bg-backgroundColor top-0"
          style={{ left: leftPosition, width: "9%" }}
        ></div>
      ))}
    </>
  );
};

export default MainBlakcKeyBoard;
