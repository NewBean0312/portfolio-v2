import React, { useEffect, useState } from "react";

// 타이핑 이벤트
const Typing = () => {
  const [firstText, setFirstText] = useState("");
  const [secondText, setSecondText] = useState("");
  const firstContent = "안녕하세요! 저는 프론트엔드 개발자 전유빈입니다.";
  const secondContent = "성실하고 창의적인 개발자가 되는 것이 목표입니다!";
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);

  useEffect(() => {
    const interVal = setInterval(() => {
      // 글자 하나 씩 넣기
      if (i < firstContent.length) {
        setFirstText((firstText) => firstText + firstContent.charAt(i));
        setI((i) => i + 1);
      } else {
        // 전부 출력 시, interval 중지
        clearInterval(interVal);
      }
    }, 120);

    return () => clearInterval(interVal);
  }, [i, firstContent.length]);

  useEffect(() => {
    const interVal = setInterval(() => {
      // 글자 하나 씩 넣기
      if (j < secondContent.length) {
        setSecondText((secondText) => secondText + secondContent.charAt(j));
        setJ((j) => j + 1);
      } else {
        // 전부 출력 시, interval 중지
        clearInterval(interVal);
      }
    }, 120);
    return () => clearInterval(interVal);
  }, [j, secondContent.length]);

  return (
    <div className="mt-12 font-DNFForgedBladeNormal text-lg text-2xl text-mainColor text-center select-none">
      <div>
        <span id="text-1">{firstText}</span>
      </div>
      <div className="mt-4">
        <span id="text-2">{secondText}</span>
      </div>
    </div>
  );
};

export default Typing;
