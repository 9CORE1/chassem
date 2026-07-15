# 🚀 차은정 포트폴리오 웹 애플리케이션 (cha-eunjung-portfolio)

이 프로젝트는 **취업진로 컨설팅, 영상콘텐츠 제작, 그리고 IT 기술** 세 가지 분야의 역량을 가진 융합형 스페셜리스트 **차은정**님의 웹 포트폴리오 애플리케이션입니다.

---

## 🛠️ 기술 스택 (Technology Stack)

### 1. 프론트엔드 (Frontend)
- **HTML5 & CSS3**: Vanilla CSS를 활용한 반응형 레이아웃(Flexbox, CSS Grid) 및 글래스모피즘(Glassmorphic) UI. 다크 모드(기본값) 및 라이트 모드 테마 지원.
- **Vanilla JavaScript**: 외부 프레임워크(React, Vue 등)의 의존성 없이 순수 DOM 조작과 상태 관리를 구현하여 가벼운 성능(Lighthouse 최적화 및 빠른 FCP) 보장.
- **폰트 및 아이콘**: Google Fonts (Outfit, Noto Sans KR), FontAwesome v6.4.0.

### 2. 백엔드 (Backend - Local Run Mode)
- **Node.js & Express**: 로컬 환경 구동 및 데이터 저장을 위한 웹 서버.
- **CORS**: 교차 출처 리소스 공유 허용.

### 3. 서드파티 통합 (Third-Party Integrations)
- **EmailJS**: 문의하기 이메일 전송 기능 및 관리자 인증 로직을 처리.

---

## 🌟 핵심 기능 (Core Features)

1. **포트폴리오 카테고리 필터링**:
   - 취업진로 (Career), 영상콘텐츠 (Media), IT 미래기술 (IT) 카테고리별 동적 필터링 제공.
   - 프로젝트 상세 내용 팝업 모달 제공 (텍스트 하이라이트, 사용 기술 스택, 관련 유튜브 영상 임베드 및 재생 구간 설정 기능 포함).

2. **성장 스토리 타임라인**:
   - 경력사항, 학력사항, 자격 및 수료사항, 저작활동 등으로 이력을 동적 분류 및 정렬하여 시각화.

3. **양방향 동기화 관리자 모드 (Admin Mode)**:
   - **이메일 인증 기반 활성화**: Lock 아이콘을 통해 관리자 이메일 검증 후 편집 모드로 전환 가능.
   - **콘텐츠 실시간 추가/수정/삭제**: 웹 화면 상에서 직접 포트폴리오 프로젝트와 타임라인 이력을 관리.
   - **로컬 스토리지 복구**: 작성 중인 내용이 브라우저 `localStorage`에 자동 보관되어 세션 유지 지원.

4. **하이브리드 저장 방식**:
   - **Express 서버 저장 (로컬)**: `/api/save` API를 통해 로컬 `data.json` 파일에 즉시 기록.
   - **GitHub API 연동 저장 (정적 호스팅 용)**: GitHub Personal Access Token(PAT)을 활용하여, 백엔드가 없는 정적 웹 서버(GitHub Pages 등) 환경에서도 GitHub 리포지토리에 직접 `data.json`과 신규 업로드 이미지를 push 및 동기화할 수 있음.

5. **자동 이미지 파일 변환**:
   - 관리자 모드에서 첨부된 Base64 인코딩 형식의 이미지를 백엔드 서버(또는 GitHub API)에서 디코딩하여 `images/project-[id].jpg` 파일로 물리적 저장하고, 데이터 파일의 경로 정보를 상대 경로로 치환.

---

## 📂 파일 구조 및 역할

- [package.json](package.json): 프로젝트 메타데이터 및 백엔드 의존성(`express`, `cors`) 정의.
- [server.js](server.js): Express 서버 구동 파일. 정적 파일 호스팅 및 `/api/save` 데이터/이미지 로컬 저장 처리.
- [data.json](data.json): 웹에 표시되는 모든 포트폴리오, 학력/경력 타임라인, 핵심 역량 정보를 저장하는 단일 데이터 원천(Single Source of Truth).
- [index.html](index.html): 다크 모드 기반의 시네마틱 퍼포먼스 마크업, 관리자용 배너 및 모달 폼 구조 정의.
- [app.js](app.js): 데이터 로드/렌더링, 테마 전환, 모바일 메뉴 제어, 관리자 권한 및 GitHub/로컬 저장 API 동기화 스크립트가 담긴 메인 프론트엔드 로직.
- [styles.css](styles.css): 글래스모피즘, 배경 블러 오브(Blur Orbs) 애니메이션 및 폼 디자인을 다루는 스타일시트.


