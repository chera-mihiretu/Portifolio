'use client';

import { motion } from 'framer-motion';
import { FaBrain, FaCode, FaLayerGroup, FaRocket } from 'react-icons/fa';

const features = [
    {
        title: "Neural Synthesis",
        description: "Code generation that understands context, not just syntax.",
        icon: <FaBrain className="text-4xl text-[var(--accent)]" />,
        colSpan: "col-span-1 md:col-span-2",
        rowSpan: "row-span-2",
        delay: 0.1
    },
    {
        title: "Holographic Debugging",
        description: "Visualize memory stacks in 3D space.",
        icon: <FaLayerGroup className="text-3xl text-[var(--accent-secondary)]" />,
        colSpan: "col-span-1",
        rowSpan: "row-span-1",
        delay: 0.2
    },
    {
        title: "Instant Deploy",
        description: "Push to edge in < 50ms.",
        icon: <FaRocket className="text-3xl text-green-400" />,
        colSpan: "col-span-1",
        rowSpan: "row-span-1",
        delay: 0.3
    },
    {
        title: "Semantic Refactoring",
        description: "Rewrite entire modules with natural language intent.",
        icon: <FaCode className="text-3xl text-blue-400" />,
        colSpan: "col-span-1 md:col-span-2",
        rowSpan: "row-span-1",
        delay: 0.4
    }
];

export default function FeatureGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 max-w-6xl mx-auto">
            {features.map((feature, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: feature.delay, duration: 0.5 }}
                    className={`glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors duration-300 ${feature.colSpan} ${feature.rowSpan} flex flex-col justify-between group`}
                >
                    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-[var(--foreground)]/70 text-sm leading-relaxed">
                            {feature.description}
                        </p>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
            ))}
        </div>
    );
}
