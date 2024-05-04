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
            <div className="invisible lg:visible h-4">{char}</div>
          </React.Fragment>
        ))}
      </div>
      <div
        className="absolute top-1/2 w-full text-sm lg:text-2xl text-center"
        id="menuBarIcon"
      >
        {buttonText == "Main" && (
          <>
            <FontAwesomeIcon className="hidden lg:inline-block" icon={faM} />
            <div className="lg:invisible">{buttonText}</div>
          </>
        )}
        {buttonText == "About" && (
          <>
            <FontAwesomeIcon className="hidden lg:inline-block" icon={faA} />
            <div className="lg:invisible">{buttonText}</div>
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
            <FontAwesomeIcon className="hidden lg:inline-block" icon={faS} />
            <div className="lg:invisible">{buttonText}</div>
          </>
        )}
        {buttonText == "Project" && (
          <>
            <FontAwesomeIcon className="hidden lg:inline-block" icon={faP} />
            <div className="lg:invisible">{buttonText}</div>
          </>
        )}
        {buttonText == "Contact" && (
          <>
            <FontAwesomeIcon className="hidden lg:inline-block" icon={faC} />
            <div className="lg:invisible">{buttonText}</div>
          </>
        )}
      </div>
    </Link>
  );
};

export default MenuBarMenuButton;
