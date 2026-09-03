'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function NeuralCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
            if (!isVisible) setIsVisible(true);
        };

        window.addEventListener('mousemove', moveCursor);
        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, [cursorX, cursorY, isVisible]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 mix-blend-screen"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
                opacity: isVisible ? 1 : 0,
            }}
        >
            <div className="relative w-full h-full">
                {/* Core Orb */}
                <div className="absolute inset-0 bg-white rounded-full opacity-80 blur-[2px]" />

                {/* Outer Glow */}
                <div className="absolute -inset-2 bg-[var(--accent)] rounded-full opacity-40 blur-[8px] animate-pulse" />

                {/* Neural Tendrils (Simulated) */}
                <div className="absolute top-1/2 left-1/2 w-[200px] h-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--accent)] opacity-10 scale-0 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
            </div>
        </motion.div>
    );
}
