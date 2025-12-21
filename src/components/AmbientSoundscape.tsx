import React, { useEffect, useRef } from 'react';
import { useExpedition } from '@/context/ExpeditionContext';
import { Volume2, VolumeX } from 'lucide-react';

const AmbientSoundscape: React.FC = () => {
    const { isAudioPlaying, setAudioPlaying } = useExpedition();
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Continuous forest audio layer
        // Using a more reliable royalty-free preview link
        const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2432/2432-preview.mp3');
        audio.loop = true;
        audioRef.current = audio;

        // Handle case where source might still fail
        audio.onerror = () => {
            console.error("Audio source failed to load. Please check connection or URL.");
        };

        return () => {
            audio.pause();
            audioRef.current = null;
        };
    }, []);

    useEffect(() => {
        if (audioRef.current) {
            if (isAudioPlaying) {
                const playPromise = audioRef.current.play();
                if (playPromise !== undefined) {
                    playPromise.catch(e => {
                        console.log("Audio playback blocked by browser policy or source error:", e);
                        setAudioPlaying(false);
                    });
                }
            } else {
                audioRef.current.pause();
            }
        }
    }, [isAudioPlaying, setAudioPlaying]);

    return (
        <div className="fixed bottom-6 left-6 z-50">
            <button
                onClick={() => setAudioPlaying(!isAudioPlaying)}
                className="p-3 rounded-full bg-outdoors-forest/10 border border-outdoors-forest/30 text-outdoors-forest hover:bg-outdoors-forest/20 transition-all flex items-center justify-center shadow-lg backdrop-blur-sm"
                title={isAudioPlaying ? "Mute Forest Sounds" : "Unmute Forest Sounds"}
            >
                {isAudioPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </button>
        </div>
    );
};

export default AmbientSoundscape;
