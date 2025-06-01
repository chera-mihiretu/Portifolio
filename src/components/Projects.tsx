'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Modal from './Modal';

const projectsData = [
  {
    name: 'Pill Reminder',
    description: 'A mobile application designed to help patients manage their medication schedule through timely notifications. The app ensures patients never miss their medication by providing customizable reminders and a user-friendly interface for managing prescriptions.',
    images: [
      '/assets/pill-reminder/landing-page.jpg',
      '/assets/pill-reminder/medicine-detail-page.jpg',
      '/assets/pill-reminder/edit-medicine.jpg',
      '/assets/pill-reminder/notification.jpg'
    ],
    technologies: ['Flutter', 'Clean Architecture', 'TDD', 'Local Storage', 'Push Notifications', 'Git', 'CI/CD'],
    github: 'https://github.com/chera-mihiretu/pill-reminder',
    contributions: [
      'Implemented clean architecture for maintainable and testable code',
      'Developed local data storage system for offline functionality',
      'Integrated push notification system for medication reminders',
      'Applied Test-Driven Development (TDD) practices',
      'Created intuitive UI/UX for medication management',
      'Implemented robust error handling and data validation'
    ]
  },
  {
    name: 'Real-Time Digit Recognition',
    description: 'Used a thread pool for real-time predictions with a GUI that involved drawing, image uploading, and live camera prediction.',
    images: [
      '/assets/projects/number_recognition/1.png',
      '/assets/projects/number_recognition/2.gif',
      '/assets/projects/number_recognition/3.png'
    ],
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'Thread Pool', 'GUI Development', 'Python', 'CNN (Convolutional Neural Network)'],
    github: 'https://github.com/chera-mihiretu/ML_Path'
  },
  {
    name: 'LocalizeAI',
    description: 'Aiming to support Ethiopian local language speakers by enabling them to use language models like ChatGPT in their native language. This includes working with Amazon Translate and Google Gemini for translation and generative AI.',
    images: [
      '/assets/projects/localize-ai/1.jpg',
      '/assets/projects/localize-ai/2.jpg',
      '/assets/projects/localize-ai/3.jpg'
    ],
    technologies: ['Node JS', 'AWS Translate', 'Google Gemini', 'Translation APIs', 'React JS'],
    github: 'https://github.com/biniyamNegasa/localize-ai'
  },
  {
    name: 'Fix-IT',
    description: 'An AI-powered application that works by extracting contents from PDF and converting them into quizzes to test users\' memory while also providing comprehensive guidance to improve weak areas.',
    images: [
      '/assets/projects/fix-it/2.png',
      '/assets/projects/fix-it/1.png',
      '/assets/projects/fix-it/3.png'
    ],
    technologies: ['Golang', 'AI Agent', 'PDF Processing', 'Quiz Generation', 'AI Guidance', 'Next JS', 'Docker', 'CI/CD'],
    github: 'https://github.com/chera-mihiretu/Fix-IT',
    demo: 'https://fix-it-virid.vercel.app/'
  },
  {
    name: '3-Commerce',
    description: 'A mobile-first e-commerce platform developed at Eskalate to streamline the online shopping experience through a modern, efficient mobile application. Built with scalability and user-centric design in mind, the app supports product browsing, secure checkout, order tracking, and real-time updates.',
    images: [
      '/assets/projects/e-commerce/3.jpg',
      '/assets/projects/e-commerce/1.jpg',
      '/assets/projects/e-commerce/2.jpg',
    ],
    technologies: ['Flutter', 'Clean Architecture', 'Socker IO', 'Git', 'TDD'],
    github: 'https://github.com/chera-mihiretu/2024-internship-mobile-tasks',
    contributions: [
      'Developed core mobile features using Flutter',
      'Implemented clean architecture for maintainability and scalability',
      'Integrated real-time push notifications',
      'Connected frontend to backend APIs',
      'Applied responsive design principles',
      'Collaborated in team environment with Git'
    ]
  }
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number[]>([]);
  const [isTransitioning, setIsTransitioning] = useState<boolean[]>([]);
  const [selectedImage, setSelectedImage] = useState<{ url: string; alt: string } | null>(null);
  const intervalRefs = useRef<{[key: number]: NodeJS.Timeout}>({});
  const transitionTimeoutRefs = useRef<{[key: number]: NodeJS.Timeout}>({});
  
  useEffect(() => {
    setActiveImageIndex(new Array(projectsData.length).fill(0));
    setIsTransitioning(new Array(projectsData.length).fill(false));
    
    return () => {
      Object.values(intervalRefs.current).forEach(clearInterval);
      Object.values(transitionTimeoutRefs.current).forEach(clearTimeout);
    };
  }, []);

  const startImageTransition = (projectIndex: number) => {
    if (isTransitioning[projectIndex]) return;

    setIsTransitioning(prev => {
      const newTransitioning = [...prev];
      newTransitioning[projectIndex] = true;
      return newTransitioning;
    });

    transitionTimeoutRefs.current[projectIndex] = setTimeout(() => {
      setActiveImageIndex(prev => {
        const newIndexes = [...prev];
        newIndexes[projectIndex] = (newIndexes[projectIndex] + 1) % projectsData[projectIndex].images.length;
        return newIndexes;
      });

      transitionTimeoutRefs.current[projectIndex] = setTimeout(() => {
        setIsTransitioning(prev => {
          const newTransitioning = [...prev];
          newTransitioning[projectIndex] = false;
          return newTransitioning;
        });
      }, 500);
    }, 500);
  };

  const handleMouseEnter = (projectIndex: number) => {
    setHoveredProject(projectIndex);
    
    if (intervalRefs.current[projectIndex]) {
      clearInterval(intervalRefs.current[projectIndex]);
    }

    intervalRefs.current[projectIndex] = setInterval(() => {
      startImageTransition(projectIndex);
    }, 3000);
  };

  const handleMouseLeave = (projectIndex: number) => {
    setHoveredProject(null);
    
    if (intervalRefs.current[projectIndex]) {
      clearInterval(intervalRefs.current[projectIndex]);
    }
    if (transitionTimeoutRefs.current[projectIndex]) {
      clearTimeout(transitionTimeoutRefs.current[projectIndex]);
    }

    setActiveImageIndex(prev => {
      const newIndexes = [...prev];
      newIndexes[projectIndex] = 0;
      return newIndexes;
    });
    setIsTransitioning(prev => {
      const newTransitioning = [...prev];
      newTransitioning[projectIndex] = false;
      return newTransitioning;
    });
  };

  const handleImageClick = (imageUrl: string, alt: string) => {
    setSelectedImage({ url: imageUrl, alt });
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Showcasing innovation and technical expertise
          </p>
        </motion.div>

        <div className="space-y-24">
          {projectsData.map((project, index) => {
            const currentImageSrc = project.images[activeImageIndex[index]];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-2xl" />
                <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 opacity-20 blur-2xl" />

                <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                    <div 
                      className="relative h-64 lg:h-96 rounded-xl overflow-hidden group cursor-pointer"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={() => handleMouseLeave(index)}
                      onClick={() => currentImageSrc && handleImageClick(currentImageSrc, `${project.name} - Image ${activeImageIndex[index] + 1}`)}
                    >
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-800 dark:bg-gray-900 transition-colors duration-300 group-hover:bg-white">
                        <div className="relative w-full h-full">
                          {currentImageSrc && (
                            <Image
                              src={currentImageSrc}
                              alt={`${project.name} - Image ${activeImageIndex[index] + 1}`}
                              fill
                              className={`object-contain transition-all duration-500 ${
                                isTransitioning[index] ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                              } group-hover:scale-105`}
                            />
                          )}
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        {project.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {project.description}
                      </p>
                      
                      <div className="flex gap-4 mb-6">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                          >
                            <FaGithub className="text-xl" />
                            <span>View GitHub</span>
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-600 to-pink-600 text-white rounded-lg hover:from-orange-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                          >
                            <FaExternalLinkAlt className="text-xl" />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>
                      
                      {project.contributions && (
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                            My Contributions
                          </h4>
                          <ul className="space-y-2">
                            {project.contributions.map((contribution, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                                <span className="text-gray-600 dark:text-gray-300">{contribution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 text-sm bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-600 dark:text-purple-400 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
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
};

export default Projects;