import React from "react";
import Animation from "./Animation";

const MainWhiteKeyBoard = () => {
  return (
    <div
      className="flex-grow relative h-4/5 border-r-4 border-l-4 border-solid border-backgroundColor bg-mainColor hover:bg-gradient-to-b hover:from-backgroundColor hover:to-mainColor"
      id="whiteKeyBoard"
    >
      <Animation />
    </div>
  );
}

export default MainWhiteKeyBoard;
