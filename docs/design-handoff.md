# LAMB276 Landing 디자인 인수인계 문서

작성일: 2026-02-20

## 1) 프로젝트 개요

-   프레임워크: React 19 + Vite
-   스타일링: styled-components (컴포넌트별 스타일 동봉)
-   애니메이션: framer-motion
-   라우팅: react-router-dom
-   아이콘: react-icons + SVG 에셋
-   폰트: `Golos Text` (로컬 폰트 로딩)

핵심 특징:

-   전역 디자인 토큰은 `src/styles/theme.js`와 `src/styles/typography.js`에서 관리
-   실제 화면 스타일 대부분은 각 컴포넌트 파일 하단의 styled-components에 직접 작성
-   페이지 3개(`Business`, `GoldPaper`, `Tokenomics`)는 단일 대형 파일 구조

## 2) 폴더 구조 (전체)

```
.  (※ `.git` 제외, `node_modules` 하위 생략)
├─ .gitignore
├─ README.md
├─ docs/
│  └─ design-handoff.md
├─ eslint.config.js
├─ index.html
├─ node_modules/
├─ package-lock.json
├─ package.json
├─ public/
│  ├─ favicon.svg
│  └─ og-image.png
├─ src/
│  ├─ App.jsx
│  ├─ assets/
│  │  ├─ Screenshot 2.png
│  │  ├─ Screenshot.png
│  │  ├─ fonts/
│  │  │  └─ GolosText-VariableFont_wght.ttf
│  │  ├─ icons/
│  │  │  ├─ discord.svg
│  │  │  ├─ lamb276-logo.svg
│  │  │  ├─ twinkle.svg
│  │  │  └─ x.svg
│  │  └─ images/
│  │     ├─ background-earth-light.png
│  │     ├─ background-image.png
│  │     ├─ background-sky-star.png
│  │     ├─ dr-kim.png
│  │     ├─ gold-paper-image.png
│  │     ├─ gradient-bg-light-2.png
│  │     ├─ gradient-bg-light.png
│  │     ├─ hero-lamb.png
│  │     ├─ join-dao-background.png
│  │     ├─ lamb-coin-btm-transper.png
│  │     ├─ lamb-coin.png
│  │     ├─ business/
│  │     │  ├─ founder-1.png
│  │     │  ├─ founder-2.png
│  │     │  ├─ founder-3.png
│  │     │  ├─ founder-dao.png
│  │     │  ├─ founder-influence-1.png
│  │     │  ├─ founder-influence-2.png
│  │     │  ├─ founder-influence-3.png
│  │     │  ├─ founder-influence-4.png
│  │     │  ├─ founder-influence-5.png
│  │     │  ├─ founder-influence-6.png
│  │     │  ├─ founder-influence-7.png
│  │     │  ├─ founder-influence-8.png
│  │     │  ├─ founder-influence-9.png
│  │     │  ├─ index.js
│  │     │  ├─ lamb276-1.png
│  │     │  ├─ lamb276-2.png
│  │     │  ├─ lamb276-3.png
│  │     │  ├─ main-project-mobile.png
│  │     │  ├─ main-project.png
│  │     │  ├─ roadmap-1.png
│  │     │  ├─ roadmap-2.png
│  │     │  ├─ roadmap-3.png
│  │     │  ├─ roadmap-4.png
│  │     │  ├─ roadmap-5.png
│  │     │  ├─ roadmap-6.png
│  │     │  ├─ roadmap-7.png
│  │     │  └─ roadmap-8.png
│  │     ├─ member/
│  │     │  ├─ member-1.png
│  │     │  ├─ member-2.png
│  │     │  ├─ member-3.png
│  │     │  ├─ member-4.png
│  │     │  └─ member-5.png
│  │     └─ partner/
│  │        ├─ cointelegraph-accelerator.svg
│  │        ├─ pudgy-penguins.svg
│  │        └─ world-liberty-financial.svg
│  ├─ components/
│  │  ├─ common/
│  │  │  ├─ Button.jsx
│  │  │  └─ Modal.jsx
│  │  ├─ layout/
│  │  │  ├─ Footer.jsx
│  │  │  ├─ HamburgerMenu.jsx
│  │  │  ├─ Header.jsx
│  │  │  └─ ModalContents.jsx
│  │  └─ sections/
│  │     ├─ DisclaimerSection.jsx
│  │     ├─ HeroSection.jsx
│  │     ├─ JoinDaoSection.jsx
│  │     ├─ LambSection.jsx
│  │     ├─ LogoMarquee.jsx
│  │     ├─ SocialSection.jsx
│  │     ├─ TeamSection.jsx
│  │     └─ VisionSection.jsx
│  ├─ constants/
│  │  ├─ breakpoints.js
│  │  ├─ menu.js
│  │  └─ team.js
│  ├─ context/
│  │  └─ ModalContext.jsx
│  ├─ hooks/  (현재 파일 없음)
│  ├─ index.css
│  ├─ main.jsx
│  ├─ pages/
│  │  ├─ Business.jsx
│  │  ├─ GoldPaper.jsx
│  │  ├─ Home.jsx
│  │  ├─ Leaderboard.jsx
│  │  └─ Tokenomics.jsx
│  ├─ styles/
│  │  ├─ GlobalStyle.js
│  │  ├─ media.js
│  │  ├─ theme.js
│  │  └─ typography.js
│  └─ utils/  (현재 파일 없음)
├─ vercel.json
└─ vite.config.js
```

