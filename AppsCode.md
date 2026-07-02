# Google Apps Script 연동 소스 코드

아래 코드를 복사하여 Google 스프레드시트의 **확장 프로그램 ➡️ Apps Script** 편집기에 붙여넣고 배포하여 사용하세요.

```javascript
function doPost(e) {
  try {
    // 활성화된 스프레드시트의 첫 번째 시트를 가져옵니다.
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // JSON Payload와 일반 parameter 방식 모두 호환되도록 파싱합니다.
    var data;
    if (e.postData && e.postData.type === "application/json") {
      data = JSON.parse(e.postData.contents);
    } else {
      data = e.parameter;
    }
    
    // 데이터 추출 (기본값 설정)
    var timestamp = new Date();
    var name = data.name || "";
    var email = data.email || "";
    var subject = data.subject || "";
    var message = data.message || "";
    
    // 시트 마지막 줄에 행 추가
    sheet.appendRow([timestamp, name, email, subject, message]);
    
    // 성공 응답 전송
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "문의 정보가 성공적으로 시트에 저장되었습니다."
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // 에러 응답 전송
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

## 💡 스프레드시트 시트 헤더 가이드
스프레드시트의 첫 번째 시트 1행(Header)에 아래와 같이 열 항목을 미리 만들어 두어야 데이터가 올바른 위치에 추가됩니다.
* `A1`: **시간 (Timestamp)**
* `B1`: **이름/기업명 (Name)**
* `C1`: **이메일 주소 (Email)**
* `D1`: **문의 주제 (Subject)**
* `E1`: **메시지 내용 (Message)**
