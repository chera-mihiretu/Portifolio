'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import Modal from './Modal';
import { FaTrophy, FaMedal, FaAws, FaGlobeAfrica, FaExternalLinkAlt, FaCloud } from 'react-icons/fa';

const achievementsData = [
  {
    title: 'ACPC 2025 Finalist',
    position: 'Qualified Team',
    description: 'Qualified for the prestigious Arab and African Collegiate Programming Contest (ACPC) 2025, representing Ethiopia among the top competitive programming teams in Africa and the Middle East.',
    icon: <FaTrophy className="text-4xl md:text-5xl" />,
    date: '2025',
    category: 'International Contest',
    image: '/assets/achievement/icpc-2.png',
    color: 'bg-[#FFE600] text-black'
  },
  {
    title: 'Top Ethiopia GitHub Contributor',
    position: 'National Recognition',
    description: 'Recognized as one of the top GitHub contributors in Ethiopia, with significant open-source contributions and active involvement in the Ethiopian developer community.',
    icon: <FaGlobeAfrica className="text-4xl md:text-5xl" />,
    date: '2024-2025',
    category: 'Open Source',
    image: '/assets/achievement/icpc.png',
    color: 'bg-[#FF006E] text-white'
  },
  {
    title: 'AWS Solutions Architect',
    position: 'Associate (SAA-C03)',
    description: 'Validated expertise in designing distributed systems on AWS. Skilled in architecture, security, and cost-optimization.',
    icon: <FaAws className="text-4xl md:text-5xl" />,
    date: '2024',
    category: 'Certification',
    image: '/assets/achievement/saa.png',
    credly: 'https://www.credly.com/badges/51dc40c6-2d86-41d2-ad0f-9cf46c52b7d5/public_url',
    color: 'bg-[#0047FF] text-white'
  },
  {
    title: 'AWS Cloud Practitioner',
    position: 'Certified (CLF-C02)',
    description: 'Foundational understanding of AWS Cloud concepts, security, and compliance.',
    icon: <FaCloud className="text-4xl md:text-5xl" />,
    date: '2024',
    category: 'Certification',
    image: '/assets/achievement/cp.png',
    credly: 'https://www.credly.com/badges/342ba2cc-278e-4244-9bbb-638d3e2972ec/public_url',
    color: 'bg-[#00FF94] text-black'
  },
  {
    title: 'A2SV Hackathon',
    position: 'Top 8',
    description: 'Built a Localized AI project supporting Ethiopian languages with LLMs.',
    icon: <FaTrophy className="text-4xl md:text-5xl" />,
    date: '2024',
    category: 'Hackathon',
    image: '/assets/achievement/a2sv_hackathon.jpg',
    color: 'bg-[#FFE600] text-black'
  },
  {
    title: 'ICPC Ethiopian Collegiate',
    position: '12th Place',
    description: 'Ranked 12th nationwide in competitive programming contest.',
    icon: <FaMedal className="text-4xl md:text-5xl" />,
    date: '2024',
    category: 'Competitive Programming',
    image: '/assets/achievement/icpc.png',
    color: 'bg-[#0047FF] text-white'
  }
];

export default function Achievements() {
  const [selectedImage, setSelectedImage] = useState<{ url: string; alt: string } | null>(null);

  return (
    <section id="achievements" className="py-32 px-4 md:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-[#FF006E] opacity-20 rotate-12 -z-10" />
      <div className="absolute bottom-20 left-20 w-60 h-60 border-[10px] border-black opacity-10 -z-10" />

      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-display mb-6 leading-none">
            HONORS &
            <br />
            <span className="bg-[#FFE600] text-black px-6 py-2 inline-block -rotate-2">AWARDS</span>
          </h2>
          <div className="h-3 bg-[#4A4A4A] w-72 mt-8 mb-6" />
          <p className="text-xl font-bold uppercase tracking-wide max-w-3xl">
            RECOGNIZED FOR EXCELLENCE IN CLOUD COMPUTING AND ALGORITHMIC PROBLEM SOLVING.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {achievementsData.map((achievement, index) => {
            const rotate = index % 5 === 0 ? 'rotate-1' : index % 5 === 1 ? '-rotate-1' : index % 5 === 2 ? 'rotate-2' : index % 5 === 3 ? '-rotate-2' : 'rotate-0';
            
            return (
            <motion.div
              key={index}
                initial={{ opacity: 0, y: 40, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className={`${rotate} hover:rotate-0 transition-all duration-300`}
              >
                <div className="bg-[var(--card-bg)] border-[6px] border-black shadow-[10px_10px_0px_black] hover:shadow-[15px_15px_0px_black] hover:translate-x-[-5px] hover:translate-y-[-5px] transition-all h-full flex flex-col">
                  {/* Image */}
                  <div 
                    className="relative h-64 w-full overflow-hidden border-b-[6px] border-black cursor-pointer group"
                    onClick={() => setSelectedImage({ url: achievement.image, alt: achievement.title })}
                  >
                <Image
                  src={achievement.image}
                  alt={achievement.title}
                  fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                    {/* Date Badge */}
                    <div className="absolute top-4 right-4 bg-black text-[#FFE600] px-4 py-2 font-bold text-xs border-[3px] border-black shadow-[4px_4px_0px_var(--accent)]">
                    {achievement.date}
                </div>
              </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    {/* Icon Header */}
                    <div className={`${achievement.color} p-4 mb-6 border-[4px] border-black shadow-[6px_6px_0px_black] flex items-center justify-center -mt-12 mx-6 relative z-10`}>
                  {achievement.icon}
                </div>

                    {/* Title & Position */}
                    <h3 className="text-2xl md:text-3xl font-display mb-2 leading-tight">
                      {achievement.title}
                    </h3>
                    <p className="text-sm font-bold uppercase tracking-wider mb-4 opacity-70">
                      {achievement.position}
                    </p>

                    {/* Description */}
                    <p className="text-sm leading-relaxed mb-4 flex-grow">
                    {achievement.description}
                  </p>

                    {/* Category Tag */}
                    <div className="mb-4">
                      <span className="bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-wider border-[3px] border-black shadow-[3px_3px_0px_var(--accent)] inline-block">
                        {achievement.category}
                      </span>
                    </div>

                    {/* Credly Link */}
                    {achievement.credly && (
                      <a
                        href={achievement.credly}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-3 bg-[#FF9900] text-white font-bold uppercase text-xs tracking-wider border-[4px] border-black shadow-[4px_4px_0px_black] hover:shadow-[6px_6px_0px_black] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all mt-auto"
                      >
                        <FaAws className="text-lg" />
                        VERIFY ON CREDLY
                        <FaExternalLinkAlt className="text-xs ml-auto" />
                      </a>
                  )}

                    {/* View Certificate */}
                    {!achievement.credly && (
                <button
                  onClick={() => setSelectedImage({ url: achievement.image, alt: achievement.title })}
                        className="flex items-center justify-between px-4 py-3 bg-white text-black font-bold uppercase text-xs tracking-wider border-[4px] border-black shadow-[4px_4px_0px_black] hover:shadow-[6px_6px_0px_black] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all mt-auto"
                >
                        VIEW CERTIFICATE
                        <span className="text-xl">→</span>
                </button>
                    )}
                  </div>
              </div>
            </motion.div>
            );
          })}
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
