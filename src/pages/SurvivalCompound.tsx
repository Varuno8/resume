import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hammer as HammerIcon, Zap, Box, Bird, TreePine, Target, Wrench, Brain, Code, Terminal, Globe } from 'lucide-react';

const skillCategories = [
    {
        name: "AI & Machine Learning",
        icon: <Brain className="h-6 w-6" />,
        skills: ["PyTorch", "TensorFlow", "Scikit-learn", "LangChain", "CNNs (ResNet, VGG)", "Transformers", "Stable Diffusion", "RAG", "Ollama", "Hugging Face"],
        color: "text-amber-400",
        bgColor: "bg-amber-400/10"
    },
    {
        name: "Languages",
        icon: <Terminal className="h-6 w-6" />,
        skills: ["Python", "JavaScript", "TypeScript", "C++", "C", "SQL"],
        color: "text-outdoors-rust",
        bgColor: "bg-outdoors-rust/20"
    },
    {
        name: "Full-Stack Ecosystem",
        icon: <Globe className="h-6 w-6" />,
        skills: ["React", "Next.js", "Node.js", "Angular", "FastAPI", "Flask", "Django", "Tailwind CSS"],
        color: "text-green-400",
        bgColor: "bg-green-400/10"
    },
    {
        name: "Tools & Infrastructure",
        icon: <Wrench className="h-6 w-6" />,
        skills: ["Docker", "AWS (EC2, S3)", "Git", "FAISS", "Pinecone", "MongoDB", "PostgreSQL"],
        color: "text-blue-400",
        bgColor: "bg-blue-400/10"
    }
];

const SurvivalCompound: React.FC = () => {
    const [activeTab, setActiveTab] = useState(skillCategories[0]);

    return (
        <div className="min-h-screen pb-24 px-6 md:px-12 pt-8 bg-background">
            <header className="mb-12 border-b-2 border-white/10 pb-6 relative z-10">
                <div className="flex items-center gap-3 mb-2">
                    <HammerIcon className="text-outdoors-rust" size={24} />
                    <span className="font-mono text-[10px] uppercase font-bold tracking-[0.4em] text-white/40">Technical Toolkit</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-outdoors-canvas drop-shadow-2xl text-outdoors-canvas">Act V: Survival Compound</h1>
                <p className="mt-4 max-w-2xl text-outdoors-canvas/60 font-sans italic">
                    "My arsenal for the digital wilderness—spanning advanced machine learning frameworks, full-stack stacks, and production infrastructure."
                </p>
            </header>

            <div className="grid lg:grid-cols-12 gap-12 items-start mt-12">
                <div className="lg:col-span-4 space-y-4">
                    <div className="bg-black/40 backdrop-blur-md p-6 text-white shadow-2xl skew-x-[-2deg] border border-white/10">
                        <h3 className="font-display text-xl uppercase tracking-widest mb-6 border-b border-white/10 pb-2 text-outdoors-rust font-bold">Tool Selection</h3>
                        <div className="space-y-3">
                            {skillCategories.map((cat) => (
                                <button
                                    key={cat.name}
                                    onClick={() => setActiveTab(cat)}
                                    className={`w-full flex items-center justify-between p-4 transition-all border-l-4 font-mono text-[10px] uppercase tracking-widest
                                        ${activeTab.name === cat.name
                                            ? 'bg-outdoors-rust/20 border-outdoors-rust text-outdoors-rust font-bold scale-105 shadow-[0_0_20px_rgba(183,65,14,0.3)]'
                                            : 'border-transparent text-white/40 hover:bg-white/5 hover:text-white'}
                                    `}
                                >
                                    <div className="flex items-center gap-3">
                                        {cat.icon}
                                        <span>{cat.name}</span>
                                    </div>
                                    <Target size={14} className={activeTab.name === cat.name ? 'opacity-100' : 'opacity-0'} />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-black/30 backdrop-blur-lg border-2 border-white/10 shadow-2xl p-8 sm:p-12 relative overflow-hidden flex flex-col min-h-[400px]"
                        >
                            <div className="absolute top-0 right-0 p-12 opacity-[0.03] rotate-12 pointer-events-none text-white">
                                <Box size={300} />
                            </div>

                            <div className="relative z-10 flex-grow">
                                <div className="flex items-center gap-5 mb-10">
                                    <div className={`p-5 rounded-sm bg-white/5 ${activeTab.color} shadow-lg border border-current/20`}>
                                        {React.cloneElement(activeTab.icon as React.ReactElement, { size: 48 })}
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-display font-bold text-outdoors-canvas uppercase tracking-tighter leading-none">{activeTab.name}</h2>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                    {activeTab.skills.map((skill, idx) => (
                                        <motion.div
                                            key={skill}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="group relative"
                                        >
                                            <div className="bg-black/20 border border-white/10 p-4 hover:border-outdoors-rust transition-all hover:shadow-xl hover:-translate-y-1">
                                                <div className="flex items-center gap-3">
                                                    <Zap size={16} className={`opacity-0 group-hover:opacity-100 transition-opacity ${activeTab.color} animate-pulse`} />
                                                    <span className="font-display text-sm sm:text-base tracking-tight text-white/80 group-hover:text-white font-medium">{skill}</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-12 p-6 border-t border-dashed border-white/10">
                                <div className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-outdoors-rust animate-ping" />
                                    <p className="font-mono text-[10px] uppercase text-white/40 tracking-widest font-bold">
                                        Ready for Production Deployment
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default SurvivalCompound;
