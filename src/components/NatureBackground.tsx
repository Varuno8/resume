
import React, { useEffect, useState } from 'react';
import { Bird, Cloud, Mountain, TreePine, Fish, Rabbit, Turtle, Bot, Rat } from 'lucide-react'; // Bot as Owl/AI representation if Owl missing, Rat as Beaver? Let's check available icons. Lucide has Rabbit, Turtle. Owl is 'Bird' or specific. Let's use 'GraduationCap' for wise owl or just generic Bird. actually let's use standard icons.
// Lucide: Rabbit, Turtle are available. 


// Defines a nature element floating in the background
interface NatureElement {
    id: number;
    type: 'bird' | 'cloud' | 'tree' | 'fish';
    x: number;
    y: number;
    size: number;
    speed: number;
    opacity: number;
    delay: number;
    direction: number; // 1 for right, -1 for left
}

const NatureBackground: React.FC = () => {
    const [elements, setElements] = useState<NatureElement[]>([]);

    useEffect(() => {
        // Generate random nature elements
        const newElements: NatureElement[] = [];

        // Birds high up
        for (let i = 0; i < 5; i++) {
            newElements.push({
                id: i,
                type: 'bird',
                x: Math.random() * 100,
                y: Math.random() * 30, // Top 30%
                size: 16 + Math.random() * 20,
                speed: 0.2 + Math.random() * 0.5,
                opacity: 0.1 + Math.random() * 0.3,
                delay: Math.random() * 5,
                direction: Math.random() > 0.5 ? 1 : -1
            });
        }

        // Clouds
        for (let i = 0; i < 3; i++) {
            newElements.push({
                id: i + 10,
                type: 'cloud',
                x: Math.random() * 100,
                y: Math.random() * 20,
                size: 60 + Math.random() * 100,
                speed: 0.05 + Math.random() * 0.1,
                opacity: 0.05 + Math.random() * 0.1,
                delay: Math.random() * 2,
                direction: 1
            });
        }

        setElements(newElements);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Static Mountain Silhouette at the very bottom */}
            <div className="absolute bottom-0 w-full h-[30vh] opacity-[0.05] text-outdoors-forest font-mono text-[10px] overflow-hidden whitespace-nowrap">
                {/* Binary/Fossil rain */}
                <div className="animate-float-vertical flex flex-col items-center opacity-50 absolute right-[10%] bottom-0">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>{Math.random() > 0.5 ? '1' : '0'}</span>
                    ))}
                </div>
                <div className="animate-float-vertical flex flex-col items-center opacity-50 absolute left-[10%] bottom-0">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <span key={i} style={{ animationDelay: `${i * 0.2}s` }}>{Math.random() > 0.5 ? '1' : '0'}</span>
                    ))}
                </div>
            </div>

            {/* THE RIVER - Explicit Blue/Teal Flow -> Now Data Stream / Underground River */}
            <div className="absolute bottom-0 w-full h-[15vh] z-10 opacity-30 text-emerald-900">
                {/* Matrix-like data stream effect using dashed strokes */}
                <svg viewBox="0 0 1440 320" className="w-full h-full animate-pulse-slow" preserveAspectRatio="none">
                    <path fill="url(#dataStreamGradient)" fillOpacity="0.8" d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    <defs>
                        <linearGradient id="dataStreamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#10B981" stopOpacity="0" />
                            <stop offset="50%" stopColor="#10B981" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* THE STORY: Tortoise (Constitution/Safety) and Hare (Speed/Innovation) Race */}
            {/* Tortoise - Slow and steady */}
            <div className="absolute bottom-[20vh] left-[-50px] animate-float-horizontal z-20" style={{ animationDuration: '60s', animationTimingFunction: 'linear' }}>
                <div className="flex flex-col items-center">
                    <Turtle size={32} className="text-outdoors-forest mb-1" />
                    <span className="text-[10px] font-mono text-outdoors-forest opacity-70">Long-term Stability</span>
                </div>
            </div>

            {/* Hare - Fast and sporadic */}
            <div className="absolute bottom-[22vh] left-[-50px] animate-float-horizontal z-20" style={{ animationDuration: '25s', animationTimingFunction: 'ease-in-out', animationDelay: '2s' }}>
                <div className="flex flex-col items-center">
                    <Rabbit size={32} className="text-outdoors-rust mb-1" />
                    <span className="text-[10px] font-mono text-outdoors-rust opacity-70">Rapid Prototyping</span>
                </div>
            </div>

            {/* Floating Elements */}
            {elements.map((el) => (
                <div
                    key={el.id}
                    className="absolute transition-transform duration-[20s] linear"
                    style={{
                        left: `${el.x}%`,
                        top: `${el.y}%`,
                        opacity: el.opacity,
                        // Simple animaion handled by CSS keyframes mostly, but positioning here
                    }}
                >
                    {/* Animated wrapper for movement */}
                    <div
                        className={el.type === 'bird' ? 'animate-float-horizontal' : 'animate-float-horizontal'}
                        style={{
                            animationDuration: `${20 / el.speed}s`,
                            transform: `scaleX(${el.direction})`
                        }}
                    >
                        {el.type === 'bird' && <Bird size={el.size} className="text-outdoors-rust" />}
                        {el.type === 'cloud' && <Cloud size={el.size} className="text-outdoors-canvas" />}
                    </div>
                </div>
            ))}

            {/* Trees on the sides */}
            <div className="absolute bottom-0 left-[-50px] opacity-[0.05] text-outdoors-forest transform scale-x-[-1]">
                <TreePine size={400} />
            </div>
            <div className="absolute bottom-0 right-[-50px] opacity-[0.05] text-outdoors-forest">
                <TreePine size={350} />
            </div>
        </div>
    );
};

export default NatureBackground;
