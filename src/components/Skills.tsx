'use client';

import { motion } from 'framer-motion';
import { FaCode, FaServer, FaMobileAlt, FaBrain, FaDatabase, FaTools } from 'react-icons/fa';

const skillsData = [
  {
    category: 'Programming Languages',
    skills: ['Python', 'C++', 'Go', 'Dart', 'JavaScript', 'TypeScript', 'SQL'],
    icon: <FaCode className="text-3xl" />,
    color: 'bg-[#FFE600] text-black'
  },
  {
    category: 'Web & App Development',
    skills: ['React.js', 'Tailwind CSS', 'Flutter', 'Next.js'],
    icon: <FaMobileAlt className="text-3xl" />,
    color: 'bg-[#FF006E] text-white'
  },
  {
    category: 'Databases & Backend',
    skills: ['Golang', 'Node js', 'MongoDB', 'Firebase', 'PostgreSQL', 'Redis'],
    icon: <FaDatabase className="text-3xl" />,
    color: 'bg-[#00FF94] text-black'
  },
  {
    category: 'DevOps & CI/CD',
    skills: ['AWS', 'Cloud Computing', 'Docker', 'GitHub Actions', 'Git'],
    icon: <FaServer className="text-3xl" />,
    color: 'bg-[#0047FF] text-white'
  },
  {
    category: 'AI & Machine Learning',
    skills: ['AI Agents', 'Computer Vision', 'TensorFlow', 'Gemini API'],
    icon: <FaBrain className="text-3xl" />,
    color: 'bg-[#FF006E] text-white'
  },
  {
    category: 'Architecture',
    skills: ['Clean Architecture', 'TDD', 'Microservices', 'System Design'],
    icon: <FaTools className="text-3xl" />,
    color: 'bg-[#FFE600] text-black'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 left-10 w-64 h-64 border-[6px] border-black rotate-12 opacity-5 -z-10" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#0047FF] opacity-20 -z-10" />

      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display mb-4 leading-none">
            TECHNICAL
            <br />
            <span className="bg-black text-[#FFE600] px-5 py-2 inline-block rotate-[0.5deg] mt-2">ARSENAL</span>
          </h2>
          <div className="h-2 bg-black w-48 mt-4" />
          <p className="text-base font-bold mt-4 uppercase tracking-wide opacity-70">
            Core competencies and specialized technologies.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => {
            const rotate = index % 4 === 0 ? 'rotate-[0.5deg]' : index % 4 === 1 ? '-rotate-[0.5deg]' : index % 4 === 2 ? 'rotate-[0.3deg]' : '-rotate-[0.3deg]';
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 80
                }}
                className={`${rotate} hover:rotate-0 transition-transform duration-300`}
              >
                <div className="bg-[var(--card-bg)] border-[3px] border-black shadow-[4px_4px_0px_black] hover:shadow-[6px_6px_0px_black] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 h-full">
                  {/* Category Header with Icon */}
                  <div className={`${category.color} p-5 border-b-[3px] border-black flex items-center gap-3`}>
                    <div className="flex-shrink-0">
                      {category.icon}
                    </div>
                    <h3 className="text-base md:text-lg font-black uppercase leading-tight">
                      {category.category}
                    </h3>
                  </div>

                  {/* Skills Tags */}
                  <div className="p-5 flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => {
                      const tagColors = [
                        'bg-white border-black text-black',
                        'bg-black border-black text-white',
                        'bg-[#FFE600] border-black text-black',
                        'bg-[#0047FF] border-black text-white'
                      ];
                      
                      return (
                        <span
                          key={i}
                          className={`${tagColors[i % tagColors.length]} px-3 py-1.5 text-xs font-bold uppercase tracking-wider border-[2px] shadow-[2px_2px_0px_black] hover:shadow-[3px_3px_0px_black] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all cursor-default inline-block`}
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