## 3) 라우팅/레이아웃 구조

기준 파일: `src/App.jsx`

-   전역 래핑 순서:
    -   `ThemeProvider` -> `GlobalStyle` -> `ModalProvider` -> `BrowserRouter`
-   공통 레이아웃:
    -   `Header`는 모든 라우트 상단 고정
    -   `Footer`는 모든 라우트 하단 공통
    -   `Modal`은 전역에서 한 번 렌더링
-   라우트:
    -   `/` -> `Home`
    -   `/leaderboard` -> `Leaderboard`
    -   `/gold-paper` -> `GoldPaper`
    -   `/tokenomics` -> `Tokenomics`
    -   `/business` -> `Business`

## 4) 컴포넌트 분류 및 역할

### 4-1. 페이지 컴포넌트

-   `src/pages/Home.jsx`

    -   홈 랜딩 조립 페이지
    -   현재 섹션 순서: `Hero` -> `Team` -> `Lamb` -> `Vision` -> `Social` -> `Disclaimer`
    -   `LogoMarquee`, `JoinDaoSection`은 import/render 주석 처리 상태

-   `src/pages/Business.jsx`

    -   비즈니스 소개 단일 대형 페이지
    -   Hero, Founder, Founder Influence, DAO, Main Project, Roadmap 등 다수 섹션 포함
    -   파일 길이 큼(스타일 포함 단일 파일)

-   `src/pages/GoldPaper.jsx`

    -   긴 문서형 페이지
    -   Hero, Founder, Principles, Vision/Ethos, Action Plan, $LAMB 섹션 포함
    -   파일 길이 큼(스타일 포함 단일 파일)

-   `src/pages/Tokenomics.jsx`

    -   토크노믹스 문서형 페이지
    -   Allocation Card 반복 구조 중심
    -   파일 길이 중대형(스타일 포함 단일 파일)

-   `src/pages/Leaderboard.jsx`
    -   임시 "Coming Soon" 페이지

### 4-2. 섹션 컴포넌트 (Home 전용 중심)

-   `HeroSection`: 메인 히어로 카드 + 배경 + 램 이미지 + CTA
-   `TeamSection`: 리더 소개 + 파트너 로고 + 멤버 카드 그리드
-   `LambSection`: 코인 이미지 + 설명 + Presale/Campaign 버튼
-   `VisionSection`: 슬로건형 비주얼 카드
-   `SocialSection`: Discord/X 링크
-   `DisclaimerSection`: 리스크/법적 고지
-   `LogoMarquee`: 파트너 로고 무한 마퀴 (현재 비활성)
-   `JoinDaoSection`: Join CTA 섹션 (현재 비활성)

