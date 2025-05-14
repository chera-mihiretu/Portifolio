'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaDownload } from 'react-icons/fa';

const Hero = () => {
  const { theme } = useTheme();
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [texts] = useState(['Software Engineer', 'Mobile Developer', 'Backend Developer']);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Array<{ x: number; y: number; duration: number; delay: number }>>([]);
  const [codeElements, setCodeElements] = useState<Array<{ x: number; y: number; duration: number; delay: number; element: string }>>([]);

  useEffect(() => {
    setMounted(true);
    // Generate random positions for particles
    const newParticles = Array(50).fill(0).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);

    // Generate random positions for code elements
    const elements = ['div', 'span', 'p', 'h1', 'button', 'a'];
    const newCodeElements = Array(20).fill(0).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 5,
      element: elements[Math.floor(Math.random() * elements.length)]
    }));
    setCodeElements(newCodeElements);
  }, []);

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 2000;

    const typeText = () => {
      const currentFullText = texts[currentTextIndex];
      
      if (isDeleting) {
        setCurrentText(currentFullText.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else {
        setCurrentText(currentFullText.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }

      if (!isDeleting && currentIndex === currentFullText.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
      }
    };

    const timer = setTimeout(typeText, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, currentTextIndex, texts]);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/assets/cv.pdf';
    link.download = 'Chera_Mihiretu_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Royal Welcome Light Effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-orange-500/30 dark:from-purple-900/30 dark:via-pink-900/30 dark:to-orange-900/30"
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0, 0.6, 0],
              y: [-100, 100],
              x: particle.x * 2 - 100,
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
            className={`absolute w-2 h-2 rounded-full ${
              theme === 'dark' ? 'bg-white/40' : 'bg-purple-600/40'
            }`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
          />
        ))}
      </div>

      {/* Code Animation Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 opacity-90" />
        <div className="absolute inset-0 code-animation">
          {codeElements.map((codeEl, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              animate={{
                opacity: [0, 0.7, 0],
                y: [-100, 100],
                x: codeEl.x * 2 - 100,
              }}
              transition={{
                duration: codeEl.duration,
                repeat: Infinity,
                delay: codeEl.delay,
              }}
              className={`absolute font-mono text-sm ${
                theme === 'dark' ? 'text-gray-600' : 'text-purple-400'
              }`}
              style={{
                left: `${codeEl.x}%`,
                top: `${codeEl.y}%`,
              }}
            >
              {`<${codeEl.element} />`}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-screen flex items-center justify-center pt-16 sm:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content and Buttons */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-center lg:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
              >
                <span className="block text-gray-900 dark:text-white">
                  Chera Mihiretu
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 dark:from-purple-400 dark:via-pink-400 dark:to-orange-400">
                  {currentText}
                  <span className="inline-block w-1 h-8 bg-current animate-blink" />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl"
              >
                Software Engineering student at Adama Science and Technology University.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2 }}
                className="mt-10 flex flex-col lg:flex-row items-center gap-6"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToProjects}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg shadow-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  View Projects
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownloadCV}
                  className="flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-600 to-pink-600 text-white rounded-lg shadow-lg hover:from-orange-700 hover:to-pink-700 transition-all duration-300"
                >
                  <FaDownload className="text-lg" />
                  <span>Download CV</span>
                </motion.button>
              </motion.div>

              {/* Coding Platform Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2.5 }}
                className="mt-8 flex items-center gap-4"
              >
                <motion.a
                  href="https://leetcode.com/cheramihiretu"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  <Image
                    src="/assets/leetcode.svg"
                    alt="LeetCode"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  <span>LeetCode</span>
                </motion.a>
                <motion.a
                  href="https://codeforces.com/profile/chera_mihiretu"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 border-2 border-purple-500 text-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                >
                  <Image
                    src="/assets/codeforces.svg"
                    alt="Codeforces"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                  <span>Codeforces</span>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex justify-center"
            >
              <motion.div
                initial={{ scale: 0.8, rotate: -5 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="relative w-64 h-64 rounded-full overflow-hidden shadow-2xl"
              >
                <Image
                  src="/assets/me.png"
                  alt="Ethiopian Software Engineer"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"
      />
    </div>
  );
};

export default Hero; 