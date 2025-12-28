'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/chera-mihiretu-a267472a2/',
    icon: <FaLinkedin className="text-3xl md:text-4xl" />,
    color: 'bg-[#0047FF] hover:bg-[#0047FF] text-white'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/chera-mihiretu',
    icon: <FaGithub className="text-3xl md:text-4xl" />,
    color: 'bg-black hover:bg-black text-white'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/chera_mihiretu/',
    icon: <FaInstagram className="text-3xl md:text-4xl" />,
    color: 'bg-[#FF006E] hover:bg-[#FF006E] text-white'
  },
  {
    name: 'Email',
    url: 'mailto:cheramihiretu@gmail.com',
    icon: <FaEnvelope className="text-3xl md:text-4xl" />,
    color: 'bg-[#FFE600] hover:bg-[#FFE600] text-black'
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-4 md:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-[#FFE600] opacity-20 rotate-45 -z-10" />
      <div className="absolute bottom-40 right-20 w-60 h-60 border-[12px] border-black opacity-10 -z-10" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Experimental Typography Header */}
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-display mb-8 leading-none">
            READY TO
            <br />
            <span className="bg-[#FF006E] text-white px-6 py-3 inline-block -rotate-2">
              COLLABORATE?
            </span>
          </h2>
          
          <div className="h-3 bg-black w-full max-w-md mx-auto mb-12" />

          <p className="text-xl md:text-2xl font-bold mb-16 max-w-3xl mx-auto uppercase tracking-wide">
            WHETHER YOU HAVE A QUESTION, A PROJECT IDEA, OR JUST WANT TO SAY HI, I&apos;M ALWAYS OPEN TO CONNECTING.
          </p>

          {/* Social Links - Brutalist Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 max-w-4xl mx-auto">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${social.color} p-8 border-[5px] border-black shadow-[8px_8px_0px_black] hover:shadow-[12px_12px_0px_black] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all flex flex-col items-center justify-center gap-4 group`}
              >
                {social.icon}
                <span className="text-sm font-black uppercase tracking-wider">
                  {social.name}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Footer */}
          <div className="border-t-[4px] border-black pt-12 mt-20">
            <div className="bg-black text-[#FFE600] px-8 py-6 inline-block border-[4px] border-black shadow-[8px_8px_0px_var(--accent)]">
              <p className="text-sm font-bold font-mono uppercase tracking-wider">
                © {new Date().getFullYear()} CHERA MIHIRETU
              </p>
              <p className="text-xs font-mono mt-2 opacity-80">
                ENGINEERED WITH NEXT.JS & TAILWIND
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
