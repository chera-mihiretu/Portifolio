import {
  FaAws,
  FaCloud,
  FaGlobeAfrica,
  FaMedal,
  FaTrophy,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
} from 'react-icons/fa';
import type { IconType } from 'react-icons';

export const person = {
  name: 'Chera Mihiretu',
  title: 'AI Automation Engineer',
  identitySentence:
    'I build autonomous AI agents, self-running business workflows, and intelligent backend systems for companies that want to scale without scaling headcount.',
  email: 'cheramihiretu@gmail.com',
  cv: {
    url: '/assets/cv.pdf',
    downloadName: 'Chera_Mihiretu_CV.pdf',
  },
  codingProfiles: [
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/cheramihiretu',
      icon: '/assets/leetcode.svg',
    },
    {
      name: 'Codeforces',
      url: 'https://codeforces.com/profile/chera_mihiretu',
      icon: '/assets/codeforces.svg',
    },
  ],
} as const;

export const expertiseBar = [
  'AI Agent Development',
  'Workflow Automation',
  'LangChain · CrewAI · n8n . open claw',
  'AWS Cloud Infrastructure',
  'Backend Systems (Python · Golang · Node.js)',
] as const;

export type Project = {
  id: string;
  name: string;
  status: string;
  description: string;
  images: string[];
  logo: string | null;
  technologies: string[];
  github: string | null;
  demo: string | null;
  apkDownload: string | null;
};

export const projects: Project[] = [
  {
    id: 'PRJ-000',
    name: 'Stock Change Notification System',
    status: 'Live',
    description:
      'A high-frequency market monitoring system designed to bridge the gap between data availability and user awareness. By leveraging advanced web scraping and workflow automation, this application constantly monitors real-time stock data sources, detects minute-by-minute price or volume shifts, and instantly pushes alerts to users. It ensures traders never miss a market-moving event, no matter how small the interval.',
    images: [
      '/assets/projects/stock-monitor/hero.png',
      '/assets/projects/stock-monitor/workflow.png',
      '/assets/projects/stock-monitor/dashboard.png',
    ],
    logo: null,
    technologies: ['n8n', 'Web Scraping', 'Workflow Automation', 'Real-Time Alerts', 'REST API'],
    github: null,
    demo: null,
    apkDownload: null,
  },
  {
    id: 'PRJ-001',
    name: 'Pill Reminder',
    status: 'Deployed',
    description: 'Mobile app for medication management with clean architecture and offline support.',
    images: [
      '/assets/pill-reminder/landing-page.jpg',
      '/assets/pill-reminder/medicine-detail-page.jpg',
      '/assets/pill-reminder/edit-medicine.jpg',
      '/assets/pill-reminder/notification.jpg',
    ],
    logo: '/assets/pill-reminder/pill-reminder-logo.png',
    technologies: ['Flutter', 'Clean Architecture', 'TDD'],
    github: 'https://github.com/chera-mihiretu/pill-reminder',
    demo: null,
    apkDownload: '/assets/pill-reminder/app-release.apk',
  },
  {
    id: 'PRJ-002',
    name: 'Image Compression',
    status: 'Prototype',
    description: 'Python Flask API + Flutter app for custom image compression.',
    images: [
      '/assets/image-compressor/Screenshot_20250820_232558.jpg',
      '/assets/image-compressor/Screenshot_20250820_232555.jpg',
    ],
    logo: '/assets/image-compressor/image-compressor-logo.png',
    technologies: ['Python', 'Flask', 'Docker', 'Flutter'],
    github: null,
    demo: null,
    apkDownload: '/assets/image-compressor/app-release.apk',
  },
  {
    id: 'PRJ-003',
    name: 'IKnow',
    status: 'Live',
    description: 'Campus platform for study materials and job opportunities. Microservices architecture.',
    images: [
      '/assets/iknow/Screenshot from 2025-08-15 01-12-09.png',
      '/assets/iknow/Screenshot from 2025-08-15 01-11-29.png',
    ],
    logo: null,
    technologies: ['Golang', 'Next.js', 'Microservices', 'AI'],
    github: null,
    demo: 'https://lazyme.vercel.app',
    apkDownload: null,
  },
  {
    id: 'PRJ-004',
    name: 'Real-Time Digit Recognition',
    status: 'Experimental',
    description: 'Thread-pooled real-time prediction with GUI.',
    images: ['/assets/projects/number_recognition/1.png', '/assets/projects/number_recognition/2.gif'],
    logo: null,
    technologies: ['Python', 'TensorFlow', 'OpenCV'],
    github: 'https://github.com/chera-mihiretu/ML_Path',
    demo: null,
    apkDownload: null,
  },
  {
    id: 'PRJ-005',
    name: 'LocalizeAI',
    status: 'Research',
    description: 'Enabling local language speakers to use LLMs.',
    images: ['/assets/projects/localize-ai/1.jpg'],
    logo: null,
    technologies: ['Node.js', 'AWS Translate', 'Gemini'],
    github: 'https://github.com/biniyamNegasa/localize-ai',
    demo: null,
    apkDownload: null,
  },
  {
    id: 'PRJ-006',
    name: 'Fix-IT',
    status: 'Beta',
    description: 'AI-powered quiz generator from PDFs.',
    images: ['/assets/projects/fix-it/2.png'],
    logo: null,
    technologies: ['Golang', 'AI Agent', 'Next.js'],
    github: 'https://github.com/chera-mihiretu/Fix-IT',
    demo: 'https://fix-it-virid.vercel.app/',
    apkDownload: null,
  },
  {
    id: 'PRJ-007',
    name: '3-Commerce',
    status: 'Development',
    description: 'Mobile-first e-commerce platform.',
    images: ['/assets/projects/e-commerce/3.jpg'],
    logo: null,
    technologies: ['Flutter', 'Socket.IO', 'Clean Arch'],
    github: 'https://github.com/chera-mihiretu/2024-internship-mobile-tasks',
    demo: null,
    apkDownload: null,
  },
];

