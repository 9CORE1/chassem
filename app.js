// ==========================================================================
// EmailJS Configuration for Admin Verification
// ==========================================================================
const EMAILJS_CONFIG = {
    publicKey: 'aXXhO0m1M7H5nSE-P',         // EmailJS Public Key (e.g. 'your_public_key')
    serviceId: 'service_d002zti',         // EmailJS Service ID (e.g. 'service_xxxxxxx')
    templateId: 'template_r1e9i3d',        // EmailJS Template ID (e.g. 'template_xxxxxxx')
    allowedEmails: ['teacha99@gmail.com', 'jjung9935@naver.com'] // Authorized admin emails
};

// ==========================================================================
// Portfolio & Experience Data Definition
// ==========================================================================


const defaultPortfolioData = [
    {
        id: 'career-1',
        category: 'career',
        title: '청년인재 커리어 빌드업 프로그램 컨설턴트',
        period: '2025.03 - 2026.02',
        year: '2025',
        summary: '대학 청년들을 대상으로 맞춤형 커리어 로드맵을 설계하고, 자기소개서 첨삭 및 면접 코칭을 전담하여 실질적인 취업률 향상에 기여했습니다.',
        description: '대학 청년들의 취업난을 해소하기 위해 마련된 정부 지원 대학 연계 사업에서 전담 취업 컨설턴트로 활동했습니다. 개인의 역량과 희망 분야를 객과적으로 분석하여 맞춤형 목표를 도출하고 실행 전략을 제공했습니다.',
        role: '주요 역량 분석 및 단계별 커리어 로드맵 설계, 이력서/자기소개서 정밀 클리닉, AI 및 대면 면접 시뮬레이션 및 피드백 제공, 취업 동향 트렌드 강의 운영.',
        highlights: [
            '1:1 전담 관리 학생 120명 중 85%의 대기업 및 우수 중견기업 서류 전형 합격률 달성',
            '참여자 설문 조사 기준 전문 상담 만족도 점수 4.9 / 5.0 획득',
            '모의 면접 프로세스를 체계화하여 학생들의 실전 면접 불안감 지수 평균 40% 감소 유도',
            '비대면 면접 대비용 1인 피드백 가이드북 자체 제작 및 배포 (누적 다운로드 500건+)'
        ],
        techStack: ['커리어 컨설팅', '직무 역량 분석', '강의/스피치', '취업 진단 Tool'],
        accentColor: 'var(--color-career-end)',
        accentBg: 'rgba(79, 172, 254, 0.1)',
        accentBorder: 'rgba(79, 172, 254, 0.2)',
        icon: 'fa-graduation-cap'
    },
    {
        id: 'career-2',
        category: 'career',
        title: '커리어 코칭 및 청소년 진로 지도 강사',
        period: '2024.05 - 현재',
        year: '2024',
        summary: '진로 탐색 시기의 고등학생 및 대학 새내기들을 위해 동기부여 강연과 미래 직업 트렌드를 소개하며 스스로 커리어 로드맵을 구축할 수 있도록 도왔습니다.',
        description: '다변화하는 디지털 시대 속 직업의 패러다임 변화를 쉽게 설명하고, 학생들이 자기주도적으로 미래를 준비할 수 있도록 돕는 진로 탐색 교육 프로그램입니다. 이론에 치우치지 않고 워크숍과 카드 게임 등을 활용한 참여형 교육을 기획했습니다.',
        role: '진로 설계 강연 기획 및 연사 참여, MBTI 및 홀랜드 적성 검사 기반 직무 매핑 워크숍 진행, 직업 트렌드 교재 공동 개발.',
        highlights: [
            '수도권 및 강원 지역 15개교 대상 총 30회 이상의 진로 탐색 특강 진행 (수혜 학생 1,500명 이상)',
            '기존 텍스트 위주 교재를 인포그래픽 기반의 진로 맞춤형 실습 워크북으로 개편하여 수업 집중도 대폭 개선',
            '실제 강연 만족도 조사 우수 강사 2회 선정',
            '1:N 그룹 멘토링 프로그램 설계를 통해 소외 학생들의 진로 설계 자신감 점수 향상'
        ],
        techStack: ['진로 설계 강연', '워크숍 기획', 'Holland 적성 분석', '교재 개발'],
        accentColor: 'var(--color-career-end)',
        accentBg: 'rgba(79, 172, 254, 0.1)',
        accentBorder: 'rgba(79, 172, 254, 0.2)',
        icon: 'fa-graduation-cap'
    },
    {
        id: 'career-3',
        category: 'career',
        title: '고용노동부 청년고용정책 서포터즈 팀장',
        period: '2023.03 - 2023.11',
        year: '2023',
        summary: '정부의 청년 일자리 지원 정책을 직접 스터디하고, 청년 눈높이에 맞는 카드뉴스 및 오프라인 캠페인을 기획하여 정책 수혜 장벽을 낮추었습니다.',
        description: '청년들이 혜택을 놓치기 쉬운 다양한 국가 고용 지원 정책(청년도전지원사업, 청년내일채움공제 등)을 조사하여, 이를 효과적으로 도달시키기 위한 온/오프라인 홍보 서포터즈 활동의 팀장 역할을 수행했습니다.',
        role: '서포터즈 팀 기획 리딩, 고용센터 연계 오프라인 홍보 부스 운영 기획, 정책 소개 콘텐츠 스토리보딩, 정기 아이디어 회의 주재.',
        highlights: [
            '어려운 정책 용어를 실생활툰 형식의 카드뉴스로 변형하여 인스타그램 공식 채널 업로드 (최고 조회수 3만회 달성)',
            '오프라인 정책 퀴즈 쇼 및 상담 부스 기획을 통해 500명 이상의 지역 대학생 현장 참여 유치',
            '서포터즈 활동 평가 전국 최우수 팀 선정 및 고용노동부 장관상 수상',
            '활동 종료 시 청년 맞춤형 정책 도달 프로세스 개선 제안서 고용센터에 직접 전달'
        ],
        techStack: ['정책 분석', '콘텐츠 마케팅', '오프라인 캠페인', '프로젝트 팀빌딩'],
        accentColor: 'var(--color-career-end)',
        accentBg: 'rgba(79, 172, 254, 0.1)',
        accentBorder: 'rgba(79, 172, 254, 0.2)',
        icon: 'fa-graduation-cap'
    },
    {
        id: 'media-1',
        category: 'media',
        title: '지식정보 유튜브 채널 \'커리어로그\' 기획 및 운영',
        period: '2024.01 - 현재',
        year: '2024',
        summary: '취업 꿀팁, 영상 편집 노하우, IT 도구 사용법 등을 친절하게 다루는 1인 미디어 채널을 운영하며 기획부터 촬영, 편집, 분석의 전 과정을 직접 리딩했습니다.',
        description: '다양한 직무 지식과 실무 스킬을 아카이빙하는 유튜브 채널을 개설하여 1인 크리에이터로서의 역량을 다졌습니다. 시청자 유지를 위한 알고리즘 분석과 SEO 기반의 썸네일/타이틀 최적화를 학습했습니다.',
        role: '채널 아이덴티티 수립, 영상 시나리오 작성 및 화면 콘셉트 구상, 촬영(카메라/조명/마이크 세팅) 및 자막/모션그래픽/색보정 편집, 유튜브 데이터 스튜디오 대시보드 기반 시청 지속율 분석.',
        highlights: [
            '채널 개설 후 1년 만에 순수 구독자 1.5만 명 달성 및 수익 창출 조건 충족',
            '유튜브 쇼츠 및 롱폼 영상 포함 누적 조회수 120만 회 돌파',
            '직무 면접 가이드 롱폼 영상의 경우 단일 조회수 35만 회 달성, 알고리즘 유입 분석 적용',
            'Premiere Pro 및 After Effects 템플릿 패키지를 직접 제작하여 시청자 대상 무료 배포 이벤트 진행 (이메일 구독자 1,200명 유치)'
        ],
        techStack: ['유튜브 운영', 'Premiere Pro', 'After Effects', '시나리오 작법', '썸네일 디자인'],
        accentColor: 'var(--color-media-end)',
        accentBg: 'rgba(248, 87, 166, 0.1)',
        accentBorder: 'rgba(248, 87, 166, 0.2)',
        icon: 'fa-video'
    },
    {
        id: 'media-2',
        category: 'media',
        title: '로컬 청년 창업 인터뷰 다큐멘터리 제작 PD',
        period: '2023.07 - 2023.12',
        year: '2023',
        summary: '지역 청년 창업가들의 도전과 성장을 다룬 15분 분량의 휴먼 다큐멘터리를 연출하고 촬영 및 영상 편집 전 과정을 주도했습니다.',
        description: '지역 문화 재단의 미디어 공모전에 당선되어 제작비를 지원받아 진행된 청년 로컬 크리에이터 아카이빙 다큐멘터리입니다. 창업가 3인의 생생한 인터뷰와 시네마틱한 B-roll 컷을 결합하여 몰입감을 높였습니다.',
        role: '기획안 및 시나리오 연출, 출연자 섭외 및 인터뷰 스크립트 작성, 메인 카메라 촬영(Sony A7S3) 및 3점 조명 셋업, 사운드 믹싱 및 서정적 색보정(DLog -> REC709).',
        highlights: [
            '지역 문화 재단 미디어 지원 부문 최우수작 선정 및 상패 수여',
            '지역 독립영화관 및 메가박스 특별 세션에서 다큐멘터리 공식 초청 상영',
            '스토리라인 구성을 통해 단순 인터뷰 방식을 탈피, 감성적이고 몰입감 높은 연출력으로 영상 집중도 점수 향상',
            '유튜브 등 디지털 플랫폼 릴리즈 후 누적 2만 뷰 기록, 지역 청년 커뮤니티 활성화 기여'
        ],
        techStack: ['시네마토그래피', '다큐멘터리 연출', '인터뷰 촬영', '다빈치 리졸브', '색보정'],
        accentColor: 'var(--color-media-end)',
        accentBg: 'rgba(248, 87, 166, 0.1)',
        accentBorder: 'rgba(248, 87, 166, 0.2)',
        icon: 'fa-video'
    },
    {
        id: 'media-3',
        category: 'media',
        title: '모교 공식 홍보 캠페인 영상 제작 프로젝트',
        period: '2022.09 - 2022.12',
        year: '2022',
        summary: '모교 대학 홍보실과 협업하여, 예비 신입생을 위한 트렌디하고 감각적인 대학 소개 영상을 기획 및 연출하였습니다.',
        description: '기존의 딱딱하고 정형화된 대학 공식 홍보 영상에서 벗어나, 20대 대학생의 활기찬 일상을 브이로그와 시네마틱 스타일을 결합하여 풀어낸 뉴트로 감성 대학 홍보 영상입니다.',
        role: '아이디어 피칭 및 총 연출, 시나리오 작성 및 스토리보드 스케치, 모션 그래픽 타이틀 제작 및 화면 트랜지션 디자인.',
        highlights: [
            '대학 공식 유튜브 채널 메인 영상 업로드 후 조회수 5만 회 이상 기록',
            '해당 연도 대학 입학 설명회 및 정시 설명회 메인 스크린 공식 오프닝 영상으로 채택',
            'After Effects 모션 그래픽을 활용하여 대학의 강점(장학제도, 교환학생)을 타이포그래피로 시각화해 정보 전달력 제고',
            '학내 재학생 모델 5인과의 활발한 소통을 통해 2일이라는 한정된 촬영 타임라인 준수'
        ],
        techStack: ['영상 연출', '모션 그래픽', 'Premiere Pro', 'After Effects', '스토리보드'],
        accentColor: 'var(--color-media-end)',
        accentBg: 'rgba(248, 87, 166, 0.1)',
        accentBorder: 'rgba(248, 87, 166, 0.2)',
        icon: 'fa-video'
    },
    {
        id: 'it-1',
        category: 'it',
        title: '사용자 맞춤형 커리어 로드맵 추천 서비스 \'PathFinder\'',
        period: '2025.09 - 2025.12',
        year: '2025',
        summary: '취업 준비생의 역량 진단을 기반으로 개인화된 취업 및 학습 로드맵을 자동으로 그려주는 웹 애플리케이션의 프론트엔드를 개발했습니다.',
        description: '사용자가 관심 분야 및 현재 자격증, 보유 기술을 선택하면 공공 채용 데이터 API와 워크넷 Open API의 통계를 분석하여 가장 알맞은 가상의 직무 로드맵과 부족한 역량을 Chart.js로 시각화해 제공하는 서비스입니다.',
        role: '프론트엔드 전체 UI/UX 마크업 및 스타일 가이드 정립, React 기반의 상태 관리와 API 연동, 가인포그래픽 차트 렌더링 최적화, 반응형 모바일 레이아웃 구현.',
        highlights: [
            'Chart.js와 TailwindCSS를 사용하여 가독성 높은 맞춤형 분석 보고서 대시보드 구축',
            'Open API 데이터 통신 지연에 대응한 스켈레톤 UI 컴포넌트와 비동기 로딩 최적화로 초기 렌더링 병목 25% 완화',
            '다크 모드와 고대비 접근성 모드 지원으로 시각약자 접근 환경 준수',
            '구글 등 검색 포털 노출 향상을 위한 React Helmet 기반 SEO 마크업 적용'
        ],
        techStack: ['React', 'CSS Grid', 'Chart.js', 'Rest API', 'Git'],
        accentColor: 'var(--color-it-end)',
        accentBg: 'rgba(225, 0, 255, 0.1)',
        accentBorder: 'rgba(225, 0, 255, 0.2)',
        icon: 'fa-code'
    },
    {
        id: 'it-2',
        category: 'it',
        title: '포트폴리오 템플릿 아카이빙 플랫폼 \'Folder\'',
        period: '2024.08 - 2024.11',
        year: '2024',
        summary: '복잡한 프레임워크 없이 오직 HTML, Vanilla JS, CSS Grid만을 사용하여 제작한 초경량, 초고속 포트폴리오 아카이빙 정적 웹사이트입니다.',
        description: '다양한 직무의 우수 포트폴리오 기획안과 템플릿을 공유하는 큐레이션 웹사이트입니다. 프레임워크의 오버헤드를 줄이고, 순수 웹 표준 기술만을 사용하여 웹 최적화 성능의 극대화를 연습했습니다.',
        role: '바닐라 자바스크립트 기반의 가상 돔 라우팅 및 템플릿 렌더러 설계, 로컬 스토리지를 활용한 좋아요 및 북마크 시스템 개발, CSS Flexbox/Grid를 활용한 완벽한 픽셀 반응형 디자인 설계.',
        highlights: [
            'Lighthouse 기준 성능 및 SEO 점수 100점 달성 (초기 FCP 0.3초 이내 도달)',
            '프레임워크 라이브러리 의존성 0% 달성으로 웹 브라우저 호환성 극대화',
            'Intersection Observer API를 활용한 무한 스크롤 및 이미지 지연 로딩(Lazy loading) 기능 자체 구현',
            '순수 CSS만으로 구현한 글래스모피즘 UI 디자인 컴포넌트 라이브러리화'
        ],
        techStack: ['HTML5', 'Vanilla Javascript', 'Vanilla CSS', 'Lighthouse Optimization'],
        accentColor: 'var(--color-it-end)',
        accentBg: 'rgba(225, 0, 255, 0.1)',
        accentBorder: 'rgba(225, 0, 255, 0.2)',
        icon: 'fa-code'
    },
    {
        id: 'it-3',
        category: 'it',
        title: '공공데이터 활용 청년 취업정보 지도 웹앱',
        period: '2023.05 - 2023.09',
        year: '2023',
        summary: '사용자의 현재 위치를 기반으로 내 주변에서 열리는 일자리 박람회 및 국비지원 교육기관의 정보를 지도로 보여주는 하이브리드 웹입니다.',
        description: '청년들이 취업 박람회나 교육 정보를 찾기 어렵다는 문제에서 출발하여, 카카오맵 API와 서울시 공공데이터를 융합하여 쉽고 시각적으로 파악할 수 있도록 제작한 지도 기반 탐색형 웹 서비스입니다.',
        role: '카카오 지도 API 마커 클러스터링 로직 구현, Geolocation API 연동을 통한 사용자 주변 현 위치 연산 구현, 취업 공고 실시간 검색 필터링 모듈 개발.',
        highlights: [
            '시 주관 공공데이터 매시업 해커톤 공모전 참가, 크리에이티브 부문 우수상 수상',
            '카카오 맵 클러스터러 라이브러리를 활용하여 1,000건 이상의 공공 데이터를 브라우저 부하 없이 매끄럽게 렌더링',
            '북마크된 행사 일정이 다가오면 브라우저 알림을 보내는 Push Notification API 기능 도입',
            'Figma를 통한 UI 설계부터 프로토타입 테스팅, 실제 개발까지 애자일 방식으로 4인 협업 진행'
        ],
        techStack: ['Javascript', 'Kakao Map API', 'HTML5/CSS3', 'Geolocation API', 'Figma'],
        accentColor: 'var(--color-it-end)',
        accentBg: 'rgba(225, 0, 255, 0.1)',
        accentBorder: 'rgba(225, 0, 255, 0.2)',
        icon: 'fa-code'
    }
];

