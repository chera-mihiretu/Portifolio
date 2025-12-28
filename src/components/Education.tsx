'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const educationData = [
  {
    institution: 'Adama Science and Technology University',
    degree: 'B.Sc. Software Engineering',
    status: 'In Progress',
    image: '/assets/education/astu.svg',
    details: 'Focus on Algorithms, Data Structures, and System Design. Mentoring students in CS topics.',
    color: 'bg-[#0047FF] text-white'
  },
  {
    institution: 'Africa To Silicon Valley (A2SV)',
    degree: 'Software Engineering Fellow',
    status: 'Graduated',
    image: '/assets/education/A2SV.svg',
    details: 'Backed by Google. Solved 1000+ DSA problems. Top percentile performance. Part of the elite program connecting African talent to Silicon Valley opportunities.',
    color: 'bg-[#FFE600] text-black'
  },
  {
    institution: 'ALX Africa',
    degree: 'AWS Cloud Computing',
    status: 'Certified',
    image: '/assets/education/alx.svg',
    details: 'Specialized in Cloud Architecture, Serverless Computing, and DevOps practices.',
    color: 'bg-[#00FF94] text-black'
  }
];

export default function Education() {
  return (
    <section id="education" className="py-32 px-4 md:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 left-20 w-72 h-72 bg-[#00FF94] opacity-20 -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 border-[12px] border-black rotate-45 opacity-10 -z-10" />

      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-right"
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-display mb-6 leading-none">
            KNOWLEDGE
            <br />
            <span className="bg-black text-[#FFE600] px-6 py-2 inline-block rotate-2">BASE</span>
          </h2>
          <div className="h-3 bg-black w-64 ml-auto mt-8" />
        </motion.div>

        {/* Education Cards - Creative Layout */}
        <div className="space-y-16">
          {educationData.map((edu, index) => {
            const isEven = index % 2 === 0;
            const rotate = isEven ? 'rotate-1' : '-rotate-1';
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -60 : 60, rotate: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 80
                }}
                className={`${rotate} hover:rotate-0 transition-all duration-300 ${isEven ? 'ml-0 md:ml-8' : 'mr-0 md:mr-8 ml-auto'} max-w-5xl`}
              >
                <div className="bg-[var(--card-bg)] border-[6px] border-black shadow-[12px_12px_0px_black] hover:shadow-[18px_18px_0px_black] hover:translate-x-[-6px] hover:translate-y-[-6px] transition-all">
                  <div className="flex flex-col md:flex-row">
                    {/* Logo Section - Oversized */}
                    <div className={`${isEven ? 'md:order-1' : 'md:order-2'} w-full md:w-1/3 p-8 md:p-12 flex items-center justify-center ${edu.color} border-b-[6px] md:border-b-0 ${isEven ? 'md:border-r-[6px]' : 'md:border-l-[6px]'} border-black relative`}>
                      {/* Oversized Logo */}
                      <div className="w-48 h-48 md:w-56 md:h-56 relative -mt-16 md:mt-0">
                        <div className="absolute inset-0 border-[6px] border-black bg-[var(--card-bg)] shadow-[8px_8px_0px_black] p-6">
                          <Image 
                            src={edu.image} 
                            alt={edu.institution} 
                            fill 
                            className="object-contain p-4" 
                          />
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className={`${isEven ? 'md:order-2' : 'md:order-1'} w-full md:w-2/3 p-8`}>
                      {/* Status Badge */}
                      <div className="inline-block mb-4">
                        <span className={`${edu.color} px-4 py-2 text-xs font-black uppercase tracking-widest border-[4px] border-black shadow-[4px_4px_0px_black] inline-block`}>
                          ● {edu.status}
                        </span>
                      </div>

                      {/* Institution Name */}
                      <h3 className="text-3xl md:text-4xl font-display mb-3 leading-tight">
                        {edu.institution}
                      </h3>

                      {/* Degree */}
                      <p className="text-lg font-bold mb-6 uppercase tracking-wide opacity-80">
                        {edu.degree}
                      </p>

                      {/* Details */}
                      <p className="text-base leading-relaxed">
                        {edu.details}
                      </p>

                      {/* Decorative Element */}
                      <div className="mt-6 flex gap-2">
                        <div className="w-12 h-2 bg-black" />
                        <div className="w-8 h-2 bg-[#FFE600]" />
                        <div className="w-4 h-2 bg-[#FF006E]" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          className="mt-24 h-4 bg-black origin-left"
        />
      </div>
    </section>
  );
}
