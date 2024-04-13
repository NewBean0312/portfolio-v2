import React from "react";

const MobileNoteBoxTitle = ({titleText}) => {
  return (
    <div className="visible md:invisible absolute font-bold text-lg text-mainColor transform translate-y-[-30px]">
      {titleText}
    </div>
  );
};

export default MobileNoteBoxTitle;
