import React from "react";

const AboutImage = ({
  imageNumber,
  spanNumber,
  imageSrc,
  imageAlt,
  imageSize,
  topPosition,
  leftPosition,
  isHoverd,
}) => {
  const visibility = spanNumber === imageNumber ? (isHoverd ? "visible" : "hidden") : "hidden";

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