### 4-3. 공통/레이아웃 컴포넌트

-   `Header`
    -   데스크톱 드롭다운 + 모바일 햄버거 오버레이
    -   메뉴 데이터는 `src/constants/menu.js` 참조
-   `HamburgerMenu`
    -   모바일 메뉴 오버레이
-   `Footer`
    -   저작권 한 줄
-   `Button`
    -   `primary`, `secondary`, `glow`, `token` variant 제공
-   `Modal` + `ModalContext`
    -   모달 상태 전역 관리
-   `ModalContents`
    -   About/Contact 등 모달 본문 모음

## 5) 디자인 수정 시 우선 확인 파일

### 전역 룩앤필

-   컬러 토큰: `src/styles/theme.js`
-   폰트/사이즈 토큰: `src/styles/theme.js`, `src/styles/typography.js`
-   반응형 구간: `src/constants/breakpoints.js`, `src/styles/media.js`
-   전역 리셋/기본 폰트: `src/styles/GlobalStyle.js`, `src/index.css`

### 헤더/메뉴/푸터

-   헤더 레이아웃/드롭다운: `src/components/layout/Header.jsx`
-   모바일 메뉴: `src/components/layout/HamburgerMenu.jsx`
-   메뉴 데이터/링크: `src/constants/menu.js`
-   푸터: `src/components/layout/Footer.jsx`

### 홈 본문 섹션

-   섹션 배치: `src/pages/Home.jsx`
-   각 섹션 상세 스타일: `src/components/sections/*.jsx`

### 문서형 페이지(대형 파일)

-   비즈니스: `src/pages/Business.jsx`
-   골드페이퍼: `src/pages/GoldPaper.jsx`
-   토크노믹스: `src/pages/Tokenomics.jsx`

## 6) 데이터/콘텐츠 관리 포인트

-   메뉴 텍스트/링크: `src/constants/menu.js`
-   팀/멤버 텍스트: `src/constants/team.js`
-   비즈니스 페이지 이미지 export 묶음: `src/assets/images/business/index.js`
-   소셜 링크 실사용 위치:
    -   `src/components/sections/SocialSection.jsx`
    -   `src/constants/menu.js` (헤더 드롭다운/모바일 메뉴)

## 7) 현재 동작/주의사항 (인수인계 핵심)

-   `about` 메뉴는 `MENU_ITEMS`에는 존재하지만 Header/Hamburger 렌더에서 필터링되어 실제 메뉴에 노출되지 않음
-   `contact`는 별도 페이지가 아니라 모달 오픈 방식으로 처리됨
-   `social`은 페이지 라우트가 아니라 하위 외부 링크(X/Discord) 드롭다운 중심
-   Home에서 `LogoMarquee`, `JoinDaoSection`은 현재 비활성(주석 처리)
-   모달은 오버레이 클릭 닫기 로직이 비활성 처리되어 있음

## 8) 빠른 작업 가이드

-   색감/브랜드 톤 변경:
    -   `src/styles/theme.js`에서 `colors` 수정 후 섹션별 대비 확인
-   타이포 통일:
    -   `src/styles/typography.js`와 `theme.fontSizes`를 먼저 맞춘 뒤 섹션 개별 폰트 보정
-   헤더 메뉴 구조 변경:
    -   `src/constants/menu.js` 수정 후 `Header.jsx`, `HamburgerMenu.jsx` 동작 확인
-   홈 섹션 순서 변경:
    -   `src/pages/Home.jsx`에서 섹션 순서만 재배치
-   대형 문서 페이지 디자인 변경:
    -   각 페이지 파일 내부 `styled` 블록에서 섹션 단위로 수정
