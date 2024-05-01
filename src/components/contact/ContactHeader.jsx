import React from "react";
import SubHeader from "../common/SubHeader";

const ContactHeader = () => {
  return (
    <header className="w-full lg:w-1/3 text-center">
      <SubHeader headerText={"Contact"} />
      <p className="font-DNFForgedBladeNormal text-xl text-mainColor">
        저에 대해 더 자세히 알고 싶다면?
        <br />
      </p>
      <div className="flex justify-around w-1/3 mx-auto pt-8">
        <a
          href="https://newbean-j.tistory.com/"
          target="_blank"
          rel="noreferrer"
          className="w-9 h-9"
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/contact-img/tistory-logo.png`}
            alt="tistory-logo"
          />
        </a>
        <a
          href="https://github.com/NewBean0312"
          target="_blank"
          rel="noreferrer"
          className="w-9 h-9"
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/contact-img/github-logo.png`}
            alt="github-logo"
          />
        </a>
      </div>
    </header>
  );
};

export default ContactHeader;
