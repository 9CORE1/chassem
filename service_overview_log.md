# 포트폴리오 & CMS 웹서비스 전체 사양 및 설정 로그

* **작성 일시:** 2026-07-16
* **프로젝트명:** chassem (개인 포트폴리오 및 수강/CMS 관리 서비스)
* **저장 위치:** [service_overview_log.md](file:///c:/Users/HRDPRO/Documents/profile/service_overview_log.md)

---

## 1. 서비스 개요 (Service Overview)
본 서비스는 반응형 웹 기반의 개인 포트폴리오/경력 관리 시스템입니다. 일반 방문자에게는 핵심 역량, 타임라인(학력/경력), 프로젝트 실적을 세련된 UI로 보여주고, 관리자에게는 코드 수정 없이 데이터를 실시간 수정하고 동기화할 수 있는 **CMS(Content Management System)**를 제공합니다.

---

## 2. 주요 기능 사양 (Key Features)

### 1) 동적 UI 및 콘텐츠 렌더링 (`index.html`, `styles.css`, `app.js`)
* **핵심 역량 (Competencies Grid):** 카테고리별 역량 및 스택 렌더링.
* **포트폴리오 카드 (Portfolio Grid):** 필터링(전체/취업진로/IT미래기술 등) 및 페이징, 그리드/리스트 뷰 전환 기능 지원.
* **경력/학력 타임라인 (Journey Timeline):** 시간 역순(최신순) 정렬 및 연도별 렌더링.
* **공지 팝업 모달 (Notice Popup):** 접속 시 설정된 팝업 표시 및 "오늘 하루 보지 않기" 기능 구현.

### 2) 관리자 CMS 모드 (Admin CMS)
* **보안 인증:** `allowedEmails` 목록에 있는 이메일로 로그인 시도 시, EmailJS를 통해 **6자리 임의 인증번호(3분 타이머 제한)**를 발송하고 인증 성공 시 관리자 권한을 활성화합니다.
* **실시간 데이터 편집:** 핵심 역량, 프로젝트 정보, 타임라인 카드를 브라우저 상에서 즉시 수정/삭제/신규 등록이 가능합니다.
* **자동 백업:** 데이터 수정 발생 시 브라우저 로컬 스토리지(`localStorage`)에 즉시 임시 저장되어 미동기화 소실을 방지합니다.

### 3) GitHub API 원격 동기화 (GitHub Integration via PAT)
* 관리자가 입력한 **GitHub Personal Access Token (PAT)**과 저장소 정보(Owner, Repo, Branch, Path)를 활용합니다.
* 브라우저 상에서 원격 GitHub API를 직접 호출하여, 업로드한 신규 이미지 파일(`images/` 폴더) 및 수정된 최신 데이터 파일(`data.json`)을 브라우저에서 바로 저장소에 **Git Commit & Push** 합니다. GitHub Pages 배포 시 1~2분 내로 실시간 반영됩니다.

### 4) 문의하기 연동 (Contact Form)
* **구글 스프레드시트 연동:** Google Apps Script Web App URL (`APPS_SCRIPT_URL`)로 폼 데이터를 POST 전송하여 구글 시트에 실시간 기록합니다.
* **자동 안내 메일 전송 (EmailJS):** 문의 완료 성공 시, 폼에 작성했던 작성자의 이메일 주소로 자동 접수 확인 안내 메일을 발송합니다.

---

## 3. 외부 API 연동 설정 정보 (Integrations)

### 1) EmailJS 설정 (`EMAILJS_CONFIG`)
* **Public Key:** `aXXhO0m1M7H5nSE-P`
* **Service ID:** `service_d002zti`
* **템플릿 분리 구성:**
  * **`templateId` (관리자 인증 메일용):** `template_kayxrhq` (인증번호 변수: `{{auth_code}}`)
  * **`contactTemplateId` (제출 완료 안내용):** `template_r1e9i3d` (매핑 변수: `{{name}}`, `{{to_email}}`, `{{phone}}`, `{{subject}}`, `{{message}}`)

### 2) Google Apps Script Web App (`APPS_SCRIPT_URL`)
* **URL:** `https://script.google.com/macros/s/AKfycbwvvjcBVZLoeAoU3Np9GUkkAHvW5MSD4BHaXPxUg3yGw9wIdVEsT7Lfug47R6heL_tx/exec`

---

## 4. 프로젝트 파일 구조 (File Directory)

* **[index.html](file:///c:/Users/HRDPRO/Documents/profile/index.html):** 메인 랜딩 페이지 마크업
* **[app.js](file:///c:/Users/HRDPRO/Documents/profile/app.js):** 프론트엔드 코어 비즈니스 로직, 데이터 바인딩, CMS 핸들러
* **[styles.css](file:///c:/Users/HRDPRO/Documents/profile/styles.css):** Glassmorphism 스타일 및 다크/라이트 테마 전반 CSS
* **[data.json](file:///c:/Users/HRDPRO/Documents/profile/data.json):** 포트폴리오, 경력, 팝업 설정 등의 동적 데이터 보관소
* **[linktree.html](file:///c:/Users/HRDPRO/Documents/profile/linktree.html):** 주요 SNS 및 링크 바로가기 간편 웹페이지
* **[project-management-admin.html](file:///c:/Users/HRDPRO/Documents/profile/project-management-admin.html):** 강좌 정보 및 수강생 정보 관리자 대시보드
* **[server.js](file:///c:/Users/HRDPRO/Documents/profile/server.js):** 로컬 저장 및 파일 동기화를 위한 Node.js Express 백엔드 서버

---

## 5. 데이터 모델 스키마 (`data.json`)
```json
{
  "portfolioData": [
    {
      "id": "프로젝트 고유ID",
      "category": "카테고리 (career/it/media/writing)",
      "title": "프로젝트 제목",
      "period": "진행 기간",
      "year": "연도",
      "summary": "카드 요약문",
      "description": "상세 팝업 내 설명",
      "role": "수행 역할",
      "highlights": ["상세 성과/성과 수치 배열"],
      "techStack": ["사용 기술 배열"],
      "imageUrl": "대표 이미지 경로 (Base64 혹은 images/ 파일경로)",
      "imageUrl2": "서브 이미지 경로",
      "youtubeUrl": "유튜브 링크",
      "googleDriveUrl": "구글드라이브 영상 링크"
    }
  ],
  "journeyData": [
    {
      "id": "타임라인 고유ID",
      "category": "분류 (education/career/media/writing)",
      "period": "기간",
      "title": "타임라인 제목",
      "institution": "소속 기관/학교명",
      "description": "상세 수행 내용"
    }
  ],
  "competenciesData": [
    {
      "id": "역량 고유ID",
      "category": "분류 (career/it/writing)",
      "title": "대분류명",
      "icon": "FontAwesome 아이콘 클래스",
      "skills": ["세부 역량/기술 배열"]
    }
  ],
  "popupConfig": {
    "enabled": "팝업 활성화 여부 (true/false)",
    "title": "팝업 제목",
    "content": "팝업 공지 본문",
    "imageUrl": "팝업 우측/중앙 이미지",
    "linkUrl": "팝업 클릭시 바로가기 링크"
  }
}
```
