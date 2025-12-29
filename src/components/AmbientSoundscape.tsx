import React, { useEffect, useRef } from 'react';
import { useExpedition } from '@/context/ExpeditionContext';
import { Volume2, VolumeX } from 'lucide-react';

const AmbientSoundscape: React.FC = () => {
    const { isAudioPlaying, setAudioPlaying, isPopupOpen } = useExpedition();
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Helper to start audio on first interaction if blocked
    const resumeOnInteraction = () => {
        const playOnInteraction = () => {
            if (audioRef.current && isAudioPlaying && !isPopupOpen) {
                audioRef.current.play()
                    .then(() => {
                        // Success - remove listener
                        document.removeEventListener('click', playOnInteraction);
                        document.removeEventListener('keydown', playOnInteraction);
                    })
                    .catch(e => console.log("Still blocked, waiting for next interaction", e));
            }
        };

        document.addEventListener('click', playOnInteraction);
        document.addEventListener('keydown', playOnInteraction);

        // Cleanup listener if component unmounts
        return () => {
            document.removeEventListener('click', playOnInteraction);
            document.removeEventListener('keydown', playOnInteraction);
        };
    };

    useEffect(() => {
        // Continuous forest audio layer
        // Using a more reliable royalty-free preview link
        const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2432/2432-preview.mp3');
        audio.loop = true;
        audio.volume = 0.5; // Set reasonable default volume
        audioRef.current = audio;

        // Handle case where source might still fail
        audio.onerror = () => {
            console.error("Audio source failed to load. Please check connection or URL.");
        };

        // Attempt autoplay on mount if conditions are met
        if (isAudioPlaying && !isPopupOpen) {
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.catch(e => {
                    console.log("Autoplay blocked (common in browsers). Waiting for interaction...", e);
                    // Do NOT turn off the toggle. Just wait for interaction.
                    resumeOnInteraction();
                });
            }
        }

        return () => {
            audio.pause();
            audioRef.current = null;
        };
    }, []);

    useEffect(() => {
        if (audioRef.current) {
            const shouldPlay = isAudioPlaying && !isPopupOpen;

            if (shouldPlay) {
                const playPromise = audioRef.current.play();
                if (playPromise !== undefined) {
                    playPromise.catch(e => {
                        console.log("Audio playback blocked:", e);
                        if (e.name === 'NotAllowedError') {
                            // This usually happens if we try to play programmatically without user gesture
                            resumeOnInteraction();
                        } else if (e.name !== 'AbortError') {
                            setAudioPlaying(false);
                        }
                    });
                }
            } else {
                audioRef.current.pause();
            }
        }
    }, [isAudioPlaying, isPopupOpen, setAudioPlaying]);

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
