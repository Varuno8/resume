import React, { createContext, useContext, useEffect, useState } from 'react';

interface EcosystemState {
    animals: {
        id: string;
        type: 'rabbit' | 'turtle' | 'owl';
        position: { x: number; y: number };
        status: 'foraging' | 'resting' | 'patrolling';
    }[];
}

interface ExpeditionContextType {
    timeOfDay: 'dawn' | 'day' | 'dusk' | 'night';
    ecosystem: EcosystemState;
    isAudioPlaying: boolean;
    setAudioPlaying: (playing: boolean) => void;
    updateAnimalPosition: (id: string, x: number, y: number) => void;
}

const ExpeditionContext = createContext<ExpeditionContextType | undefined>(undefined);

export const ExpeditionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [timeOfDay, setTimeOfDay] = useState<'dawn' | 'day' | 'dusk' | 'night'>('day');
    const [isAudioPlaying, setAudioPlaying] = useState(false);
    const [ecosystem, setEcosystem] = useState<EcosystemState>(() => {
        const saved = sessionStorage.getItem('expedition-ecosystem');
        return saved ? JSON.parse(saved) : {
            animals: [
                { id: 'rabbit-1', type: 'rabbit', position: { x: 20, y: 80 }, status: 'resting' },
                { id: 'turtle-1', type: 'turtle', position: { x: 70, y: 90 }, status: 'foraging' },
            ]
        };
    });

    // Time Cycle Logic
    useEffect(() => {
        const updateTime = () => {
            const hour = new Date().getHours();
            let phase: 'dawn' | 'day' | 'dusk' | 'night';

            if (hour >= 5 && hour < 8) phase = 'dawn';
            else if (hour >= 8 && hour < 17) phase = 'day';
            else if (hour >= 17 && hour < 20) phase = 'dusk';
            else phase = 'night';

            setTimeOfDay(phase);
            document.documentElement.setAttribute('data-time', phase);

            // Update CSS variables based on time
            const root = document.documentElement;
            if (phase === 'night') {
                root.style.setProperty('--expedition-brightness', '0.4');
                root.style.setProperty('--expedition-hue', '220deg');
            } else if (phase === 'dawn' || phase === 'dusk') {
                root.style.setProperty('--expedition-brightness', '0.7');
                root.style.setProperty('--expedition-hue', '20deg');
            } else {
                root.style.setProperty('--expedition-brightness', '1');
                root.style.setProperty('--expedition-hue', '0deg');
            }
        };

        updateTime();
        const timer = setInterval(updateTime, 60000); // Check every minute
        return () => clearInterval(timer);
    }, []);

    // Persist Ecosystem
    useEffect(() => {
        sessionStorage.setItem('expedition-ecosystem', JSON.stringify(ecosystem));
    }, [ecosystem]);

    const updateAnimalPosition = (id: string, x: number, y: number) => {
        setEcosystem(prev => ({
            ...prev,
            animals: prev.animals.map(a => a.id === id ? { ...a, position: { x, y } } : a)
        }));
    };

    return (
        <ExpeditionContext.Provider value={{
            timeOfDay,
            ecosystem,
            isAudioPlaying,
            setAudioPlaying,
            updateAnimalPosition
        }}>
            {children}
        </ExpeditionContext.Provider>
    );
};

export const useExpedition = () => {
    const context = useContext(ExpeditionContext);
    if (!context) throw new Error('useExpedition must be used within ExpeditionProvider');
    return context;
};
