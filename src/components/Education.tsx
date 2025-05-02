'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Education = () => {
  const educationData = [
    {
      institution: 'Adama Science and Technology University (ASTU)',
      degree: 'Bachelor\'s in Software Engineering',
      status: 'Currently pursuing',
      image: '/assets/education/astu.svg',
      details: {
        courses: [
          'Software Development',
          'Algorithms',
          'Data Structures',
          'Databases',
          'Web Development',
          'Mobile Development',
          'Machine Learning'
        ],
        projects: [
          {
            name: 'LocalizeAI Project',
            description: 'Translating Ethiopian languages using AI'
          },
          {
            name: 'Real-Time Digit Recognition',
            description: 'Using a thread pool for real-time predictions and GUI design'
          }
        ],
        mentorship: 'Mentoring students at ASTU, providing lectures and one-on-one sessions in various computer science topics'
      }
    },
    {
      institution: 'Africa To Silicon Valley (A2SV)',
      degree: 'Backed by Google (twice)',
      status: 'Student',
      image: '/assets/education/A2SV.svg',
      details: {
        achievements: [
          'Solved 1000+ problems on LeetCode and Codeforces',
          'Developed Serai - a platform for lawyers using AI',
          'Part of program that placed 60+ students in leading tech companies'
        ]
      }
    },
    {
      institution: 'ALX Africa',
      degree: 'AWS Cloud Computing',
      status: 'Currently enrolled',
      image: '/assets/education/alx.svg',
      details: {
        certifications: [
          'AWS Cloud Practitioner',
          'AWS Solutions Architect'
        ],
        skills: [
          'AWS Core Services (EC2, S3, IAM, VPC, CloudWatch)',
          'Cloud Security & Best Practices',
          'Architecting Scalable Solutions',
          'Advanced AWS Services (RDS, Lambda, Elastic Beanstalk)',
          'Cloud Migration & Cost Optimization'
        ]
      }
    }
  ];

  return (
    <section id="education" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
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
              Education
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            A journey of continuous learning and growth
          </p>
        </motion.div>

        <div className="space-y-24">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-2xl" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 opacity-20 blur-2xl" />

              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                  {/* Institution Image */}
                  <div className="relative h-48 lg:h-48 rounded-xl overflow-hidden group">
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800 dark:bg-gray-900 transition-colors duration-300 group-hover:bg-white">
                      <Image
                        src={edu.image}
                        alt={edu.institution}
                        width={180}
                        height={180}
                        className="object-contain transition-all duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Institution Details */}
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {edu.institution}
                    </h3>
                    <p className="text-lg text-purple-600 dark:text-purple-400 mb-4">
                      {edu.degree}
                    </p>
                    <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6">
                      {edu.status}
                    </span>

                    {/* Details Section */}
                    <div className="space-y-6">
                      {edu.details.courses && (
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Key Courses
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.details.courses.map((course, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-full"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {edu.details.projects && (
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Projects
                          </h4>
                          <div className="space-y-2">
                            {edu.details.projects.map((project, i) => (
                              <div key={i} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                <h5 className="font-semibold text-gray-900 dark:text-white">
                                  {project.name}
                                </h5>
                                <p className="text-gray-600 dark:text-gray-300">
                                  {project.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {edu.details.mentorship && (
                        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                          <p className="text-gray-900 dark:text-white">
                            {edu.details.mentorship}
                          </p>
                        </div>
                      )}

                      {edu.details.achievements && (
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Achievements
                          </h4>
                          <ul className="space-y-2">
                            {edu.details.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                                <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {edu.details.skills && (
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            Skills & Expertise
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.details.skills.map((skill, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 text-sm bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-600 dark:text-purple-400 rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 