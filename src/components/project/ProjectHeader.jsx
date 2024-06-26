import React from "react";
import SubHeader from "../common/SubHeader";

const ProjectHeader = () => {
  return (
    <header className="w-full lg:w-5/12">
      <SubHeader headerText={"Project"} />
      <p className="font-DNFForgedBladeNormal text-xl text-mainColor text-center">
        레코드 판 클릭으로 자세히 보기!
        <br />
        버튼으로 넘기기~
      </p>
    </header>
  );
};

export default ProjectHeader;