export type SkillCategory = {
  category: string;
  skills: string[];
  icon?: IconType;
};

export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming Languages',
    skills: ['Python', 'C++', 'Go', 'Dart', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    category: 'Web & App Development',
    skills: ['React.js', 'Tailwind CSS', 'Flutter', 'Next.js'],
  },
  {
    category: 'Databases & Backend',
    skills: ['Golang', 'Node js', 'MongoDB', 'Firebase', 'PostgreSQL', 'Redis'],
  },
  {
    category: 'DevOps & CI/CD',
    skills: ['AWS', 'Cloud Computing', 'Docker', 'GitHub Actions', 'Git'],
  },
  {
    category: 'AI & Machine Learning',
    skills: ['AI Agents', 'Computer Vision', 'TensorFlow', 'Gemini API'],
  },
  {
    category: 'Architecture',
    skills: ['Clean Architecture', 'TDD', 'Microservices', 'System Design'],
  },
];

export const education = [
  {
    institution: 'Adama Science and Technology University',
    degree: 'B.Sc. Software Engineering',
    status: 'In Progress',
    image: '/assets/education/astu.svg',
    details: 'Focus on Algorithms, Data Structures, and System Design. Mentoring students in CS topics.',
  },
  {
    institution: 'Africa To Silicon Valley (A2SV)',
    degree: 'Software Engineering Fellow',
    status: 'Graduated',
    image: '/assets/education/A2SV.svg',
    details: 'Backed by Google. Solved 1000+ DSA problems. Top percentile performance.',
  },
  {
    institution: 'ALX Africa',
    degree: 'AWS Cloud Computing',
    status: 'Certified',
    image: '/assets/education/alx.svg',
    details: 'Specialized in Cloud Architecture, Serverless Computing, and DevOps practices.',
  },
] as const;

export const achievements = [
  // Note: typed to keep optional fields accessible across the union.
  {
    title: 'AWS Solutions Architect',
    position: 'Associate (SAA-C03)',
    description:
      'Validated expertise in designing distributed systems on AWS. Skilled in architecture, security, and cost-optimization.',
    icon: FaAws,
    date: '2024',
    category: 'Certification',
    image: '/assets/achievement/saa.png',
    credly: 'https://www.credly.com/badges/51dc40c6-2d86-41d2-ad0f-9cf46c52b7d5/public_url',
  },
  {
    title: 'AWS Cloud Practitioner',
    position: 'Certified (CLF-C02)',
    description: 'Foundational understanding of AWS Cloud concepts, security, and compliance.',
    icon: FaCloud,
    date: '2024',
    category: 'Certification',
    image: '/assets/achievement/cp.png',
    credly: 'https://www.credly.com/badges/342ba2cc-278e-4244-9bbb-638d3e2972ec/public_url',
  },
  {
    title: 'ACPC Qualification',
    position: 'Qualified',
    description:
      'Qualified for the prestigious Arab and African Collegiate Programming Contest (ACPC), representing the top tier of competitive programmers.',
    icon: FaGlobeAfrica,
    date: '2024',
    category: 'International Contest',
    image: '/assets/achievement/icpc-2.png',
  },
  {
    title: 'A2SV Hackathon',
    position: 'Top 8',
    description: 'Built a Localized AI project supporting Ethiopian languages with LLMs.',
    icon: FaTrophy,
    date: '2024',
    category: 'Hackathon',
    image: '/assets/achievement/a2sv_hackathon.jpg',
  },
  {
    title: 'ICPC Ethiopian Collegiate',
    position: '12th Place',
    description: 'Ranked 12th nationwide in competitive programming contest.',
    icon: FaMedal,
    date: '2024',
    category: 'Competitive Programming',
    image: '/assets/achievement/icpc.png',
  },
] satisfies ReadonlyArray<{
  title: string;
  position: string;
  description: string;
  icon: IconType;
  date: string;
  category: string;
  image: string;
  credly?: string;
}>;

export const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/chera-mihiretu-a267472a2/',
    icon: FaLinkedin,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/chera-mihiretu',
    icon: FaGithub,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/chera_mihiretu/',
    icon: FaInstagram,
  },
  {
    name: 'Email',
    url: 'mailto:cheramihiretu@gmail.com',
    icon: FaEnvelope,
  },
] as const;

// If/when you add testimonials in the future, put them here.
export const testimonials: Array<{
  name: string;
  role?: string;
  company?: string;
  quote: string;
  href?: string;
}> = [];

