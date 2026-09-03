'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const educationData = [
  {
    institution: 'Adama Science and Technology University',
    degree: 'B.Sc. Software Engineering',
    status: 'In Progress',
    image: '/assets/education/astu.svg',
    details: 'Focus on Algorithms, Data Structures, and System Design. Mentoring students in CS topics.'
  },
  {
    institution: 'Africa To Silicon Valley (A2SV)',
    degree: 'Software Engineering Fellow',
    status: 'Graduated',
    image: '/assets/education/A2SV.svg',
    details: 'Backed by Google. Solved 1000+ DSA problems. Top percentile performance.'
  },
  {
    institution: 'ALX Africa',
    degree: 'AWS Cloud Computing',
    status: 'Certified',
    image: '/assets/education/alx.svg',
    details: 'Specialized in Cloud Architecture, Serverless Computing, and DevOps practices.'
  }
];

export default function Education() {
  return (
    <section id="education" className="py-32 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Knowledge <span className="text-gradient">Base</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--accent)] to-transparent opacity-30" />

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Logo/Icon */}
                <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full glass-panel flex items-center justify-center border border-[var(--accent)]/30 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
                  <Image src={edu.image} alt={edu.institution} width={40} height={40} className="object-contain opacity-80" />
                </div>

                {/* Content Card */}
                <div className="flex-1 glass-panel p-6 rounded-xl border-l-4 border-l-[var(--accent)] hover:bg-white/5 transition-all duration-300 w-full">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{edu.institution}</h3>
                    <span className="text-xs font-mono px-2 py-1 rounded bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
                      {edu.status}
                    </span>
                  </div>
                  <p className="text-[var(--foreground)]/80 font-medium mb-2">{edu.degree}</p>
                  <p className="text-[var(--foreground)]/60 text-sm leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}