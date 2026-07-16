# EmailJS 설정 변경 및 기능 연동 작업 로그

* **작성 일시:** 2026-07-16
* **대상 파일:** 
  * [app.js](file:///c:/Users/HRDPRO/Documents/profile/app.js) (메인 소스코드)
  * [chassem-main/app.js](file:///c:/Users/HRDPRO/Documents/profile/temp_extract/chassem-main/app.js) (임시 경로 소스코드)

---

## 1. 주요 변경 내역

### 1) 관리자 인증번호 템플릿 변수명 변경
* **내용:** 관리자 로그인 인증 요청 시 EmailJS 템플릿에 전달되는 인증번호 변수의 Key를 기존 `code`에서 **`auth_code`**로 수정하여 변수 일치 문제를 해결했습니다.
* **적용 코드:**
  ```javascript
  const templateParams = {
      to_email: enteredEmail,
      to_name: '관리자',
      auth_code: code // 'code: code'에서 변경
  };
  ```

### 2) 문의하기(Contact Form) 제출 완료 메일 자동 발송 기능 추가
* **내용:** 사용자가 포트폴리오 사이트의 'Get In Touch' 영역에서 문의 내용을 작성하고 메시지 전송에 성공하면, 입력한 사용자 본인의 이메일 주소로 자동 접수 완료 알림 메일이 발송되는 로직을 연동했습니다.
* **발송 템플릿 파라미터 (EmailJS 대시보드 템플릿에서 `{{변수명}}` 형태로 사용 가능):**
  * `{{to_email}}` (혹은 `{{email}}`): 수신자 이메일 (폼 입력값)
  * `{{to_name}}` (혹은 `{{name}}`): 수신자 이름 (폼 입력값)
  * `{{phone}}`: 연락처
  * `{{subject}}`: 문의 제목
  * `{{message}}`: 문의 내용 본문

### 3) EmailJS 템플릿 ID 분리 설정
* **내용:** 관리자 로그인용 템플릿과 문의 제출 완료 알림용 템플릿이 섞이지 않도록 `EMAILJS_CONFIG` 설정을 이원화하고, 메인 `app.js`에 실제 템플릿 ID를 정상 매핑하여 EmailJS History 누락 문제를 해결했습니다.

---

## 2. 최종 EmailJS 설정 정보 (`EMAILJS_CONFIG`)

```javascript
const EMAILJS_CONFIG = {
    publicKey: 'aXXhO0m1M7H5nSE-P',         // EmailJS Public Key
    serviceId: 'service_d002zti',           // EmailJS Service ID (발송 이메일 서비스)
    templateId: 'template_kayxrhq',        // EmailJS Template ID (관리자 로그인 인증 메일용)
    contactTemplateId: 'template_r1e9i3d', // EmailJS Template ID (제출 완료 안내 메일용)
    allowedEmails: ['teacha99@gmail.com', 'jjung9935@naver.com'] // 관리자 허용 이메일
};
```
