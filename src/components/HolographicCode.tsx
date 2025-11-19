'use client';

import { motion } from 'framer-motion';

const codeSnippet = `class CheraMihiretu extends SoftwareEngineer {
  constructor() {
    super({
      skills: ['Full Stack', 'Mobile', 'AI/ML'],
      passion: 'Building Scalable Systems',
      location: 'Ethiopia'
    });
  }

  async buildFuture() {
    while (alive) {
      await this.learn();
      await this.code();
      await this.innovate();
    }
  }
}`;

export default function HolographicCode() {
    return (
        <div className="perspective-[1000px] w-full max-w-2xl mx-auto">
            <motion.div
                initial={{ rotateX: 20, rotateY: -10, opacity: 0, y: 50 }}
                animate={{ rotateX: 10, rotateY: -5, opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative transform-style-3d"
            >
                {/* Glass Panel */}
                <div className="glass-panel p-6 rounded-xl border border-[var(--accent)]/30 bg-[#050505]/80 backdrop-blur-md shadow-[0_0_50px_-12px_var(--accent)]">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-2">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>
                        <div className="text-xs font-mono text-white/40">engineer_profile.ts</div>
                    </div>

                    {/* Code Content */}
                    <pre className="font-mono text-sm leading-relaxed overflow-x-auto">
                        <code className="language-typescript">
                            {codeSnippet.split('\n').map((line, i) => (
                                <div key={i} className="flex">
                                    <span className="w-8 text-white/20 select-none">{i + 1}</span>
                                    <span className="text-blue-300/90">
                                        {line}
                                    </span>
                                </div>
                            ))}
                        </code>
                    </pre>

                    {/* Scanline Effect */}
                    <div className="absolute inset-0 pointer-events-none scanline opacity-20" />

                    {/* Reflection/Sheen */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                </div>

                {/* Floating Elements behind */}
                <div className="absolute -z-10 -top-10 -right-10 w-32 h-32 bg-[var(--accent)] rounded-full blur-[80px] opacity-20 animate-pulse-glow" />
                <div className="absolute -z-10 -bottom-10 -left-10 w-32 h-32 bg-[var(--accent-secondary)] rounded-full blur-[80px] opacity-20 animate-pulse-glow" style={{ animationDelay: '2s' }} />
            </motion.div>
        </div>
    );
}
