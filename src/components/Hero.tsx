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

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Royal Welcome Light Effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-orange-900/20"
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0, 1, 0],
              y: [-100, 100],
              x: Math.random() * 200 - 100,
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className={`absolute w-1 h-1 rounded-full ${
              theme === 'dark' ? 'bg-white/30' : 'bg-black/30'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
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
              A journey of passion, perseverance, and technological excellence. 
              From the vibrant streets of Addis Ababa to the forefront of global software development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
              className="mt-10 flex items-center justify-center lg:justify-start gap-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative w-full h-[500px] lg:h-[600px]"
          >
            <motion.div
              initial={{ scale: 0.8, rotate: -5 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
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

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-2xl"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.7 }}
              className="absolute -top-4 -left-4 w-32 h-32 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 opacity-20 blur-2xl"
            />
          </motion.div>
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