const defaultJourneyData = [
    {
        id: 'journey-1',
        category: 'career',
        title: '청년인재 커리어 빌드업 프로그램 컨설턴트',
        institution: '대학일자리플러스센터',
        period: '2025.03 - 2026.02',
        description: '대학 청년들을 대상으로 맞춤형 커리어 로드맵을 설계하고, 자기소개서 첨삭 및 면접 코칭 전담.'
    },
    {
        id: 'journey-2',
        category: 'education',
        title: '미디어커뮤니케이션학과 학사 졸업',
        institution: '부산대학교',
        period: '2018.03 - 2022.02',
        description: '언론 정보, 미디어 스토리텔링 및 영상콘텐츠 기획/제작 심화 학습.'
    },
    {
        id: 'journey-3',
        category: 'career',
        title: '진로 설계 강사 및 코치',
        institution: '청소년진로지원센터',
        period: '2024.05 - 현재',
        description: '고등학교 및 대학교 대상 직업 트렌드 소개, 적성 분석 및 자기주도적 진로 탐색 강연 진행.'
    },
    {
        id: 'journey-4',
        category: 'cert',
        title: '직업상담사 2급 자격증 취득',
        institution: '한국산업인력공단',
        period: '2025.08',
        description: '직업상담학, 직업심리학, 직업정보론, 노동시장론 및 노동관계법규 검증 완료.'
    },
    {
        id: 'journey-5',
        category: 'cert',
        title: '웹디자인기능사 자격증 취득',
        institution: '한국산업인력공단',
        period: '2024.11',
        description: 'HTML5, CSS3 웹 표준 퍼블리싱 및 UI/UX 레이아웃 구현 능력 검증.'
    }
];

const defaultCompetenciesData = [
    {
        id: 'comp-it',
        category: 'it',
        title: '인공지능 활용',
        icon: 'fa-robot',
        skills: [
            'Generative AI 프롬프트 엔지니어링',
            'AI 기반 텍스트/이미지/비디오 생성',
            'AI 도구를 활용한 업무 효율화'
        ]
    },
    {
        id: 'comp-career',
        category: 'career',
        title: '사무자동화',
        icon: 'fa-laptop-file',
        skills: [
            'Excel & Google Sheets 데이터 분석',
            'Notion 기반 워크스페이스 구축',
            '비즈니스 문서 및 PPT 시각화'
        ]
    },
    {
        id: 'comp-media',
        category: 'media',
        title: '콘텐츠 제작',
        icon: 'fa-video',
        skills: [
            'Premiere & After Effects 영상 편집',
            '유튜브/SNS 채널 기획 및 분석',
            '디지털 콘텐츠 기획 및 브랜딩'
        ]
    }
];

let portfolioData = [];
let journeyData = [];
let competenciesData = [];

// ==========================================================================
// Initialization & DOM Event Binding
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    loadDataAndInit();
});

function loadDataAndInit() {
    // 1. 서버 data.json 로드를 최우선으로 시도
    fetch('data.json')
        .then(res => {
            if (!res.ok) throw new Error('서버 데이터 로드 실패');
            return res.json();
        })
        .then(data => {
            console.log('서버로부터 최신 데이터를 로드했습니다.');
            portfolioData = data.portfolioData;
            journeyData = data.journeyData;
            competenciesData = data.competenciesData;
            
            // 로컬 스토리지 데이터 동기화
            try {
                localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
                localStorage.setItem('journeyData', JSON.stringify(journeyData));
                localStorage.setItem('competenciesData', JSON.stringify(competenciesData));
            } catch (e) {
                console.error('로컬 스토리지 동기화 실패:', e);
            }
            
            initApp();
        })
        .catch(err => {
            console.warn('서버 데이터 로드 실패, 로컬 스토리지 백업을 확인합니다:', err);
            
            // 2. 서버 로드 실패 시 로컬 스토리지 백업 확인
            const localPortfolio = localStorage.getItem('portfolioData');
            const localJourney = localStorage.getItem('journeyData');
            const localCompetencies = localStorage.getItem('competenciesData');
            
            if (localPortfolio && localJourney && localCompetencies) {
                try {
                    portfolioData = JSON.parse(localPortfolio);
                    journeyData = JSON.parse(localJourney);
                    competenciesData = JSON.parse(localCompetencies);
                    console.log('로컬 스토리지로부터 백업 데이터를 복원했습니다.');
                    initApp();
                    return;
                } catch (e) {
                    console.error('로컬 스토리지 백업 파싱 오류:', e);
                }
            }
            
            // 3. 로컬 스토리지도 비어있거나 오류 시 기본 템플릿 데이터 사용
            console.log('기본 템플릿 데이터를 로드합니다.');
            portfolioData = defaultPortfolioData;
            journeyData = defaultJourneyData;
            competenciesData = defaultCompetenciesData;
            
            try {
                localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
                localStorage.setItem('journeyData', JSON.stringify(journeyData));
                localStorage.setItem('competenciesData', JSON.stringify(competenciesData));
            } catch (e) {
                console.error('로컬 스토리지 초기화 실패:', e);
            }
            
            initApp();
        });
}

function initApp() {
    initEmailJS();
    renderCompetencies();
    renderPortfolioGrid();
    renderTimeline('career');
    setupFilters();
    setupViewToggle();
    setupModal();
    setupThemeToggle();
    setupMobileMenu();
    setupScrollEffects();
    setupFloatingNavigator();
    setupContactForm();
    setupAdminMode();
}

// 헬퍼 함수: 로컬 저장 및 서버 동기화
function saveAllData() {
    // 1. 로컬 저장
    try {
        localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
        localStorage.setItem('journeyData', JSON.stringify(journeyData));
        localStorage.setItem('competenciesData', JSON.stringify(competenciesData));
    } catch (e) {
        console.error('로컬 스토리지 저장 오류:', e);
        if (e.name === 'QuotaExceededError') {
            console.warn('로컬 스토리지 용량 초과로 브라우저에 임시 저장을 실패했습니다. 서버 저장 프로세스는 계속 진행됩니다.');
        }
    }
    
    // 2. 서버로 저장 요청 (Express 실행 환경일 때)
    const payload = {
        portfolioData,
        journeyData,
        competenciesData
    };
    
    fetch('/api/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(res => {
        if (!res.ok) throw new Error('서버 저장 실패');
        return res.json();
    })
    .then(result => {
        console.log('데이터가 서버에 동기화되어 저장되었습니다:', result.message);
        if (result.portfolioData) {
            portfolioData = result.portfolioData;
            try {
                localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
            } catch (e) {
                console.error('로컬 스토리지 포트폴리오 업데이트 오류:', e);
            }
            renderPortfolioGrid(); // 새로운 이미지 상대경로를 카드에 즉시 반영
        }
    })
    .catch(err => {
        console.warn('서버 저장 실패 (오프라인 혹은 정적 호스팅 환경일 수 있습니다):', err);
    });
}

// 헬퍼 함수: 정적 배포를 위한 데이터 백업 다운로드
window.downloadDataJson = function() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
        portfolioData,
        journeyData,
        competenciesData
    }, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "data.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
};

// ==========================================================================
// Portfolio Grid Rendering
// ==========================================================================

