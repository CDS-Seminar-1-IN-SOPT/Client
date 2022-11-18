# IN-SOPT 합동 세미나 1조 Client-Web

## 👨‍💻 팀원 정보
<table>
    <tr align="center">
        <td style="min-width: 150px;">
            <a href="https://github.com/namjunkim12">
              <img src="https://github.com/namjunkim12.png" width="100">
              <br />
              <b>김남준 (namjunkim12)</b>
            </a> 
        </td>
        <td style="min-width: 150px;">
            <a href="https://github.com/hayounSong">
              <img src="https://github.com/hayounSong.png" width="100">
              <br />
              <b>송하윤 (hayounSong)</b>
            </a>
        </td>
        <td style="min-width: 150px;">
            <a href="https://github.com/woogisea">
              <img src="https://github.com/woogisea.png" width="100">
              <br />
              <b>정재욱 (woogisea)</b>
            </a> 
        </td>
    </tr>
    <tr align="center">
        <td>
            👦🏻 <br />
            Web FE
        </td>
        <td>
            👼 <br />
            Web FE
        </td>
        <td>
            👶 <br />
           Web FE
        </td>
    </tr>
</table>

## 🤝 역할 분배

<table>
    <tr align="center">
        <td>
            👶 김남준 👶
        </td>
        <td>
           프로젝트 초기세팅 및 발표 자료 준비<br />
           공연 목록, 상세정보 페이지 개발 <br />
           서버 연결 <br />
        </td>
    </tr>
    <tr align="center">
        <td>
            👶 송하윤 👶
        </td>
        <td>
           메인페이지 개발<br />
           슬라이더 라이브러리 커스텀 <br />
           서버 연결<br />
        </td>
    </tr>
    <tr align="center">
        <td>
            👶 정재욱 👶
        </td>
        <td>
           날짜별 회차 조회 페이지 개발<br />
           캘린더 라이브러리 커스텀 <br />
           서버 연결<br />
        </td>
    </tr>
</table>

### 😜모임 사진

<img width="1018" alt="스크린샷 2022-11-18 오후 3 15 24" src="https://user-images.githubusercontent.com/69416561/202725450-89849a58-ee9c-414f-a7af-35680c8dd346.png">

**>,<**


## 📝 우리의 프로젝트는 ? 

