
import React, { useEffect, useState } from 'react';
import { Bird, Cloud, TreePine, Rabbit, Turtle } from 'lucide-react';
import { useExpedition } from '@/context/ExpeditionContext';

interface NatureElement {
    id: number;
    type: 'bird' | 'cloud';
    x: number;
    y: number;
    size: number;
    speed: number;
    opacity: number;
    delay: number;
    direction: number;
}

const NatureBackground: React.FC = () => {
    const { timeOfDay, ecosystem } = useExpedition();
    const [elements, setElements] = useState<NatureElement[]>([]);

    useEffect(() => {
        const newElements: NatureElement[] = [];
        // Birds
        for (let i = 0; i < 5; i++) {
            newElements.push({
                id: i,
                type: 'bird',
                x: Math.random() * 100,
                y: Math.random() * 30,
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
        <div className={`fixed inset-0 pointer-events-none z-0 overflow-hidden transition-all duration-1000 ${timeOfDay === 'night' ? 'brightness-50' : ''}`}>
            {/* The persistent animals from context */}
            {ecosystem.animals.map((animal) => (
                <div
                    key={animal.id}
                    className="absolute transition-all duration-[30000ms]"
                    style={{ left: `${animal.position.x}%`, bottom: `${animal.position.y}px` }}
                >
                    {animal.type === 'rabbit' ? (
                        <div className="flex flex-col items-center">
                            <Rabbit size={32} className="text-outdoors-rust mb-1 animate-bounce-slow" />
                            <span className="text-[8px] font-mono text-outdoors-rust opacity-50">{animal.status}</span>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center">
                            <Turtle size={32} className="text-outdoors-forest mb-1 animate-pulse-slow" />
                            <span className="text-[8px] font-mono text-outdoors-forest opacity-50">{animal.status}</span>
                        </div>
                    )}
                </div>
            ))}

            {/* Clouds & Birds */}
            {elements.map((el) => (
                <div
                    key={el.id}
                    className="absolute"
                    style={{ left: `${el.x}%`, top: `${el.y}%`, opacity: el.opacity }}
                >
                    <div
                        className="animate-float-horizontal"
                        style={{ animationDuration: `${20 / el.speed}s`, transform: `scaleX(${el.direction})` }}
                    >
                        {el.type === 'bird' && <Bird size={el.size} className="text-outdoors-rust" />}
                        {el.type === 'cloud' && <Cloud size={el.size} className="text-outdoors-canvas" />}
                    </div>
                </div>
            ))}

            {/* Vegetation */}
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
