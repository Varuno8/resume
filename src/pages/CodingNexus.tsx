import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Trophy, Cpu, Zap, Activity, Target, Award } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Float, Stars, Sparkles } from '@react-three/drei';

const CodingBackground = () => (
    <div className="absolute inset-0 pointer-events-none opacity-20">
        <Canvas>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <Sparkles count={50} scale={10} size={4} speed={0.4} opacity={0.5} color="#B7410E" />
            </Float>
        </Canvas>
    </div>
);

const profiles = [
    {
        id: 'leetcode',
        name: 'LeetCode',
        alias: 'The Agile Leopard',
        stats: '250+ Solved',
        description: 'Relentless problem-solving speed and precision. Dominated arrays, dynamic programming, and graph algorithms.',
        rank: 'Top 15% Global',
        icon: <Code size={32} />,
        color: 'text-amber-500',
        bg: 'bg-amber-500/10',
        border: 'border-amber-500/30',
        url: 'https://leetcode.com/Varun_2/'
    },
    {
        id: 'gfg',
        name: 'GeeksforGeeks',
        alias: 'The Wise Owl',
        stats: '350+ Solved',
        description: 'Deep archive of fundamental knowledge. Mastered data structures and core algorithmic paradigms.',
        rank: 'Institute Rank 1',
        icon: <Terminal size={32} />,
        color: 'text-green-500',
        bg: 'bg-green-500/10',
        border: 'border-green-500/30',
        url: 'https://www.geeksforgeeks.org/profile/varun28y2a4?tab=activity'
    },
    {
        id: 'codeforces',
        name: 'CodeForces',
        alias: 'The Combat Wolf',
        stats: 'Rank: Pupil',
        description: 'Battle-hardened in high-pressure contests. solving complex problems under strict time constraints.',
        rank: 'Max Rating: 1250',
        icon: <Trophy size={32} />,
        color: 'text-blue-500',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/30',
        url: 'https://codeforces.com/profile/Varun_o8'
    }
];

const CodingNexus: React.FC = () => {
    return (
        <div className="min-h-screen pb-24 px-6 md:px-12 pt-8 relative bg-background overflow-hidden">
            <CodingBackground />

            <header className="mb-12 border-b-2 border-white/10 pb-6 relative z-10">
                <div className="flex items-center gap-3 mb-2">
                    <Cpu className="text-outdoors-rust" size={24} />
                    <span className="font-mono text-[10px] uppercase font-bold tracking-[0.4em] text-white/40">Algorithmic Mastery</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-outdoors-canvas drop-shadow-2xl">Act VII: The Neural Sanctum</h1>
                <p className="mt-4 max-w-2xl text-outdoors-canvas/60 font-sans italic">
                    "A dedicated arena for sharpening logic, refining efficiency, and battling complexity."
                </p>
            </header>

            <div className="grid lg:grid-cols-3 gap-8 relative z-10">
                {/* Total Stats Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="lg:col-span-3 bg-gradient-to-r from-outdoors-rust/20 to-black border border-outdoors-rust/30 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-sm"
                >
                    <div className="flex items-center gap-6">
                        <div className="p-6 bg-outdoors-rust/20 rounded-full shadow-[0_0_30px_rgba(183,65,14,0.4)] animate-pulse">
                            <Activity size={48} className="text-outdoors-rust" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-display font-bold text-white uppercase tracking-tight">Total Problems Solved</h2>
                            <p className="text-white/40 font-mono uppercase tracking-widest text-sm">Valid Solutions Across All Platforms</p>
                        </div>
                    </div>
                    <div className="text-6xl font-display font-bold text-outdoors-canvas drop-shadow-lg">
                        600<span className="text-outdoors-rust">+</span>
                    </div>
                </motion.div>

                {/* Platform Cards */}
                {profiles.map((profile, index) => (
                    <motion.a
                        key={profile.id}
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className={`group relative p-8 rounded-2xl border ${profile.border} ${profile.bg} backdrop-blur-md hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl`}
                    >
                        <div className="absolute top-4 right-4 text-white/10 group-hover:text-white/30 transition-colors">
                            <Target size={100} strokeWidth={0.5} />
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-6">
                                <div className={`p-4 rounded-xl bg-black/40 ${profile.color} shadow-inner`}>
                                    {profile.icon}
                                </div>
                                <div className="text-right">
                                    <span className="block font-display text-2xl font-bold text-white">{profile.stats}</span>
                                    <span className={`text-[10px] font-mono uppercase font-bold tracking-wider ${profile.color}`}>{profile.rank}</span>
                                </div>
                            </div>

                            <h3 className="font-display text-xl text-white font-bold mb-1 uppercase tracking-wider group-hover:text-outdoors-rust transition-colors">{profile.name}</h3>
                            <p className="font-serif italic text-white/50 text-sm mb-6">"{profile.alias}"</p>

                            <p className="text-white/70 text-sm leading-relaxed mb-6 font-sans">
                                {profile.description}
                            </p>

                            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 group-hover:text-white transition-colors font-bold">
                                <span>Inspect Profile</span>
                                <ArrowRightIcon className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mt-16 p-8 border border-white/5 bg-black/40 rounded-2xl flex items-center justify-center gap-4 text-center"
            >
                <Award className="text-outdoors-rust" />
                <p className="font-display text-lg text-white/60">
                    "Code is more than syntax; it is the modern survival instinct."
                </p>
            </motion.div>
        </div>
    );
};

const ArrowRightIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
)

export default CodingNexus;
