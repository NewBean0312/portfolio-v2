import React, { useState, useRef, useEffect } from "react";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectModal from "./ProjectModal";

const ProjectSlideBanner = ({ projectUrl, projectElement }) => {
  // 슬라이드 배너 변수 지정
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlideBtn = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectUrl.length - 1 : prevIndex - 1
    );
  };
  const nextSlideBtn = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectUrl.length - 1 ? 0 : prevIndex + 1
    );
  };

  // 슬라이드 item 너비 측정
  const mySlideElement = useRef(null);
  const [elementWidth, setElementWidth] = useState(0);

  useEffect(() => {
    // 슬라이더 item의 요소가 변경될 때 실행될 콜백 함수
    if (mySlideElement.current) {
      const width = mySlideElement.current.clientWidth;
      setElementWidth(width); // 상태 업데이트
    }
  }, []); // 슬라이더가 마운트될 때, 한 번 실행

  // 로고 모달 버튼 이벤트
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0); // map 함수의 index를 전달할 변수
  const openModal = ({ index }) => {
    setIsModalOpen(true);
    setModalIndex(index);
    document.body.style.overflow = "hidden"; // modal open 시, body의 overflow = hidden
  };
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "visible"; // modal close 시, body의 overflow = visible
  };

  return (
    <>
      <div className="flex justify-center items-center overflow-hidden relative w-full h-80">
        {/* prev button */}
        <button
          className="z-10 absolute left-3 md:left-28 w-10 h-10 rounded-full border-2 border-solid border-mainColor bg-backgroundColor text-mainColor top-1/2 translate-y-[-50%]"
          onClick={prevSlideBtn}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        {/* slide banner */}
        <div className="flex items-center w-full h-full" id="slideBanner">
          {projectUrl.map((project, index) => (
            <div
              id={index === currentIndex ? "slideActive" : "slide"}
              key={index}
              ref={mySlideElement}
              style={{
                transition: "transform 0.5s, opacity 0.5s ease-in-out",
                transform: `translateX(-${currentIndex * elementWidth}px)`,
              }}
            >
              <img
                src={project.lpBoardUrl}
                alt={`lp-board-${index}`}
                className="-z-10 absolute w-full h-full translate-x-[-80px]"
                id="lpBoard"
                style={{
                  minWidth: "300px",
                  maxWidth: "300px",
                  minHeight: "300px",
                  maxHeight: "300px",
                }}
              />
              <img
                src={project.lpBoxUrl}
                alt={`lp-Box-${index}`}
                className="w-full h-full"
                id={index === currentIndex ? "projectActive" : "project"}
                style={{
                  minWidth: "300px",
                  maxWidth: "300px",
                  minHeight: "300px",
                  maxHeight: "300px",
                  border: "1px solid #416d83"
                }}
                onClick={() => openModal({ index })}
              />
            </div>
          ))}
        </div>
        {/* next button */}
        <button
          className="z-10 absolute right-3 md:right-28 w-10 h-10 rounded-full border-2 border-solid border-mainColor bg-backgroundColor text-mainColor top-1/2 translate-y-[-50%]"
          onClick={nextSlideBtn}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        projectId={modalIndex}
        projectElement={projectElement}
      />
    </>
  );
};

export default ProjectSlideBanner;
