import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faA, faC, faM, faP, faS } from "@fortawesome/free-solid-svg-icons";

const MenuBarMenuButton = ({ buttonText }) => {
  return (
    <>
      {buttonText == "Main" && (
        <Link
          to={`/`}
          className="flex justify-center w-full h-full text-mainColor"
        >
          <div
            className="invisible opacity-0 absolute text-center text-md font-bold"
            id="buttonNav"
          >
            {buttonText.split("").map((char, index) => (
              <React.Fragment key={index}>
                <div className="h-4">{char}</div>
              </React.Fragment>
            ))}
          </div>
          <div className="absolute top-1/2 text-2xl" id="menuBarIcon">
            <FontAwesomeIcon icon={faM} />
          </div>
        </Link>
      )}
      {buttonText != "Main" && (
        <Link
          to={`./${buttonText}Page`}
          className="flex justify-center w-full h-full text-mainColor"
        >
          <div
            className="invisible opacity-0 absolute text-center text-md font-bold"
            id="buttonNav"
          >
            {buttonText.split("").map((char, index) => (
              <React.Fragment key={index}>
                <div className="h-4">{char}</div>
              </React.Fragment>
            ))}
          </div>
          <div className="absolute top-1/2 text-2xl" id="menuBarIcon">
            {buttonText == "About" && <FontAwesomeIcon icon={faA} />}
            {buttonText == "Career" && <FontAwesomeIcon icon={faC} />}
            {buttonText == "Skill" && <FontAwesomeIcon icon={faS} />}
            {buttonText == "Project" && <FontAwesomeIcon icon={faP} />}
            {buttonText == "Contact" && <FontAwesomeIcon icon={faC} />}
          </div>
        </Link>
      )}
    </>
  );
};

export default MenuBarMenuButton;
