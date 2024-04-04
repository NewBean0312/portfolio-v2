import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

function Animation() {
  return (
    <div
      className="flex justify-center absolute -top-11 z-30 w-full h-10 text-mainColor text-3xl"
      id="animation"
    >
      <FontAwesomeIcon icon={faMusic} />
    </div>
  );
}

export default Animation;
