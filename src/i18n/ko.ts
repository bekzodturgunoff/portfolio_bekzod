import type { I18n } from './types';

const ko: I18n = {
  nav: {
    links: { about: '소개', skills: '기술', work: '작업', contact: '연락처', resume: '이력서' },
  },
  hero: {
    name: 'Bekzod Turgunov',
    titleTop: '프런트엔드 개발자',
    titleBottom: '디자인과 사용자 경험에 집중하는',
    description: '저는 기업이 고객과 진정한 대화를 나눌 수 있도록 빠르고 의미 있는 웹사이트를 만듭니다. 서울에 거주하며, 우즈베키스탄 출신입니다. 아이디어를 세련되고 접근 가능한 디지털 경험으로 바꾸는 것을 좋아합니다.',
    location: '대한민국, 서울',
    availability: '새 프로젝트 가능',
    timezoneLabel: 'KST (GMT +9)'
  },
  about: {
    intro: '웹이 생생하고 사용하기 쉬워야 한다고 믿는 프런트엔드 개발자입니다. 사람들의 삶을 조금 더 단순하게 만드는 빠르고 접근 가능한 디자인에 집중합니다.',
    basedIn: '대한민국 서울 거주',
    languagesLine: '언어: 영어(기본), 러시아어, 한국어.'
  },
  contact: {
    heading: '연락하기',
    intro: '멋진 것을 만들고 싶거나, 까다로운 버그를 고치거나, 아이디어에 대해 이야기하고 싶으신가요? 언제든지 메시지 주세요 — 항상 대기 중입니다.',
    ctas: { call: '전화하기', email: '이메일 보내기', telegram: '텔레그램 메시지' }
  },
  projects: {
    selectedWork: '선정된 작업'
  },
  skills: {
    title: '사용하는 기술',
    items: ['JavaScript','TypeScript','React','Node','Astro','Tailwind','Sass','Sanity','Next.js','REST/GROQ']
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
