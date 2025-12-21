import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radio, Mail, Send, Github, Linkedin, MapPin, Signal, Wifi, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const TransmissionRelay: React.FC = () => {
    const [status, setStatus] = useState('Standby');

    const contactLinks = [
        {
            name: 'Email',
            icon: <Mail />,
            value: 'varun28082001@gmail.com',
            href: 'mailto:varun28082001@gmail.com',
            color: 'text-outdoors-rust'
        },
        {
            name: 'LinkedIn',
            icon: <Linkedin />,
            value: 'Varun Tyagi',
            href: 'https://linkedin.com/in/varun-tyagi-32bb281b9',
            color: 'text-blue-400'
        },
        {
            name: 'GitHub',
            icon: <Github />,
            value: 'Varuno8',
            href: 'https://github.com/Varuno8',
            color: 'text-white'
        },
        {
            name: 'Phone',
            icon: <Phone />,
            value: '+91 7011793823',
            href: 'tel:+917011793823',
            color: 'text-green-400'
        },
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Transmitting...');
        setTimeout(() => setStatus('Message Delivered'), 2000);
    };

    return (
        <div className="min-h-screen pb-24 px-6 md:px-12 pt-8 bg-background">
            <header className="mb-12 border-b-2 border-white/10 pb-6 relative z-10">
                <div className="flex items-center gap-3 mb-2">
                    <Radio className="text-outdoors-rust" size={24} />
                    <span className="font-mono text-[10px] uppercase font-bold tracking-[0.4em] text-white/40">Global Uplink</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-bold text-outdoors-canvas drop-shadow-2xl text-outdoors-canvas">Act VI: Transmission Relay</h1>
                <p className="mt-4 max-w-2xl text-outdoors-canvas/60 font-sans italic">
                    "Establishing a stable frequency. Open for remote opportunities or on-site relocation as an AI / Full-Stack Engineer."
                </p>
            </header>

            <div className="grid lg:grid-cols-2 gap-12 items-start mt-12 text-outdoors-canvas text-outdoors-canvas">
                <div className="space-y-8">
                    <div className="bg-black/30 backdrop-blur-md p-8 border border-white/10 shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

                        <div className="relative z-10">
                            <h2 className="font-display text-2xl uppercase tracking-widest mb-8 flex items-center gap-3 text-outdoors-rust font-bold">
                                <Signal className="text-outdoors-rust" />
                                Broadcast Channels
                            </h2>

                            <div className="space-y-6">
                                {contactLinks.map((link) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ x: 10 }}
                                        className="group flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 transition-all border border-white/5"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`p-2 rounded-full bg-black/40 border border-white/10 ${link.color}`}>
                                                {link.icon}
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase font-mono text-white/30">{link.name}</p>
                                                <p className="text-sm font-display text-outdoors-canvas group-hover:text-white transition-colors">{link.value}</p>
                                            </div>
                                        </div>
                                        <Wifi size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-outdoors-rust" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-black/20 backdrop-blur-sm border-2 border-white/5 p-6 flex items-center gap-6 shadow-xl">
                        <div className="p-4 bg-outdoors-rust/10 text-outdoors-rust border border-outdoors-rust/30">
                            <MapPin size={32} />
                        </div>
                        <div>
                            <h4 className="font-display text-lg uppercase tracking-widest text-outdoors-canvas font-bold">Current Sector</h4>
                            <p className="font-mono text-xs text-white/40">New Delhi / India (Remote Available)</p>
                        </div>
                    </div>
                </div>

                <div className="bg-black/30 backdrop-blur-lg border-2 border-white/10 shadow-2xl p-8 sm:p-12 relative overflow-hidden">
                    <h2 className="font-display text-2xl text-outdoors-rust mb-8 uppercase tracking-widest border-b border-white/10 pb-4 font-bold">
                        Secure Transmission
                    </h2>

                    <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                        <div>
                            <label className="block font-mono text-[10px] uppercase font-bold text-white/40 mb-2 tracking-widest">Identify Subject</label>
                            <Input className="bg-white/5 border border-white/10 focus:border-outdoors-rust rounded-none p-6 font-display text-outdoors-canvas placeholder:text-white/10 transition-all" placeholder="Your Name" />
                        </div>
                        <div>
                            <label className="block font-mono text-[10px] uppercase font-bold text-white/40 mb-2 tracking-widest">Return Frequency</label>
                            <Input className="bg-white/5 border border-white/10 focus:border-outdoors-rust rounded-none p-6 font-display text-outdoors-canvas placeholder:text-white/10 transition-all" placeholder="email@example.com" />
                        </div>
                        <div>
                            <label className="block font-mono text-[10px] uppercase font-bold text-white/40 mb-2 tracking-widest">Message Payload</label>
                            <textarea className="w-full bg-white/5 border border-white/10 focus:border-outdoors-rust rounded-none p-6 font-display text-outdoors-canvas h-40 resize-none outline-none placeholder:text-white/10 transition-all" placeholder="What's on your mind?" />
                        </div>

                        <Button className="w-full bg-outdoors-rust hover:bg-white hover:text-outdoors-rust text-white font-display text-lg uppercase tracking-widest h-16 rounded-none shadow-xl transition-all active:scale-95 group border-b-4 border-black/40">
                            {status === 'Transmitting...' ? 'Uplink Busy...' : 'Submit Transmission'}
                            <Send className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TransmissionRelay;
