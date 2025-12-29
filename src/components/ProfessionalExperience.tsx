'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaMapMarkerAlt, FaCode, FaServer, FaMobile } from 'react-icons/fa';
import Image from 'next/image';

const experiences = [
  {
    id: 1,
    role: 'Mobile App Developer',
    company: 'Africa To Silicon Valley',
    location: 'California USA - Remote',
    color: '#FFE600',
    icon: FaMobile,
    logo: '/assets/profession/a2sv.svg',
    description: 'As a Mobile Application Developer, I build robust, production-ready mobile applications using Clean Architecture, Test-Driven Development (TDD), and modern development best practices.',
    achievements: [
      'Designed and developed scalable mobile applications from the ground up using clean, modular architecture.',
      'Followed TDD principles to deliver reliable, maintainable, and bug-resistant code.',
      'Implemented responsive UI/UX designs aligned with platform guidelines.',
      'Collaborated with cross-functional teams to integrate APIs and optimize app performance.',
      'Maintained and updated existing applications to improve stability and user experience.'
    ]
  },
  {
    id: 2,
    role: 'Backend Developer',
    company: 'Sydek',
    location: 'Addis Abeba - Remote',
    color: '#0047FF',
    icon: FaServer,
    logo: '/assets/profession/sydek.png',
    description: 'Worked as a Backend Developer building highly functional backend services using NestJS and Golang, delivering secure, scalable, and production-ready systems.',
    achievements: [
      'Developed RESTful APIs and backend services using NestJS and Golang.',
      'Designed efficient database schemas and optimized query performance.',
      'Implemented authentication, authorization, and security best practices.',
      'Integrated external APIs and third-party services into the backend architecture.',
    ]
  },
  {
    id: 3,
    role: 'Mobile App Developer Intern',
    company: 'Eskalate',
    location: 'Adama',
    color: '#FF006E',
    icon: FaCode,
    logo: '/assets/profession/eskalate.svg',
    description: 'Completed an internship focused on mobile application development, contributing to real projects and gaining hands-on experience across the full development lifecycle.',
    achievements: [
      'Developed mobile application features and UI components under senior supervision.',
      'Worked with modern frameworks and tools to build functional app modules.',
      'Participated in debugging, testing, and improving code quality.',
      'Assisted in integrating APIs and implementing app functionality.',
      'Collaborated in Agile team workflows, including sprint planning and code reviews.',
      'Gained practical experience with best practices like state management, version control, and clean code principles.'
    ]
  }
];

export default function ProfessionalExperience() {
  return (
    <section className="py-20 px-4 relative bg-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-block">
            <div className="flex items-center gap-4 mb-4">
              <FaBriefcase className="text-5xl text-[#FFE600]" />
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight">
                Professional
                <span className="block text-[#0047FF]">Experience</span>
              </h2>
            </div>
            <div className="h-2 bg-[#FFE600] w-32" />
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="border-[6px] border-black shadow-[12px_12px_0px_black] bg-[var(--card-bg)] p-0 transition-all overflow-hidden relative"
                >
                  {/* Header Section with Logo */}
                  <div className="relative">
                    {/* Top color bar */}
                    <div className="h-4" style={{ backgroundColor: exp.color }} />
                    
                    <div className="p-8 pb-6">
                      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center mb-6">
                        {/* Left: Role & Company Info */}
                        <div>
                          <div className="flex items-center gap-3 mb-3">
                            <motion.div
                              animate={{ rotate: [0, 5, 0] }}
                              transition={{ duration: 3, repeat: Infinity }}
                              className="w-12 h-12 border-[3px] border-black shadow-[4px_4px_0px_black] flex items-center justify-center flex-shrink-0"
                              style={{ backgroundColor: exp.color }}
                            >
                              <Icon className="text-2xl text-black" />
                            </motion.div>
                            <div>
                              <h3 className="text-3xl md:text-4xl font-black uppercase leading-tight">
                                {exp.role}
                              </h3>
                            </div>
                          </div>
                          
                          <p className="text-xl md:text-2xl font-black mb-3" style={{ color: exp.color }}>
                            {exp.company}
                          </p>
                          
                          <div className="flex items-center gap-2 bg-black text-white px-4 py-2 border-[3px] border-black inline-flex">
                            <FaMapMarkerAlt />
                            <span className="font-mono text-sm font-bold">{exp.location}</span>
                          </div>
                        </div>

                        {/* Right: Company Logo */}
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                          transition={{ duration: 0.5 }}
                          className="relative w-40 h-40 md:w-48 md:h-48 border-[6px] border-black shadow-[8px_8px_0px_black] bg-white p-4 mx-auto md:mx-0"
                          style={{ 
                            boxShadow: `8px 8px 0px ${exp.color}`,
                          }}
                        >
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            fill
                            className="object-contain p-4"
                          />
                          
                          {/* Number Badge */}
                          <div 
                            className="absolute -top-4 -left-4 w-12 h-12 border-[4px] border-black flex items-center justify-center font-black text-2xl text-black z-10"
                            style={{ backgroundColor: exp.color }}
                          >
                            0{exp.id}
                          </div>
                        </motion.div>
                      </div>
                      
                      {/* Decorative separator */}
                      <div className="flex gap-2 mb-6">
                        <div className="flex-1 h-2 bg-black" />
                        <div className="w-8 h-2" style={{ backgroundColor: exp.color }} />
                        <div className="w-8 h-2 bg-black" />
                        <div className="w-8 h-2" style={{ backgroundColor: exp.color }} />
                      </div>

                      {/* Description */}
                      <div className="relative mb-6">
                        <div 
                          className="absolute left-0 top-0 bottom-0 w-1.5"
                          style={{ backgroundColor: exp.color }}
                        />
                        <p className="text-base leading-relaxed font-medium pl-6">
                          {exp.description}
                        </p>
                      </div>

                      {/* Achievements */}
                      <div className="bg-[var(--background)] p-6 border-[4px] border-black">
                        <div className="flex items-center gap-3 mb-4">
                          <div 
                            className="h-8 w-2"
                            style={{ backgroundColor: exp.color }}
                          />
                          <h4 className="text-sm font-black uppercase tracking-wider text-[var(--foreground)]">
                            Key Responsibilities & Achievements
                          </h4>
                        </div>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.05 }}
                              className="flex items-start gap-3 group"
                            >
                              <motion.div 
                                whileHover={{ scale: 1.5, rotate: 45 }}
                                className="w-3 h-3 mt-1.5 flex-shrink-0 border-[2px] border-black transition-transform"
                                style={{ backgroundColor: exp.color }}
                              />
                              <span className="text-sm leading-relaxed group-hover:translate-x-1 transition-transform">
                                {achievement}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent bar */}
                  <div className="h-3 flex">
                    <div className="flex-1" style={{ backgroundColor: exp.color }} />
                    <div className="flex-1 bg-black" />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

