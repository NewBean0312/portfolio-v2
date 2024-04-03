import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

function MultipleSnowFlake({ count }) {
  // snowFlake 생성
  const snowFlake = Array.from({ length: count }).map((_, index) => {
    // snowFlake 사이즈 랜덤 배열 (15px ~ 20px)
    /* 
    Math.random() 함수를 사용하여 0부터 1 사이의 소수를 생성.
    이를 우리가 원하는 범위(0부터 5까지)로 변환하기 위해 (20 - 15 + 1)을 곱함. 
    그럼 결과는 0부터 5 사이의 소수. 
    그 후 Math.floor() 함수를 사용하여 소수 부분을 제거하여 정수로 변환
    그 정수에 최소 길이인 15를 더함
    */
    const sizes = Math.floor(Math.random() * (25 - 15 + 1)) + 15;

    return (
      <div
        key={index}
        className="absolute -top-8 h-full text-snowFlake"
        id="snowflake"
      >
        <FontAwesomeIcon icon={faMusic} spin style={{ fontSize: sizes }} />
      </div>
    );
  });

  return <>{snowFlake}</>;
}

const SnowBox = () => {
  return (
    <div className="absolute top-0 w-full h-full overflow-hidden">
      <MultipleSnowFlake count={20} />
    </div>
  );
};

export default SnowBox;
