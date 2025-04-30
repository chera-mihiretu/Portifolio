'use client';

import React from 'react';
import { useTheme } from './ThemeProvider';

export const Skills: React.FC = () => {
  const { isDarkMode } = useTheme();

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'C++', 'Go', 'Dart (Flutter)', 'JavaScript', 'TypeScript', 'SQL'],
    },
    {
      title: 'Frameworks & Tools',
      skills: ['React.js', 'Tailwind CSS', 'Docker', 'MongoDB', 'Firebase', 'Supertest'],
    },
    {
      title: 'AI & Machine Learning',
      skills: ['Language Models', 'Amazon Translate', 'Google Gemini'],
    },
    {
      title: 'Development Practices',
      skills: ['TDD', 'Clean Architecture', 'OOP', 'Multithreading', 'Thread Pools'],
    },
    {
      title: 'Competitive Programming',
      skills: ['Dijkstra\'s', 'Floyd-Warshall', 'DP', 'Advanced Algorithms'],
    },
    {
      title: 'Project Management',
      skills: ['Time Management', 'Goal Setting', 'Mentoring'],
    },
  ];

  return (
    <section id="skills" className={`section ${isDarkMode ? 'bg-background-dark-primary' : 'bg-background-light-primary'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">
          Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`card card-hover ${
                isDarkMode 
                  ? 'bg-background-dark-secondary text-text-dark-primary' 
                  : 'bg-background-light-secondary text-text-light-primary'
              }`}
            >
              <h3 className={`text-xl font-semibold mb-4 text-secondary-gradient`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-sm ${
                      isDarkMode
                        ? 'bg-secondary-main/20 text-secondary-light'
                        : 'bg-secondary-main/10 text-secondary-dark'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 