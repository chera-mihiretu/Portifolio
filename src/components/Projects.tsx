'use client';

import { motion } from 'framer-motion';
import { useState, MouseEvent } from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaDownload, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Modal from './Modal';

interface Project {
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
  colSpan: string;
}

const projectsData: Project[] = [
  {
    id: 'PRJ-001',
    name: 'Pill Reminder',
    status: 'Deployed',
    description: 'Mobile app for medication management with clean architecture and offline support.',
    images: [
      '/assets/pill-reminder/landing-page.jpg',
      '/assets/pill-reminder/medicine-detail-page.jpg',
      '/assets/pill-reminder/edit-medicine.jpg',
      '/assets/pill-reminder/notification.jpg'
    ],
    logo: '/assets/pill-reminder/pill-reminder-logo.png',
    technologies: ['Flutter', 'Clean Architecture', 'TDD'],
    github: 'https://github.com/chera-mihiretu/pill-reminder',
    demo: null,
    apkDownload: '/assets/pill-reminder/app-release.apk',
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    id: 'PRJ-002',
    name: 'Image Compression',
    status: 'Prototype',
    description: 'Python Flask API + Flutter app for custom image compression.',
    images: [
      '/assets/image-compressor/compress-promo.png',
      '/assets/image-compressor/Screenshot_20250820_232558.jpg',
      '/assets/image-compressor/Screenshot_20250820_232555.jpg'
    ],
    logo: '/assets/image-compressor/image-compressor-logo.png',
    technologies: ['Python', 'Flask', 'Docker', 'Flutter'],
    github: null,
    demo: null,
    apkDownload: '/assets/image-compressor/app-release.apk',
    colSpan: "col-span-1",
  },
  {
    id: 'PRJ-003',
    name: 'IKnow',
    status: 'Live',
    description: 'Campus platform for study materials and job opportunities. Microservices architecture.',
    images: [
      '/assets/iknow/Screenshot from 2025-08-15 01-12-09.png',
      '/assets/iknow/Screenshot from 2025-08-15 01-11-29.png'
    ],
    logo: null,
    technologies: ['Golang', 'Next.js', 'Microservices', 'AI'],
    github: null,
    demo: 'https://lazyme.vercel.app',
    apkDownload: null,
    colSpan: "col-span-1",
  },
  {
    id: 'PRJ-004',
    name: 'Real-Time Digit Recognition',
    status: 'Experimental',
    description: 'Thread-pooled real-time prediction with GUI.',
    images: [
      '/assets/projects/number_recognition/1.png',
      '/assets/projects/number_recognition/2.gif'
    ],
    logo: null,
    technologies: ['Python', 'TensorFlow', 'OpenCV'],
    github: 'https://github.com/chera-mihiretu/ML_Path',
    demo: null,
    apkDownload: null,
    colSpan: "col-span-1 md:col-span-2",
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
    colSpan: "col-span-1",
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
    colSpan: "col-span-1",
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
    colSpan: "col-span-1",
  },
  {
    id: 'PRJ-008',
    name: 'My Library', 
    status: 'Development',
    description: 'Application that tracks you reading progress and provides personalized recommendations.',
    images: [
      '/assets/my-library/my-lab-image-1.jpg',
      '/assets/my-library/my-lab-image-2.jpg'
    ],
    logo: '/assets/my-library/my-lab-logo.jpg',
    technologies: ['Flutter', 'Clean Architecture', 'TDD'],
    github: 'https://github.com/chera-mihiretu/my_book',
    demo: null,
    apkDownload: null,
    colSpan: "col-span-1",
  }
];

const statusColors: Record<string, string> = {
  'Deployed': 'bg-[#00FF94] text-black',
  'Live': 'bg-[#0047FF] text-white',
  'Prototype': 'bg-[#FFE600] text-black',
  'Beta': 'bg-[#FF006E] text-white',
  'Experimental': 'bg-[#FF006E] text-white',
  'Research': 'bg-[#0047FF] text-white',
  'Development': 'bg-[#FFE600] text-black'
};

