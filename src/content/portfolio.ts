import {
  FaAws,
  FaCloud,
  FaGlobeAfrica,
  FaMedal,
  FaTrophy,
} from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import type { IconType } from 'react-icons';

export const person = {
  name: 'Chera Mihiretu',
  title: 'AI Automation Engineer',
  identitySentence:
    'I build autonomous AI agents, self-running business workflows, and intelligent backend systems for companies that want to scale without scaling headcount.',
  upwork: 'https://www.upwork.com/freelancers/~0146654bf4de11a784',
  upworkBadge: 'Top Rated',
  featured: {
    name: '8D Audio Experience',
    tagline: 'Chrome extension · immersive 3D spatial audio',
    blurb: 'Turns any browser audio into real-time 8D spatial sound. Loved by users worldwide.',
    icon: '/assets/8d-audio/icon128.png',
    url: 'https://chromewebstore.google.com/detail/8d-audio-experience/cacacomeanpngjabbliegpmmpbpmbmkm',
  },
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

export const flagship = {
  name: 'e-school.et',
  url: 'https://e-school.et',
  status: 'Live',
  headline: 'e-school.et — one platform, a private address for every school',
  oneLine:
    'Schools join one network and still keep their own door: a public site, a staff login, and tools to run classes, courses, and people.',
  short:
    'Multi-tenant school platform. Each school gets its own subdomain, public page, and roles for directors, teachers, staff, and students. Live at e-school.et.',
  medium:
    'I built e-school.et, a host-based school platform where the web address is the school. A principal does not share a generic dashboard with every other school. Families open north-hall.e-school.et and see that school’s name, story, and login. Directors, teachers, office staff, and students sign in on that same address, each with a different workspace. The operator sits above the schools on admin.e-school.et: create a school, send the director their first login, list who is on the network, and pause a school without deleting its data. Schools stay independent. The network stays in one product.',
  problem:
    'Most school software puts every campus inside one shared login. Families cannot tell which school they are on. Principals cannot own a public address. Operators who want to host many schools end up copying the same app, or giving every school the keys to everyone else’s data. Schools need a public face and an office. Operators need a way to open and pause those schools without running them.',
  premise: 'e-school.et is one product with two worlds that never mix.',
  worlds: [
    {
      title: 'For a school',
      points: [
        'Its own address, such as north-hall.e-school.et, with the school name on the door.',
        'A public page the director can rewrite: hero, about, address, and how staff sign in. The layout stays one clear template.',
        'Separate sign-in for the director, teachers, office staff, and students. A teacher cannot open director settings. Staff cannot manage the teacher roster.',
        'Office tools for people and the timetable shape of the school: teachers, staff, and students; rooms and class sections (7A, 7B, and onward); courses tied to grade levels, with one teacher per course on a section.',
        'First-time director setup: temporary password, a permanent username, and a three-letter school code, then day-to-day work on the school’s own host.',
      ],
    },
    {
      title: 'For the operator',
      points: [
        'A locked console on admin.e-school.et to create a school from a name and director email, resend setup credentials, and suspend or reactivate a school. Suspended schools go offline. Their data stays.',
        'A public directory of schools on the network home, and a contact inbox from the main site.',
        'No access to a school’s grades, classes, or public copy. The operator hosts the network. The school runs the school.',
      ],
    },
    {
      title: 'For families',
      points: [
        'A calm public page on the school’s own address, plus a login when they already belong there. The main site, e-school.et, explains the network. It is not a campus.',
      ],
    },
  ],
  buyer: [
    {
      title: 'Own address',
      body: 'The school’s name is the URL, not a row in someone else’s portal.',
    },
    {
      title: 'Hard walls between schools',
      body: 'Each school’s data lives in its own database schema. A session from one school is useless on another.',
    },
    {
      title: 'Roles match the building',
      body: 'Director, teacher, staff, and student are different jobs, not one admin checkbox.',
    },
    {
      title: 'An operator can grow a network',
      body: 'Add a school, pause it, feature it, and read inbound messages without impersonating the principal.',
    },
    {
      title: 'Already deployed',
      body: 'The product runs in production on Railway at e-school.et.',
    },
  ],
  built:
    'Next.js frontend, Node backend, Postgres. The hostname chooses the school. The session chooses the person. Business rules live in use cases, not in the page or the HTTP handler. Sign-in is protected with Turnstile. Cookies are host-only, so an admin session never travels to a school site.',
  who: 'School groups, dioceses, and education operators who want many independent schools on one platform. Also founders who need the same pattern: many customers, one product, a private front door for each.',
  cta: 'Need the same shape for schools, clinics, or any network of independent sites? I design and ship host-based products: one platform, a private address per customer, and an operator console that cannot see inside their day-to-day work.',
  outOfScope: 'Grades, attendance, a parent portal, and billing are not in this version.',
  skills: [
    'Multi-tenant SaaS',
    'Next.js',
    'Node.js',
    'PostgreSQL',
    'Role-based access',
    'Subdomain routing',
    'Authentication',
    'Clean architecture',
    'Railway',
  ],
  images: [
    '/assets/projects/e-school/hero.png',
    '/assets/projects/e-school/what-we-do.png',
  ],
} as const;

export const expertiseBar = [
  'Multi-tenant SaaS',
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
  clientSource?: string;
};

export const projects: Project[] = [
  {
    id: 'PRJ-008',
    name: flagship.name,
    status: flagship.status,
    description: flagship.medium,
    images: [...flagship.images],
    logo: null,
    technologies: [...flagship.skills],
    github: null,
    demo: flagship.url,
    apkDownload: null,
  },
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
    clientSource: 'Upwork client',
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
    title: 'Upwork Top Rated',
    position: 'Freelancer badge',
    description:
      'Earned Upwork’s Top Rated badge for consistent delivery, strong client feedback, and a high job success score across AI automation and backend engineering contracts.',
    icon: SiUpwork,
    date: '2026',
    category: 'Freelance',
    image: '/assets/achievement/upwork-top-rated.svg',
    link: {
      url: person.upwork,
      label: 'View Upwork profile',
    },
  },
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
  link?: {
    url: string;
    label: string;
  };
}>;

