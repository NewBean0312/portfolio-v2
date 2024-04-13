import React from "react";

const LogoImage = ({ imageSrc, imageAlt }) => {
  return (
    <div className="flex z-10 w-12 h-12">
      <img src={imageSrc} alt={imageAlt} />
    </div>
  );
};

export default LogoImage;
