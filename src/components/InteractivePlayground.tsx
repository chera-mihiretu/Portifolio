'use client';

import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FaDownload, FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';

export default function InteractivePlayground() {
    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/assets/cv.pdf';
        link.download = 'Chera_Mihiretu_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center relative overflow-visible pt-32 pb-20 px-4 md:px-8">
            {/* Animated Background Grid */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(0, 71, 255, 0.03) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(0, 71, 255, 0.03) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            {/* Floating Geometric Shapes */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-32 right-12 w-24 h-24 border-[3px] border-[#0047FF] opacity-20 rotate-12"
            />
            <motion.div
                animate={{
                    y: [0, 30, 0],
                    rotate: [0, -10, 0]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-40 left-16 w-32 h-32 bg-[#FFE600] opacity-10 rounded-full blur-2xl"
            />
            <motion.div
                animate={{
                    y: [0, -25, 0],
                    x: [0, 15, 0]
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/3 left-20 w-16 h-16 border-[3px] border-[#FF006E] rotate-45 opacity-15"
            />

            <div className="relative z-10 text-center max-w-7xl mx-auto w-full">
                {/* Animated Name with Floating Letters */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                    className="mb-10"
                >
                    <div className="relative inline-block">
                        {/* Decorative Corner Elements */}
                        <div className="absolute -top-6 -left-6 w-12 h-12 border-l-[3px] border-t-[3px] border-[#0047FF]" />
                        <div className="absolute -bottom-6 -right-6 w-12 h-12 border-r-[3px] border-b-[3px] border-[#FF006E]" />
                        
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display leading-none mb-4 px-8 py-4">
                            <motion.span 
                                className="inline-block"
                                whileHover={{ scale: 1.05, rotate: -2 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                CHERA
                            </motion.span>
                            <br />
                            <motion.span 
                                className="bg-[#FFE600] text-black px-6 md:px-8 py-3 inline-block -rotate-1 mt-3 relative overflow-hidden group"
                                whileHover={{ rotate: 0, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                {/* Shine effect */}
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                <span className="relative">MIHIRETU</span>
                            </motion.span>
                        </h1>
                    </div>
                </motion.div>

                {/* Dynamic Role Display with Pulse */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="mb-10 relative"
                >
                    <motion.div 
                        className="absolute inset-0 bg-[#FFE600] opacity-20 blur-2xl rounded-full"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.2, 0.3, 0.2]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <div className="relative bg-[#FFE600] text-black px-8 py-4 border-[3px] border-black shadow-[6px_6px_0px_black] inline-block">
                        <TypeAnimation
                            sequence={[
                                'ACPC 2025 FINALIST',
                                1500,
                                'TOP ETHIOPIA GITHUB',
                                1500,
                                'A2SV GRADUATE',
                                1500,
                                'SOFTWARE ENGINEER',
                                1000,
                                'MOBILE DEVELOPER',
                                1000,
                                'AWS CERTIFIED',
                                1500
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            cursor={true}
                            className="font-mono text-lg md:text-xl font-bold"
                        />
                    </div>
                </motion.div>

                {/* Achievement Badges with Stagger Animation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto"
                >
                    {[
                        { text: '🏆 ACPC 2025 FINALIST', delay: 0.1, bg: 'bg-[#FFE600]', text: 'text-black' },
                        { text: '⭐ TOP GITHUB ETHIOPIA', delay: 0.2, bg: 'bg-[#FF006E]', text: 'text-white' },
                        { text: '🚀 A2SV GRADUATE', delay: 0.3, bg: 'bg-[#0047FF]', text: 'text-white' },
                        { text: '☁️ AWS CERTIFIED', delay: 0.4, bg: 'bg-[#00FF94]', text: 'text-black' }
                    ].map((badge, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + badge.delay, type: "spring" }}
                            whileHover={{ 
                                y: -5, 
                                boxShadow: "5px 5px 0px black",
                                transition: { duration: 0.2 }
                            }}
                            className={`${badge.bg} ${badge.text} px-5 py-2 text-xs md:text-sm font-bold uppercase border-[3px] border-black shadow-[3px_3px_0px_black] transition-all cursor-default`}
                            style={{ rotate: `${(i % 2 === 0 ? 0.5 : -0.5)}deg` }}
                        >
                            {badge.text}
                        </motion.span>
                    ))}
                </motion.div>

                {/* Interactive Code Block */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, type: "spring" }}
                    className="relative mx-auto w-full max-w-3xl mb-12 group"
                >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-[#0047FF] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 rounded-lg" />
                    
                    <div className="relative bg-black text-[#00FF94] border-[3px] border-black shadow-[6px_6px_0px_black] group-hover:shadow-[8px_8px_0px_black] group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-all duration-300">
                        {/* Terminal Header */}
                        <div className="flex items-center px-5 py-3 bg-[#FFE600] border-b-[3px] border-black">
                            <div className="flex gap-2">
                                <motion.div 
                                    className="w-3 h-3 bg-[#FF006E] border-[2px] border-black"
                                    whileHover={{ scale: 1.3 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                />
                                <motion.div 
                                    className="w-3 h-3 bg-[#0047FF] border-[2px] border-black"
                                    whileHover={{ scale: 1.3 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                />
                                <motion.div 
                                    className="w-3 h-3 bg-black border-[2px] border-black"
                                    whileHover={{ scale: 1.3 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                />
                            </div>
                            <div className="ml-4 text-xs text-black font-bold font-mono flex items-center gap-2">
                                <span>~/DEVELOPER_BIO.ts</span>
                                <motion.span
                                    animate={{ opacity: [1, 0.3, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="w-1.5 h-1.5 bg-black rounded-full"
                                />
                            </div>
                        </div>

                        <div className="p-6 font-mono text-xs md:text-sm leading-relaxed text-left">
                            <span className="text-[#FF006E]">const</span>{' '}
                            <span className="text-[#0047FF]">developer</span> ={' '}
                            <span className="text-[#FF006E]">new</span>{' '}
                            <span className="text-[#FFE600]">Engineer</span>
                            {'({'}
                            <br />
                            &nbsp;&nbsp;name: <span className="text-[#00FF94]">&apos;Chera Mihiretu&apos;</span>,
                            <br />
                            &nbsp;&nbsp;location: <span className="text-[#00FF94]">&apos;Adama, Ethiopia&apos;</span>,
                            <br />
                            &nbsp;&nbsp;university: <span className="text-[#00FF94]">&apos;Adama Science and Technology University&apos;</span>,
                            <br />
                            &nbsp;&nbsp;program: <span className="text-[#00FF94]">&apos;Africa To Silicon Valley (A2SV)&apos;</span>,
                            <br />
                            &nbsp;&nbsp;achievements: [
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#00FF94]">&apos;ACPC 2025 Finalist&apos;</span>,
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#00FF94]">&apos;Top Ethiopia GitHub Contributor&apos;</span>,
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#00FF94]">&apos;AWS Certified Solutions Architect&apos;</span>
                            <br />
                            &nbsp;&nbsp;],
                            <br />
                            &nbsp;&nbsp;mission: <span className="text-[#00FF94]">&apos;Building the future with code & AI&apos;</span>
                            <br />
                            {'});'}
                        </div>
                    </div>
                </motion.div>

                {/* Action Buttons with Hover Effects */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="flex flex-wrap justify-center gap-4 mb-8"
                >
                    <motion.button
                        onClick={handleDownloadCV}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative flex items-center gap-2 px-8 py-4 bg-[#FF006E] text-white font-bold uppercase text-sm tracking-wider border-[3px] border-black shadow-[4px_4px_0px_black] hover:shadow-[6px_6px_0px_black] transition-all overflow-hidden"
                    >
                        <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <FaDownload className="text-base relative z-10" />
                        <span className="relative z-10">DOWNLOAD CV</span>
                    </motion.button>

                    <motion.a
                        href="https://github.com/chera-mihiretu"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative flex items-center gap-2 px-8 py-4 bg-black text-white font-bold uppercase text-sm tracking-wider border-[3px] border-black shadow-[4px_4px_0px_black] hover:shadow-[6px_6px_0px_black] transition-all overflow-hidden"
                    >
                        <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <FaGithub className="text-base relative z-10" />
                        <span className="relative z-10">GITHUB</span>
                    </motion.a>
                </motion.div>

                {/* Platform Links with Stagger */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 }}
                    className="flex flex-wrap justify-center gap-3"
                >
                    {[
                        { href: 'https://leetcode.com/cheramihiretu', icon: SiLeetcode, label: 'LEETCODE', delay: 0, bg: 'bg-[#FFE600]', text: 'text-black' },
                        { href: 'https://codeforces.com/profile/chera_mihiretu', icon: SiCodeforces, label: 'CODEFORCES', delay: 0.1, bg: 'bg-[#0047FF]', text: 'text-white' }
                    ].map((platform, i) => (
                        <motion.a
                            key={i}
                            href={platform.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.1 + platform.delay }}
                            whileHover={{ 
                                scale: 1.05, 
                                y: -3,
                                boxShadow: "4px 4px 0px black"
                            }}
                            whileTap={{ scale: 0.95 }}
                            className={`flex items-center gap-2 px-6 py-3 ${platform.bg} ${platform.text} font-bold uppercase text-xs tracking-wider border-[2px] border-black shadow-[3px_3px_0px_black] transition-all`}
                        >
                            <platform.icon className="text-sm" />
                            {platform.label}
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
