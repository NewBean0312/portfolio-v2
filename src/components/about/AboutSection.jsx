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
  const handleMouseEnter = (number) => {
    setIsHoverd(true);
    setSpanNumber(number); // span 넘버 설정
  };

  // 마우스 이탈 이벤트
  const handleMouseLeave = () => {
    setIsHoverd(false);
    setSpanNumber(); // span 넘버 초기화
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
          <p className="mt-7 ml-5 font-DNFForgedBladeNormal text-xl text-textColor">
            안녕하세요!&nbsp;
            <span
              onMouseEnter={() => handleMouseEnter(0)}
              onMouseLeave={handleMouseLeave}
              className="mr-1 font-DNFForgedBladeBold text-xl italic text-mainColor underline"
            >
              여행하는 듯한 홈페이지
            </span>
            를 만들고자 하는 <br /> 프론트엔드 개발자{" "}
            <span
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
              className="mr-1 font-DNFForgedBladeBold text-xl italic text-mainColor underline"
            >
              전유빈
            </span>
            입니다.
            <br />
            <span className="block h-5"></span>
            저는 마치 여행하듯 아름답고, 편리한 홈페이지를 만들어,
            <br />
            사용자가&nbsp;
            <span
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
              className="mr-1 font-DNFForgedBladeBold text-xl italic text-mainColor underline"
            >
              편히 이용하고 다시 찾아줄 수 있는 홈페이지
            </span>
            를
            <br />
            제작하는 것이 목표이자 신념입니다.
            <br />
            <span className="block h-5"></span>
            <span
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
              className="mr-1 font-DNFForgedBladeBold text-xl italic text-mainColor underline"
            >
              'Rome was not built in a day'
            </span>
            라는 속담이 있듯이,
            <br />
            성공이나 목표를 이루는 데에는&nbsp;
            <span
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={handleMouseLeave}
              className="mr-1 font-DNFForgedBladeBold text-xl italic text-mainColor underline"
            >
              시간과 인내
            </span>
            가 필요합니다.
            <br />
            <span className="block h-5"></span>
            저의 장점인&nbsp;
            <span
              onMouseEnter={() => handleMouseEnter(5)}
              onMouseLeave={handleMouseLeave}
              className="mr-1 font-DNFForgedBladeBold text-xl italic text-mainColor underline hover:text-focusColor"
            >
              창의성과 근성
            </span>
            을 주 무기로 삼아 꾸준히 공부하고 나아가면서,
            <br />
            새로운 것을 계속 시도할 수 있는&nbsp;
            <span
              onMouseEnter={() => handleMouseEnter(6)}
              onMouseLeave={handleMouseLeave}
              className="mr-1 font-DNFForgedBladeBold text-xl italic text-mainColor underline hover:text-focusColor"
            >
              창의적인 개발자
            </span>
            로 임하고 싶습니다!
          </p>
        </article>
      </section>
    </>
  );
};

export default AboutSection;
