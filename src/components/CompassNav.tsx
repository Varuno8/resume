import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass as CompassIcon, X, Tent, Skull, Microscope, Waves, Radio, Code, Terminal, Trophy } from 'lucide-react';

const locations = [
    { path: '/', name: 'Base Camp', icon: <Tent size={18} /> },
    { path: '/stratigraphy', name: 'Stratigraphy', icon: <Microscope size={18} /> },
    { path: '/excavation?project=1', name: 'Excavation', icon: <Skull size={18} /> },
    { path: '/hydrology', name: 'Hydrology', icon: <Waves size={18} /> },
    { path: '/survival', name: 'Survival', icon: <CompassIcon size={18} /> },
    { path: '/coding', name: 'Sanctum', icon: <Trophy size={18} /> },
    { path: '/transmission', name: 'Contact', icon: <Radio size={18} /> },
];

const codingProfiles = [
    { name: 'LC', url: 'https://leetcode.com/Varun_2/', icon: <Code size={14} />, color: 'bg-orange-500' },
    { name: 'GFG', url: 'https://www.geeksforgeeks.org/profile/varun28y2a4?tab=activity', icon: <Terminal size={14} />, color: 'bg-green-500' },
    { name: 'CF', url: 'https://codeforces.com/profile/Varun_o8', icon: <Trophy size={14} />, color: 'bg-blue-500' },
];

const CompassNav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="lg:hidden fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 20 }}
                        className="absolute bottom-20 right-0 w-64 bg-[#0A140A]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-white/5 bg-black/20">
                            <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest font-bold">Expedition Log</span>
                        </div>

                        {/* Navigation Grid */}
                        <div className="grid grid-cols-2 gap-1 p-2">
                            {locations.map((loc) => (
                                <NavLink
                                    key={loc.path}
                                    to={loc.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) => `
                                        flex items-center gap-3 p-3 rounded-lg transition-all
                                        ${isActive ? 'bg-outdoors-rust/20 text-white' : 'text-white/50 hover:bg-white/5'}
                                    `}
                                >
                                    {({ isActive }) => (
                                        <>
                                            {loc.icon}
                                            <span className={`text-xs font-display uppercase tracking-wider ${isActive ? 'font-bold' : ''}`}>
                                                {loc.name}
                                            </span>
                                        </>
                                    )}
                                </NavLink>
                            ))}
                        </div>

                        {/* Mobile Coding Profiles */}
                        <div className="p-3 bg-black/40 border-t border-white/5 grid grid-cols-3 gap-2">
                            {codingProfiles.map((p) => (
                                <a
                                    key={p.name}
                                    href={p.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center justify-center p-2 rounded bg-white/5 hover:bg-white/10 transition-colors"
                                >
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white mb-1 ${p.color} shadow-lg`}>
                                        {p.icon}
                                    </div>
                                    <span className="text-[8px] font-mono text-white/60">{p.name}</span>
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl border transition-all duration-300
                    ${isOpen ? 'bg-outdoors-forest border-white/20 rotate-90' : 'bg-outdoors-rust border-white/20 rotate-0 hover:scale-110'}
                `}
            >
                {isOpen ? <X size={24} className="text-white" /> : <CompassIcon size={28} className="text-white" />}
            </button>
        </div>
    );
};

export default CompassNav;