function renderPortfolioGrid(filter = 'all') {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    const filteredData = filter === 'all' 
        ? portfolioData 
        : portfolioData.filter(item => item.category === filter);
        
    filteredData.forEach(item => {
        const card = document.createElement('article');
        card.className = 'portfolio-card glass-panel reveal-on-scroll active';
        card.style.position = 'relative';
        card.setAttribute('data-id', item.id);
        card.style.setProperty('--card-accent', item.accentColor);
        
        let catName = '기타';
        let catClass = '';
        if (item.category === 'career') { catName = '취업진로'; catClass = 'text-career'; }
        else if (item.category === 'media') { catName = '영상콘텐츠'; catClass = 'text-media'; }
        else if (item.category === 'it') { catName = 'IT 미래기술'; catClass = 'text-it'; }
        
        card.style.setProperty('--card-accent-color', `var(--color-${item.category}-end)`);
        card.style.setProperty('--card-accent-alpha', item.accentBg || 'rgba(255, 255, 255, 0.05)');
        card.style.setProperty('--card-accent-border', item.accentBorder || 'var(--border-color)');
        
        let adminBtns = '';
        if (isAdminMode) {
            adminBtns = `
                <div class="admin-card-actions" style="position: absolute; top: 1rem; right: 1rem; display: flex; gap: 0.5rem; z-index: 10;">
                    <button class="admin-edit-btn" onclick="event.stopPropagation(); openEditProjectModal('${item.id}')" style="background: var(--bg-tertiary); border: 1px solid var(--border-color); color: var(--accent-primary-start); width: 32px; height: 32px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center;" title="편집"><i class="fa-solid fa-pen"></i></button>
                    <button class="admin-delete-btn" onclick="event.stopPropagation(); deleteProject('${item.id}')" style="background: var(--bg-tertiary); border: 1px solid var(--border-color); color: #f43f5e; width: 32px; height: 32px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center;" title="삭제"><i class="fa-solid fa-trash"></i></button>
                </div>
            `;
        }
        
        card.innerHTML = `
            ${adminBtns}
            <div class="portfolio-card-content">
                <div class="card-top">
                    <span class="card-category">${catName}</span>
                    <span class="card-date">${item.period.split(' ')[0]}</span>
                </div>
                <h3>${item.title}</h3>
                <p class="card-desc">${item.summary}</p>
                <div class="card-bottom">
                    <div class="card-institution" style="font-size: 0.85rem; color: var(--text-secondary); display: flex; align-items: center; gap: 0.4rem; font-weight: 500;">
                        <i class="fa-solid fa-building" style="font-size: 0.8rem; color: var(--card-accent-color); margin-bottom: 0;"></i>
                        <span>${item.role || '소속 기관 없음'}</span>
                    </div>
                    <div class="card-arrow" aria-label="상세 보기">
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => {
            openDetailsModal(item.id);
        });
        
        grid.appendChild(card);
    });
}

// ==========================================================================
// Timeline Rendering (Chronological order)
// ==========================================================================

function renderTimeline(filter = 'career') {
    const container = document.getElementById('timeline-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    const filteredData = filter === 'all'
        ? journeyData
        : journeyData.filter(item => item.category === filter);
        
    // Sort timeline items chronologically (descending), newest first.
    const sortedData = [...filteredData].sort((a, b) => {
        const getSortableValue = (periodStr) => {
            const startStr = periodStr.split('-')[0].trim();
            const parts = startStr.split('.');
            const year = parseInt(parts[0]) || 0;
            const month = parts[1] ? parseInt(parts[1]) : 0;
            return (year * 12) + month;
        };
        return getSortableValue(b.period) - getSortableValue(a.period);
    });
    
    sortedData.forEach((item, index) => {
        const itemEl = document.createElement('div');
        // Alternating sides: left or right
        const side = index % 2 === 0 ? 'left' : 'right';
        itemEl.className = `timeline-item ${side}`;
        
        let catName = '';
        let categoryClass = '';
        let accentColor = '';
        
        if (item.category === 'education') {
            catName = '학력사항';
            categoryClass = 'it';
            accentColor = 'var(--color-it-end)';
        } else if (item.category === 'career') {
            catName = '경력사항';
            categoryClass = 'career';
            accentColor = 'var(--color-career-end)';
        } else if (item.category === 'cert') {
            catName = '자격 및 수료사항';
            categoryClass = 'media';
            accentColor = 'var(--color-media-end)';
        } else if (item.category === 'writing') {
            catName = '저작활동';
            categoryClass = 'writing';
            accentColor = 'var(--color-writing-end)';
        }
        
        itemEl.style.setProperty('--dot-accent', accentColor);
        itemEl.style.setProperty('--timeline-accent', accentColor);
        
        let adminBtns = `
            <div class="admin-card-actions" style="position: absolute; top: 1rem; right: 1rem; display: flex; gap: 0.5rem; z-index: 10;">
                <button class="admin-edit-btn" onclick="event.stopPropagation(); openEditJourneyModal('${item.id}')" style="background: var(--bg-tertiary); border: 1px solid var(--border-color); color: var(--accent-primary-start); width: 32px; height: 32px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center;" title="편집"><i class="fa-solid fa-pen"></i></button>
                <button class="admin-delete-btn" onclick="event.stopPropagation(); deleteJourneyItem('${item.id}')" style="background: var(--bg-tertiary); border: 1px solid var(--border-color); color: #f43f5e; width: 32px; height: 32px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center;" title="삭제"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;
        
        itemEl.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content-wrapper">
                <div class="timeline-card glass-panel" style="position: relative;">
                    ${adminBtns}
                    <span class="time">${item.period}</span>
                    <h3>${item.title}</h3>
                    <span class="subtitle text-${categoryClass}">${catName} · ${item.institution}</span>
                    <p>${item.description}</p>
                </div>
            </div>
        `;
        
        container.appendChild(itemEl);
    });
}

// ==========================================================================
// Setup Filter Buttons
// ==========================================================================

function getActiveJourneyFilter() {
    const activeBtn = document.querySelector('#journey-filters .filter-btn.active');
    return activeBtn ? activeBtn.getAttribute('data-filter') : 'career';
}

function setupFilters() {
    const filters = document.querySelectorAll('#portfolio-filters .filter-btn');
    filters.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active class from all
            filters.forEach(f => f.classList.remove('active'));
            
            // Add active to clicked
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            // Re-render grid with transition
            const grid = document.getElementById('portfolio-grid');
            grid.style.opacity = '0';
            grid.style.transform = 'translateY(10px)';
            
            setTimeout(() => {
                renderPortfolioGrid(filterValue);
                grid.style.opacity = '1';
                grid.style.transform = 'translateY(0)';
                // Re-initialize intersection observers for new elements
                setupScrollEffects();
            }, 300);
        });
    });
    
    // Journey (Timeline) filters
    const jFilters = document.querySelectorAll('#journey-filters .filter-btn');
    jFilters.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active class from all
            jFilters.forEach(f => f.classList.remove('active'));
            
            // Add active to clicked
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            // Re-render timeline with transition
            const container = document.getElementById('timeline-container');
            if (container) {
                container.style.opacity = '0';
                container.style.transform = 'translateY(10px)';
                container.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                
                setTimeout(() => {
                    renderTimeline(filterValue);
                    container.style.opacity = '1';
                    container.style.transform = 'translateY(0)';
                    setupScrollEffects();
                }, 300);
            }
        });
    });
}

function setupViewToggle() {
    const btnGrid = document.getElementById('btn-view-grid');
    const btnList = document.getElementById('btn-view-list');
    const grid = document.getElementById('portfolio-grid');
    
    if (!btnGrid || !btnList || !grid) return;
    
    // Read saved view preference from localStorage (default: 'grid')
    const savedView = localStorage.getItem('portfolioViewMode') || 'grid';
    
    // Apply initial view without animation
    if (savedView === 'list') {
        grid.classList.add('list-view');
        btnList.classList.add('active');
        btnGrid.classList.remove('active');
    } else {
        grid.classList.remove('list-view');
        btnGrid.classList.add('active');
        btnList.classList.remove('active');
    }
    
    btnGrid.addEventListener('click', () => {
        if (localStorage.getItem('portfolioViewMode') !== 'grid') {
            transitionView('grid');
        }
    });
    
    btnList.addEventListener('click', () => {
        if (localStorage.getItem('portfolioViewMode') !== 'list') {
            transitionView('list');
        }
    });
    
    function transitionView(viewMode) {
        grid.style.opacity = '0';
        grid.style.transform = 'translateY(10px)';
        grid.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
        
        setTimeout(() => {
            if (viewMode === 'list') {
                grid.classList.add('list-view');
                btnList.classList.add('active');
                btnGrid.classList.remove('active');
            } else {
                grid.classList.remove('list-view');
                btnGrid.classList.add('active');
                btnList.classList.remove('active');
            }
            localStorage.setItem('portfolioViewMode', viewMode);
            
            grid.style.opacity = '1';
            grid.style.transform = 'translateY(0)';
            setupScrollEffects();
        }, 250);
    }
}

// ==========================================================================
// Details Modal Controllers
// ==========================================================================

function setupModal() {
    const modal = document.getElementById('details-modal');
    if (!modal) return;
    
    // Close on overlay click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function convertTimeToSeconds(timeStr) {
    if (timeStr === null || timeStr === undefined) return '';
    const str = String(timeStr).trim();
    if (!str) return '';
    
    if (/^\d+$/.test(str)) {
        return parseInt(str, 10);
    }
    
    if (str.includes(':')) {
        const parts = str.split(':').map(Number);
        if (parts.some(isNaN)) return '';
        
        if (parts.length === 2) {
            return parts[0] * 60 + parts[1];
        } else if (parts.length === 3) {
            return parts[0] * 3600 + parts[1] * 60 + parts[2];
        }
    }
    
    const num = parseInt(str, 10);
    return isNaN(num) ? '' : num;
}

function getGoogleDriveEmbedUrl(url, start = null) {
    if (!url) return null;
    url = url.trim();
    let fileId = '';
    
    if (/^[a-zA-Z0-9_-]{28,45}$/.test(url)) {
        fileId = url;
    } else {
        try {
            const fileDMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
            if (fileDMatch) {
                fileId = fileDMatch[1];
            } else {
                const idParamMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
                if (idParamMatch) {
                    fileId = idParamMatch[1];
                }
            }
        } catch (e) {
            console.error('구글 드라이브 URL 파싱 오류:', e);
        }
    }
    
    if (!fileId) return null;
    
    let embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;
    const parsedStart = convertTimeToSeconds(start);
    if (parsedStart) {
        embedUrl += `?t=${parsedStart}`;
    }
    
    return embedUrl;
}

function getYouTubeEmbedUrl(url, start = null, end = null) {
    if (!url) return null;
    let videoId = '';
    url = url.trim();
    
    // 1. 만약 입력값이 11자리 비디오 ID 자체인 경우 직접 할당
    if (url.length === 11 && !url.includes('/') && !url.includes('.')) {
        videoId = url;
    } else {
        try {
            // 2. Shorts 및 Live 스트림 URL 처리
            if (url.includes('shorts/')) {
                const parts = url.split('shorts/');
                if (parts.length > 1) {
                    videoId = parts[1].split(/[?#]/)[0];
                }
            } else if (url.includes('live/')) {
                const parts = url.split('live/');
                if (parts.length > 1) {
                    videoId = parts[1].split(/[?#]/)[0];
                }
            } else {
                // 3. 일반적인 유튜브 URL 파싱
                const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
                const match = url.match(regExp);
                if (match && match[2].length === 11) {
                    videoId = match[2];
                }
            }
        } catch (e) {
            console.error('유튜브 URL 파싱 오류:', e);
        }
    }
    
    if (!videoId) return null;
    
    // 일부 공개(unlisted) 영상의 안정적인 재생 및 모바일 기기 호환성을 위해 youtube.com 표준 도메인 사용
    let embedUrl = `https://www.youtube.com/embed/${videoId}`;
    const params = [
        'controls=0',         // 재생 컨트롤러 비활성화 (제어 금지)
        'disablekb=1',        // 키보드 컨트롤 비활성화 (제어 금지)
        'fs=0',               // 전체화면 버튼 비활성화 (제어 금지)
        'rel=0',              // 관련 영상 추천 중단 (공유 최소화)
        'modestbranding=1',   // 유튜브 로고 표시 최소화
        'iv_load_policy=3'    // 동영상 어노테이션(주석) 숨김
    ];
    
    // 도메인 권한 및 보안 검증을 위해 origin 파라미터 전달
    if (window.location.origin && window.location.origin !== 'null') {
        params.push(`origin=${encodeURIComponent(window.location.origin)}`);
    }
    const parsedStart = convertTimeToSeconds(start);
    const parsedEnd = convertTimeToSeconds(end);
    if (parsedStart) {
        params.push(`start=${parsedStart}`);
    }
    if (parsedEnd) {
        params.push(`end=${parsedEnd}`);
    }
    embedUrl += `?${params.join('&')}`;
    return embedUrl;
}

function openDetailsModal(id) {
    const modal = document.getElementById('details-modal');
    const container = document.getElementById('modal-content-container');
    if (!modal || !container) return;
    
    const item = portfolioData.find(d => d.id === id);
    if (!item) return;
    
    let catName = '기타';
    if (item.category === 'career') catName = '취업진로';
    else if (item.category === 'media') catName = '영상콘텐츠';
    else if (item.category === 'it') catName = 'IT 미래기술';
    
    // Setup modal specific CSS values dynamically
    container.style.setProperty('--modal-accent', item.accentColor);
    container.style.setProperty('--modal-accent-color', `var(--color-${item.category}-end)`);
    container.style.setProperty('--modal-accent-alpha', item.accentBg);
    container.style.setProperty('--modal-accent-border', item.accentBorder);
    
    let videoSection = '';
    let videoPlayersHtml = '';
    
    if (item.youtubeUrl) {
        const embedUrl = getYouTubeEmbedUrl(item.youtubeUrl, item.youtubeStart, item.youtubeEnd);
        console.log(`[YouTube embed debugging] Original URL: ${item.youtubeUrl} -> Generated Embed URL: ${embedUrl}`);
        if (embedUrl) {
            videoPlayersHtml += `
                <div class="video-container" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: 8px; margin-top: 1rem; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
                    <!-- 화면 제어/공유 방지를 위해 allow 속성 수정 및 allowfullscreen 제거 -->
                    <iframe src="${embedUrl}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                    <!-- 상단 타이틀 및 공유/정보 버튼 클릭 차단용 반응형 투명 오버레이 -->
                    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 18%; z-index: 5; background: transparent;"></div>
                    <!-- 하단 컨트롤러 및 유튜브 워터마크 클릭 차단용 반응형 투명 오버레이 -->
                    <div style="position: absolute; bottom: 0; left: 0; width: 100%; height: 15%; z-index: 5; background: transparent;"></div>
                </div>
            `;
        }
    }
    
    if (item.googleDriveUrl) {
        const embedUrl = getGoogleDriveEmbedUrl(item.googleDriveUrl, item.youtubeStart);
        console.log(`[Google Drive embed debugging] Original URL: ${item.googleDriveUrl} -> Generated Embed URL: ${embedUrl}`);
        if (embedUrl) {
            const marginStyle = videoPlayersHtml ? 'margin-top: 1.5rem;' : 'margin-top: 1rem;';
            videoPlayersHtml += `
                <div class="video-container" oncontextmenu="return false;" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: 8px; ${marginStyle} box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
                    <!-- 화면 제어/공유 방지를 위해 allowfullscreen 제거, allow="autoplay" 설정 및 sandbox 설정으로 새창 팝업 차단 -->
                    <iframe src="${embedUrl}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" allow="autoplay" sandbox="allow-scripts allow-same-origin allow-presentation" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                    <!-- 우상단 팝아웃(새창열기)을 통한 다운로드 및 공유 방지용 반응형 투명 오버레이 (상단 약 20%) -->
                    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 20%; z-index: 5; background: transparent;"></div>
                    <!-- 하단 재생 바 탐색 및 조절 클릭 차단용 반응형 투명 오버레이 (하단 약 15%) -->
                    <div style="position: absolute; bottom: 0; left: 0; width: 100%; height: 15%; z-index: 5; background: transparent;"></div>
                </div>
            `;
        }
    }
    
    if (videoPlayersHtml) {
        videoSection = `
            <div class="modal-section">
                <h4 class="modal-section-title">관련 영상</h4>
                ${videoPlayersHtml}
            </div>
        `;
    }
    
    let imageSection = '';
    if (item.imageUrl || item.imageUrl2) {
        let imagesHtml = '';
        const cacheBuster = `?t=${Date.now()}`;
        if (item.imageUrl) {
            const imgSrc = item.imageUrl.startsWith('data:') ? item.imageUrl : `${item.imageUrl}${cacheBuster}`;
            imagesHtml += `
                <div class="image-wrapper-detail" style="flex: 1; min-width: 250px; max-width: 100%;">
                    <img src="${imgSrc}" style="width: 100%; height: auto; display: block; max-height: 400px; object-fit: contain; background: rgba(0,0,0,0.2); border-radius: 6px; border: 1px solid var(--border-color);">
                </div>
            `;
        }
        if (item.imageUrl2) {
            const imgSrc2 = item.imageUrl2.startsWith('data:') ? item.imageUrl2 : `${item.imageUrl2}${cacheBuster}`;
            imagesHtml += `
                <div class="image-wrapper-detail" style="flex: 1; min-width: 250px; max-width: 100%;">
                    <img src="${imgSrc2}" style="width: 100%; height: auto; display: block; max-height: 400px; object-fit: contain; background: rgba(0,0,0,0.2); border-radius: 6px; border: 1px solid var(--border-color);">
                </div>
            `;
        }
        imageSection = `
            <div class="modal-section">
                <h4 class="modal-section-title">대표 이미지</h4>
                <div class="image-container-grid" style="display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1rem;">
                    ${imagesHtml}
                </div>
            </div>
        `;
    }
    
    container.innerHTML = `
        <button class="modal-close-btn" id="modal-close-btn" aria-label="닫기">
            <i class="fa-solid fa-xmark"></i>
        </button>
        
        <div class="modal-header-hero">
            <div class="modal-meta">
                <span class="modal-category">${catName}</span>
                <span class="modal-date">${item.period}</span>
            </div>
            <h2 class="modal-title">${item.title}</h2>
        </div>
        
        <div class="modal-body">
            ${videoSection}
            ${imageSection}
            
            ${item.summary ? `
            <div class="modal-section">
                <h4 class="modal-section-title">요약 설명</h4>
                <p class="modal-desc-long">${item.summary}</p>
            </div>
            ` : ''}
            
            ${item.role ? `
            <div class="modal-section">
                <h4 class="modal-section-title">기관명</h4>
                <p class="modal-desc-long">${item.role}</p>
            </div>
            ` : ''}
        </div>
    `;
    
    // Bind close button event
    container.querySelector('#modal-close-btn').addEventListener('click', closeModal);
    
    // Open modal
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Lock background scroll
}

function closeModal() {
    const modal = document.getElementById('details-modal');
    if (!modal) return;
    
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Unlock scroll
}

// ==========================================================================
// Theme (Dark/Light) Mode Toggle
// ==========================================================================

function setupThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    if (!toggleBtn) return;
    
    // Check local storage setting or system preferences
    const savedTheme = localStorage.getItem('theme');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    
    if (savedTheme === 'light' || (!savedTheme && prefersLight)) {
        enableLightMode();
    } else {
        enableDarkMode();
    }
    
    toggleBtn.addEventListener('click', () => {
        if (document.body.classList.contains('light-mode')) {
            enableDarkMode();
        } else {
            enableLightMode();
        }
    });
    
    function enableLightMode() {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem('theme', 'light');
    }
    
    function enableDarkMode() {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem('theme', 'dark');
    }
}

// ==========================================================================
// Mobile Menu Controller
// ==========================================================================

function setupMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const nav = document.getElementById('nav-menu');
    if (!btn || !nav) return;
    
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        btn.classList.toggle('active');
        nav.classList.toggle('active');
    });
    
    // Close menu when link clicked
    const links = nav.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', () => {
            btn.classList.remove('active');
            nav.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('active') && !nav.contains(e.target) && e.target !== btn) {
            btn.classList.remove('active');
            nav.classList.remove('active');
        }
    });
}

