import type { I18n } from './types';

const ko: I18n = {
  nav: {
    links: { about: '소개', skills: '기술', caseStudy: '사례 연구', work: '포트폴리오', contact: '연락처', resume: '이력서' },
  },
  hero: {
    name: '벡조드 투르구노프',
    titleTop: '프론트엔드 개발자',
    titleBottom: '사용자 경험에 집중하는',
    description: `비즈니스와 고객을 잇는 빠르고 의미 있는 웹사이트를 만듭니다. 서울에 거주하며 우즈베키스탄에서 왔습니다. 아이디어를 세련되고 접근성 높은 디지털 경험으로 구현하는 것을 즐깁니다.`,
    location: '대한민국, 서울',
    availability: '새로운 프로젝트 문의 가능',
    timezoneLabel: 'KST (GMT +9)',
    buttons: {
      contact: '연락하기',
      viewWork: '작업 보기'
    }
  },
  about: {
    intro: `웹은 살아있고 사용하기 쉬워야 한다는 신념을 가진 프론트엔드 개발자입니다. 사람들의 삶을 더 간편하게 만드는 빠르고 접근성 높은 디자인에 집중합니다.`,
    basedIn: '대한민국 서울 거주',
    languagesLine: '사용 언어: 영어 (주), 러시아어, 한국어'
  },
  contact: {
    heading: `함께 일해요`,
    intro: `새로운 프로젝트, 까다로운 버그 수정, 또는 아이디어에 대해 이야기하고 싶으신가요? 언제든지 편하게 연락주세요.`,
    ctas: { call: '전화하기', email: '이메일 보내기', telegram: '텔레그램 메시지' },
    form: {
      name: '이름',
      namePlaceholder: '성함',
      email: '이메일',
      emailPlaceholder: 'your@email.com',
      message: '메시지',
      messagePlaceholder: "어떤 내용이든 편하게 남겨주세요.",
      submit: '메시지 보내기'
    }
  },
  projects: {
    selectedWork: '주요 프로젝트'
  },
  caseStudy: {
    badge: '사례 연구',
    title: 'KDSX 랜딩 페이지',
    subtitle: '4주 만에 AI 지식 베이스 아이디어를 높은 전환율의 랜딩 페이지로 구현했습니다.',
    meta: [
      { label: '클라이언트', value: 'KDSX' },
      { label: '역할', value: '제품 디자이너 · 프론트엔드 개발자' },
      { label: '기간', value: '4주 · 2025년' },
      { label: '기술 스택', value: 'Astro, Tailwind, Vercel, Resend' }
    ],
    problem: {
      title: '도전 과제',
      body: 'KDSX는 AI 도구를 명확하게 설명하고 사용자가 사용해 보도록 유도하는 현대적인 랜딩 페이지가 필요했습니다. 이전 버전은 구식으로 보였고, 제품 가치를 잘 보여주지 못했으며, 모바일 친화적이지 않았습니다.'
    },
    research: {
      title: '수행 역할',
      bullets: [
        '더 빠르고, 시각적이며, 이해하기 쉽도록 전체 웹사이트를 처음부터 다시 디자인하고 재구축했습니다.',
        '방문자가 도구가 실제로 어떻게 작동하는지 볼 수 있도록 iMac, iPad, iPhone 프레임 안에 KDSX 앱의 맞춤형 목업을 만들었습니다.',
        '사용자 정보를 수집하고 KDSX의 세 가지 주요 앱 무료 평가판에 즉시 액세스할 수 있는 간단한 마법사 양식을 구축했습니다.'
      ]
    },
    design: {
      title: '결과',
      bullets: [
        '새로운 사이트는 깔끔하고, 빠르며, 전문적인 느낌을 주어 사용자들이 KDSX를 몇 초 만에 파악하고 더 많은 방문자가 사용해 보도록 동기를 부여하는 데 도움이 되었습니다.'
      ]
    },
    images: [
      { src: '/images/projects/before.png', alt: '재디자인 전 KDSX 랜딩 페이지 원본', caption: '재디자인 전 원본 MVP 화면 — 빽빽한 문구, 낮은 대비, 명확한 행동 유도 버튼 부재.' },
      { src: '/images/projects/kdsx.png', alt: 'KDSX 랜딩 페이지 스크린샷', caption: '재작업된 히어로 섹션, 사용 사례, 소셜 프루프를 강조하는 고해상도 데스크톱 화면.' }
    ],
    cta: { label: '라이브 사이트 방문', href: 'https://kdsx.vercel.app' }
  },
  skills: {
    title: '사용 기술',
    items: ['JavaScript','TypeScript','React','Astro','Tailwind','Sass']
  },
  footer: {
    reserved: '모든 권리 보유.',
    email: '이메일',
    github: 'GitHub',
    telegram: '텔레그램',
    resume: '이력서',
    bandName: '벡조드 투르구노프',
    maintenance: '이 사이트는 제가 직접 만들고 유지보수합니다. 무언가 고장났다면, 아마도 제가 그런 것일 겁니다 (그리고 곧 고칠 겁니다).',
  }
};

export default ko;
