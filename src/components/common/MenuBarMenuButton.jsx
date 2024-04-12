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
          <div
            className="absolute top-1/2 w-full text-sm md:text-2xl text-center"
            id="menuBarIcon"
          >
            <FontAwesomeIcon className="hidden md:inline-block" icon={faM} />
            <div className="md:invisible">{buttonText}</div>
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
          <div
            className="absolute top-1/2 w-full text-sm md:text-2xl text-center"
            id="menuBarIcon"
          >
            {buttonText == "About" && (
              <>
                <FontAwesomeIcon className="hidden md:inline-block" icon={faA} />
                <div className="md:invisible">{buttonText}</div>
              </>
            )}
            {buttonText == "Career" && (
              <>
                <FontAwesomeIcon className="hidden md:inline-block" icon={faC} />
                <div className="md:invisible">{buttonText}</div>
              </>
            )}
            {buttonText == "Skill" && (
              <>
                <FontAwesomeIcon className="hidden md:inline-block" icon={faS} />
                <div className="md:invisible">{buttonText}</div>
              </>
            )}
            {buttonText == "Project" && (
              <>
                <FontAwesomeIcon className="hidden md:inline-block" icon={faP} />
                <div className="md:invisible">{buttonText}</div>
              </>
            )}
            {buttonText == "Contact" && (
              <>
                <FontAwesomeIcon className="hidden md:inline-block" icon={faC} />
                <div className="md:invisible">{buttonText}</div>
              </>
            )}
          </div>
        </Link>
      )}
    </>
  );
};

export default MenuBarMenuButton;