// ==========================================================================
// Scroll Reveal & Active Navigation Highlights
// ==========================================================================

function setupScrollEffects() {
    // Header shadow on scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Intersection Observer for scroll animation reveals
    const reveals = document.querySelectorAll('.reveal-on-scroll');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Trigger only once
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });
    
    reveals.forEach(el => revealObserver.observe(el));
    
    // Highlight active link on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150; // offset header height
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
}

// ==========================================================================
// Floating Navigator
// ==========================================================================

function setupFloatingNavigator() {
    const navigatorEl = document.getElementById('floating-navigator');
    const fabBtn = document.getElementById('nav-toggle-fab');
    const scrollTopBtn = document.getElementById('btn-scroll-top');

    if (!navigatorEl || !fabBtn) return;

    // Scroll-triggered visibility (appear after scrolling down 300px)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            navigatorEl.classList.add('visible');
        } else {
            navigatorEl.classList.remove('visible');
            navigatorEl.classList.remove('active');
        }
    });

    // Toggle menu panel
    fabBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navigatorEl.classList.toggle('active');
    });

    // Smooth scroll to top
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            navigatorEl.classList.remove('active');
        });
    }

    // Close menu when clicking navigation items
    const panelItems = navigatorEl.querySelectorAll('.panel-item:not(.scroll-top)');
    panelItems.forEach(item => {
        item.addEventListener('click', () => {
            navigatorEl.classList.remove('active');
        });
    });

    // Close menu when clicking outside of the floating navigator
    document.addEventListener('click', (e) => {
        if (!navigatorEl.contains(e.target)) {
            navigatorEl.classList.remove('active');
        }
    });
}

// ==========================================================================
// Contact Form Submission Mockup
// ==========================================================================

function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('form-name').value;
        const email = document.getElementById('form-email').value;
        const subject = document.getElementById('form-subject').value;
        const message = document.getElementById('form-message').value;
        
        const submitBtn = document.getElementById('btn-submit');
        
        // Visual indicator for sending state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>메시지 전송 중...</span> <i class="fa-solid fa-spinner fa-spin"></i>';
        
        // Mock API Request Delay
        setTimeout(() => {
            alert(`감사합니다, ${name}님! 메시지가 성공적으로 전달되었습니다.\n(작성하신 이메일: ${email}로 빠른 시일 내에 연락드리겠습니다.)`);
            form.reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<span>메시지 전송하기</span> <i class="fa-solid fa-paper-plane"></i>';
        }, 1500);
    });
}

// ==========================================================================
// Admin Mode Management & CMS Actions
// ==========================================================================

let isAdminMode = false;
let generatedAuthCode = '';
let authCodeExpiry = 0;
let authTimerInterval = null;

function initEmailJS() {
    if (EMAILJS_CONFIG.publicKey) {
        emailjs.init(EMAILJS_CONFIG.publicKey);
    }
}

function setupAdminMode() {
    const adminToggle = document.getElementById('admin-toggle');
    const adminBanner = document.getElementById('admin-banner');
    const adminPortfolioActions = document.getElementById('admin-portfolio-actions');
    const adminJourneyActions = document.getElementById('admin-journey-actions');
    
    // Only show timeline actions in admin mode
    if (adminJourneyActions) adminJourneyActions.style.display = 'none';
    
    const savedAdmin = sessionStorage.getItem('isAdminMode') === 'true';
    if (savedAdmin) {
        isAdminMode = true;
        if (adminToggle) {
            adminToggle.classList.add('active');
            adminToggle.innerHTML = '<i class="fa-solid fa-lock-open"></i>';
        }
        if (adminBanner) adminBanner.style.display = 'flex';
        if (adminPortfolioActions) adminPortfolioActions.style.display = 'block';
        if (adminJourneyActions) adminJourneyActions.style.display = 'block';
        document.body.classList.add('admin-active');
        
        // Re-render to show admin actions on page load
        renderCompetencies();
        renderPortfolioGrid();
        renderTimeline(getActiveJourneyFilter());
    }
    
    if (adminToggle) {
        adminToggle.addEventListener('click', () => {
            if (isAdminMode) {
                // Log out directly
                isAdminMode = false;
                sessionStorage.removeItem('isAdminMode');
                
                adminToggle.classList.remove('active');
                adminToggle.innerHTML = '<i class="fa-solid fa-lock"></i>';
                if (adminBanner) adminBanner.style.display = 'none';
                if (adminPortfolioActions) adminPortfolioActions.style.display = 'none';
                if (adminJourneyActions) adminJourneyActions.style.display = 'none';
                document.body.classList.remove('admin-active');
                
                renderCompetencies();
                renderPortfolioGrid();
                renderTimeline(getActiveJourneyFilter());
                alert('관리자 모드가 해제되었습니다.');
            } else {
                openAuthModal();
            }
        });
    }
    
    const closeAdminBtn = document.getElementById('btn-close-admin-modal');
    if (closeAdminBtn) {
        closeAdminBtn.addEventListener('click', closeAdminModal);
    }

    // Bind Auth Modal elements
    const closeAuthBtn = document.getElementById('btn-close-auth-modal');
    if (closeAuthBtn) {
        closeAuthBtn.addEventListener('click', closeAuthModal);
    }
    
    const sendCodeBtn = document.getElementById('btn-send-code');
    if (sendCodeBtn) {
        sendCodeBtn.addEventListener('click', sendVerificationCode);
    }
    
    const resendCodeBtn = document.getElementById('btn-resend-code');
    if (resendCodeBtn) {
        resendCodeBtn.addEventListener('click', sendVerificationCode);
    }
    
    const verifyCodeBtn = document.getElementById('btn-verify-code');
    if (verifyCodeBtn) {
        verifyCodeBtn.addEventListener('click', verifyAuthCode);
    }
    
    const emailInput = document.getElementById('auth-email-input');
    if (emailInput) {
        emailInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                sendVerificationCode();
            }
        });
    }
    
    const codeInput = document.getElementById('auth-code-input');
    if (codeInput) {
        codeInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                verifyAuthCode();
            }
        });
    }
    
    const authOverlay = document.getElementById('admin-auth-modal');
    if (authOverlay) {
        authOverlay.addEventListener('click', (e) => {
            if (e.target === authOverlay) {
                closeAuthModal();
            }
        });
    }
}

