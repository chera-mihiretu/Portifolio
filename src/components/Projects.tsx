'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useState, MouseEvent, useRef } from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt, FaDownload, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Modal from './Modal';

const projectsData = [
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
  }
];

const ProjectCard = ({ project, index, onClick }: { project: any, index: number, onClick: (img: string) => void }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
    if (!ref.current) return;
    const { left, top } = ref.current.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className={`group relative rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] overflow-hidden ${project.colSpan}`}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(121, 40, 202, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* Image Section */}
      <div
        className="relative h-64 w-full overflow-hidden cursor-pointer"
        onClick={() => project.images[currentImageIndex] && onClick(project.images[currentImageIndex])}
      >
        {project.images[currentImageIndex] && (
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-full"
          >
            <Image
              src={project.images[currentImageIndex]}
              alt={project.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
            />
          </motion.div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-80" />

        {/* Navigation Controls */}
        {hasMultipleImages && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white/70 hover:bg-black/80 hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white/70 hover:bg-black/80 hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
            >
              <FaChevronRight />
            </button>

            {/* Image Indicators */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
              {project.images.map((_: any, idx: number) => (
                <div
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'bg-[var(--accent)] w-3' : 'bg-white/30'
                    }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Status Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono text-[var(--accent)] flex items-center gap-2 z-20">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
          {project.status}
        </div>

        {/* Project ID */}
        <div className="absolute top-4 left-4 text-xs font-mono text-white/40 z-20">
          {project.id}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 relative z-20 -mt-12">
        <div className="glass-panel p-5 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] backdrop-blur-xl shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
              {project.name}
            </h3>
            <div className="flex gap-3">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-colors">
                  <FaGithub className="text-lg" />
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-colors">
                  <FaExternalLinkAlt className="text-lg" />
                </a>
              )}
              {project.apkDownload && (
                <a href={project.apkDownload} download className="text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-colors">
                  <FaDownload className="text-lg" />
                </a>
              )}
            </div>
          </div>

          <p className="text-sm text-[var(--foreground)]/70 mb-4 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech: string, i: number) => (
              <span
                key={i}
                className="px-2 py-1 text-[10px] uppercase tracking-wider font-medium rounded bg-[var(--background)] text-[var(--foreground)]/80 border border-[var(--card-border)]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 text-[10px] text-[var(--foreground)]/50">
                +{project.technologies.length - 4}
              </span>
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
    <section id="projects" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            System <span className="text-gradient">Modules</span>
          </h2>
          <p className="text-[var(--foreground)]/60 max-w-2xl mx-auto text-lg font-light">
            Deploying scalable solutions across the digital frontier.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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