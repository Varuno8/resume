import React from 'react';
import { motion } from 'framer-motion';
import { Waves, FlaskConical, Droplets, Calendar, Activity, Anchor } from 'lucide-react';

const experiences = [
    {
        id: 1,
        company: "Eigengram",
        position: "Software Engineer Intern",
        period: "Nov 2024 – May 2025",
        highlights: [
            "Architected a full-stack healthcare AI marketplace platform using React (TypeScript) and Django.",
            "Integrated secure subscription systems and analytics dashboards for AI model monitoring.",
            "Implemented JWT-based authentication with Google OAuth and optimized data visualizations."
        ],
        color: "text-outdoors-rust",
        borderColor: "border-outdoors-rust/30"
    },
    {
        id: 2,
        company: "Rovisor Research",
        position: "Software Development Intern",
        period: "Oct 2023 – April 2024",
        highlights: [
            "Enhanced frontend performance by 20% using Angular and complex API integrations.",
            "Developed responsive UI components and implemented efficient state management patterns.",
            "Collaborated with cross-functional teams to deliver production-ready software components."
        ],
        color: "text-blue-400",
        borderColor: "border-blue-400/30"
    },
    {
        id: 3,
        company: "Business Web Solutions",
        position: "Web Developer Intern",
        period: "May 2023 – June 2023",
        highlights: [
            "Designed and deployed responsive interfaces with clean HTML/CSS/JS architecture.",
            "Optimized web assets for high performance and cross-browser compatibility.",
            "Transformed design mockups into functional, mobile-friendly web experiences."
        ],
        color: "text-white/40",
        borderColor: "border-white/10"
    }
];

const HydrologicalStation: React.FC = () => {
    return (
        <div className="min-h-screen pb-24 px-6 md:px-12 pt-8 relative overflow-hidden bg-background">
            {/* Background Stream Decoration */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 50 Q 25 40, 50 50 T 100 50" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-white animate-pulse" />
                    <path d="M0 60 Q 25 50, 50 60 T 100 60" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-outdoors-rust animate-pulse-slow" />
                </svg>
            </div>

            <header className="mb-12 border-b-2 border-white/10 pb-6 relative z-10">
                <div className="flex items-center gap-3 mb-2">
                    <Waves className="text-outdoors-rust" size={24} />
                    <span className="font-mono text-[10px] uppercase font-bold tracking-[0.4em] text-white/40">Professional Trajectory</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-outdoors-canvas drop-shadow-2xl">Act IV: Hydrological Station</h1>
                <p className="mt-4 max-w-2xl text-outdoors-canvas/60 font-sans italic">
                    "Mapping the fluid progression of technical internships and production deployments."
                </p>
            </header>

            <div className="relative z-10 max-w-5xl mx-auto pl-12 md:pl-0">
                {/* Vertical Timeline Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 md:-translate-x-1/2 bg-white/5 overflow-hidden">
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: '100%' }}
                        transition={{ duration: 2 }}
                        className="w-full bg-gradient-to-b from-outdoors-rust via-blue-500 to-green-500 shadow-[0_0_15px_rgba(183,65,14,0.3)]"
                    />
                </div>

                {/* Experience Nodes */}
                <div className="space-y-24 md:space-y-32">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`relative flex flex-col md:flex-row gap-12 items-center
                                ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
                            `}
                        >
                            {/* Anchor Point */}
                            <div className="absolute left-[-48px] md:left-1/2 md:-translate-x-1/2 top-0 md:top-12 z-20">
                                <div className={`w-12 h-12 rounded-full border-4 border-background bg-black/40 shadow-xl flex items-center justify-center p-2 backdrop-blur-md`}>
                                    <div className={`p-2 rounded-full bg-white/5 ${exp.color}`}>
                                        <Anchor size={20} />
                                    </div>
                                </div>
                            </div>

                            {/* Experience Content Card */}
                            <div className={`w-full md:w-[45%] bg-black/30 backdrop-blur-md p-8 border ${exp.borderColor} shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform`}>
                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <h2 className="text-2xl font-display font-bold text-outdoors-canvas mt-1 group-hover:text-white transition-colors uppercase tracking-tight">{exp.position}</h2>
                                            <p className="font-display text-outdoors-rust italic text-lg font-bold">{exp.company}</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="flex items-center gap-1 text-white/40 font-mono text-[10px] uppercase font-bold">
                                                <Calendar size={10} /> {exp.period}
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="space-y-4">
                                        {exp.highlights.map((h, i) => (
                                            <li key={i} className="flex gap-3 text-sm text-outdoors-canvas/70 font-medium">
                                                <Droplets className="text-blue-400 shrink-0 mt-1" size={14} />
                                                <span className="leading-relaxed">{h}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-end">
                                        <Activity size={16} className="text-white/10" />
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Flask/Test Tube */}
                            <div className="hidden md:flex w-[45%] justify-center items-center opacity-10">
                                <FlaskConical size={120} className="text-white" strokeWidth={1} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HydrologicalStation;