function openAuthModal() {
    const modal = document.getElementById('admin-auth-modal');
    const stepSend = document.getElementById('auth-step-send');
    const stepVerify = document.getElementById('auth-step-verify');
    const errorMsg = document.getElementById('auth-error-msg');
    const emailErrorMsg = document.getElementById('auth-email-error-msg');
    const emailInput = document.getElementById('auth-email-input');
    const input = document.getElementById('auth-code-input');
    
    if (!modal) return;
    
    stepSend.style.display = 'block';
    stepVerify.style.display = 'none';
    if (errorMsg) errorMsg.style.display = 'none';
    if (emailErrorMsg) emailErrorMsg.style.display = 'none';
    if (emailInput) {
        emailInput.value = '';
        emailInput.disabled = false;
    }
    if (input) input.value = '';
    
    if (authTimerInterval) {
        clearInterval(authTimerInterval);
        authTimerInterval = null;
    }
    
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    if (emailInput) {
        setTimeout(() => emailInput.focus(), 100);
    }
}

function closeAuthModal() {
    const modal = document.getElementById('admin-auth-modal');
    if (!modal) return;
    
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    
    if (authTimerInterval) {
        clearInterval(authTimerInterval);
        authTimerInterval = null;
    }
}

function sendVerificationCode() {
    const emailInput = document.getElementById('auth-email-input');
    const emailErrorMsg = document.getElementById('auth-email-error-msg');
    if (!emailInput) return;
    
    const enteredEmail = emailInput.value.trim().toLowerCase();
    
    // Check if email is in allowed list
    const isAllowed = EMAILJS_CONFIG.allowedEmails.some(email => email.trim().toLowerCase() === enteredEmail);
    
    if (!isAllowed) {
        if (emailErrorMsg) {
            emailErrorMsg.style.display = 'block';
        }
        emailInput.focus();
        emailInput.select();
        return;
    } else {
        if (emailErrorMsg) {
            emailErrorMsg.style.display = 'none';
        }
    }
    
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    generatedAuthCode = code;
    authCodeExpiry = Date.now() + 3 * 60 * 1000; // 3 minutes expiration
    
    const sendBtn = document.getElementById('btn-send-code');
    const resendBtn = document.getElementById('btn-resend-code');
    
    if (sendBtn) {
        sendBtn.disabled = true;
        sendBtn.innerHTML = '발송 중... <i class="fa-solid fa-spinner fa-spin"></i>';
    }
    if (resendBtn) {
        resendBtn.disabled = true;
    }
    
    emailInput.disabled = true; // Lock the email input during verification
    
    const templateParams = {
        to_email: enteredEmail,
        to_name: '관리자',
        code: code
    };
    
    const isConfigured = EMAILJS_CONFIG.publicKey && EMAILJS_CONFIG.serviceId && EMAILJS_CONFIG.templateId;
    
    if (isConfigured) {
        emailjs.send(EMAILJS_CONFIG.serviceId, EMAILJS_CONFIG.templateId, templateParams)
            .then(() => {
                showVerificationStep();
            })
            .catch((error) => {
                console.error('EmailJS 발송 실패:', error);
                alert('인증번호 이메일 발송에 실패했습니다. 서비스 설정이나 키값을 확인하세요. (디버그 콘솔창에서 인증번호 확인 가능)');
                console.log(`[디버그] 생성된 인증번호: ${code}`);
                showVerificationStep();
            });
    } else {
        setTimeout(() => {
            console.log(`%c[EmailJS 시뮬레이션] 인증 이메일 발송 완료!`, 'color: #0284c7; font-weight: bold;');
            console.log(`%c수신자: ${enteredEmail}`, 'color: #0284c7;');
            console.log(`%c인증번호: ${code}`, 'color: #ea580c; font-size: 1.2rem; font-weight: bold;');
            alert(`인증번호가 발송되었습니다 (시뮬레이션 모드).\n입력하신 메일 [ ${enteredEmail} ] 은 관리자 메일이 맞으므로, F12를 눌러 콘솔창(Console)에서 인증번호 [ ${code} ] 를 확인해 주세요!`);
            showVerificationStep();
        }, 800);
    }
}

function showVerificationStep() {
    const stepSend = document.getElementById('auth-step-send');
    const stepVerify = document.getElementById('auth-step-verify');
    const sendBtn = document.getElementById('btn-send-code');
    const resendBtn = document.getElementById('btn-resend-code');
    const input = document.getElementById('auth-code-input');
    
    if (sendBtn) {
        sendBtn.disabled = false;
        sendBtn.innerHTML = '인증번호 발송';
    }
    if (resendBtn) {
        resendBtn.disabled = false;
    }
    
    if (stepSend && stepVerify) {
        stepSend.style.display = 'none';
        stepVerify.style.display = 'block';
    }
    
    if (input) {
        input.value = '';
        input.focus();
    }
    
    startAuthTimer();
}

function startAuthTimer() {
    const timerSpan = document.getElementById('auth-timer');
    if (authTimerInterval) {
        clearInterval(authTimerInterval);
    }
    
    function updateTimer() {
        const remaining = Math.max(0, authCodeExpiry - Date.now());
        const seconds = Math.floor(remaining / 1000);
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        
        if (timerSpan) {
            timerSpan.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }
        
        if (remaining <= 0) {
            clearInterval(authTimerInterval);
            authTimerInterval = null;
            alert('인증번호 유효시간이 만료되었습니다. 다시 요청해 주세요.');
            generatedAuthCode = '';
            
            const stepSend = document.getElementById('auth-step-send');
            const stepVerify = document.getElementById('auth-step-verify');
            if (stepSend && stepVerify) {
                stepSend.style.display = 'block';
                stepVerify.style.display = 'none';
                
                const emailInput = document.getElementById('auth-email-input');
                if (emailInput) {
                    emailInput.disabled = false;
                    emailInput.focus();
                }
            }
        }
    }
    
    updateTimer();
    authTimerInterval = setInterval(updateTimer, 1000);
}

function verifyAuthCode() {
    const input = document.getElementById('auth-code-input');
    const errorMsg = document.getElementById('auth-error-msg');
    if (!input) return;
    
    const enteredCode = input.value.trim();
    
    if (!generatedAuthCode || Date.now() > authCodeExpiry) {
        alert('인증 코드가 만료되었거나 생성되지 않았습니다. 인증번호를 다시 발송해 주세요.');
        return;
    }
    
    if (enteredCode === generatedAuthCode) {
        isAdminMode = true;
        sessionStorage.setItem('isAdminMode', 'true');
        
        const adminToggle = document.getElementById('admin-toggle');
        const adminBanner = document.getElementById('admin-banner');
        const adminPortfolioActions = document.getElementById('admin-portfolio-actions');
        const adminJourneyActions = document.getElementById('admin-journey-actions');
        
        if (adminToggle) {
            adminToggle.classList.add('active');
            adminToggle.innerHTML = '<i class="fa-solid fa-lock-open"></i>';
        }
        if (adminBanner) adminBanner.style.display = 'flex';
        if (adminPortfolioActions) adminPortfolioActions.style.display = 'block';
        if (adminJourneyActions) adminJourneyActions.style.display = 'block';
        document.body.classList.add('admin-active');
        
        renderCompetencies();
        renderPortfolioGrid();
        renderTimeline(getActiveJourneyFilter());
        
        closeAuthModal();
        alert('관리자 인증이 성공했습니다. 관리자 편집 모드가 활성화됩니다.');
    } else {
        if (errorMsg) {
            errorMsg.style.display = 'block';
        }
        input.focus();
        input.select();
    }
}

function renderCompetencies() {
    const grid = document.getElementById('competencies-grid');
    if (!grid) return;
    grid.innerHTML = '';
    
    competenciesData.forEach(comp => {
        const card = document.createElement('div');
        card.className = 'skill-category-card';
        card.style.position = 'relative';
        
        let skillItems = comp.skills.map(skill => `<li>${skill}</li>`).join('');
        
        let adminBtns = '';
        if (isAdminMode) {
            adminBtns = `
                <div class="admin-card-actions" style="position: absolute; top: 1rem; right: 1rem; display: flex; gap: 0.5rem; z-index: 10;">
                    <button class="admin-edit-btn" onclick="openEditCompModal('${comp.id}')" style="background: var(--bg-tertiary); border: 1px solid var(--border-color); color: var(--accent-primary-start); width: 32px; height: 32px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center;" title="편집"><i class="fa-solid fa-pen"></i></button>
                </div>
            `;
        }
        
        card.innerHTML = `
            ${adminBtns}
            <div class="skill-cat-header text-${comp.category}">
                <i class="fa-solid ${comp.icon}"></i>
                <h5>${comp.title}</h5>
            </div>
            <ul class="skill-list">
                ${skillItems}
            </ul>
        `;
        grid.appendChild(card);
    });
}

function openAdminModal(title, contentHtml) {
    const modal = document.getElementById('admin-modal');
    const modalTitle = document.getElementById('admin-modal-title');
    const modalBody = document.getElementById('admin-modal-body');
    
    if (modal && modalTitle && modalBody) {
        modalTitle.textContent = title;
        modalBody.innerHTML = contentHtml;
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
    }
}

window.closeAdminModal = function() {
    const modal = document.getElementById('admin-modal');
    if (modal) {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
    }
};

window.openEditCompModal = function(compId) {
    const comp = competenciesData.find(c => c.id === compId);
    if (!comp) return;
    
    let skillsListHtml = comp.skills.map((skill, index) => `
        <div class="form-group" style="display: flex; gap: 0.5rem; margin-bottom: 0.75rem; align-items: center;" id="skill-row-${index}">
            <input type="text" class="form-control skill-input" value="${skill}" style="flex: 1; padding: 0.6rem; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-tertiary); color: var(--text-primary);" required>
            <button type="button" onclick="document.getElementById('skill-row-${index}').remove()" style="background: none; border: none; color: #f43f5e; font-size: 1.2rem; cursor: pointer;" title="삭제"><i class="fa-solid fa-trash-can"></i></button>
        </div>
    `).join('');
    
    const formHtml = `
        <form id="edit-comp-form" style="display: flex; flex-direction: column; gap: 1.5rem;">
            <div class="form-group">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; font-size: 0.9rem; color: var(--text-secondary);">카테고리 제목</label>
                <input type="text" id="comp-title" value="${comp.title}" style="width: 100%; padding: 0.75rem; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-tertiary); color: var(--text-primary);" required>
            </div>
            <div class="form-group">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; font-size: 0.9rem; color: var(--text-secondary);">아이콘 클래스 (FontAwesome)</label>
                <input type="text" id="comp-icon" value="${comp.icon}" style="width: 100%; padding: 0.75rem; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-tertiary); color: var(--text-primary);" required>
            </div>
            <div class="form-group">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; font-size: 0.9rem; display: flex; justify-content: space-between; align-items: center; color: var(--text-secondary);">
                    <span>핵심 역량 리스트</span>
                    <button type="button" onclick="addSkillRow()" class="btn btn-outline" style="padding: 0.25rem 0.75rem; font-size: 0.8rem; border-radius: 6px;"><i class="fa-solid fa-plus icon-left"></i>역량 추가</button>
                </label>
                <div id="skills-list-container">
                    ${skillsListHtml}
                </div>
            </div>
            <div style="display: flex; justify-content: flex-end; gap: 1rem; margin-top: 1rem; border-top: 1px solid var(--border-color); padding-top: 1.5rem;">
                <button type="button" onclick="closeAdminModal()" class="btn btn-outline" style="padding: 0.6rem 1.5rem; font-size: 0.9rem;">취소</button>
                <button type="submit" class="btn btn-primary" style="padding: 0.6rem 1.5rem; font-size: 0.9rem;">저장</button>
            </div>
        </form>
    `;
    
    let skillIndex = comp.skills.length;
    window.addSkillRow = function() {
        const container = document.getElementById('skills-list-container');
        if (!container) return;
        
        const row = document.createElement('div');
        row.id = `skill-row-${skillIndex}`;
        row.style = "display: flex; gap: 0.5rem; margin-bottom: 0.75rem; align-items: center;";
        row.innerHTML = `
            <input type="text" class="form-control skill-input" value="" placeholder="역량을 입력하세요" style="flex: 1; padding: 0.6rem; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-tertiary); color: var(--text-primary);" required>
            <button type="button" onclick="document.getElementById('skill-row-${skillIndex}').remove()" style="background: none; border: none; color: #f43f5e; font-size: 1.2rem; cursor: pointer;" title="삭제"><i class="fa-solid fa-trash-can"></i></button>
        `;
        container.appendChild(row);
        skillIndex++;
    };
    
    openAdminModal(`핵심 역량 편집 - ${comp.title}`, formHtml);
    
    const form = document.getElementById('edit-comp-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const newTitle = document.getElementById('comp-title').value.trim();
        const newIcon = document.getElementById('comp-icon').value.trim();
        
        const skillInputs = document.querySelectorAll('.skill-input');
        const newSkills = Array.from(skillInputs).map(input => input.value.trim()).filter(val => val !== '');
        
        comp.title = newTitle;
        comp.icon = newIcon;
        comp.skills = newSkills;
        
        saveAllData();
        renderCompetencies();
        closeAdminModal();
    });
};

