'use client';

import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import Image from 'next/image';

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
        <div className="w-full h-full min-h-[500px] flex flex-col justify-center items-center relative overflow-visible z-20">
            <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Chera <span className="text-gradient">Mihiretu</span>
                    </h1>
                    <div className="text-lg md:text-xl text-[var(--foreground)]/60 mb-10 max-w-2xl mx-auto font-mono">
                        <TypeAnimation
                            sequence={[
                                'Software Engineer',
                                1000,
                                'Mobile Developer',
                                1000,
                                'Backend Developer',
                                1000,
                                'AI Enthusiast',
                                2000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            cursor={true}
                        />
                    </div>
                </motion.div>

                <div className="relative mx-auto w-full max-w-3xl bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/10 shadow-2xl text-left mb-8">
                    <div className="flex items-center px-4 py-2 bg-[#111] border-b border-white/5">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <div className="ml-4 text-xs text-white/30 font-mono">bio.ts</div>
                    </div>

                    <div className="p-6 font-mono text-sm md:text-base min-h-[150px] text-gray-300">
                        <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = <span className="text-purple-400">new</span> <span className="text-yellow-400">Engineer</span>({'{'}
                        <br />
                        &nbsp;&nbsp;name: <span className="text-green-400">&apos;Chera Mihiretu&apos;</span>,
                        <br />
                        &nbsp;&nbsp;location: <span className="text-green-400">&apos;Adama, Ethiopia&apos;</span>,
                        <br />
                        &nbsp;&nbsp;education: <span className="text-green-400">&apos;Adama Science and Technology University&apos;</span>,
                        <br />
                        &nbsp;&nbsp;mission: <span className="text-green-400">&apos;Building the future with code & AI&apos;</span>
                        <br />
                        {'}'});
                    </div>

                    {/* Ghost Text Effect Overlay */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-white/5 to-transparent w-[200%] -translate-x-full animate-[shimmer_3s_infinite]" />
                </div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap justify-center gap-4"
                >
                    <button
                        onClick={handleDownloadCV}
                        className="group relative px-6 py-3 bg-[var(--accent)] text-white rounded-lg font-medium overflow-hidden transition-all hover:shadow-[0_0_20px_var(--accent)]"
                    >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <span className="relative flex items-center gap-2">
                            <FaDownload /> Download CV
                        </span>
                    </button>

                    <a
                        href="https://leetcode.com/cheramihiretu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group px-6 py-3 glass-panel rounded-lg font-medium hover:bg-white/5 transition-all flex items-center gap-2"
                    >
                        <Image src="/assets/leetcode.svg" alt="LeetCode" width={20} height={20} className="opacity-80 group-hover:opacity-100" />
                        <span>LeetCode</span>
                    </a>

                    <a
                        href="https://codeforces.com/profile/chera_mihiretu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group px-6 py-3 glass-panel rounded-lg font-medium hover:bg-white/5 transition-all flex items-center gap-2"
                    >
                        <Image src="/assets/codeforces.svg" alt="Codeforces" width={20} height={20} className="opacity-80 group-hover:opacity-100" />
                        <span>Codeforces</span>
                    </a>
                </motion.div>
            </div>

            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent)]/20 rounded-full blur-[100px] animate-pulse-glow" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent-secondary)]/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
            </div>
        </div>
    );
}
