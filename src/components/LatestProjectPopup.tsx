import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { X, ArrowRight, Volume2, VolumeX, Maximize } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useExpedition } from '@/context/ExpeditionContext';

const LatestProjectPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);
    const navigate = useNavigate();
    const location = useLocation();
    const { setPopupOpen } = useExpedition();

    useEffect(() => {
        setPopupOpen(isOpen);
    }, [isOpen, setPopupOpen]);

    useEffect(() => {
        // Show popup every time we are on the home page ('/')
        if (location.pathname === '/') {
            // Small delay to let the page load first
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 1500);
            return () => clearTimeout(timer);
        } else {
            // If we leave the home page, ensure it closes (optional, but good for UX)
            setIsOpen(false);
        }
    }, [location.pathname]);

    useEffect(() => {
        if (isOpen && videoRef.current) {
            // Standard autoplay ensures video runs immediately (muted is required for this to work reliably in all browsers)
            const video = videoRef.current;
            if (video.paused) {
                video.play().catch(e => console.error("Autoplay failed:", e));
            }
        }
    }, [isOpen]);

    const handleNavigate = () => {
        setIsOpen(false);
        navigate('/excavation');
    };

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsMuted(prev => !prev);
    };

    const handleFullscreen = (e: React.MouseEvent) => {
        e.stopPropagation();
        const element = videoRef.current;
        if (element) {
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if ((element as any).webkitRequestFullscreen) {
                (element as any).webkitRequestFullscreen();
            } else if ((element as any).msRequestFullscreen) {
                (element as any).msRequestFullscreen();
            }
        }
    };

    const togglePlayback = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (videoRef.current) {
            if (videoRef.current.paused) {
                // Unmute when resuming
                setIsMuted(false);
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-500"
            onClick={() => {
                // Clicking background can close or do nothing. Currently doing nothing to avoid closing accidentally.
                // setIsOpen(false);
            }}
        >
            <div
                className="relative w-full max-w-4xl mx-4 bg-texture-paper border-2 border-outdoors-rust/50 rounded-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-500"
            >

                {/* Close Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="flex flex-col md:flex-row h-full">
                    {/* Content Section */}
                    <div className="flex-1 p-8 flex flex-col justify-center relative order-2 md:order-1">
                        <div className="absolute inset-0 bg-outdoors-paper opacity-90 z-0"></div>
                        <div className="relative z-10">
                            <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-white uppercase bg-outdoors-rust rounded-full">
                                Just Released
                            </div>
                            <h2 className="text-3xl font-display font-bold text-outdoors-forest mb-2">
                                Viton: The Chameleon
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                Experience our latest breakthrough in AI. A virtual try-on system that adapts clothing to any user instantly using Stable Diffusion.
                            </p>

                            <div className="flex items-center gap-4">
                                <Button
                                    onClick={handleNavigate}
                                    className="bg-outdoors-rust hover:bg-outdoors-rust/90 text-white font-display text-lg px-8 py-6 rounded-md shadow-lg hover:shadow-xl transition-all hover:scale-105"
                                >
                                    View Project <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Video Section */}
                    <div
                        className="relative w-full md:w-3/5 h-[300px] md:h-auto bg-black order-1 md:order-2 group cursor-pointer"
                        onClick={togglePlayback}
                    >
                        <video
                            ref={videoRef}
                            src="/site-demo.mp4"
                            className="w-full h-full object-cover"
                            autoPlay
                            muted={isMuted}
                            controls={false}
                            loop
                            playsInline
                        />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-texture-paper via-transparent to-transparent md:bg-gradient-to-l opacity-20 pointer-events-none"></div>

                        {/* Controls Container */}
                        <div className="absolute bottom-4 right-4 flex gap-2 z-20">
                            {/* Fullscreen Toggle */}
                            <button
                                onClick={handleFullscreen}
                                className="p-2 bg-black/60 hover:bg-black/80 rounded-full text-white transition-colors"
                                title="Fullscreen"
                            >
                                <Maximize className="w-5 h-5" />
                            </button>

                            {/* Mute Toggle */}
                            <button
                                onClick={toggleMute}
                                className="p-2 bg-black/60 hover:bg-black/80 rounded-full text-white transition-colors"
                            >
                                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestProjectPopup;