// 이미지 압축 및 리사이징 헬퍼 함수
function compressAndResizeImage(img, maxWidth = 1024, maxHeight = 1024, quality = 0.8) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    let width = img.width;
    let height = img.height;
    
    if (width > height) {
        if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
        }
    } else {
        if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
        }
    }
    
    canvas.width = width;
    canvas.height = height;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);
    ctx.drawImage(img, 0, 0, width, height);
    return canvas.toDataURL('image/jpeg', quality);
}

// 이미지 비율을 유지하면서 타겟 크기에 맞춰 크롭(Cover)하여 캔버스 중앙에 배치하는 헬퍼 함수
function resizeAndCropImage(img, targetWidth, targetHeight) {
    const canvas = document.createElement('canvas');
    canvas.width = targetWidth;
    canvas.height = targetHeight;
    const ctx = canvas.getContext('2d');
    
    // 비율 맞춤용 스케일 팩터 계산 (Cover)
    const scale = Math.max(targetWidth / img.width, targetHeight / img.height);
    const scaledWidth = img.width * scale;
    const scaledHeight = img.height * scale;
    
    // 중앙 정렬 오프셋 계산 (초과되는 부분은 캔버스 경계 밖으로 나가 잘리게 됨)
    const x = (targetWidth - scaledWidth) / 2;
    const y = (targetHeight - scaledHeight) / 2;
    
    // 이미지 그리기
    ctx.drawImage(img, x, y, scaledWidth, scaledHeight);
    
    return canvas.toDataURL('image/jpeg', 0.85); // 퀄리티 0.85로 선명하게 저장
}

window.openEditProjectModal = function(projectId) {
    const project = portfolioData.find(p => p.id === projectId);
    if (!project) return;
    
    renderProjectForm(project, `프로젝트 편집 - ${project.title}`);
};

window.openAddProjectModal = function() {
    renderProjectForm(null, '새 프로젝트 추가');
};

function renderProjectForm(project = null, modalTitleStr) {
    const isEdit = !!project;
    
    const formHtml = `
        <form id="project-form" style="display: flex; flex-direction: column; gap: 1.2rem;">
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
                <div class="form-group">
                    <label style="display: block; margin-bottom: 0.4rem; font-weight: 600; font-size: 0.85rem; color: var(--text-secondary);">카테고리</label>
                    <select id="proj-category" style="width: 100%; padding: 0.75rem; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-tertiary); color: var(--text-primary);" required>
                        <option value="career" ${isEdit && project.category === 'career' ? 'selected' : ''}>취업진로</option>
                        <option value="media" ${isEdit && project.category === 'media' ? 'selected' : ''}>영상콘텐츠</option>
                        <option value="it" ${isEdit && project.category === 'it' ? 'selected' : ''}>IT 미래기술</option>
                    </select>
                </div>
                <div class="form-group">
                    <label style="display: block; margin-bottom: 0.4rem; font-weight: 600; font-size: 0.85rem; color: var(--text-secondary);">프로젝트 기간</label>
                    <input type="text" id="proj-period" value="${isEdit ? project.period : ''}" placeholder="예: 2026.01 - 2026.06" style="width: 100%; padding: 0.75rem; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-tertiary); color: var(--text-primary);" required>
                </div>
            </div>
            
            <div class="form-group">
                <label style="display: block; margin-bottom: 0.4rem; font-weight: 600; font-size: 0.85rem; color: var(--text-secondary);">프로젝트 제목</label>
                <input type="text" id="proj-title" value="${isEdit ? project.title : ''}" placeholder="프로젝트 제목을 입력하세요" style="width: 100%; padding: 0.75rem; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-tertiary); color: var(--text-primary);" required>
            </div>
            
            <div class="form-group">
                <label style="display: block; margin-bottom: 0.4rem; font-weight: 600; font-size: 0.85rem; color: var(--text-secondary);">요약 설명</label>
                <textarea id="proj-summary" rows="2" placeholder="간단한 요약 한 문장을 적어주세요." style="width: 100%; padding: 0.75rem; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-tertiary); color: var(--text-primary); resize: vertical;" required>${isEdit ? project.summary : ''}</textarea>
            </div>
            
            <div class="form-group">
                <label style="display: block; margin-bottom: 0.4rem; font-weight: 600; font-size: 0.85rem; color: var(--text-secondary);">기관명</label>
                <input type="text" id="proj-role" value="${isEdit ? project.role : ''}" placeholder="예: 대학일자리플러스센터, (주)나인코어" style="width: 100%; padding: 0.75rem; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-tertiary); color: var(--text-primary);" required>
            </div>
            
            <div class="form-group">
                <label style="display: block; margin-bottom: 0.4rem; font-weight: 600; font-size: 0.85rem; color: var(--text-secondary);">대표 이미지 1 업로드 (선택사항)</label>
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <input type="file" id="proj-image" accept="image/*" style="display: none;">
                    <button type="button" onclick="document.getElementById('proj-image').click()" class="btn btn-outline" style="padding: 0.6rem 1.2rem; font-size: 0.85rem;"><i class="fa-solid fa-image icon-left"></i>${isEdit && project.imageUrl ? '이미지 변경' : '이미지 선택'}</button>
                    <span id="proj-image-filename" style="font-size: 0.85rem; color: var(--text-muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 250px;">
                        ${isEdit && project.imageUrl ? '등록된 이미지가 있습니다.' : '선택된 파일 없음'}
                    </span>
                    <button type="button" id="btn-delete-proj-image" class="btn btn-outline" style="padding: 0.6rem 1rem; font-size: 0.85rem; color: #f43f5e; border-color: rgba(244,63,94,0.2); display: ${isEdit && project.imageUrl ? 'inline-flex' : 'none'};"><i class="fa-solid fa-trash"></i></button>
                </div>
                <div id="proj-image-preview-wrapper" style="margin-top: 0.8rem; display: ${isEdit && project.imageUrl ? 'block' : 'none'};">
                    <img id="proj-image-preview" src="${isEdit && project.imageUrl ? project.imageUrl : ''}" style="max-height: 120px; border-radius: 6px; border: 1px solid var(--border-color); object-fit: cover;">
                </div>
            </div>
            
            <div class="form-group">
                <label style="display: block; margin-bottom: 0.4rem; font-weight: 600; font-size: 0.85rem; color: var(--text-secondary);">대표 이미지 2 업로드 (선택사항)</label>
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <input type="file" id="proj-image2" accept="image/*" style="display: none;">
                    <button type="button" onclick="document.getElementById('proj-image2').click()" class="btn btn-outline" style="padding: 0.6rem 1.2rem; font-size: 0.85rem;"><i class="fa-solid fa-image icon-left"></i>${isEdit && project.imageUrl2 ? '이미지 변경' : '이미지 선택'}</button>
                    <span id="proj-image-filename2" style="font-size: 0.85rem; color: var(--text-muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 250px;">
                        ${isEdit && project.imageUrl2 ? '등록된 이미지가 있습니다.' : '선택된 파일 없음'}
                    </span>
                    <button type="button" id="btn-delete-proj-image2" class="btn btn-outline" style="padding: 0.6rem 1rem; font-size: 0.85rem; color: #f43f5e; border-color: rgba(244,63,94,0.2); display: ${isEdit && project.imageUrl2 ? 'inline-flex' : 'none'};"><i class="fa-solid fa-trash"></i></button>
                </div>
                <div id="proj-image-preview-wrapper2" style="margin-top: 0.8rem; display: ${isEdit && project.imageUrl2 ? 'block' : 'none'};">
                    <img id="proj-image-preview2" src="${isEdit && project.imageUrl2 ? project.imageUrl2 : ''}" style="max-height: 120px; border-radius: 6px; border: 1px solid var(--border-color); object-fit: cover;">
                </div>
            </div>
            
            <div class="form-group">
                <label style="display: block; margin-bottom: 0.4rem; font-weight: 600; font-size: 0.85rem; color: var(--text-secondary);">유튜브 링크 (선택사항)</label>
                <input type="text" id="proj-youtube" value="${isEdit && project.youtubeUrl ? project.youtubeUrl : ''}" placeholder="예: https://www.youtube.com/watch?v=xxxxxx" style="width: 100%; padding: 0.75rem; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-tertiary); color: var(--text-primary);">
            </div>
            
            <div class="form-group">
                <label style="display: block; margin-bottom: 0.4rem; font-weight: 600; font-size: 0.85rem; color: var(--text-secondary);">구글 드라이브 동영상 링크 (선택사항)</label>
                <input type="text" id="proj-google-drive" value="${isEdit && project.googleDriveUrl ? project.googleDriveUrl : ''}" placeholder="예: https://drive.google.com/file/d/xxxxxx/view" style="width: 100%; padding: 0.75rem; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-tertiary); color: var(--text-primary);">
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
                <div class="form-group">
                    <label style="display: block; margin-bottom: 0.4rem; font-weight: 600; font-size: 0.85rem; color: var(--text-secondary);">영상 재생 시작 시간 (분:초 또는 초 단위, 선택사항)</label>
                    <input type="text" id="proj-youtube-start" value="${isEdit && project.youtubeStart ? project.youtubeStart : ''}" placeholder="예: 1:25 또는 85" style="width: 100%; padding: 0.75rem; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-tertiary); color: var(--text-primary);">
                </div>
                <div class="form-group">
                    <label style="display: block; margin-bottom: 0.4rem; font-weight: 600; font-size: 0.85rem; color: var(--text-secondary);">영상 재생 종료 시간 (분:초 또는 초 단위, 선택사항)</label>
                    <input type="text" id="proj-youtube-end" value="${isEdit && project.youtubeEnd ? project.youtubeEnd : ''}" placeholder="예: 2:30 또는 150" style="width: 100%; padding: 0.75rem; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-tertiary); color: var(--text-primary);">
                </div>
            </div>
            
            <div style="display: flex; justify-content: flex-end; gap: 1rem; margin-top: 1rem; border-top: 1px solid var(--border-color); padding-top: 1.5rem;">
                <button type="button" onclick="closeAdminModal()" class="btn btn-outline" style="padding: 0.6rem 1.5rem; font-size: 0.9rem;">취소</button>
                <button type="submit" class="btn btn-primary" style="padding: 0.6rem 1.5rem; font-size: 0.9rem;">저장</button>
            </div>
        </form>
    `;
    
    openAdminModal(modalTitleStr, formHtml);
    
    // 이미지 파일 비동기 변환 바인딩
    let selectedImageBase64 = isEdit && project.imageUrl ? project.imageUrl : '';
    let selectedImageBase64_2 = isEdit && project.imageUrl2 ? project.imageUrl2 : '';
    
    function alignImageSizes(callback) {
        if (!selectedImageBase64 || !selectedImageBase64_2) {
            if (callback) callback();
            return;
        }
        
        const img1 = new Image();
        const img2 = new Image();
        img1.crossOrigin = 'anonymous';
        img2.crossOrigin = 'anonymous';
        
        let loadedCount = 0;
        let failed = false;
        
        const onImgLoad = () => {
            if (failed) return;
            loadedCount++;
            if (loadedCount === 2) {
                try {
                    const w1 = img1.width;
                    const h1 = img1.height;
                    const w2 = img2.width;
                    const h2 = img2.height;
                    
                    if (w1 === w2 && h1 === h2) {
                        if (callback) callback();
                        return;
                    }
                    
                    const targetWidth = Math.min(w1, w2);
                    const targetHeight = Math.min(h1, h2);
                    
                    selectedImageBase64 = resizeAndCropImage(img1, targetWidth, targetHeight);
                    selectedImageBase64_2 = resizeAndCropImage(img2, targetWidth, targetHeight);
                    
                    // Update preview display on form
                    const previewImg = document.getElementById('proj-image-preview');
                    const previewImg2 = document.getElementById('proj-image-preview2');
                    if (previewImg) previewImg.src = selectedImageBase64;
                    if (previewImg2) previewImg2.src = selectedImageBase64_2;
                    
                    console.log(`[Image Alignment] Successfully aligned form images to ${targetWidth}x${targetHeight}`);
                } catch (err) {
                    console.error('[Image Alignment] Failed to align image sizes:', err);
                }
                if (callback) callback();
            }
        };
        
        const onImgError = (err) => {
            console.warn('[Image Alignment] Image load error during size alignment:', err);
            failed = true;
            if (callback) callback();
        };
        
        img1.onload = onImgLoad;
        img2.onload = onImgLoad;
        img1.onerror = onImgError;
        img2.onerror = onImgError;
        
        img1.src = selectedImageBase64;
        img2.src = selectedImageBase64_2;
    }
    
    setTimeout(() => {
        // 이미지 1 처리
        const fileInput = document.getElementById('proj-image');
        const filenameSpan = document.getElementById('proj-image-filename');
        const previewWrapper = document.getElementById('proj-image-preview-wrapper');
        const previewImg = document.getElementById('proj-image-preview');
        const deleteBtn = document.getElementById('btn-delete-proj-image');
        
        if (fileInput) {
            fileInput.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file) {
                    filenameSpan.textContent = file.name;
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        const img = new Image();
                        img.onload = () => {
                            selectedImageBase64 = compressAndResizeImage(img, 1024, 1024, 0.8);
                            previewImg.src = selectedImageBase64;
                            previewWrapper.style.display = 'block';
                            if (deleteBtn) deleteBtn.style.display = 'inline-flex';
                        };
                        img.src = event.target.result;
                    };
                    reader.readAsDataURL(file);
                }
            });
        }
        
        if (deleteBtn) {
            deleteBtn.addEventListener('click', () => {
                selectedImageBase64 = '';
                if (fileInput) fileInput.value = '';
                filenameSpan.textContent = '선택된 파일 없음';
                previewWrapper.style.display = 'none';
                previewImg.src = '';
                deleteBtn.style.display = 'none';
            });
        }

        // 이미지 2 처리
        const fileInput2 = document.getElementById('proj-image2');
        const filenameSpan2 = document.getElementById('proj-image-filename2');
        const previewWrapper2 = document.getElementById('proj-image-preview-wrapper2');
        const previewImg2 = document.getElementById('proj-image-preview2');
        const deleteBtn2 = document.getElementById('btn-delete-proj-image2');
        
        if (fileInput2) {
            fileInput2.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file) {
                    filenameSpan2.textContent = file.name;
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        const img = new Image();
                        img.onload = () => {
                            selectedImageBase64_2 = compressAndResizeImage(img, 1024, 1024, 0.8);
                            previewImg2.src = selectedImageBase64_2;
                            previewWrapper2.style.display = 'block';
                            if (deleteBtn2) deleteBtn2.style.display = 'inline-flex';
                        };
                        img.src = event.target.result;
                    };
                    reader.readAsDataURL(file);
                }
            });
        }
        
        if (deleteBtn2) {
            deleteBtn2.addEventListener('click', () => {
                selectedImageBase64_2 = '';
                if (fileInput2) fileInput2.value = '';
                filenameSpan2.textContent = '선택된 파일 없음';
                previewWrapper2.style.display = 'none';
                previewImg2.src = '';
                deleteBtn2.style.display = 'none';
            });
        }
    }, 100);
    
    const form = document.getElementById('project-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const saveBtn = form.querySelector('button[type="submit"]');
        if (saveBtn) {
            saveBtn.disabled = true;
            saveBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin icon-left"></i>저장 중...';
        }
        
        alignImageSizes(() => {
            const categoryVal = document.getElementById('proj-category').value;
            const titleVal = document.getElementById('proj-title').value.trim();
            const periodVal = document.getElementById('proj-period').value.trim();
            const summaryVal = document.getElementById('proj-summary').value.trim();
            const roleVal = document.getElementById('proj-role').value.trim();
            const youtubeUrlVal = document.getElementById('proj-youtube').value.trim();
            const youtubeStartVal = convertTimeToSeconds(document.getElementById('proj-youtube-start').value.trim());
            const youtubeEndVal = convertTimeToSeconds(document.getElementById('proj-youtube-end').value.trim());
            const googleDriveUrlVal = document.getElementById('proj-google-drive').value.trim();
            
            const descriptionVal = isEdit ? project.description : '';
            const highlightsVal = isEdit ? project.highlights : [];
            const techStackVal = isEdit ? project.techStack : [];
            
            let iconVal = 'fa-code';
            if (categoryVal === 'career') {
                iconVal = 'fa-graduation-cap';
            } else if (categoryVal === 'media') {
                iconVal = 'fa-video';
            }
            if (isEdit && project.icon) {
                iconVal = project.icon;
            }
            
            const yearMatch = periodVal.match(/\d{4}/);
            const yearVal = yearMatch ? yearMatch[0] : new Date().getFullYear().toString();
            
            let colorVal = 'var(--color-it-end)';
            let bgVal = 'rgba(225, 0, 255, 0.1)';
            let borderVal = 'rgba(225, 0, 255, 0.2)';
            
            if (categoryVal === 'career') {
                colorVal = 'var(--color-career-end)';
                bgVal = 'rgba(79, 172, 254, 0.1)';
                borderVal = 'rgba(79, 172, 254, 0.2)';
            } else if (categoryVal === 'media') {
                colorVal = 'var(--color-media-end)';
                bgVal = 'rgba(248, 87, 166, 0.1)';
                borderVal = 'rgba(248, 87, 166, 0.2)';
            }
            
            if (isEdit) {
                project.category = categoryVal;
                project.title = titleVal;
                project.period = periodVal;
                project.year = yearVal;
                project.summary = summaryVal;
                project.description = descriptionVal;
                project.role = roleVal;
                project.highlights = highlightsVal;
                project.techStack = techStackVal;
                project.icon = iconVal;
                project.accentColor = colorVal;
                project.accentBg = bgVal;
                project.accentBorder = borderVal;
                project.youtubeUrl = youtubeUrlVal;
                project.youtubeStart = youtubeStartVal;
                project.youtubeEnd = youtubeEndVal;
                project.googleDriveUrl = googleDriveUrlVal;
                project.imageUrl = selectedImageBase64;
                project.imageUrl2 = selectedImageBase64_2;
            } else {
                const newProj = {
                    id: `${categoryVal}-${Date.now()}`,
                    category: categoryVal,
                    title: titleVal,
                    period: periodVal,
                    year: yearVal,
                    summary: summaryVal,
                    description: descriptionVal,
                    role: roleVal,
                    highlights: highlightsVal,
                    techStack: techStackVal,
                    accentColor: colorVal,
                    accentBg: bgVal,
                    accentBorder: borderVal,
                    icon: iconVal,
                    youtubeUrl: youtubeUrlVal,
                    youtubeStart: youtubeStartVal,
                    youtubeEnd: youtubeEndVal,
                    googleDriveUrl: googleDriveUrlVal,
                    imageUrl: selectedImageBase64,
                    imageUrl2: selectedImageBase64_2
                };
                portfolioData.push(newProj);
            }
            
            saveAllData();
            renderPortfolioGrid();
            closeAdminModal();
        });
    });
}

