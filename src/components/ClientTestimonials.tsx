'use client';

import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaBuilding, FaUser } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Luuzo Proptech',
    location: 'France',
    type: 'Company',
    rating: 5,
    color: '#FFE600',
    text: 'I highly recommend Chera for your project. He is highly skilled, professional, and delivers quality work on time. Working with him was a seamless experience, and I am very satisfied with the results. I confidently suggest choosing Chera for your needs!',
    icon: FaBuilding
  },
  {
    id: 2,
    name: 'Private Client',
    location: 'Ghana',
    type: 'Private Client',
    rating: 5,
    color: '#00FF94',
    text: 'If there is anyone I would always choose to work with, it\'s Chera. Such a talented and reliable developer, a pleasure to collaborate with.',
    icon: FaUser
  }
];

export default function ClientTestimonials() {
  return (
    <section className="py-20 px-4 relative bg-[var(--card-bg)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-block">
            <div className="flex items-center justify-center gap-4 mb-4">
              <FaQuoteLeft className="text-5xl text-[#FF006E]" />
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight">
                Client
                <span className="block text-[#FF006E]">Testimonials</span>
              </h2>
            </div>
            <div className="h-2 bg-[#FF006E] w-full" />
          </div>
          <p className="mt-6 text-lg font-bold uppercase tracking-wider text-[var(--foreground)]/60">
            What Clients Say About Working With Me
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => {
            const Icon = testimonial.icon;
            return (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, rotate: index % 2 === 0 ? 1 : -1 }}
                className="relative group"
              >
                {/* Card */}
                <div className="border-[6px] border-[#1A1A1A] dark:border-[#4A4A4A] shadow-[12px_12px_0px_rgba(0,0,0,0.3)] dark:shadow-[12px_12px_0px_rgba(123,111,255,0.2)] bg-[var(--background)] p-8 relative overflow-hidden transition-all">
                  {/* Color accent corner */}
                  <div 
                    className="absolute top-0 right-0 w-24 h-24 -mr-12 -mt-12 rotate-45 opacity-20"
                    style={{ backgroundColor: testimonial.color }}
                  />
                  
                  {/* Quote Icon */}
                  <motion.div
                    animate={{
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-4 left-4 opacity-10"
                  >
                    <FaQuoteLeft className="text-6xl" style={{ color: testimonial.color }} />
                  </motion.div>

                  {/* Rating Stars */}
                  <div className="flex gap-2 mb-6 relative z-10">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        whileHover={{ scale: 1.3, rotate: 360 }}
                      >
                        <FaStar className="text-2xl" style={{ color: testimonial.color }} />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-base leading-relaxed mb-6 relative z-10 font-medium">
                    "{testimonial.text}"
                  </p>

                  {/* Divider */}
                  <div className="h-1 mb-6" style={{ backgroundColor: testimonial.color }} />

                  {/* Client Info */}
                  <div className="flex items-center gap-4 relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 border-[4px] border-[#1A1A1A] dark:border-[#4A4A4A] shadow-[4px_4px_0px_rgba(0,0,0,0.3)] dark:shadow-[4px_4px_0px_rgba(123,111,255,0.2)] flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: testimonial.color }}
                    >
                      <Icon className="text-2xl text-black dark:text-white" />
                    </motion.div>
                    
                    <div>
                      <h3 className="text-xl font-black uppercase leading-tight">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm font-mono font-bold uppercase tracking-wider text-[var(--foreground)]/60">
                        {testimonial.location}
                      </p>
                      <p 
                        className="text-xs font-bold uppercase tracking-wider mt-1"
                        style={{ color: testimonial.color }}
                      >
                        {testimonial.type}
                      </p>
                    </div>
                  </div>

                  {/* Verified Badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: 0.5 }}
                    className="absolute bottom-4 right-4 bg-black dark:bg-[#2A2A2A] text-white px-3 py-1.5 border-[3px] border-[#1A1A1A] dark:border-[#4A4A4A] text-xs font-black uppercase tracking-wider rotate-3"
                  >
                    ✓ Verified
                  </motion.div>
                </div>

                {/* Floating decoration */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                  className="absolute -top-4 -right-4 w-8 h-8 border-[3px] border-[#1A1A1A] dark:border-[#4A4A4A] rotate-12 z-10"
                  style={{ backgroundColor: testimonial.color }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-[#FF006E] text-white px-8 py-4 border-[4px] border-[#1A1A1A] dark:border-[#4A4A4A] shadow-[8px_8px_0px_rgba(0,0,0,0.3)] dark:shadow-[8px_8px_0px_rgba(123,111,255,0.2)] font-black text-lg uppercase tracking-wider hover:shadow-[12px_12px_0px_rgba(0,0,0,0.4)] dark:hover:shadow-[12px_12px_0px_rgba(123,111,255,0.3)] transition-all"
            >
              <span>Work With Me</span>
              <span className="text-2xl">→</span>
            </a>
          </motion.div>
          <p className="mt-6 text-sm font-mono uppercase tracking-wider text-[var(--foreground)]/60">
            Join my satisfied clients • Let's build something amazing together
          </p>
        </motion.div>
      </div>
    </section>
  );
}

