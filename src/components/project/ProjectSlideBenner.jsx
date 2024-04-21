import React, { useState } from "react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ProjectSlideBenner = ({projectData}) => {
  console.log(projectData);

  // 슬라이드 배너 변수 지정
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlideBtn = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectData.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlideBtn = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex justify-center items-center overflow-hidden relative w-full h-80">
      {/* prev button */}
      <button
        className="z-10 absolute left-28 w-10 h-10 rounded-full border-2 border-solid text-mainColor top-1/2 translate-y-[-50%]"
        onClick={prevSlideBtn}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      {/* slide banner */}
      <div className="flex items-center w-full h-full" id="slideBanner">
        {projectData.map((project, index) => (
          <div
            className="relative"
            id={index === currentIndex ? "slideActive" : "slide"}
            key={index}
            style={{
              width: "300px",
              height: "300px",
              transition: "transform 0.5s, opacity 0.5s ease-in-out",
              transform: `translateX(-${currentIndex * 300}px)`,
            }}
          >
            <img
              src={project.lpBoardUrl}
              alt={`lp-board-${index}`}
              className="-z-10 absolute w-full h-full translate-x-[-80px]"
              id="lpBoard"
            />
            <img
              src={project.lpBoxUrl}
              alt={`lp-Box-${index}`}
              className="w-full h-full p-4"
            />
          </div>
        ))}
      </div>
      {/* next button */}
      <button
        className="z-10 absolute right-28 w-10 h-10 rounded-full border-2 border-solid text-mainColor top-1/2 translate-y-[-50%]"
        onClick={nextSlideBtn}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default ProjectSlideBenner;