window.deleteProject = function(projectId) {
    if (confirm('이 프로젝트를 삭제하시겠습니까?')) {
        portfolioData = portfolioData.filter(p => p.id !== projectId);
        saveAllData();
        renderPortfolioGrid();
    }
};

window.resetAllToDefault = function() {
    if (confirm('모든 데이터를 원래 템플릿의 초기값으로 초기화하시겠습니까? 작성하거나 수정한 데이터는 모두 소실됩니다.')) {
        localStorage.removeItem('competenciesData');
        localStorage.removeItem('portfolioData');
        localStorage.removeItem('journeyData');
        
        const payload = {
            portfolioData: defaultPortfolioData,
            journeyData: defaultJourneyData,
            competenciesData: defaultCompetenciesData
        };
        
        fetch('/api/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .finally(() => {
            window.location.reload();
        });
    }
};

window.openEditJourneyModal = function(journeyId) {
    const item = journeyData.find(j => j.id === journeyId);
    if (!item) return;
    
    renderJourneyForm(item, `타임라인 편집 - ${item.title}`);
};

window.openAddJourneyModal = function() {
    renderJourneyForm(null, '새 타임라인 항목 추가');
};

function renderJourneyForm(journeyItem = null, modalTitleStr) {
    const isEdit = !!journeyItem;
    
    const formHtml = `
        <form id="journey-form" style="display: flex; flex-direction: column; gap: 1.2rem;">
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
                <div class="form-group">
                    <label style="display: block; margin-bottom: 0.4rem; font-weight: 600; font-size: 0.85rem; color: var(--text-secondary);">구분</label>
                    <select id="journ-category" style="width: 100%; padding: 0.75rem; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-tertiary); color: var(--text-primary);" required>
                        <option value="education" ${isEdit && journeyItem.category === 'education' ? 'selected' : ''}>학력사항</option>
                        <option value="career" ${isEdit && journeyItem.category === 'career' ? 'selected' : ''}>경력사항</option>
                        <option value="cert" ${isEdit && journeyItem.category === 'cert' ? 'selected' : ''}>자격 및 수료사항</option>
                        <option value="writing" ${isEdit && journeyItem.category === 'writing' ? 'selected' : ''}>저작활동</option>
                    </select>
                </div>
                <div class="form-group">
                    <label style="display: block; margin-bottom: 0.4rem; font-weight: 600; font-size: 0.85rem; color: var(--text-secondary);">기간</label>
                    <input type="text" id="journ-period" value="${isEdit ? journeyItem.period : ''}" placeholder="예: 2025.03 - 2026.02" style="width: 100%; padding: 0.75rem; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-tertiary); color: var(--text-primary);" required>
                </div>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
                <div class="form-group">
                    <label style="display: block; margin-bottom: 0.4rem; font-weight: 600; font-size: 0.85rem; color: var(--text-secondary);">항목명 (학위/직무/자격증 등)</label>
                    <input type="text" id="journ-title" value="${isEdit ? journeyItem.title : ''}" placeholder="예: 직업상담사 2급 자격증 취득" style="width: 100%; padding: 0.75rem; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-tertiary); color: var(--text-primary);" required>
                </div>
                <div class="form-group">
                    <label style="display: block; margin-bottom: 0.4rem; font-weight: 600; font-size: 0.85rem; color: var(--text-secondary);">학교 / 기관 / 회사명</label>
                    <input type="text" id="journ-institution" value="${isEdit ? journeyItem.institution : ''}" placeholder="예: 한국산업인력공단" style="width: 100%; padding: 0.75rem; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-tertiary); color: var(--text-primary);" required>
                </div>
            </div>
            
            <div class="form-group">
                <label style="display: block; margin-bottom: 0.4rem; font-weight: 600; font-size: 0.85rem; color: var(--text-secondary);">상세 설명</label>
                <textarea id="journ-description" rows="3" placeholder="내용 및 수행 실적을 입력하세요." style="width: 100%; padding: 0.75rem; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-tertiary); color: var(--text-primary); resize: vertical;" required>${isEdit ? journeyItem.description : ''}</textarea>
            </div>
            
            <div style="display: flex; justify-content: flex-end; gap: 1rem; margin-top: 1rem; border-top: 1px solid var(--border-color); padding-top: 1.5rem;">
                <button type="button" onclick="closeAdminModal()" class="btn btn-outline" style="padding: 0.6rem 1.5rem; font-size: 0.9rem;">취소</button>
                <button type="submit" class="btn btn-primary" style="padding: 0.6rem 1.5rem; font-size: 0.9rem;">저장</button>
            </div>
        </form>
    `;
    
    openAdminModal(modalTitleStr, formHtml);
    
    const form = document.getElementById('journey-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const categoryVal = document.getElementById('journ-category').value;
        const periodVal = document.getElementById('journ-period').value.trim();
        const titleVal = document.getElementById('journ-title').value.trim();
        const institutionVal = document.getElementById('journ-institution').value.trim();
        const descriptionVal = document.getElementById('journ-description').value.trim();
        
        if (isEdit) {
            journeyItem.category = categoryVal;
            journeyItem.period = periodVal;
            journeyItem.title = titleVal;
            journeyItem.institution = institutionVal;
            journeyItem.description = descriptionVal;
        } else {
            const newItem = {
                id: `journey-${Date.now()}`,
                category: categoryVal,
                period: periodVal,
                title: titleVal,
                institution: institutionVal,
                description: descriptionVal
            };
            journeyData.push(newItem);
        }
        
        saveAllData();
        renderTimeline(getActiveJourneyFilter());
        closeAdminModal();
    });
}

window.deleteJourneyItem = function(journeyId) {
    if (confirm('이 타임라인 항목을 삭제하시겠습니까?')) {
        journeyData = journeyData.filter(j => j.id !== journeyId);
        saveAllData();
        renderTimeline(getActiveJourneyFilter());
    }
};

// ==========================================================================
// GitHub Integration and Server Update Persistence (via PAT)
// ==========================================================================

