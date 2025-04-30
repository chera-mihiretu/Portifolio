'use client';

import React from 'react';
import { useTheme } from './ThemeProvider';

export const Education: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="education" className={`section ${isDarkMode ? 'bg-background-dark-secondary' : 'bg-background-light-secondary'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">
          Education
        </h2>
        
        <div className={`card card-hover mb-8 ${
          isDarkMode 
            ? 'bg-background-dark-tertiary text-text-dark-primary' 
            : 'bg-background-light-tertiary text-text-light-primary'
        }`}>
          <h3 className={`text-xl font-semibold mb-2 text-primary-gradient`}>
            Adama Science and Technology University (ASTU)
          </h3>
          <p className={`mb-2 ${isDarkMode ? 'text-text-dark-secondary' : 'text-text-light-secondary'}`}>
            Bachelor's in Software Engineering
          </p>
          <p className={`mb-4 ${isDarkMode ? 'text-text-dark-secondary' : 'text-text-light-secondary'}`}>
            Status: Currently pursuing
          </p>
          <div className={`mb-4 ${isDarkMode ? 'text-text-dark-secondary' : 'text-text-light-secondary'}`}>
            <h4 className="font-semibold mb-2">Key Courses:</h4>
            <ul className="list-disc list-inside">
              <li>Software Development</li>
              <li>Algorithms</li>
              <li>Data Structures</li>
              <li>Databases</li>
              <li>Web Development</li>
              <li>Mobile Development</li>
              <li>Machine Learning</li>
            </ul>
          </div>
        </div>

        <div className={`card card-hover mb-8 ${
          isDarkMode 
            ? 'bg-background-dark-tertiary text-text-dark-primary' 
            : 'bg-background-light-tertiary text-text-light-primary'
        }`}>
          <h3 className={`text-xl font-semibold mb-2 text-secondary-gradient`}>
            A2SV (Africa To Silicon Valley)
          </h3>
          <p className={`mb-4 ${isDarkMode ? 'text-text-dark-secondary' : 'text-text-light-secondary'}`}>
            Backed by Google (twice)
          </p>
          <div className={`mb-4 ${isDarkMode ? 'text-text-dark-secondary' : 'text-text-light-secondary'}`}>
            <p className="mb-2">Achievements:</p>
            <ul className="list-disc list-inside">
              <li>Solved 1000+ problems on LeetCode and Codeforces</li>
              <li>Developed Serai - A platform for lawyers using AI</li>
              <li>Part of the team that placed 60+ students in leading tech companies</li>
            </ul>
          </div>
        </div>

        <div className={`card card-hover ${
          isDarkMode 
            ? 'bg-background-dark-tertiary text-text-dark-primary' 
            : 'bg-background-light-tertiary text-text-light-primary'
        }`}>
          <h3 className={`text-xl font-semibold mb-2 text-accent-gradient`}>
            ALX Africa - AWS Cloud Computing
          </h3>
          <p className={`mb-4 ${isDarkMode ? 'text-text-dark-secondary' : 'text-text-light-secondary'}`}>
            Currently enrolled in AWS Cloud Computing program
          </p>
          <div className={`mb-4 ${isDarkMode ? 'text-text-dark-secondary' : 'text-text-light-secondary'}`}>
            <h4 className="font-semibold mb-2">Key Areas:</h4>
            <ul className="list-disc list-inside">
              <li>AWS Cloud Practitioner</li>
              <li>AWS Solutions Architect</li>
              <li>Cloud Security & Best Practices</li>
              <li>Cloud Migration & Cost Optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}; 