const ProjectCard = ({ project, index, onClick }: { project: Project, index: number, onClick: (img: string) => void }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: MouseEvent) => {
    e.stopPropagation();
    if (project.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = (e: MouseEvent) => {
    e.stopPropagation();
    if (project.images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  const hasMultipleImages = project.images.length > 1;
  const rotate = index % 3 === 0 ? 'rotate-[0.5deg]' : index % 3 === 1 ? 'rotate-[-0.5deg]' : 'rotate-[0.3deg]';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      className={`group relative ${project.colSpan} ${rotate}`}
    >
      <div className="bg-[var(--card-bg)] border-[3px] border-[var(--card-border)] shadow-[5px_5px_0px_rgba(0,0,0,0.15)] hover:shadow-[7px_7px_0px_rgba(0,0,0,0.2)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300">
        
        {/* LOGO - Creative Placement */}
        {project.logo && (
          <div className="absolute -top-8 -right-6 z-30 w-24 h-24 md:w-28 md:h-28 border-[3px] border-[var(--card-border)] bg-[var(--card-bg)] shadow-[4px_4px_0px_var(--card-border)] rotate-6 group-hover:rotate-[8deg] transition-transform duration-300">
            <Image
              src={project.logo}
              alt={`${project.name} logo`}
              fill
              className="object-contain p-3"
            />
          </div>
        )}

        {/* Project ID - Corner */}
        <div className="absolute top-0 left-0 bg-black dark:bg-[#2A2A2A] text-[#FFE600] px-3 py-1.5 font-mono font-bold text-[10px] tracking-wider z-20 border-b-[3px] border-r-[3px] border-[#1A1A1A] dark:border-[#4A4A4A]">
          {project.id}
        </div>

        {/* Status Badge - Top Right */}
        <div className={`absolute top-0 right-0 ${statusColors[project.status]} px-4 py-1.5 font-bold text-[10px] tracking-widest uppercase border-l-[3px] border-b-[3px] border-[var(--card-border)] z-20`}>
          ● {project.status}
        </div>

        {/* Image Section */}
        <div
          className="relative h-64 w-full overflow-hidden cursor-pointer border-b-[3px] border-[var(--card-border)]"
          onClick={() => project.images[currentImageIndex] && onClick(project.images[currentImageIndex])}
        >
          {project.images[currentImageIndex] && (
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full"
            >
              <Image
                src={project.images[currentImageIndex]}
                alt={project.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          )}

          {/* Navigation Controls */}
          {hasMultipleImages && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-[var(--accent)] text-white border-[2px] border-white hover:bg-white hover:text-[var(--accent)] font-bold text-base transition-all z-20 rounded"
              >
                <FaChevronLeft className="mx-auto" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-[var(--accent)] text-white border-[2px] border-white hover:bg-white hover:text-[var(--accent)] font-bold text-base transition-all z-20 rounded"
              >
                <FaChevronRight className="mx-auto" />
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                {project.images.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 border-[2px] border-white rounded-full transition-all ${idx === currentImageIndex ? 'bg-[var(--accent)] w-6' : 'bg-white/50 w-1.5'}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-display mb-3 leading-tight group-hover:text-[var(--accent)] transition-colors">
            {project.name}
          </h3>

          {/* Description */}
          <p className="text-sm font-medium mb-5 leading-relaxed opacity-80">
            {project.description}
          </p>

          {/* Technologies - Colorful Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.technologies.map((tech: string, i: number) => {
              const colors = [
                'bg-[#FFE600] text-black',
                'bg-[#0047FF] text-white',
                'bg-[#FF006E] text-white',
                'bg-[#00FF94] text-black'
              ];
              return (
                <span
                  key={i}
                  className={`${colors[i % colors.length]} px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider border-[2px] border-[#1A1A1A] dark:border-[#4A4A4A] shadow-[2px_2px_0px_rgba(0,0,0,0.3)] dark:shadow-[2px_2px_0px_rgba(123,111,255,0.2)] hover:shadow-[3px_3px_0px_rgba(0,0,0,0.4)] dark:hover:shadow-[3px_3px_0px_rgba(123,111,255,0.3)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all`}
                >
                  {tech}
                </span>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-5 py-2.5 bg-black dark:bg-[#2A2A2A] text-white border-[2px] border-[#1A1A1A] dark:border-[#4A4A4A] hover:bg-[#FFE600] hover:text-black font-bold uppercase text-xs tracking-wider shadow-[3px_3px_0px_rgba(0,0,0,0.3)] dark:shadow-[3px_3px_0px_rgba(123,111,255,0.2)] hover:shadow-[5px_5px_0px_rgba(0,0,0,0.4)] dark:hover:shadow-[5px_5px_0px_rgba(123,111,255,0.3)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
              >
                <FaGithub className="text-sm" />
                CODE
              </a>
            )}
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-5 py-2.5 bg-[#0047FF] text-white border-[2px] border-[#1A1A1A] dark:border-[#4A4A4A] font-bold uppercase text-xs tracking-wider shadow-[3px_3px_0px_rgba(0,0,0,0.3)] dark:shadow-[3px_3px_0px_rgba(123,111,255,0.2)] hover:shadow-[5px_5px_0px_rgba(0,0,0,0.4)] dark:hover:shadow-[5px_5px_0px_rgba(123,111,255,0.3)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
              >
                <FaExternalLinkAlt className="text-sm" />
                LIVE
              </a>
            )}
            {project.apkDownload && (
              <a 
                href={project.apkDownload} 
                download 
                className="flex items-center gap-2 px-5 py-2.5 bg-[#FF006E] text-white border-[2px] border-[#1A1A1A] dark:border-[#4A4A4A] font-bold uppercase text-xs tracking-wider shadow-[3px_3px_0px_rgba(0,0,0,0.3)] dark:shadow-[3px_3px_0px_rgba(123,111,255,0.2)] hover:shadow-[5px_5px_0px_rgba(0,0,0,0.4)] dark:hover:shadow-[5px_5px_0px_rgba(123,111,255,0.3)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
              >
                <FaDownload className="text-sm" />
                APK
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<{ url: string; alt: string } | null>(null);

  return (
    <section id="projects" className="py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[var(--accent)] rotate-45 opacity-10 -z-10 blur-3xl" />
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-[var(--accent)] rounded-full opacity-5 -z-10 blur-3xl" />

      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 relative"
        >
          <div className="inline-block">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display mb-4 leading-none relative">
              <span className="inline-block">SYSTEM</span>
              <br />
              <span className="inline-block bg-[#FFE600] text-black px-5 py-2 -rotate-1 ml-0 md:ml-8">MODULES</span>
            </h2>
            <div className="h-2 bg-black w-full mt-4" />
          </div>
          <p className="text-base md:text-lg font-bold mt-6 max-w-2xl uppercase tracking-wide opacity-70">
            Deploying scalable solutions across the digital frontier.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              onClick={(img) => setSelectedImage({ url: img, alt: project.name })}
            />
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageUrl={selectedImage?.url || ''}
        alt={selectedImage?.alt || ''}
      />
    </section>
  );
}
