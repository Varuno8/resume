import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pickaxe, ExternalLink, Github, Database, Brain, Eye, FileText, Cpu, Layout, ShoppingCart, Briefcase, HeartPulse, Maximize2 } from 'lucide-react';
import { projects } from '@/components/projects/projectsData';
import { useLocation } from 'react-router-dom';

const iconMap: Record<number, React.ReactNode> = {
    1: <Layout />,
    2: <Eye />,
    3: <Pickaxe />,
    4: <FileText />,
    5: <Brain />,
    6: <ShoppingCart />,
    7: <Briefcase />,
    8: <HeartPulse />
};

const ExcavationGrid: React.FC = () => {
    const location = useLocation();
    const videoRef = useRef<HTMLVideoElement>(null);

    // Determine initial project based on URL query or default to Viton (ID 1)
    const getInitialProject = () => {
        const params = new URLSearchParams(location.search);
        const projectId = params.get('project');
        if (projectId) {
            const found = projects.find(p => p.id === Number(projectId));
            if (found) return found;
        }
        // Default to Viton (ID 1), or fallback to projects[0]
        return projects.find(p => p.id === 1) || projects[0];
    };

    const [selectedProject, setSelectedProject] = useState(getInitialProject());

    // Update selected project if URL changes (optional, but good for deep linking)
    React.useEffect(() => {
        const params = new URLSearchParams(location.search);
        const projectId = params.get('project');
        if (projectId) {
            const found = projects.find(p => p.id === Number(projectId));
            if (found) setSelectedProject(found);
        }
    }, [location.search]);

    const toggleFullScreen = () => {
        if (videoRef.current) {
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            } else if ((videoRef.current as any).webkitRequestFullscreen) {
                (videoRef.current as any).webkitRequestFullscreen();
            } else if ((videoRef.current as any).msRequestFullscreen) {
                (videoRef.current as any).msRequestFullscreen();
            }
        }
    };

    return (
        <div className="min-h-screen pb-24 px-6 md:px-12 pt-8 bg-background">
            <header className="mb-12 border-b-2 border-white/10 pb-6">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <Pickaxe className="text-outdoors-rust" size={24} />
                        <span className="font-mono text-[10px] uppercase font-bold tracking-[0.4em] text-white/40">Technical Artifacts</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-outdoors-canvas text-outdoors-canvas">Act III: Excavation Grid</h1>
                    <p className="mt-4 max-w-2xl text-outdoors-canvas/60 font-sans italic">
                        "Full archive of discovered engineering solutions, from generative AI to complex e-commerce ecosystems."
                    </p>
                </div>
            </header>

            <div className="grid lg:grid-cols-3 gap-12 items-start">
                {/* Project List */}
                <div className="lg:col-span-1 space-y-3 max-h-[70vh] overflow-y-auto pr-4 scrollbar-hide">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            className={`group p-4 border transition-all cursor-pointer relative
                                ${selectedProject.id === project.id
                                    ? 'border-outdoors-rust bg-outdoors-rust/10 shadow-lg translate-x-2'
                                    : 'border-white/10 bg-black/20 hover:border-white/30'}
                            `}
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`p-2 ${selectedProject.id === project.id ? 'bg-outdoors-rust text-white' : 'bg-white/5 text-white/20'}`}>
                                    {iconMap[project.id] || <Database size={18} />}
                                </div>
                                <div className="overflow-hidden">
                                    <h3 className={`font-display text-sm tracking-tight truncate transition-colors ${selectedProject.id === project.id ? 'text-outdoors-canvas font-bold' : 'text-white/40 group-hover:text-white'}`}>{project.title}</h3>
                                    <span className="text-[8px] font-mono text-outdoors-rust font-bold uppercase tracking-widest block mt-0.5">
                                        {project.technologies[0]}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Project Detail */}
                <div className="lg:col-span-2">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedProject.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="bg-black/30 backdrop-blur-md border-2 border-white/10 shadow-2xl p-6 sm:p-10 relative overflow-hidden flex flex-col min-h-[550px]"
                        >
                            <div className="flex justify-between items-start mb-8 flex-wrap gap-6">
                                <div className="max-w-md">
                                    <h2 className="text-3xl md:text-5xl font-display font-bold text-outdoors-canvas uppercase tracking-tighter leading-tight">{selectedProject.title}</h2>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {selectedProject.technologies.map(t => (
                                            <span key={t} className="text-[9px] font-mono px-2 py-0.5 bg-outdoors-rust/10 text-outdoors-rust border border-outdoors-rust/30 font-bold uppercase">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    {selectedProject.githubUrl !== "https://github.com/" && (
                                        <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 text-white/60 hover:bg-white hover:text-black transition-all border border-white/10">
                                            <Github size={20} />
                                        </a>
                                    )}
                                    <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-outdoors-rust text-white shadow-lg hover:brightness-125 transition-all">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-5 gap-8 mt-4">
                                <div className="md:col-span-2 space-y-6">
                                    <div className="aspect-[16/10] bg-black/40 border border-white/10 overflow-hidden relative group/video">
                                        {selectedProject.video ? (
                                            <>
                                                <video
                                                    ref={videoRef}
                                                    key={selectedProject.video}
                                                    src={selectedProject.video}
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    className="w-full h-full object-cover"
                                                />
                                                <button
                                                    onClick={toggleFullScreen}
                                                    className="absolute bottom-2 right-2 p-2 bg-black/60 text-white/80 hover:text-white hover:bg-outdoors-rust rounded-full opacity-0 group-hover/video:opacity-100 transition-all duration-300 backdrop-blur-sm"
                                                    title="Full Screen"
                                                >
                                                    <Maximize2 size={16} />
                                                </button>
                                            </>
                                        ) : (
                                            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700" />
                                        )}
                                        <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/60 font-mono text-[8px] text-outdoors-rust border border-outdoors-rust/30">
                                            LIVE_CAPTURE_01
                                        </div>
                                    </div>
                                </div>

                                <div className="md:col-span-3">
                                    <h4 className="font-display text-base text-outdoors-rust mb-3 uppercase tracking-widest border-b border-white/10 pb-1 font-bold">Abstract</h4>
                                    <p className="font-serif italic text-lg leading-relaxed text-outdoors-canvas/90 mb-8">
                                        "{selectedProject.description}"
                                    </p>

                                    <div className="p-4 bg-white/5 border-l-4 border-outdoors-rust mt-auto">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Cpu size={14} className="text-outdoors-rust" />
                                            <span className="font-mono text-[10px] uppercase font-bold text-white/40 tracking-wider">Operational Status: Verified</span>
                                        </div>
                                        <p className="text-[10px] font-mono text-white/30 italic">Detailed documentation and source available via secure uplink.</p>
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

export default ExcavationGrid;
