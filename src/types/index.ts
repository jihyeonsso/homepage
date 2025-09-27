// 프로젝트 관련 타입 정의
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: 'AI/ML' | '웹 개발' | '자동화' | '데이터 분석';
  role: string;
  period: string;
  githubUrl?: string;
  demoUrl?: string;
  achievements: string[];
  challenges: string[];
  solution: string;
}

// 기술 스택 관련 타입 정의
export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'AI & 데이터 분석' | '웹 서비스 개발' | '제품 기획 및 문제 해결';
  experience: string;
  projects: string[];
}

// 연락 폼 관련 타입 정의
export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

// 네비게이션 관련 타입 정의
export interface NavItem {
  title: string;
  href: string;
  description?: string;
}

// 타임라인 아이템 타입 정의
export interface TimelineItem {
  id: string;
  title: string;
  period: string;
  description: string;
  type: 'education' | 'experience' | 'achievement';
}

// 애니메이션 관련 타입 정의
export interface AnimationVariants {
  hidden: {
    opacity: number;
    y?: number;
    x?: number;
  };
  visible: {
    opacity: number;
    y?: number;
    x?: number;
    transition?: {
      duration?: number;
      delay?: number;
    };
  };
}

