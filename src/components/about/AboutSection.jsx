import React, { useState } from "react";
import AboutImage from "./AboutImage";
import imageSrc1 from "../../assets/images/about-img/img-box1.gif";
import imageSrc2 from "../../assets/images/about-img/img-box2.jpg";
import imageSrc3 from "../../assets/images/about-img/img-box3.gif";
import imageSrc4 from "../../assets/images/about-img/img-box4.gif";
import imageSrc5 from "../../assets/images/about-img/img-box5.gif";
import imageSrc6 from "../../assets/images/about-img/img-box6.gif";
import imageSrc7 from "../../assets/images/about-img/img-box7.gif";

const AboutSection = () => {
  // 이미지 정보 배열
  const images = [
    {
      src: imageSrc1,
      alt: "img-box-1",
      size: "300px",
      top: "40px",
      left: "10%",
    },
    {
      src: imageSrc2,
      alt: "img-box-2",
      size: "250px",
      top: "80px",
      left: "40%",
    },
    {
      src: imageSrc3,
      alt: "img-box-3",
      size: "300px",
      top: "160px",
      left: "11%",
    },
    {
      src: imageSrc4,
      alt: "img-box-4",
      size: "300px",
      top: "200px",
      left: "30%",
    },
    {
      src: imageSrc5,
      alt: "img-box-5",
      size: "300px",
      top: "240px",
      left: "17%",
    },
    {
      src: imageSrc6,
      alt: "img-box-6",
      size: "300px",
      top: "300px",
      left: "42%",
    },
    {
      src: imageSrc7,
      alt: "img-box-7",
      size: "300px",
      top: "320px",
      left: "30%",
    },
  ];

  const [isHoverd, setIsHoverd] = useState(false); // 마우스 진입 여부
  const [spanNumber, setSpanNumber] = useState(); // span 넘버
  // 마우스 진입 이벤트
  const handleMouseEnter1 = () => {
    setIsHoverd(true);
    setSpanNumber(0);
  };

  // 마우스 이탈 이벤트
  const handleMouseLeave1 = () => {
    setIsHoverd(false);
    setSpanNumber(0);
  };
  
  // 마우스 진입 이벤트
  const handleMouseEnter2 = () => {
    setIsHoverd(true);
    setSpanNumber(1);
  };

  // 마우스 이탈 이벤트
  const handleMouseLeave2 = () => {
    setIsHoverd(false);
    setSpanNumber(1);
  };

  return (
    <>
      <section className="flex z-10 relative w-full h-auto m-0">
        <article className="relative w-1/2 h-full">
          {images.map((image, index) => (
            <AboutImage
              key={index}
              imageNumber={index}
              spanNumber={spanNumber}
              imageSrc={image.src}
              imageAlt={image.alt}
              imageSize={image.size}
              topPosition={image.top}
              leftPosition={image.left}
              isHoverd={isHoverd}
            />
          ))}
        </article>
        <article className="w-1/2 h-full">
          <h4 className="mt-10 ml-5 font-DNFForgedBladeLight text-mainColor">
            글씨에 마우스를 갖다 대보세요!
          </h4>
          <p className="mt-7 ml-5 font-DNFForgedBladeNormal text-xl">
            안녕하세요!
            <span
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
            >
               여행하는 듯한 홈페이지
            </span>
          </p>
        </article>
      </section>
    </>
  );
};

export default AboutSection;
