import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import projectData from "../../json/projectData.json";

const ProjectModal = ({ isOpen, onClose, projectId }) => {
  const selectedProject = projectData.filter((data) => data.id === projectId);
  const repeatCount = selectedProject[0].imageNumber;
  // 슬라이드 배너 변수 지정
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlideBtn = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? repeatCount - 1 : prevIndex - 1
    );
  };
  const nextSlideBtn = () => {
    console.log("$$", currentIndex);
    setCurrentIndex((prevIndex) =>
      prevIndex === repeatCount - 1 ? 0 : prevIndex + 1
    );
  };

  const webSiteLinkButton = () => {
    window.open(
      `https://newbean0312.github.io/${selectedProject[0].webSiteURL}/`,
      "_blank"
    );
  };

  if (!isOpen) return null;

  return (
    <section className="fixed inset-0 z-50 w-full h-full">
      <div className="absolute inset-0 w-full h-full bg-dimmedLayer">
        <div className="fixed top-1/2 left-1/2 overflow-y-auto z-10 w-11/12 h-5/6 rounded-3xl bg-backgroundColor transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex relative p-7 w-full h-full">
            <button
              className="z-50 absolute top-7 right-7 w-10 h-10"
              onClick={onClose}
            >
              <FontAwesomeIcon icon={faXmark} className="w-full h-full" />
            </button>
            <div className="w-1/2 h-full">
              <div className="overflow-hidden relative flex h-full">
                {/* prev button */}
                <button
                  className="z-10 absolute left-10 w-10 h-10 mt-60 rounded-full border-2 border-solid bg-backgroundColor text-mainColor top-1/2 translate-y-[-50%]"
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
                          transition:
                            "transform 0.5s, opacity 0.5s ease-in-out",
                          transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/images/project-img/website-img/${selectedProject[0].src}-${index}.png`}
                          alt={selectedProject[0].src}
                          className="w-full"
                          style={{
                            padding: index >= 4 ? "0 200px" : "0 50px",
                          }}
                        />
                      </div>
                    ))}
                </div>
                {/* next button */}
                <button
                  className="z-10 absolute right-10 w-10 h-10 mt-60 rounded-full border-2 border-solid text-mainColor top-1/2 translate-y-[-50%]"
                  onClick={nextSlideBtn}
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
            <div className="w-1/2 h-full pl-10">
              <div className="pb-10">
                <h2 className="pt-16 font-DNFForgedBladeBold text-2xl text-mainColor">
                  {selectedProject[0].name}
                </h2>
              </div>
              <div className="relative w-full h-64 pr-20">
                <p className="overflow-y-auto h-48 font-DNFForgedBladeNormal text-lg text-textColor leading-7">
                  {selectedProject[0].content}
                </p>
                <button
                  className="absolute bottom-3 w-44 h-12 rounded-xl bg-mainColor text-whiteColor"
                  id="moreButton"
                  onClick={webSiteLinkButton}
                >
                  More View
                </button>
              </div>
              <div className="w-full mt-2 border-t-2 border-solid border-mainColor">
                <ul className="w-full pt-5">
                  <li className="flex py-4 px-7">
                    <div className="w-1/4 font-DNFForgedBladeBold text-xl text-mainColor">
                      <FontAwesomeIcon icon={faCheck} className="mr-2" />
                      Function
                    </div>
                    <div className="w-3/4 font-DNFForgedBladeNormal text-lg text-textColor">
                      {selectedProject[0].function}
                    </div>
                  </li>
                  <li className="flex py-5 px-7">
                    <div className="w-1/4 font-DNFForgedBladeBold text-xl text-mainColor">
                      <FontAwesomeIcon icon={faCheck} className="mr-2" />
                      GitHub
                    </div>
                    <div className="w-3/4 font-DNFForgedBladeNormal text-lg text-textColor">
                      <a
                        href={`https://github.com/NewBean0312/${selectedProject[0].gitHubURL}`}
                        target="_blank"
                        rel="noreferrer"
                        className="underline"
                      >
                        {selectedProject[0].gitHubURL}
                      </a>
                      <span className="ml-2 text-mainColor">(Click!)</span>
                    </div>
                  </li>
                  <li className="flex py-5 px-7">
                    <div className="w-1/4 font-DNFForgedBladeBold text-xl text-mainColor">
                      <FontAwesomeIcon icon={faCheck} className="mr-2" />
                      Skills
                    </div>
                    <div className="w-3/4 font-DNFForgedBladeNormal text-lg text-textColor">
                      {selectedProject[0].skills}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectModal;
