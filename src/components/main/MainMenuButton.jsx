import React from "react";
import { Link } from "react-scroll";

const MainMenuButton = ({ buttonText }) => {

  return (
    <Link
      to={`${buttonText}Section`}
      spy={true}
      smooth={true}
      duration={500}
      className="flex justify-center w-full h-full cursor-pointer"
    >
      <div
        className="flex justfy-center absolute -top-12 z-10 text-base xl:text-xl  font-bold text-backgroundColor text-center"
        id="animation"
      >
        {buttonText}
      </div>
      <div className="absolute bottom-2 h-28 text-sm text-mainButtonTextColor text-center tracking-wide uppercase">
        {buttonText.split("").map((char, index) => (
          <React.Fragment key={index}>
            <div className="h-4">{char}</div>
          </React.Fragment>
        ))}
      </div>
    </Link>
  );
};

export default MainMenuButton;
