import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import { ArrowRight, Github, Linkedin, Mail, Download, Globe, Signal, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ProfileArtifact = () => {
    return (
        <Canvas
            className="h-64 sm:h-96"
            gl={{ antialias: false, powerPreference: "low-power" }}
            dpr={[1, 1.5]}
        >
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                <Sphere args={[1, 32, 32]} scale={1.5}>
                    <MeshDistortMaterial
                        color="#B7410E"
                        attach="material"
                        distort={0.4}
                        speed={2}
                        roughness={0.2}
                    />
                </Sphere>
            </Float>
            <OrbitControls enableZoom={false} enableDamping />
        </Canvas>
    );
};

const BaseCamp: React.FC = () => {
    const navigate = useNavigate();
    const [journalText, setJournalText] = useState('');
    const fullText = "The 'Nights & Weekends' Engineer—building Utility AI that survives the real world. I am a Full-Stack Developer and Generative AI Architect who bridges the gap between research papers and production deployment. My focus is not just algorithms, but reliable systems that handle messy data, latency, and scale.";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setJournalText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) clearInterval(interval);
        }, 30)
        return () => clearInterval(interval);
    }, []);

    const handleResumeClick = () => {
        window.open('https://drive.google.com/file/d/1ahrwN-oIochekflh3x5vxn8SmRPMrAMZ/view?usp=drive_link', '_blank');
    };

    return (
        <div className="min-h-screen pb-24 overflow-x-hidden pt-8 bg-background">
            <section className="relative min-h-[70vh] flex items-center justify-center pt-10">
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
                    <ProfileArtifact />
                </div>

                <div className="z-10 text-center px-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6"
                    >
                        <span className="px-4 py-1.5 bg-outdoors-rust/20 border-l-4 border-outdoors-rust font-mono text-[10px] uppercase font-bold tracking-[0.3em] text-outdoors-rust">
                            Mission Intelligence Active
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-6xl md:text-9xl font-display font-bold text-outdoors-canvas tracking-tighter leading-tight drop-shadow-2xl"
                    >
                        VARUN TYAGI
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-6 flex flex-wrap justify-center gap-6 border-t border-b border-white/10 py-4"
                    >
                        <div className="flex items-center gap-2 font-mono text-[10px] text-white/60">
                            <Zap size={12} className="text-outdoors-rust animate-pulse" />
                            <span>AI Engineer</span>
                        </div>
                        <div className="flex items-center gap-2 font-mono text-[10px] text-white/60">
                            <Signal size={12} className="text-blue-400" />
                            <span>Generative AI Developer</span>
                        </div>
                        <div className="flex items-center gap-2 font-mono text-[10px] text-white/60">
                            <Globe size={12} className="text-green-400" />
                            <span>Full-Stack Builder</span>
                        </div>
                    </motion.div>

                    <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                        <Button
                            onClick={() => navigate('/excavation?project=1')}
                            className="bg-outdoors-rust hover:bg-white hover:text-outdoors-rust text-white rounded-none h-14 px-8 font-display uppercase tracking-widest text-lg shadow-xl group border-b-4 border-black/40 active:translate-y-1 transition-all"
                        >
                            Explore Artifacts <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <div className="relative group">
                            <Button
                                onClick={handleResumeClick}
                                variant="outline"
                                className="border-2 border-outdoors-canvas text-outdoors-canvas hover:bg-outdoors-canvas hover:text-outdoors-forest rounded-none h-14 px-8 font-display uppercase tracking-widest bg-transparent transition-all w-full sm:w-auto"
                            >
                                Access Dossier <Download size={18} className="ml-2" />
                            </Button>
                            <div className="absolute top-full lg:left-0 left-1/2 lg:-translate-x-0 -translate-x-1/2 mt-2 w-max px-3 py-1 bg-black/80 text-white text-[10px] font-mono tracking-wider border border-white/20 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                                DOWNLOAD OFFICIAL RESUME
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto max-w-4xl px-6 mt-12">
                <div className="bg-black/30 backdrop-blur-md p-8 border-l-[12px] border-outdoors-rust border-2 border-white/10 shadow-2xl relative overflow-hidden group">
                    <h2 className="font-display text-xl mb-6 text-outdoors-rust flex items-center gap-2">
                        <span className="h-1 w-8 bg-outdoors-canvas" />
                        Operational Narrative
                    </h2>

                    <p className="font-serif italic text-2xl text-outdoors-canvas leading-relaxed min-h-[140px]">
                        "{journalText}"
                        <span className="animate-blink text-outdoors-rust">|</span>
                    </p>

                    <div className="mt-12 flex gap-4">
                        <a href="https://github.com/Varuno8" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white hover:text-outdoors-forest transition-all text-white border border-white/10">
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com/in/varun-tyagi-32bb281b9" target="_blank" rel="noopener noreferrer" className="p-3 bg-outdoors-rust/20 hover:bg-outdoors-rust hover:text-white transition-all text-outdoors-rust border border-outdoors-rust/20">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:varun28082001@gmail.com" className="p-3 bg-white/5 hover:bg-white hover:text-outdoors-forest transition-all text-white border border-white/10">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default BaseCamp;
