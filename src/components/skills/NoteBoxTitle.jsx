import React from "react";

const NoteBoxTitle = ({ titleText }) => {
  return (
    <div className="invisible md:visible absolute font-bold text-lg text-mainColor transform translate-y-[-30px]">
      {titleText}
    </div>
  );
};

export default NoteBoxTitle;
