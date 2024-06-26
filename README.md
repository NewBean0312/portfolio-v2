# 포트폴리오 React 버전

- [포트폴리오 바로가기](https://newbeanportfolio.com)

---

### 계기

- 리액트 개발자로써 포트폴리오 또한, 리액트로 개발해야 하지 않을까? 라는 생각으로 시작하게 되었습니다.
- 또한, 원래 만들었던 포트폴리오가 반응형 작업이 쉽지 않아 상태 관리에 취약하다 판단하여, 리액트로 개발하자고 생각했습니다.
- [원래 포트폴리오](https://newbean0312.github.io/portfolio/index.html)

### 구조

- Main 페이지
- About 페이지
- Career 페이지(임시 폐기)
- Skills 페이지
- Project 페이지
- Contact 페이지

---

### 개발 기록

1. CSS 스타일

- CSS는 Tailwind CSS를 사용하여, CSS 스타일을 적용하고자 했습니다.
- Tailwind의 Color를 지정하였습니다.
- 개발 날짜 : 2024.04.02
- [gitHub](https://github.com/NewBean0312/portfolio-v2/commit/35ffc45)

2. 타이핑 이벤트

- 원래 포트폴리오에 있는 타이핑 이벤트를 가져와야 했습니다.
- 허나, 원래는 js 파일이기에 jsx 파일로 변경해야 하는 문제가 생겼습니다.
- useState로 상태를 저장하고 useEffect와 setInterval 함수를 통해 글자를 하나씩 상태에 저장하고 출력하는 이벤트로 작업하였습니다.
- 개발 날짜 : 2024.04.03
- [gitHub](https://github.com/NewBean0312/portfolio-v2/commit/24a9f9c)

3. snowFlake 적용

- 원래 포트폴리오에 있는 음표가 떨어지는 이벤트를 가져와야 했습니다.
- Math.random 함수를 사용하여, 0부터 1사이의 소수를 생성한 뒤, 이를 원하는 범위로 변환하고 Math.floor 함수를 사용해 소수를 정수로 변경하고 최소 길이를 더하는 과정을 이용하였습니다.
- map 함수를 사용하여 여러 개의 음표에 각자 다양한 사이즈를 부여해 줬습니다.
- 음표의 위치와 흔들리는 정도는 index페이지에 @keyframes를 사용하여 작업하였습니다.
- 개발 날짜 : 2024.04.03
- [gitHub](https://github.com/NewBean0312/portfolio-v2/commit/24a9f9c)

4. 키보드 건반 애니메이션

- 원래 포트폴리오에 있는 건반이 움직이는 이벤트를 가져와야 했습니다.
- 그냥 건반과 페이지 링크 버튼이 들어있는 건반을 만든 후, css 스타일인 animation을 사용해 건반 길이를 변경하는 이벤트를 작업하였습니다.
- 개발 날짜 : 2024.04.07
- [gitHub](https://github.com/NewBean0312/portfolio-v2/commit/923e35d)

5. 메뉴 바 작업

- 각 페이지로 넘어갈 메뉴 바를 작업해야 했습니다.
- 원래 있던 메뉴 바는 반응형으로 작업하기에 비효율적 이기에 메뉴 버튼을 오른쪽에 따로 컴포넌트를 따로 생성했습니다.
- 브라우저 너비가 모바일일 경우, 페이지명이 나오게 작업하였습니다.
- 개발 날짜 : 2024.04.07
- [gitHub](https://github.com/NewBean0312/portfolio-v2/commit/4399bd6)

6.  페이지 링크

- 버튼을 클릭 시, 각 페이지로 넘어가는 작업을 해야 했습니다.
- Router를 사용하여, main 페이지일 때 메인 메뉴를, 그 외 페이지일 때 서브 메뉴가 나오는 App.jsx에 작업 하였습니다.
- 개발 날짜 : 2024.04.07
- [gitHub](https://github.com/NewBean0312/portfolio-v2/commit/4399bd6)

7. About 페이지 이미지 박스

- About 페이지에서 키워드에 마우스를 갖다대면, 이미지 박스가 나오는 이벤트를 작업하였습니다.
- AboutSection.jsx에서 map 함수로 여러 이미지를 불러온 후, 하위 컴포넌트인 AboutImage에서 불러온 isHoverd의 number로 개별 이미지를 불러옵니다.
- 개발 날짜 : 2024.04.11
- [gitHub](https://github.com/NewBean0312/portfolio-v2/commit/5056304)

8. Skills 페이지 logo 애니메이션

- Skills 페이지에서 각 logo 마다 상하로 움직이는 애니메이션을 주고자 하였습니다.
- random 함수로 min과 max 범위 사이의 값을 소수점 2자리로 반환한 문자열에 parseFloat 함수를 사용하여 다시 소수점 숫자로 변환합니다.
- 변환된 값을 logo에 넣어 각자 다양한 시간대로 움직이는 로고 이미지를 작업하였습니다.
- 개발 날짜 : 2024.04.17
- [gitHub](https://github.com/NewBean0312/portfolio-v2/commit/53955e4)

9. Skills 페이지 모달 창 및 json 적용

- Skills 페이지에서 Modal 창을 이용하여 어떤 스킬을 구사 가능한 지 알리고자 하였습니다.
- modal 창에 들어갈 데이터는 json 파일을 불러와서 적용하였습니다.
- LogoImage 컴포넌트에 logoId를 부여하여, modal 창이 개별로 열릴 수 있도록 작업하였습니다.
- 개발 날짜 : 2024.04.17
- [gitHub](https://github.com/NewBean0312/portfolio-v2/commit/53955e4)

10. Project 페이지 슬라이드 배너

- Project 페이지에서 프로젝트를 슬라이드 배너로 표현하고자 하였습니다.
- 원래 포트폴리오라면, Swiper나 Slick을 사용하겠지만 직접 개발해 보고 싶어서 직접 만들었습니다.
- ProjectSlideBanner.jsx에서 currentIndex를 이용하여, 각 슬라이드에 index를 지정한 후, map 함수의 index와 currentIndex가 일치하면 visible, 그렇지 않으면 invisible을 지정하였습니다. index가 증가할 수록 transfrom으로 이동하게 끔 하였습니다.
- 개발 날짜 : 2024.04.21
- [gitHub](https://github.com/NewBean0312/portfolio-v2/commit/654e446)

11. Project 페이지 modal 창

- 프로젝트를 클릭 시, modal 창이 출력되는 데 그 안에 프로젝트의 슬라이드와 내용을 넣고자 하였습니다.
- 처음 projectElement로 프로젝트가 main인지, sub인지 확인 후, 그에 맞는 json 파일을 filter 함수를 사용하여 필터링하였습니다.
- 그 다음 하위 컴포넌트로 슬라이드 배너를 넣고 내용은 json 파일을 이용해 삽입하였습니다.
- 설명란, 브라우저 링크, 기능, gitHub, Skill 등을 넣었습니다.
- 개발 날짜 : 2024.04.28
- [gitHub](https://github.com/NewBean0312/portfolio-v2/commit/264f8bf)

12. Contact 페이지 작업

- 기존에 있던 mail을 전송할 수 있는 section을 없애고, 이름, 전화번호, 이메일을 나타내는 section을 추가하였습니다.
- 개발 날짜 : 2024.05.01
- [gitHub](https://github.com/NewBean0312/portfolio-v2/commit/baf7cd8)

13. 페이지 병합

- 원래는 Router로 페이지를 편하게 이동할 수 있게 작업하였으나, 페이지 당 들어있는 콘텐츠가 많지 않다는 피드백을 받았습니다.
- 그러하여, Router는 삭제한 뒤, 페이지를 병합하고 react-scroll를 추가하여 Link를 통해 해당 section으로 이동하게끔 작업하였습니다.
- 개발 날짜 : 2024.05.03
- [gitHub](https://github.com/NewBean0312/portfolio-v2/commit/07f4ca6)

14. 작업 완료 및 배포

- 작업을 완료한 후, 배포를 어떻게 진행할 까 고민 되었습니다.
- 고민 끝에 vercel에 배포한 뒤, 커스텀 도메인을 구입하여 그 도메인에 연결하였습니다.
