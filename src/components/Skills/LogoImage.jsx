import gsap, { Power1 } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import LogoModal from "./LogoModal";

function random(min, max) {
  // min ~ max 범위
  /*
   * toFixed()로 소수점 두 자리까지 반환된 문자 데이터를
   * parseFloat()을 통해 소수점을 가지는 숫자 데이터로 변환
   */
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

const LogoImage = ({ imageSrc, imageAlt, logoId }) => {
  const circleRef = useRef(null);

  // 로고 애니메이션 이벤트
  useEffect(() => {
    const floatingAnimation = () => {
      gsap.to(circleRef.current, {
        duration: random(2.5, 6.5), // 2.5 ~ 6.5초 사이의 랜덤 animation 동작 시간
        y: 100, // translateY
        repeat: -1, // 반복 횟수 (-1은 무한 반복)
        yoyo: true, // 한번 재생된 animation을 다시 뒤로 재생
        ease: Power1.easeInOut, // easing 함수 적용
        delay: random(0, 1),
      });
    };

    floatingAnimation();
  }, []);

  // 로고 모달 버튼 이벤트
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // modal open 시, body의 overflow = hidden
  };
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'visible'; // modal close 시, body의 overflow = visible
  };

  return (
    <>
      <button
        className="flex z-10 w-12 h-12"
        ref={circleRef}
        onClick={openModal}
      >
        <img src={imageSrc} alt={imageAlt} />
      </button>
      <LogoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        logoId={logoId}
      />
    </>
  );
};

export default LogoImage;
