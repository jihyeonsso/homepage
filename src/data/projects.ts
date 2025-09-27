import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'ai-chatbot',
    title: 'AI 챗봇 서비스',
    description: '자연어 처리를 활용한 고객 상담 챗봇 개발',
    longDescription: '고객 문의를 자동으로 처리하고 적절한 답변을 제공하는 AI 챗봇을 개발했습니다. 자연어 처리 기술을 활용하여 고객의 의도를 파악하고, 적절한 응답을 생성하는 시스템을 구축했습니다.',
    image: '/images/projects/ai-chatbot.jpg',
    technologies: ['Python', 'TensorFlow', 'OpenAI API', 'FastAPI', 'PostgreSQL'],
    category: 'AI/ML',
    role: 'AI Engineer',
    period: '2024.03 - 2024.06',
    githubUrl: 'https://github.com/jihyun/ai-chatbot',
    demoUrl: 'https://ai-chatbot-demo.vercel.app',
    achievements: [
      '고객 문의 응답률 95% 달성',
      '평균 응답 시간 2초 이내 단축',
      '고객 만족도 4.8/5.0 달성'
    ],
    challenges: [
      '다양한 고객 문의 패턴 이해',
      '실시간 응답 속도 최적화',
      '정확한 의도 파악 알고리즘 개발'
    ],
    solution: 'BERT 모델을 활용한 의도 분류와 GPT API를 통한 자연스러운 응답 생성으로 문제를 해결했습니다.'
  },
  {
    id: 'portfolio-website',
    title: '포트폴리오 웹사이트',
    description: 'Next.js와 TypeScript를 활용한 반응형 포트폴리오 웹사이트',
    longDescription: '개인 브랜딩과 프로젝트 소개를 위한 포트폴리오 웹사이트를 개발했습니다. 모던한 UI/UX와 반응형 디자인을 적용하여 다양한 디바이스에서 최적의 사용자 경험을 제공합니다.',
    image: '/images/projects/portfolio.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion'],
    category: '웹 개발',
    role: 'Full-stack Developer',
    period: '2024.09 - 2024.10',
    githubUrl: 'https://github.com/jihyun/portfolio',
    demoUrl: 'https://jihyun-portfolio.vercel.app',
    achievements: [
      'Lighthouse 성능 점수 95+ 달성',
      '모든 디바이스에서 완벽한 반응형 구현',
      'SEO 최적화로 검색 노출 개선'
    ],
    challenges: [
      '다양한 디바이스 대응',
      '성능 최적화',
      '접근성 표준 준수'
    ],
    solution: 'Next.js의 Image 최적화와 코드 스플리팅을 활용하여 성능을 개선하고, WCAG 2.1 AA 기준을 준수하여 접근성을 확보했습니다.'
  },
  {
    id: 'data-analysis-dashboard',
    title: '데이터 분석 대시보드',
    description: '실시간 데이터 시각화 및 분석 대시보드 구축',
    longDescription: '비즈니스 데이터를 실시간으로 수집하고 시각화하는 대시보드를 개발했습니다. 다양한 차트와 그래프를 통해 데이터 인사이트를 제공하고, 의사결정을 지원합니다.',
    image: '/images/projects/dashboard.jpg',
    technologies: ['Python', 'Pandas', 'Plotly', 'Streamlit', 'PostgreSQL'],
    category: '데이터 분석',
    role: 'Data Analyst',
    period: '2024.01 - 2024.04',
    githubUrl: 'https://github.com/jihyun/data-dashboard',
    achievements: [
      '실시간 데이터 처리 성능 99.9% 달성',
      '데이터 시각화 응답 시간 1초 이내',
      '사용자 만족도 4.7/5.0 달성'
    ],
    challenges: [
      '대용량 데이터 실시간 처리',
      '직관적인 데이터 시각화',
      '사용자 친화적 인터페이스 설계'
    ],
    solution: 'Pandas와 NumPy를 활용한 효율적인 데이터 처리와 Plotly를 통한 인터랙티브 시각화로 문제를 해결했습니다.'
  }
];

