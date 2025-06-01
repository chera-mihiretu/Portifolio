'use client';

import { motion } from 'framer-motion';

const Skills = () => {
  const skillsData = [
    {
      id: 'prog-langs',
      category: 'Programming Languages',
      skills: ['Python', 'C++', 'Go', 'Dart (Flutter)', 'JavaScript', 'TypeScript', 'SQL'],
      icon: '💻'
    },
    {
      id: 'web-dev',
      category: 'Web & App Development',
      skills: ['React.js', 'Tailwind CSS', 'Flutter'],
      icon: '🌐'
    },
    {
      id: 'db-backend',
      category: 'Databases & Backend',
      skills: ['MongoDB', 'Firebase', 'SQL'],
      icon: '🗄️'
    },
    {
      id: 'devops',
      category: 'DevOps & CI/CD',
      skills: ['Docker', 'GitHub', 'Git', 'CI/CD'],
      icon: '⚙️'
    },
    {
      id: 'ai-ml',
      category: 'AI & Machine Learning',
      skills: ['AI Agents', 'Computer Vision', 'Machine Learning'],
      icon: '🤖'
    },
    {
      id: 'arch',
      category: 'Software Architecture & Practices',
      skills: ['Clean Architecture', 'OOP', 'TDD', 'Multithreading', 'Thread Pools', 'Agile Development'],
      icon: '🏗️'
    },
    {
      id: 'comp-prog',
      category: 'Competitive Programming',
      skills: ['Dijkstra\'s Algorithm', 'Floyd-Warshall', 'Dynamic Programming', 'Graph Algorithms', 'Data Structures'],
      icon: '⚡'
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
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
              Skills
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Technical expertise and development capabilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-xl" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 opacity-20 blur-xl" />

              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 h-full">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={`${category.id}-${skillIndex}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 text-sm bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-600 dark:text-purple-400 rounded-full"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;