export const socialLinks = [
  {
    name: 'Hire me on Upwork · Top Rated',
    url: person.upwork,
    icon: SiUpwork,
  },
] as const;

export const testimonials: Array<{
  name: string;
  role?: string;
  company?: string;
  quote: string;
  href?: string;
  rating?: number;
  date?: string;
  source?: string;
}> = [
  {
    name: 'Upwork Client',
    role: 'Web app pre-launch QA',
    date: 'May 17, 2026',
    rating: 5,
    source: 'Upwork · Endorsed Reliable',
    quote:
      'It was a pleasure working with Chera! I needed someone to do QA testing for my app and he delivered great work promptly and even took his time to think beyond the project scope and give me additional UX/UI tips after testing my app. Would highly recommend others to hire Chera for app testing!',
    href: person.upwork,
  },
  {
    name: 'Blue_ GachaBerry',
    date: 'May 9, 2026',
    rating: 5,
    source: 'Chrome Web Store',
    quote:
      "Absolutely amazing! Incredible customization, great controls, easy to use UI, and much much more! Safe to say I'm going to use this extension a LOT!",
    href: person.featured.url,
  },
  {
    name: 'Jaap Thind',
    date: 'Feb 15, 2026',
    rating: 5,
    source: 'Chrome Web Store',
    quote:
      'Tested the 8D audio on my new AirPods 4 and the experience was incredible. Sound literally feels like it is moving in a 360-degree circle around your head — it genuinely feels like sitting in the middle of a live concert hall.',
    href: person.featured.url,
  },
  {
    name: 'Amanuel Yirgalem',
    date: 'Feb 22, 2026',
    rating: 5,
    source: 'Chrome Web Store',
    quote:
      'Nice — the thing I like most is that it is fast and automatically applied when music is playing.',
    href: person.featured.url,
  },
  {
    name: 'Aziz Rakhimov',
    date: 'Mar 19, 2026',
    rating: 5,
    source: 'Chrome Web Store',
    quote: 'Works exactly like I expected, great product.',
    href: person.featured.url,
  },
];

