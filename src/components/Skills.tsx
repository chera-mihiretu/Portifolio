'use client';

import { motion } from 'framer-motion';
import { FaCode, FaServer, FaMobileAlt, FaBrain, FaDatabase, FaTools } from 'react-icons/fa';

const skillsData = [
  {
    category: 'Programming Languages',
    skills: ['Python', 'C++', 'Go', 'Dart', 'JavaScript', 'TypeScript', 'SQL'],
    icon: <FaCode className="text-2xl text-blue-400" />
  },
  {
    category: 'Web & App Development',
    skills: ['React.js', 'Tailwind CSS', 'Flutter', 'Next.js'],
    icon: <FaMobileAlt className="text-2xl text-purple-400" />
  },
  {
    category: 'Databases & Backend',
    skills: ['MongoDB', 'Firebase', 'PostgreSQL', 'Redis'],
    icon: <FaDatabase className="text-2xl text-green-400" />
  },
  {
    category: 'DevOps & CI/CD',
    skills: ['Docker', 'GitHub Actions', 'Git', 'AWS'],
    icon: <FaServer className="text-2xl text-orange-400" />
  },
  {
    category: 'AI & Machine Learning',
    skills: ['AI Agents', 'Computer Vision', 'TensorFlow', 'Gemini API'],
    icon: <FaBrain className="text-2xl text-pink-400" />
  },
  {
    category: 'Architecture',
    skills: ['Clean Architecture', 'TDD', 'Microservices', 'System Design'],
    icon: <FaTools className="text-2xl text-yellow-400" />
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-[var(--foreground)]/60 max-w-2xl mx-auto text-lg">
            Core competencies and specialized technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-6 rounded-xl hover:bg-[var(--accent)]/5 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-6 border-b border-[var(--card-border)] pb-4">
                <div className="p-3 rounded-lg bg-[var(--card-bg)] border border-[var(--card-border)]">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold">{category.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-mono rounded-full border border-[var(--card-border)] bg-[var(--card-bg)] hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}