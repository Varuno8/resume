import React from 'react';

interface TVScreenProps {
    videoSrc: string;
}

const TVScreen: React.FC<TVScreenProps> = ({ videoSrc }) => {
    return (
        <div className="relative mx-auto max-w-lg w-full transform transition-all duration-500 hover:scale-[1.02]">
            {/* TV Frame/Bezel */}
            <div className="relative bg-slate-900 rounded-xl p-2 sm:p-3 shadow-2xl border border-white/10 ring-1 ring-black/50">

                {/* Screen Container */}
                <div className="relative overflow-hidden rounded-lg bg-black aspect-video group">

                    {/* Video Player */}
                    <video
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls={false}
                    >
                        <source src={videoSrc} type="video/quicktime" />
                        <source src={videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Screen Gloss/Reflection Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-20 pointer-events-none rounded-lg z-10"></div>

                    {/* Scanline Effect (subtle) */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] z-20 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20"></div>

                    {/* Vignette */}
                    <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/40 z-20 pointer-events-none"></div>

                </div>

                {/* TV Brand/Bottom Bezel details */}
                <div className="mt-2 flex justify-center items-center gap-2">
                    <div className="h-1 w-1 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div>
                    <div className="text-[10px] font-mono text-white/30 tracking-widest uppercase">Live Demo</div>
                </div>

            </div>

            {/* Ambient Glow behind TV */}
            <div className="absolute -inset-4 bg-premium-emerald/20 blur-3xl -z-10 rounded-full opacity-50 animate-pulse-slow"></div>
        </div>
    );
};

export default TVScreen;
