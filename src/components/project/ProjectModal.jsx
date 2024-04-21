import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ProjectModal = () => {
  return (
    <section className="fixed inset-0 z-50 w-full h-full">
      <div className="absolute inset-0 w-full h-full bg-dimmedLayer">
        <div className="fixed top-1/2 left-1/2 overflow-y-auto z-10 w-11/12 lg:w-5/6 h-5/6 rounded-3xl bg-backgroundColor transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative p-7 w-full h-full">
            <div className="absolute top-7 right-7 w-10 h-10 cursor-pointer">
              <FontAwesomeIcon icon={faClose} className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectModal;