window.openGithubConfigModal = function() {
    let config = JSON.parse(localStorage.getItem('githubConfig')) || {
        pat: '',
        owner: '',
        repo: '',
        branch: 'main',
        path: 'data.json'
    };
    
    const formHtml = `
        <form id="github-config-form" style="display: flex; flex-direction: column; gap: 1.2rem;">
            <div class="form-group">
                <label style="display: block; margin-bottom: 0.4rem; font-weight: 600; font-size: 0.85rem; color: var(--text-secondary);">GitHub Personal Access Token (PAT)</label>
                <input type="password" id="gh-pat" value="${config.pat || ''}" placeholder="ghp_xxxxxxxxxxxxxxxxxxxx" style="width: 100%; padding: 0.75rem; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-tertiary); color: var(--text-primary);" required>
                <small style="color: var(--text-muted); font-size: 0.8rem; display: block; margin-top: 0.25rem;">* 토큰은 브라우저 로컬 스토리지에만 보관되며 외부에 노출되지 않습니다.</small>
            </div>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
                <div class="form-group">
                    <label style="display: block; margin-bottom: 0.4rem; font-weight: 600; font-size: 0.85rem; color: var(--text-secondary);">저장소 소유자 (Owner)</label>
                    <input type="text" id="gh-owner" value="${config.owner || ''}" placeholder="예: user-id" style="width: 100%; padding: 0.75rem; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-tertiary); color: var(--text-primary);" required>
                </div>
                <div class="form-group">
                    <label style="display: block; margin-bottom: 0.4rem; font-weight: 600; font-size: 0.85rem; color: var(--text-secondary);">저장소 이름 (Repo)</label>
                    <input type="text" id="gh-repo" value="${config.repo || ''}" placeholder="예: profile" style="width: 100%; padding: 0.75rem; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-tertiary); color: var(--text-primary);" required>
                </div>
            </div>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
                <div class="form-group">
                    <label style="display: block; margin-bottom: 0.4rem; font-weight: 600; font-size: 0.85rem; color: var(--text-secondary);">브랜치 (Branch)</label>
                    <input type="text" id="gh-branch" value="${config.branch || 'main'}" placeholder="예: main" style="width: 100%; padding: 0.75rem; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-tertiary); color: var(--text-primary);" required>
                </div>
                <div class="form-group">
                    <label style="display: block; margin-bottom: 0.4rem; font-weight: 600; font-size: 0.85rem; color: var(--text-secondary);">파일 경로 (Path)</label>
                    <input type="text" id="gh-path" value="${config.path || 'data.json'}" placeholder="예: data.json" style="width: 100%; padding: 0.75rem; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-tertiary); color: var(--text-primary);" required>
                </div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem; border-top: 1px solid var(--border-color); padding-top: 1.5rem;">
                <button type="button" onclick="clearGithubConfig()" class="btn btn-outline" style="padding: 0.6rem 1.2rem; font-size: 0.9rem; color: #f43f5e; border-color: rgba(244, 63, 94, 0.3); background: rgba(244, 63, 94, 0.05);">설정 삭제</button>
                <div style="display: flex; gap: 1rem;">
                    <button type="button" onclick="closeAdminModal()" class="btn btn-outline" style="padding: 0.6rem 1.5rem; font-size: 0.9rem;">취소</button>
                    <button type="submit" class="btn btn-primary" style="padding: 0.6rem 1.5rem; font-size: 0.9rem;">설정 저장</button>
                </div>
            </div>
        </form>
    `;
    
    openAdminModal('GitHub 연동 설정', formHtml);
    
    const form = document.getElementById('github-config-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newConfig = {
            pat: document.getElementById('gh-pat').value.trim(),
            owner: document.getElementById('gh-owner').value.trim(),
            repo: document.getElementById('gh-repo').value.trim(),
            branch: document.getElementById('gh-branch').value.trim(),
            path: document.getElementById('gh-path').value.trim()
        };
        localStorage.setItem('githubConfig', JSON.stringify(newConfig));
        alert('GitHub 연동 설정이 로컬 브라우저에 임시 저장되었습니다.');
        closeAdminModal();
    });
};

window.clearGithubConfig = function() {
    if (confirm('저장된 모든 GitHub 연동 설정을 삭제하시겠습니까? (로컬 브라우저에 저장 중인 토큰과 저장소 정보가 완전히 제거됩니다.)')) {
        localStorage.removeItem('githubConfig');
        alert('GitHub 연동 설정이 성공적으로 삭제되었습니다.');
        closeAdminModal();
    }
};

window.updateServerGithub = function() {
    const config = JSON.parse(localStorage.getItem('githubConfig'));
    if (!config || !config.pat || !config.owner || !config.repo || !config.branch || !config.path) {
        alert('먼저 "GitHub 연동 설정"을 완료해 주세요.');
        openGithubConfigModal();
        return;
    }
    
    const syncBtn = document.getElementById('btn-github-sync');
    const originalText = syncBtn.innerHTML;
    syncBtn.disabled = true;
    syncBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin" style="margin-right: 0.25rem;"></i>서버 업데이트 중...';
    
    const headers = {
        'Authorization': `token ${config.pat}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
    };
    
    // Step 1: GitHub 저장소의 images 폴더로 업로드할 이미지들을 확인하고 처리하는 헬퍼 함수
    const syncImagesToGithub = () => {
        const pathParts = config.path.split('/');
        pathParts.pop(); // Remove data.json filename
        const parentPath = pathParts.length > 0 ? pathParts.join('/') + '/' : '';
        
        const syncPromises = [];
        
        portfolioData.forEach(item => {
            // 개별 이미지 파일 동기화 헬퍼 함수
            const syncSingleImage = (urlField, filenameSuffix) => {
                const imgUrl = item[urlField];
                if (!imgUrl) return Promise.resolve();
                
                // 이미지 데이터가 Base64 형태인 경우
                if (imgUrl.startsWith('data:image/')) {
                    const matches = imgUrl.match(/^data:image\/([a-zA-Z0-9+]+);base64,(.+)$/);
                    if (!matches || matches.length !== 3) return Promise.resolve();
                    
                    const base64Data = matches[2];
                    const githubImagePath = `${parentPath}images/project-${item.id}${filenameSuffix}.jpg`;
                    const imageApiUrl = `https://api.github.com/repos/${config.owner}/${config.repo}/contents/${githubImagePath}`;
                    
                    // 해당 파일이 저장소에 이미 존재하는지 SHA 확인
                    return fetch(`${imageApiUrl}?ref=${config.branch}`, { headers })
                        .then(res => {
                            if (res.status === 404) return { sha: null };
                            if (!res.ok) throw new Error(`이미지 파일 SHA 조회 실패 (코드: ${res.status})`);
                            return res.json();
                        })
                        .then(fileMeta => {
                            const sha = fileMeta.sha;
                            const commitPayload = {
                                message: `upload project image: project-${item.id}${filenameSuffix}.jpg`,
                                content: base64Data,
                                branch: config.branch
                            };
                            if (sha) commitPayload.sha = sha;
                            
                            return fetch(imageApiUrl, {
                                method: 'PUT',
                                headers,
                                body: JSON.stringify(commitPayload)
                            });
                        })
                        .then(res => {
                            if (!res.ok) throw new Error(`GitHub 이미지 업로드 실패 (코드: ${res.status})`);
                            // 성공적으로 업로드 완료 후 이미지 경로를 상대 경로로 치환
                            item[urlField] = `images/project-${item.id}${filenameSuffix}.jpg`;
                        });
                }
                // 이미지 데이터가 로컬 서버의 상대 경로이고, 깃허브에 존재하지 않을 수 있는 경우
                else if (imgUrl.startsWith('images/')) {
                    const githubImagePath = `${parentPath}${imgUrl}`;
                    const imageApiUrl = `https://api.github.com/repos/${config.owner}/${config.repo}/contents/${githubImagePath}`;
                    
                    // GitHub 저장소에 이미 이미지가 존재하는지 확인
                    return fetch(`${imageApiUrl}?ref=${config.branch}`, { headers })
                        .then(res => {
                            if (res.status === 404) {
                                // 깃허브에 파일이 없을 경우 로컬 서버에서 이미지를 다운받아 깃허브로 업로드
                                return fetch(imgUrl)
                                    .then(localRes => {
                                        if (!localRes.ok) throw new Error(`로컬 서버에서 이미지 가져오기 실패: ${imgUrl}`);
                                        return localRes.blob();
                                    })
                                    .then(blob => {
                                        return new Promise((resolve, reject) => {
                                            const reader = new FileReader();
                                            reader.onloadend = () => {
                                                const base64Data = reader.result.split(',')[1];
                                                resolve(base64Data);
                                            };
                                            reader.onerror = reject;
                                            reader.readAsDataURL(blob);
                                        });
                                    })
                                    .then(base64Data => {
                                        const commitPayload = {
                                            message: `sync missing project image: ${imgUrl.split('/').pop()}`,
                                            content: base64Data,
                                            branch: config.branch
                                        };
                                        return fetch(imageApiUrl, {
                                            method: 'PUT',
                                            headers,
                                            body: JSON.stringify(commitPayload)
                                        });
                                    })
                                    .then(uploadRes => {
                                        if (!uploadRes.ok) throw new Error(`로컬 이미지 GitHub 동기화 실패 (코드: ${uploadRes.status})`);
                                    });
                            }
                            return Promise.resolve();
                        });
                }
                return Promise.resolve();
            };
            
            // 대표 이미지 1 동기화 프로미스 추가
            syncPromises.push(syncSingleImage('imageUrl', ''));
            // 대표 이미지 2 동기화 프로미스 추가
            syncPromises.push(syncSingleImage('imageUrl2', '-2'));
        });
        
        return Promise.all(syncPromises).then(() => {
            // 변경된 상대경로들을 로컬 스토리지에 최종 반영하고 목록 다시 렌더링
            localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
            renderPortfolioGrid();
        });
    };
    
    // Step 2: 이미지 업로드 완료 후, 최종 정제된 data.json 업로드 실행
    syncImagesToGithub()
        .then(() => {
            const url = `https://api.github.com/repos/${config.owner}/${config.repo}/contents/${config.path}?ref=${config.branch}`;
            return fetch(url, { headers });
        })
        .then(res => {
            if (res.status === 404) {
                return { sha: null };
            }
            if (!res.ok) {
                throw new Error(`저장소 메타데이터 조회 실패 (코드: ${res.status})`);
            }
            return res.json();
        })
        .then(fileMeta => {
            const sha = fileMeta.sha;
            
            const dataPayload = {
                portfolioData,
                journeyData,
                competenciesData
            };
            const jsonStr = JSON.stringify(dataPayload, null, 2);
            // Safe UTF-8 Base64 encoding
            const base64Content = btoa(unescape(encodeURIComponent(jsonStr)));
            
            const commitPayload = {
                message: `chore: update portfolio data.json via admin interface [${new Date().toLocaleDateString()}]`,
                content: base64Content,
                branch: config.branch
            };
            if (sha) {
                commitPayload.sha = sha;
            }
            
            return fetch(`https://api.github.com/repos/${config.owner}/${config.repo}/contents/${config.path}`, {
                method: 'PUT',
                headers,
                body: JSON.stringify(commitPayload)
            });
        })
        .then(res => {
            if (!res.ok) {
                throw new Error(`커밋 실패 (코드: ${res.status})`);
            }
            return res.json();
        })
        .then(commitResult => {
            alert('성공적으로 GitHub 저장소에 데이터와 신규 이미지를 업로드했습니다!\nGitHub Pages가 빌드된 후(보통 1~2분 소요) 다른 기기에서도 업데이트가 실시간 반영됩니다.');
        })
        .catch(err => {
            console.error(err);
            alert(`서버 업데이트 중 오류 발생: ${err.message}\n토큰 권한(repo 스코프 필수)이나 레포지토리 정보가 올바른지 확인하세요.`);
        })
        .finally(() => {
            syncBtn.disabled = false;
            syncBtn.innerHTML = originalText;
        });
};

window.downloadUploadedDataJson = function() {
    const config = JSON.parse(localStorage.getItem('githubConfig'));
    let downloadUrl = 'data.json'; // Default: local static url
    
    if (config && config.owner && config.repo && config.branch && config.path) {
        downloadUrl = `https://raw.githubusercontent.com/${config.owner}/${config.repo}/${config.branch}/${config.path}?t=${Date.now()}`;
    }
    
    console.log('다운로드할 데이터 파일 경로:', downloadUrl);
    
    fetch(downloadUrl)
        .then(res => {
            if (!res.ok) throw new Error(`데이터 파일 다운로드 실패 (상태 코드: ${res.status})`);
            return res.json();
        })
        .then(data => {
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
            const downloadAnchor = document.createElement('a');
            downloadAnchor.setAttribute("href", dataStr);
            downloadAnchor.setAttribute("download", config && config.path ? config.path.split('/').pop() : "data.json");
            document.body.appendChild(downloadAnchor);
            downloadAnchor.click();
            downloadAnchor.remove();
        })
        .catch(err => {
            console.error(err);
            alert(`서버에 업로드된 Json파일 로드 실패: ${err.message}\n(설정하신 GitHub 정보가 정확하거나 파일이 업로드되어 있는지 확인해 주세요.)`);
        });
};

