import type { I18n } from './types';

const ko: I18n = {
  nav: {
    links: { about: '소개', skills: '기술', caseStudy: '케이스 스터디', work: '작업', contact: '연락처', resume: '이력서' },
  },
  hero: {
    name: 'Bekzod Turgunov',
  titleTop: '프런트엔드 개발자',
  titleBottom: '사용자 경험에 집중하는',
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
      { label: '스택', value: 'Astro, Tailwind, Vercel, Resend' }
    ],
    problem: {
      title: '과제',
      body: 'KDSX는 AI 도구를 명확하게 설명하고 체험을 유도하는 현대적인 랜딩 페이지가 필요했습니다. 이전 버전은 촌스럽고 제품 가치를 제대로 보여주지 못했으며, 모바일 친화적이지도 않았습니다.'
    },
    research: {
      title: '제가 한 일',
      bullets: [
        '웹사이트 전체를 처음부터 다시 설계하고 개발해 더 빠르고 시각적으로 풍부하며 이해하기 쉽게 만들었습니다.',
        'iMac, iPad, iPhone 프레임 안에 KDSX 앱을 넣은 맞춤 목업을 제작해 방문자가 도구가 어떻게 작동하는지 바로 볼 수 있게 했습니다.',
        '사용자 정보를 받아 세 가지 핵심 앱을 무료로 체험할 수 있도록 즉시 안내하는 간단한 위저드 폼을 구축했습니다.'
      ]
    },
    design: {
      title: '결과',
      bullets: [
        '새 사이트는 깔끔하고 빠르며 전문적으로 다가와 사람들이 몇 초 만에 KDSX를 이해하고 더 많은 방문자가 직접 사용해 보도록 이끕니다.'
      ]
    },
    images: [
      { src: '/images/projects/before.png', alt: '리디자인 이전 KDSX 랜딩 페이지', caption: '리디자인 전 MVP 화면 — 텍스트 과다, 낮은 대비, 명확하지 않은 CTA.' },
      { src: '/images/projects/kdsx.png', alt: 'KDSX 랜딩 페이지 스크린샷', caption: '히어로, 사용 사례, 사회적 증거를 재구성한 데스크톱 화면.' }
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