![image](https://user-images.githubusercontent.com/69416561/202717203-e683634a-4c2d-45c3-ae4e-cf5937394d19.png)

- 디자이너분들께서 더 나은 UI/UX를 고민하여 개선한 Yes24 티켓 공연 웹사이트의 모바일뷰 페이지를 구현합니다. [노션 바로가기](https://www.notion.so/1-47c3f470c2334c5da9ea447c09ef075d)

## 📑 페이지 구성

- 4개의 페이지로 구성됩니다.
- 공통 : 헤더 컴포넌트의 뒤로가기 버튼 클릭시 이전 페이지로 이동합니다.
- 뷰를 작업 단위로 나누어, 각자 담당한 뷰를 작업합니다.

### 🏠 HomePage

<img width="256" alt="image" src="https://user-images.githubusercontent.com/69416561/202718967-ba74baf8-252e-4d62-b7fb-c2a23a26e006.png">

- 서비스의 메인 페이지입니다.
- 헤당 페이지에서는 마크업을 제외한 **실시간 티켓 랭킹 페이지 이동, 이미지 슬라이더 기능을 중점으로 구현합니다.**
- 공연 이미지를 클릭하면 해당 공연의 상세 정보 페이지, 실시간 티켓 랭킹의 화살표 버튼을 클릭하면 랭킹별 공연목록 페이지로 이동합니다.
- 담당자 : **하윤**

### 🏅 Ticket_Ranking

<img width="300" alt="image" src="https://user-images.githubusercontent.com/69416561/202720873-a149a62e-1cb5-495e-85a3-5442fb05d119.png">

- 공연 카테고리 별로 순위를 조회할 수 있는 페이지입니다.
- 이번 합동세미나 구현 기간동안에는 **공연 선택시 해당 공연의 상세정보 페이지로 이동, 카테고리별 공연 필터링**을 중점적으로 구현합니다.
- 담당자 : **남준**

### 📝 Feed

<img width="357" alt="image" src="https://user-images.githubusercontent.com/69416561/202722530-5e773351-84fa-4216-83a8-c344e0713acb.png">

- 선택한 공연의 상세정보를 조회하는 페이지입니다.
- 해당 페이지에서는 마크업 스타일링 이외에 **일정 단위 이상 스크롤시 네비게이션바가 상단에 고정되고, 네비게이션 바의 각 항목 선택시 해당 항목으로 스크롤이 이동되는 기능**을 중점적으로 구현합니다.
- 쿠폰 발급, 좋아요 버튼 클릭시 스타일링이 변경되며, 예매하기 버튼 클릭시 해당공연의 날짜별 회차조회 페이지로 이동합니다. 
- 담당자 : **남준**

### 📅 Date_off

<img width="257" alt="image" src="https://user-images.githubusercontent.com/69416561/202723816-87f5b42a-57a4-4981-b6c0-287b12015289.png">

- 선택한 공연의 날짜별 회차 정보를 조회하는 컴포넌트입니다.
- 해당 컴포넌트에서는 **캘린더 커스텀 및 디자인**에 중점을 두고 구현합니다.
- 날짜를 선택시 포커스 효과를 주고, 해당하는 날짜의 회차 정보를 받아옵니다.
- 담당자 :**재욱**



## 🤙 초기 세팅 및 컨벤션

### 📁 초기세팅 디렉토리 구조
```
📦src
 ┣ 📂assets //정적 이미지 파일
 ┃ ┣ 📂Icons
 ┃ ┗ 📂buttons
 ┣ 📂components 
 ┃ ┣ 📂common // 모든 컴포넌트에서 공통적으로 저장하는
 ┣ 📂constants // 공통적으로 사용하는 상수데이터를 저장합니다.
 ┣ 📂cores // 커스텀훅, 라우링 관련 파일을 저장합니다.
 ┃ ┣ 📂hooks
 ┃ ┃ ┗ 📜useAPI.js
 ┃ ┣ 📜api.js
 ┃ ┣ 📜router.jsx
 ┃ ┗ 📜useInput.js
 ┣ 📂mocks // 모킹 API의 데이터를 저장합니다. 
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📂data
 ┃ ┃ ┃ ┣ 📜allShowDataByRanking.js
 ┃ ┃ ┃ ┣ 📜homeShowDataByGenre.js
 ┃ ┃ ┃ ┣ 📜homeTicketData.js
 ┃ ┃ ┃ ┣ 📜showDetailData.js
 ┃ ┃ ┃ ┗ 📜showScheduleData.js
 ┃ ┣ 📜browser.js
 ┃ ┗ 📜handlers.js
 ┣ 📂pages
 ┣ 📂styles // 공통 스타일을 지정합니다. 
 ┃ ┣ 📜globalStyle.js
 ┃ ┣ 📜mediaQuery.js
 ┃ ┗ 📜theme.js
 ┣ 📂utils 
 ┣ 📜App.jsx
 ┗ 📜index.jsx
```

### 📦 Package.json
```json
{
  "name": "cds",
  "version": "0.1.0",
  "private": true,
  "proxy": "http://ec2-3-39-22-134.ap-northeast-2.compute.amazonaws.com:8001",
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^13.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.27.2",
    "react": "^18.1.0",
    "react-dom": "^18.1.0",
    "react-responsive": "^9.0.0-beta.8",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "styled-components": "^5.3.5",
    "styled-reset": "^4.3.4",
    "web-vitals": "^2.1.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "eslint": "^8.15.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-prettier": "^4.0.0",
    "msw": "^0.48.2",
    "prettier": "^2.6.2"
  },
  "msw": {
    "workerDirectory": "public"
  }
}
```
### 👨🏻‍💻커밋 컨벤션

| Commit type | Emoji | Situation |
| --- | --- | --- |
| Initial commit | :tada: :tada: | 따단~~~~~ |
| feat | :sparkles: :sparkles: | 새로운 기능, UI 등 |
| bug | :bug: :bug: | 버그 수정/리포트 |
| Documentation | :memo: :memo: | 문서화 |
| refactor | :hammer: :hammer: | 구조 변경, 리팩토링 |
| css | 🎨 : :art: | css 관련 |
| remove or edit | :fire: :fire: | 파일 삭제 및 수정 |
| fix lint | :shirt: :shirt: | eslint 에러 수정 |
| chore | :gear:  :gear: | 기능상 변경 없는 수정 |
| init | :construction:  :construction: | 브랜치 첫 커밋 |

### 👨🏻‍💻코드 컨벤션

- **변수, 컴포넌트 명명법(camelCase, PascalCase)**
    - 컴포넌트 명명 : UpperCamelCase
    - 컴포넌트 이외의 변수:  camelCase
    - 상수 처리 : const 대문자
    - 직관적인 변수명을 사용합시다.
- **함수 표현식 / 선언문 / 화살표 함수**
    - 컴포넌트 :  함수 선언문
    - 일반 함수 정의시 : 화살표 함수
    
```jsx
//컴포넌트 export 예시

import React from 'react';
import styled from 'styled-components';

function PeriodView() {
  return (
    <Styled.Root>
      <h1>기간 조회 컴포넌트 입니다.</h1>
    </Styled.Root>
  );
}

export default PeriodView;

const Styled = {
  Root: styled.div``,
};

// 컴포넌트 선언 후 아래에서 Export 해줍니다. 
```

- **함수 컨벤션**
- 컴포넌트는 함수 선언문, 컴포넌트 이외 모든 함수는 화살표 함수로 작성
- Indent가 2 이하로 될 수 있도록, 하나의 함수 당 하나의 역할만 담당할 수 있도록 설계

```jsx
const handleSomething = () => {} 
```
아래의 아티클을 살펴보고, 적용할 수 있는 부분 고민해보기 ! 

[clean-code-typescript](https://738.github.io/clean-code-typescript/#%ED%81%B4%EB%9E%98%EC%8A%A4)

- **스타일 컨벤션**
- 각 뷰의 명칭
    - 피그마에서 정의된 뷰의 명칭을 사용합니다.
- 스타일드 컴포넌트 컨벤션

```jsx
<Styled.Root />

const Styled = {

Root : styled.section``,

Main : styled.Main``,

}

// 단위는 rem 사용
```
- 아이콘 확장자 svg

### 👨🏻‍💻브랜치 컨벤션

#### 순서

1. 이슈 생성, 템플릿에 따라 이슈 작성
2. 브랜치 생성 및 작업 `git checkout -b (브랜치명)`
- 브랜치 명 :`feat/#이슈번호`, `fix/#이슈번호`
3. PR 생성, 템플릿에 알맞게 작성
4. PR-issue 연동하여 머지시 이슈가 종료되도록
5. approve 2개 받으면 머지

<img width="531" alt="image" src="https://user-images.githubusercontent.com/69416561/202736051-f49eeaba-f65a-43d2-9333-5780a9e0f2a5.png">


#### 규칙

1. pr이 올라오면 코드리뷰 부터 무조건 해주기
2. 어프로브 말고 리뷰는 무조건 합시다!
3. 1 Action per 1 Commit, 1 Task per 1 PR

![image](https://user-images.githubusercontent.com/69416561/202736563-2b9fee52-a2e3-4d44-86b3-063721206186.png)


### 우리 팀의 강점

### 📝 회의록 작성, 컨벤션 사항, 논의사항, 진행 사항들을 기록

<img width="784" alt="스크린샷 2022-11-19 오전 12 13 08" src="https://user-images.githubusercontent.com/69416561/202737565-699c9ea4-2341-4b99-98a3-a5cc4a3ec8b4.png">
<img width="770" alt="스크린샷 2022-11-19 오전 12 13 36" src="https://user-images.githubusercontent.com/69416561/202737595-03bdd92f-efb9-49ab-8a53-6ac061976a02.png">

- 프로젝트 진행 전 컨벤션 사항, 논의 사항들을 문서화하여 정리하고, 프로젝트 진행시 참고할 수 있도록 하였습니다. 


### 🗽 기술스택

- 슬라이더 라이브러리, 캘린더 라이브러리 등을 커스텀하고 기능구현에 활용하였습니다.
- 모킹API, useAPI 커스텀 훅을 활용하여 API 통신시 생산성을 높였습니다.
- 회고예정(KPT회고 방식으로 진행하기로 했고, 과제 제출 종료 후 바로 모여서 회고 들어갑니다!!)

### 💪 챌린징 요소

- 남준 : 평소에 서버와의 협업을 주도적으로 해본 경험이 없어서, 가공하기 편하게 데이터를 전달받는게 얼마나 중요한지 잘 못느꼈었는데, 명세서의 데이터가 형식에 맞지 않게 제공됐을 경우 가공하는 과정이 매우 귀찮았고, 이때문에 간단한 기능을 어렵게 구현하는 경험을 겪다보니 서버와의 소통과 협업이 얼마나 중요한지 체감하였습니다.

- 하윤 : React에서 Slider 라이브러리를 사용하면서, 기존의 Slider 라이브러리를 사용하는게 아닌, 그 Slider를 디자인에 맞게 커스텀 하는 과정이 까다로웠고, 기존 과제에서 사용했던 msw를 넘어서, 실제 API 명세서를 바탕으로 API 모킹을 해보는 과정에 도전하게 되었다. 평소에 변수 명 부터 함수 선언 방식까지 중구난방식으로 코드를 작성하는 나쁜 버릇이 있었는데, camelCase, 컴포넌트와 함수 정의시의 함수 컨벤션 차이등 ,클린코드 및 협업을 위한 코드를 작성하는 과정이 도전으로 느껴졌다.

- 재욱 : 많이 사용되는 Calendar 라이브러리를 찾아봤지만(react-calendar, react-Datepicker, react-day-picker) 디자인에 따라서 커스텀, API를 받아와서 다시 달력에 뿌려주는 부분을 구현하기가 너무 까다롭고 손수 하나하나 만드는 과정이 정말 챌린징이였습니다.


