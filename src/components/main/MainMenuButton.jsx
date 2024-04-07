import React from "react";
import { Link } from "react-router-dom";

const MainMenuButton = ({ buttonText }) => {
  return (
    <>
      <Link
        to={`./pages/${buttonText}Page`}
        className="flex justify-center w-full h-full"
      >
        <div
          className="flex justfy-center absolute -top-12 z-10 text-base xl:text-xl  font-bold text-backgroundColor text-center uppercase"
          id="animation"
        >
          {buttonText}
        </div>
        <div className="fixed bottom-2 h-28 text-sm text-mainButtonTextColor text-center tracking-wide uppercase">
          {buttonText.split("").map((char, index) => (
            <React.Fragment key={index}>
              <div className="h-4">{char}</div>
            </React.Fragment>
          ))}
        </div>
      </Link>
    </>
  );
};

export default MainMenuButton;
