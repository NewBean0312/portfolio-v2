import React from "react";

const AboutImage = ({
  imageSrc,
  imageAlt,
  imageSize,
  topPosition,
  leftPosition,
  isHoverd,
}) => {
  const visibility = isHoverd ? "visible" : "hidden";
  console.log(isHoverd);
  return (
    <div
      className="absolute"
      style={{
        width: imageSize,
        top: topPosition,
        left: leftPosition,
        visibility: visibility,
      }}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute w-full rounded-3xl"
      />
    </div>
  );
};

export default AboutImage;
