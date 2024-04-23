import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import projectData from "../../json/projectData.json";

const ProjectModal = ({ isOpen, onClose, projectId }) => {
  console.log(projectId);
  const selectedProject = projectData.filter((data) => data.id === projectId);
  
  // 슬라이드 배너 변수 지정
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlideBtn = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === selectedProject.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlideBtn = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? selectedProject.length - 1 : prevIndex - 1
    );
  };

  if (!isOpen) return null;

  return (
    <>
      {projectData.map((data, index) => (
        <section className="fixed inset-0 z-50 w-full h-full" key={index}>
          <div className="absolute inset-0 w-full h-full bg-dimmedLayer">
            <div className="fixed top-1/2 left-1/2 overflow-y-auto z-10 w-11/12 h-5/6 rounded-3xl bg-backgroundColor transform -translate-x-1/2 -translate-y-1/2">
              <div className="flex relative p-7 w-full h-full">
                <button
                  className="absolute top-7 right-7 w-10 h-10"
                  onClick={onClose}
                >
                  <FontAwesomeIcon icon={faXmark} className="w-full h-full" />
                </button>
                <div className="w-2/5 h-full">
                  <div className="h-4/5">
                    {/* prev button */}
                    <button
                      className="z-10 absolute left-28 w-10 h-10 rounded-full border-2 border-solid text-mainColor top-1/2 translate-y-[-50%]"
                      onClick={prevSlideBtn}
                    >
                      <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    {/* slide banner */}
                    <div
                      className="flex items-center w-full h-full"
                      id="slideBanner"
                    >
                      
                    </div>
                    {/* next button */}
                    <button
                      className="z-10 absolute right-28 w-10 h-10 rounded-full border-2 border-solid text-mainColor top-1/2 translate-y-[-50%]"
                      onClick={nextSlideBtn}
                    >
                      <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </div>
                </div>
                <div className="w-3/5 h-full"></div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default ProjectModal;
