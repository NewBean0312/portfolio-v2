import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ProjectModalSlide = ({ selectedProject }) => {
  const repeatCount = selectedProject[0].imageNumber;
  // 슬라이드 배너 변수 지정
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlideBtn = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? repeatCount - 1 : prevIndex - 1
    );
  };
  const nextSlideBtn = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === repeatCount - 1 ? 0 : prevIndex + 1
    );
  };

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

  return (
    <div className=" flex overflow-hidden relative h-full">
      {/* prev button */}
      <button
        className="z-10 absolute left-10 w-10 h-10 mt-40 lg:mt-60 rounded-full border-2 border-solid bg-backgroundColor text-mainColor top-1/2 translate-y-[-50%]"
        onClick={prevSlideBtn}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      {/* slide banner */}
      <div
        className="absolute flex justify-center items-center h-full"
        style={{ width: `${repeatCount * 100}%` }}
      >
        {Array(repeatCount)
          .fill()
          .map((_, index) => (
            <div
              className="w-full box-border"
              id={index === currentIndex ? "slideActive" : "slide"}
              key={index}
              style={{
                transition: "transform 0.5s, opacity 0.5s ease-in-out",
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/project-img/website-img/${selectedProject[0].src}-${index}.png`}
                alt={`${selectedProject[0].src}-${index}`}
                className="w-full"
                style={{
                  padding: isWideScreen
                    ? index >= selectedProject[0].mobileNumber
                      ? "0 200px"
                      : "0 50px"
                    : index >= selectedProject[0].mobileNumber
                    ? "0 90px"
                    : "0 30px",
                }}
              />
            </div>
          ))}
      </div>
      {/* next button */}
      <button
        className="z-10 absolute right-10 w-10 h-10 mt-40 lg:mt-60 rounded-full border-2 border-solid bg-backgroundColor text-mainColor top-1/2 translate-y-[-50%]"
        onClick={nextSlideBtn}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default ProjectModalSlide;
