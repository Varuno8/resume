import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Microscope, Gem, Layers, GraduationCap, Briefcase, Trophy, Code, Brain, ExternalLink } from 'lucide-react';

const coreLayers = [
    {
        id: 'nsut',
        year: '2020 - 2024',
        title: 'B.Tech in Electronics & Communication (IoT)',
        company: 'Netaji Subhas University of Technology (NSUT)',
        details: 'Focused on the intersection of hardware and software. Developed a strong foundation in digital systems, IoT architectures, and signal processing. Self-taught production-grade AI systems during off-hours.',
        icon: <GraduationCap className="text-amber-500" />,
        type: 'Education',
        achievements: [
            { label: 'LeetCode (250+ Solved)', url: 'https://leetcode.com/Varun_2/' },
            { label: 'GeeksforGeeks (350+ Solved)', url: 'https://www.geeksforgeeks.org/profile/varun28y2a4?tab=activity' },
            { label: 'CodeForces Pupil (250+ Solved)', url: 'https://codeforces.com/profile/Varun_o8' }
        ]
    },
    {
        id: 'eigengram',
        year: 'Nov 2024 – May 2025',
        title: 'Software Engineer Intern',
        company: 'Eigengram',
        details: 'Architected a full-stack healthcare AI marketplace platform. Implemented secure subscription systems, analytics dashboards, and integrated AI model catalogs with JWT-based authentication.',
        icon: <Briefcase className="text-outdoors-rust" />,
        type: 'Experience'
    },
    {
        id: 'rovisor',
        year: 'Oct 2023 – April 2024',
        title: 'Software Development Intern',
        company: 'Rovisor Research',
        details: 'Optimized frontend performance and UX using Angular. Integrated complex internal APIs and reduced initial load times by 20% through code splitting and asset optimization.',
        icon: <Gem className="text-outdoors-forest" />,
        type: 'Experience'
    },
    {
        id: 'bws',
        year: 'May 2023 – June 2023',
        title: 'Web Developer Intern',
        company: 'Business Web Solutions',
        details: 'Developed responsive client interfaces using clean HTML/CSS/JS. Focused on cross-browser compatibility and utility-first design principles.',
        icon: <Code className="text-blue-400" />,
        type: 'Experience'
    }
];

const StratigraphyLab: React.FC = () => {
    const [selectedLayer, setSelectedLayer] = useState(coreLayers[0]);

    return (
        <div className="min-h-screen pb-24 px-6 md:px-12 pt-8 bg-background">
            <header className="mb-12 border-b-2 border-white/10 pb-6">
                <div className="flex items-center gap-3 mb-2">
                    <Microscope className="text-outdoors-rust" size={24} />
                    <span className="font-mono text-[10px] uppercase font-bold tracking-[0.4em] text-white/40">Credentials & Foundations</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-outdoors-canvas">Act II: Stratigraphy Lab</h1>
                <p className="mt-4 max-w-2xl text-outdoors-canvas/60 font-sans italic">
                    "Analyzing the vertical timeline of engineering expertise, from NSUT to production-grade AI."
                </p>
            </header>

            <div className="grid lg:grid-cols-12 gap-12 items-start text-outdoors-canvas">
                <div className="lg:col-span-4 space-y-4">
                    <div className="relative pl-8 border-l-4 border-white/5 space-y-2">
                        {coreLayers.map((layer) => (
                            <motion.button
                                key={layer.id}
                                onClick={() => setSelectedLayer(layer)}
                                whileHover={{ x: 10 }}
                                className={`w-full group relative flex items-center gap-4 p-4 transition-all border-b border-white/5
                                    ${selectedLayer.id === layer.id ? 'bg-white/5 border-l-4 border-l-outdoors-rust' : ''}
                                `}
                            >
                                <div className="absolute -left-[38px] w-4 h-4 rounded-full border-4 border-background"
                                    style={{ backgroundColor: selectedLayer.id === layer.id ? '#B7410E' : '#222' }}
                                />

                                <div className={`p-2 rounded-sm ${selectedLayer.id === layer.id ? 'bg-outdoors-rust/20 text-outdoors-rust font-bold' : 'bg-white/5 group-hover:bg-outdoors-rust/10'}`}>
                                    {layer.icon}
                                </div>
                                <div className="text-left">
                                    <span className="block text-[10px] font-mono font-bold text-outdoors-rust">{layer.year}</span>
                                    <span className={`block font-display text-sm uppercase tracking-wider ${selectedLayer.id === layer.id ? 'font-bold' : 'opacity-40'}`}>
                                        {layer.company}
                                    </span>
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedLayer.id}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.98 }}
                            className="bg-black/30 backdrop-blur-md border-2 border-white/10 shadow-2xl relative p-8 sm:p-12 overflow-hidden"
                        >
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-16 h-16 rounded-full border-4 border-outdoors-rust/20 flex items-center justify-center bg-background shadow-inner text-outdoors-rust">
                                        {selectedLayer.icon}
                                    </div>
                                    <div>
                                        <h2 className="font-display text-2xl text-outdoors-canvas uppercase font-bold">{selectedLayer.title}</h2>
                                        <p className="font-mono text-xs text-outdoors-rust font-bold">{selectedLayer.company}</p>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="bg-white/5 p-6 border-l-4 border-outdoors-rust">
                                        <h4 className="font-display text-[10px] uppercase tracking-widest text-outdoors-rust mb-2 font-bold">Analysis Record</h4>
                                        <p className="text-outdoors-canvas/80 leading-relaxed font-sans font-medium">
                                            {selectedLayer.details}
                                        </p>
                                    </div>

                                    {selectedLayer.achievements && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {selectedLayer.achievements.map((ach, idx) => (
                                                <a
                                                    key={idx}
                                                    href={ach.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="border border-white/5 p-4 bg-black/20 flex items-center justify-between group hover:border-outdoors-rust/50 transition-all"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <Brain size={16} className="text-outdoors-rust" />
                                                        <span className="font-mono text-[10px] uppercase tracking-wider text-outdoors-canvas/70">{ach.label}</span>
                                                    </div>
                                                    <ExternalLink size={12} className="text-white/20 group-hover:text-outdoors-rust" />
                                                </a>
                                            ))}
                                        </div>
                                    )}

                                    <div className="grid grid-cols-2 gap-4 mt-8">
                                        <div className="border border-white/10 p-4 bg-black/20">
                                            <p className="text-[10px] font-mono uppercase text-outdoors-rust font-bold mb-1">Period</p>
                                            <p className="text-sm font-display">{selectedLayer.year}</p>
                                        </div>
                                        <div className="border border-white/10 p-4 bg-black/20">
                                            <p className="text-[10px] font-mono uppercase text-outdoors-rust font-bold mb-1">Classification</p>
                                            <p className="text-sm font-display uppercase">{selectedLayer.type}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default StratigraphyLab;
