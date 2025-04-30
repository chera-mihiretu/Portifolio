'use client';

import React from 'react';
import { useTheme } from './ThemeProvider';

export const Projects: React.FC = () => {
  const { isDarkMode } = useTheme();

  const projects = [
    {
      title: 'LocalizeAI',
      description: 'Translating Ethiopian languages using AI, working with Amazon Translate and Google Gemini for translation and generative AI.',
      technologies: ['AI', 'Amazon Translate', 'Google Gemini', 'Python'],
      achievement: 'Top 8 in A2SV Hackathon',
    },
    {
      title: 'Real-Time Digit Recognition',
      description: 'Using a thread pool for real-time predictions with a GUI that involved drawing, image uploading, and live camera prediction.',
      technologies: ['Python', 'Thread Pool', 'GUI', 'Machine Learning'],
    },
    {
      title: 'Fix-IT',
      description: 'An AI-powered application that works by extracting contents from PDF and converting them into quizzes to test users memory, also providing comprehensive guidance to improve weak areas.',
      technologies: ['AI', 'PDF Processing', 'Quiz Generation', 'Machine Learning'],
    },
  ];

  return (
    <section id="projects" className={`section ${isDarkMode ? 'bg-background-dark-secondary' : 'bg-background-light-secondary'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`card card-hover ${
                isDarkMode 
                  ? 'bg-background-dark-tertiary text-text-dark-primary' 
                  : 'bg-background-light-tertiary text-text-light-primary'
              }`}
            >
              <h3 className={`text-xl font-semibold mb-2 text-primary-gradient`}>
                {project.title}
              </h3>
              <p className={`mb-4 ${isDarkMode ? 'text-text-dark-secondary' : 'text-text-light-secondary'}`}>
                {project.description}
              </p>
              <div className="mb-4">
                <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-text-dark-primary' : 'text-text-light-primary'}`}>
                  Technologies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-sm ${
                        isDarkMode
                          ? 'bg-primary-main/20 text-primary-light'
                          : 'bg-primary-main/10 text-primary-dark'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {project.achievement && (
                <p className={`text-sm text-accent-gradient`}>
                  🏆 {project.achievement}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 