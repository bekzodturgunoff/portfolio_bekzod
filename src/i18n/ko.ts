import type { I18n } from './types';

const ko: I18n = {
  nav: {
    links: { about: '소개', skills: '기술', caseStudy: '케이스 스터디', work: '작업', contact: '연락처', resume: '이력서' },
  },
  hero: {
    name: 'Bekzod Turgunov',
    titleTop: '프런트엔드 개발자',
    titleBottom: '디자인과 사용자 경험에 집중하는',
    description: '저는 기업이 고객과 진정한 대화를 나눌 수 있도록 빠르고 의미 있는 웹사이트를 만듭니다. 서울에 거주하며, 우즈베키스탄 출신입니다. 아이디어를 세련되고 접근 가능한 디지털 경험으로 바꾸는 것을 좋아합니다.',
    location: '대한민국, 서울',
    availability: '새 프로젝트 가능',
    timezoneLabel: 'KST (GMT +9)',
    buttons: {
      contact: '연락하기',
      viewWork: '작업 보기'
    }
  },
  about: {
    intro: '웹이 생생하고 사용하기 쉬워야 한다고 믿는 프런트엔드 개발자입니다. 사람들의 삶을 조금 더 단순하게 만드는 빠르고 접근 가능한 디자인에 집중합니다.',
    basedIn: '대한민국 서울 거주',
    languagesLine: '언어: 영어(기본), 러시아어, 한국어.'
  },
  contact: {
    heading: '연락하기',
    intro: '멋진 것을 만들고 싶거나, 까다로운 버그를 고치거나, 아이디어에 대해 이야기하고 싶으신가요? 언제든지 메시지 주세요 — 항상 대기 중입니다.',
    ctas: { call: '전화하기', email: '이메일 보내기', telegram: '텔레그램 메시지' },
    form: {
      name: '이름',
      namePlaceholder: '당신의 이름',
      email: '이메일',
      emailPlaceholder: 'your@email.com',
      message: '메시지',
      messagePlaceholder: '무슨 생각이세요?',
      submit: '메시지 보내기'
    }
  },
  projects: {
    selectedWork: '선정된 작업'
  },
  caseStudy: {
    badge: '케이스 스터디',
    title: 'KDSX 랜딩 페이지',
    subtitle: '4주 만에 AI 지식 베이스 아이디어를 전환율 높은 런칭 페이지로 만들었습니다.',
    meta: [
      { label: '클라이언트', value: 'KDSX' },
      { label: '역할', value: '프로덕트 디자이너 · 프런트엔드 개발자' },
      { label: '기간', value: '4주 · 2025' },
      { label: '스택', value: 'Next.js, Tailwind, Vercel, Resend' }
    ],
    problem: {
      title: '과제',
      body: 'KDSX는 기술적인 AI 제품을 운영팀에게 빠르게 설명하면서 가입까지 이어지기를 원했습니다. 기존 MVP 페이지는 정보가 산만하고 가치 제안이 흐릿했으며, 모바일 전환율이 특히 낮았습니다.'
    },
    research: {
      title: '인사이트',
      bullets: [
        '초기 사용자를 6명 인터뷰해 “즉시 답변”과 “Slack 연동” 메시지가 결정적이라는 점을 확인했습니다.',
        '경쟁사 8곳을 벤치마킹해 대부분이 사회적 증거와 통합 섹션을 첫 화면 아래에 숨기고 있다는 패턴을 발견했습니다.',
        '가입 플로우를 맵핑해 모바일에서 40%가 이탈하던 두 개의 마찰 지점을 찾아냈습니다.'
      ]
    },
    design: {
      title: '디자인 & 빌드',
      bullets: [
        'Figma에서 세 가지 히어로 버전을 제작했고, 사용자 테스트에서 대화형 헤드라인과 라이브 데모 프리뷰가 가장 높은 반응을 이끌었습니다.',
        'Tailwind로 모듈형 섹션 시스템을 구축해 팀이 새로운 블록(사용 사례, 통합)을 1시간 안에 추가할 수 있도록 했습니다.',
        '이미지 최적화와 엣지 캐싱, Resend 기반 웨이팅 리스트 폼을 포함한 Next.js 프로덕션 빌드를 제공했습니다.'
      ]
    },
    impact: {
      title: '성과',
      metrics: [
        { value: '+38%', label: '런칭 첫 달 가입 전환율 증가' },
        { value: '4주', label: '컨셉부터 런칭까지' },
        { value: '-24%', label: '모바일 이탈률 감소' }
      ],
      body: '숫자뿐 아니라, 이 모듈 시스템 덕분에 팀은 추가 디자인 지원 없이도 세 번의 페이지 업데이트를 더 출시할 수 있었습니다. 브랜드는 엔터프라이즈 고객에게도 신뢰를 주면서도 가볍고 빠르게 유지됩니다.'
    },
    images: [
      { src: '/images/projects/kdsx.png', alt: 'KDSX 랜딩 페이지 스크린샷', caption: '히어로, 사용 사례, 사회적 증거를 재구성한 데스크톱 화면.' },
      { src: '/images/projects/kdsx.svg', alt: 'KDSX 히어로 일러스트', caption: '히어로 상태와 온보딩 이메일에 사용된 맞춤 일러스트 세트.' }
    ],
    cta: { label: '라이브 사이트 보기', href: 'https://kdsx.vercel.app' }
  },
  skills: {
    title: '사용하는 기술',
    items: ['JavaScript','TypeScript','React','Astro','Tailwind','Sass', "Git"]
  },
  footer: {
    reserved: '판권 소유.',
    email: '이메일',
    github: 'GitHub',
    telegram: '텔레그램',
    resume: '이력서',
    bandName: 'Bekzod Turgunov',
    maintenance: '이 사이트는 제가 직접 만들고 관리합니다. 문제가 생기면 아마 제가 고장 낸 것입니다 (곧 고칠게요).',
  }
};

export default ko;
