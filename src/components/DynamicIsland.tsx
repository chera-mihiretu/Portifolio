'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaCheckCircle, FaBolt } from 'react-icons/fa';

export default function DynamicIsland() {
    const [status, setStatus] = useState<'idle' | 'processing' | 'success'>('idle');
    const [tokens, setTokens] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStatus(prev => {
                if (prev === 'idle') return 'processing';
                if (prev === 'processing') return 'success';
                return 'idle';
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (status === 'processing') {
            const tokenInterval = setInterval(() => {
                setTokens(prev => prev + Math.floor(Math.random() * 10));
            }, 100);
            return () => clearInterval(tokenInterval);
        }
    }, [status]);

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40">
            <motion.div
                layout
                className="glass-panel rounded-full flex items-center justify-center overflow-hidden"
                initial={{ width: 200, height: 50 }}
                animate={{
                    width: status === 'processing' ? 300 : status === 'success' ? 250 : 200,
                    height: 50,
                    backgroundColor: status === 'success' ? 'rgba(16, 185, 129, 0.2)' : 'var(--card-bg)'
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                <AnimatePresence mode="wait">
                    {status === 'idle' && (
                        <motion.div
                            key="idle"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="flex items-center gap-3 px-6"
                        >
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-sm font-medium">System Operational</span>
                        </motion.div>
                    )}

                    {status === 'processing' && (
                        <motion.div
                            key="processing"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="flex items-center gap-4 px-6"
                        >
                            <FaBolt className="text-[var(--accent)] animate-pulse" />
                            <div className="flex flex-col">
                                <span className="text-xs text-[var(--foreground)]/60">Processing Tokens</span>
                                <span className="text-sm font-mono font-bold">{tokens.toLocaleString()} /s</span>
                            </div>
                        </motion.div>
                    )}

                    {status === 'success' && (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="flex items-center gap-3 px-6"
                        >
                            <FaCheckCircle className="text-green-500" />
                            <span className="text-sm font-medium">Build Complete</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
