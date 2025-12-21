import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Tent,
    Microscope,
    Skull,
    Waves,
    Compass,
    Radio,
    Code,
    Terminal,
    Trophy,
    Target
} from 'lucide-react';

const locations = [
    {
        path: '/',
        name: 'The Lion\'s Den',
        subtitle: 'Home / Base Camp',
        icon: <Tent size={20} />,
        color: 'text-amber-500'
    },
    {
        path: '/stratigraphy',
        name: 'Owl\'s Watch',
        subtitle: 'Education & Journey',
        icon: <Microscope size={20} />,
        color: 'text-blue-400'
    },
    {
        path: '/excavation?project=1',
        name: 'Falcon\'s Dive',
        subtitle: 'Projects & Work',
        icon: <Skull size={20} />,
        color: 'text-outdoors-rust'
    },
    {
        path: '/hydrology',
        name: 'Wolf\'s Path',
        subtitle: 'Professional Exp.',
        icon: <Waves size={20} />,
        color: 'text-cyan-400'
    },
    {
        path: '/survival',
        name: 'Bear\'s Armory',
        subtitle: 'Technical Skills',
        icon: <Compass size={20} />,
        color: 'text-emerald-400'
    },
    {
        path: '/coding',
        name: 'Neural Sanctum',
        subtitle: 'Coding Profiles',
        icon: <Trophy size={20} />,
        color: 'text-amber-500'
    },
    {
        path: '/transmission',
        name: 'Eagle\'s Call',
        subtitle: 'Contact & Links',
        icon: <Radio size={20} />,
        color: 'text-rose-400'
    },
];

const codingProfiles = [
    {
        name: 'LeetCode',
        url: 'https://leetcode.com/Varun_2/',
        icon: <Code size={14} />,
        metric: '250+',
        accent: 'text-orange-500 bg-orange-500/10 border-orange-500/20'
    },
    {
        name: 'GFG',
        url: 'https://www.geeksforgeeks.org/profile/varun28y2a4?tab=activity',
        icon: <Terminal size={14} />,
        metric: '350+',
        accent: 'text-green-500 bg-green-500/10 border-green-500/20'
    },
    {
        name: 'CodeForces',
        url: 'https://codeforces.com/profile/Varun_o8',
        icon: <Trophy size={14} />,
        metric: 'Pupil',
        accent: 'text-blue-500 bg-blue-500/10 border-blue-500/20'
    },
];

const ExpeditionMap: React.FC = () => {
    return (
        <aside className="fixed left-0 top-0 h-screen w-72 bg-[#050A05] z-50 hidden lg:flex flex-col border-r border-white/5 shadow-2xl">
            {/* Glossy Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F1C0F] to-[#050A05] pointer-events-none" />

            {/* Header / Identity */}
            <div className="relative pt-10 pb-6 px-6 border-b border-white/5">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-outdoors-rust flex items-center justify-center shadow-[0_0_15px_rgba(183,65,14,0.4)]">
                        <span className="font-display font-bold text-white text-lg">V</span>
                    </div>
                    <div>
                        <h1 className="font-display font-bold text-white tracking-tight text-lg">VARUN TYAGI</h1>
                        <p className="font-mono text-[9px] text-white/40 uppercase tracking-widest">AI Engineer // 2025</p>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="relative flex-grow px-4 py-8 space-y-2 overflow-y-auto scrollbar-hide">
                <div className="px-2 mb-4">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-white/20 font-bold">Expedition Sectors</span>
                </div>

                {locations.map((loc) => (
                    <NavLink
                        key={loc.path}
                        to={loc.path}
                        className={({ isActive }) => `
                            group relative block px-4 py-3 rounded-xl transition-all duration-300
                            ${isActive
                                ? 'bg-white/5'
                                : 'hover:bg-white/5'}
                        `}
                    >
                        {({ isActive }) => (
                            <div className="flex items-center gap-4 relative z-10">
                                <div className={`
                                    p-2 rounded-lg transition-all duration-300
                                    ${isActive ? 'bg-white/10 text-white' : 'text-white/40 group-hover:text-white'}
                                `}>
                                    {isActive ? <Target size={20} className={loc.color} /> : loc.icon}
                                </div>

                                <div>
                                    <h3 className={`font-display font-bold text-sm transition-colors ${isActive ? 'text-white' : 'text-white/50 group-hover:text-white'}`}>
                                        {loc.name}
                                    </h3>
                                    <p className={`font-mono text-[9px] uppercase tracking-wider ${isActive ? 'text-outdoors-rust' : 'text-white/20'}`}>
                                        {loc.subtitle}
                                    </p>
                                </div>

                                {isActive && (
                                    <motion.div
                                        layoutId="glow"
                                        className={`absolute inset-0 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/5 shadow-inner`}
                                    />
                                )}
                            </div>
                        )}
                    </NavLink>
                ))}
            </nav>

            {/* Coding Profiles / Ranking */}
            <div className="relative p-6 border-t border-white/5 bg-black/20">
                <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-white/30 font-bold">Combat Rankings</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
                </div>

                <div className="grid grid-cols-1 gap-2">
                    {codingProfiles.map((profile) => (
                        <a
                            key={profile.name}
                            href={profile.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center justify-between p-2 rounded-md border transition-all hover:brightness-125 ${profile.accent}`}
                        >
                            <div className="flex items-center gap-2">
                                {profile.icon}
                                <span className="font-mono text-[10px] uppercase font-bold text-white/80">{profile.name}</span>
                            </div>
                            <span className="font-display text-xs font-bold text-white">{profile.metric}</span>
                        </a>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default ExpeditionMap;
