'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import Modal from './Modal';
import { FaTrophy, FaMedal, FaAws, FaGlobeAfrica, FaExternalLinkAlt, FaCloud } from 'react-icons/fa';

const achievementsData = [
  {
    title: 'AWS Solutions Architect',
    position: 'Associate (SAA-C03)',
    description: 'Validated expertise in designing distributed systems on AWS. Skilled in architecture, security, and cost-optimization.',
    icon: <FaAws className="text-orange-400 text-3xl" />,
    date: '2024',
    category: 'Certification',
    image: '/assets/achievement/saa.png',
    credly: 'https://www.credly.com/badges/51dc40c6-2d86-41d2-ad0f-9cf46c52b7d5/public_url'
  },
  {
    title: 'AWS Cloud Practitioner',
    position: 'Certified (CLF-C02)',
    description: 'Foundational understanding of AWS Cloud concepts, security, and compliance.',
    icon: <FaCloud className="text-blue-400 text-3xl" />,
    date: '2024',
    category: 'Certification',
    image: '/assets/achievement/cp.png',
    credly: 'https://www.credly.com/badges/342ba2cc-278e-4244-9bbb-638d3e2972ec/public_url'
  },
  {
    title: 'ACPC Qualification',
    position: 'Qualified',
    description: 'Qualified for the prestigious Arab and African Collegiate Programming Contest (ACPC), representing the top tier of competitive programmers.',
    icon: <FaGlobeAfrica className="text-green-400 text-3xl" />,
    date: '2024',
    category: 'International Contest',
    image: '/assets/achievement/icpc-2.png'
  },
  {
    title: 'A2SV Hackathon',
    position: 'Top 8',
    description: 'Built a Localized AI project supporting Ethiopian languages with LLMs.',
    icon: <FaTrophy className="text-yellow-400 text-3xl" />,
    date: '2024',
    category: 'Hackathon',
    image: '/assets/achievement/a2sv_hackathon.jpg'
  },
  {
    title: 'ICPC Ethiopian Collegiate',
    position: '12th Place',
    description: 'Ranked 12th nationwide in competitive programming contest.',
    icon: <FaMedal className="text-purple-400 text-3xl" />,
    date: '2024',
    category: 'Competitive Programming',
    image: '/assets/achievement/icpc.png'
  }
];

export default function Achievements() {
  const [selectedImage, setSelectedImage] = useState<{ url: string; alt: string } | null>(null);

  return (
    <section id="achievements" className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Honors & <span className="text-gradient">Awards</span>
          </h2>
          <p className="text-[var(--foreground)]/60 max-w-2xl mx-auto text-lg">
            Recognized for excellence in cloud computing and algorithmic problem solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel rounded-2xl overflow-hidden group hover:shadow-[0_0_30px_rgba(var(--accent-rgb),0.2)] transition-all duration-500 flex flex-col"
            >
              <div className="relative h-48 w-full overflow-hidden flex-shrink-0">
                <Image
                  src={achievement.image}
                  alt={achievement.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)] via-transparent to-transparent" />

                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-xs font-bold rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white">
                    {achievement.date}
                  </span>
                </div>
              </div>

              <div className="p-6 relative flex-grow flex flex-col">
                <div className="absolute -top-8 left-6 w-14 h-14 rounded-xl bg-[var(--card-bg)] backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-lg">
                  {achievement.icon}
                </div>

                <div className="mt-4 flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold pr-2">{achievement.title}</h3>
                    <span className="text-xs font-mono text-[var(--accent)] whitespace-nowrap mt-1">
                      {achievement.position}
                    </span>
                  </div>
                  <p className="text-[var(--foreground)]/60 text-sm leading-relaxed mb-4">
                    {achievement.description}
                  </p>

                  {/* Credly Link */}
                  {achievement.credly && (
                    <div className="mb-4">
                      <a
                        href={achievement.credly}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded bg-[#FF9900]/10 text-[#FF9900] border border-[#FF9900]/20 hover:bg-[#FF9900]/20 transition-colors"
                      >
                        <FaAws /> Verify on Credly <FaExternalLinkAlt className="text-[10px]" />
                      </a>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setSelectedImage({ url: achievement.image, alt: achievement.title })}
                  className="text-sm font-medium text-[var(--foreground)]/80 hover:text-[var(--accent)] transition-colors flex items-center gap-2 mt-auto pt-4 border-t border-white/5"
                >
                  View Certificate <span>→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageUrl={selectedImage?.url || ''}
        alt={selectedImage?.alt || ''}
      />
    </section>
  );
}