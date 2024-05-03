import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faA, faC, faM, faP, faS } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const MenuBarMenuButton = ({ buttonText }) => {
  return (
    // 각 section으로 이동
    <Link
      to={`${buttonText}Section`}
      spy={true}
      smooth={true}
      duration={500}
      className="flex justify-center w-full h-full text-mainColor cursor-pointer"
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
        {buttonText == "Main" && (
          <>
            <FontAwesomeIcon className="hidden md:inline-block" icon={faM} />
            <div className="md:invisible">{buttonText}</div>
          </>
        )}
        {buttonText == "About" && (
          <>
            <FontAwesomeIcon className="hidden md:inline-block" icon={faA} />
            <div className="md:invisible">{buttonText}</div>
          </>
        )}
        {/* {buttonText == "Career" && (
              <>
                <FontAwesomeIcon className="hidden md:inline-block" icon={faC} />
                <div className="md:invisible">{buttonText}</div>
              </>
            )} */}
        {buttonText == "Skills" && (
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
  );
};

export default MenuBarMenuButton;
