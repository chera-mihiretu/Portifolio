'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/chera-mihiretu-a267472a2/',
    icon: <FaLinkedin className="text-2xl" />
  },
  {
    name: 'GitHub',
    url: 'https://github.com/chera-mihiretu',
    icon: <FaGithub className="text-2xl" />
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/chera_mihiretu/',
    icon: <FaInstagram className="text-2xl" />
  },
  {
    name: 'Email',
    url: 'mailto:cheramihiretu@gmail.com',
    icon: <FaEnvelope className="text-2xl" />
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[var(--accent)]/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Ready to <span className="text-gradient">Collaborate?</span>
          </h2>
          <p className="text-xl text-[var(--foreground)]/60 mb-12 max-w-2xl mx-auto">
            Whether you have a question, a project idea, or just want to say hi, I&apos;m always open to connecting.
          </p>

          <div className="flex justify-center gap-6 mb-20">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="p-4 rounded-full glass-panel hover:bg-[var(--accent)] hover:text-white transition-all duration-300 text-[var(--foreground)]/80"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-sm text-[var(--foreground)]/40 font-mono">
              © {new Date().getFullYear()} Chera Mihiretu. Engineered with Next.js & Tailwind.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}