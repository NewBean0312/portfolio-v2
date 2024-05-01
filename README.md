# 포트폴리오 React 버전

### 포트폴리오를 리액트로 리메이크 해보자!

---

1. 계기

- 리액트 개발자로써 포트폴리오 또한, 리액트로 개발해야 하지 않을까? 라는 생각으로 시작하게 되었습니다.
- 또한, 원래 만들었던 포트폴리오가 반응형 작업이 쉽지 않아 상태 관리에 취약하다 판단하여, 리액트로 개발하자고 생각했습니다.
- [원래 포트폴리오](https://newbean0312.github.io/portfolio/index.html)

2. 구조

- Main 페이지
- About 페이지
- Career 페이지(임시 폐기)
- Skills 페이지
- Project 페이지
- Contact 페이지

---

3. 개발 기록

- 1. CSS 스타일

  - CSS는 Tailwind CSS를 사용하여, CSS 스타일을 적용하고자 했습니다.
  - Tailwind의 Color를 지정하였습니다.
  - 개발 날짜 : 2024.04.02
  - [gitHub](https://github.com/NewBean0312/portfolio-v2/commit/35ffc45)

- 2. 타이핑 이벤트

  - 원래 포트폴리오에 있는 타이핑 이벤트를 가져와야 했습니다.
  - 허나, 원래는 js 파일이기에 jsx 파일로 변경해야 하는 문제가 생겼습니다.
  - useState로 상태를 저장하고 useEffect와 setInterval 함수를 통해 글자를 하나씩 상태에 저장하고 출력하는 이벤트로 작업하였습니다.
  - 개발 날짜 : 2024.04.03
  - [gitHub](https://github.com/NewBean0312/portfolio-v2/commit/24a9f9c)

- 3. snowFlake 적용

  - 원래 포트폴리오에 있는 음표가 떨어지는 이벤트를 가져와야 했습니다.
  - Math.random 함수를 사용하여, 0부터 1사이의 소수를 생성한 뒤, 이를 원하는 범위로 변환하고 Math.floor 함수를 사용해 소수를 정수로 변경하고 최소 길이를 더하는 과정을 이용하였습니다.
  - map 함수를 사용하여 여러 개의 음표에 각자 다양한 사이즈를 부여해 줬습니다.
  - 음표의 위치와 흔들리는 정도는 index페이지에 @keyframes를 사용하여 작업하였습니다.
  - 개발 날짜 : 2024.04.03
  - [gitHub](https://github.com/NewBean0312/portfolio-v2/commit/24a9f9c)

- 4. 키보드 건반 애니메이션

  - 원래 포트폴리오에 있는 건반이 움직이는 이벤트를 가져와야 했습니다.
  - 그냥 건반과 페이지 링크 버튼이 들어있는 건반을 만든 후, css 스타일인 animation을 사용해 건반 길이를 변경하는 이벤트를 작업하였습니다.
  - 개발 날짜 : 2024.04.07
  - [gitHub](https://github.com/NewBean0312/portfolio-v2/commit/923e35d)

- 5. 메뉴 바 작업

  - 각 페이지로 넘어갈 메뉴 바를 작업해야 했습니다.
  - 원래 있던 메뉴 바는 반응형으로 작업하기에 비효율적 이기에 메뉴 버튼을 오른쪽에 따로 컴포넌트를 따로 생성했습니다.
  - 브라우저 너비가 모바일일 경우, 페이지명이 나오게 작업하였습니다.
  - 개발 날짜 : 2024.04.07
  - [gitHub](https://github.com/NewBean0312/portfolio-v2/commit/4399bd6)

- 6.  페이지 링크

  - 버튼을 클릭 시, 각 페이지로 넘어가는 작업을 해야 했습니다.
  - Router를 사용하여, main 페이지일 때 메인 메뉴를, 그 외 페이지일 때 서브 메뉴가 나오는 App.jsx에 작업 하였습니다.
  - 개발 날짜 : 2024.04.07
  - [gitHub](https://github.com/NewBean0312/portfolio-v2/commit/4399bd6)

- 7. About 페이지 이미지 박스
