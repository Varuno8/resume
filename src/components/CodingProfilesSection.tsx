import React from 'react';
import { ExternalLink } from 'lucide-react';
import TechIcon from './projects/TechIcon';

interface CodingProfile {
    name: string;
    username: string;
    url: string;
    iconName: string;
    rating?: string;
    solved?: string;
    description?: string;
}

const codingProfiles: CodingProfile[] = [
    {
        name: "LeetCode",
        username: "Varun_2",
        url: "https://leetcode.com/Varun_2/",
        iconName: "LeetCode",
        solved: "250+ Problems",
        description: "Consistent problem solver participating in weekly contests."
    },
    {
        name: "CodeChef",
        username: "varun_tyagi",
        url: "https://www.codechef.com/users/varun_tyagi",
        iconName: "CodeChef",
        rating: "3 Star",
        solved: "200+ Problems",
        description: "Active participant in competitive programming contests."
    },
    {
        name: "CodeForces",
        username: "Varun_o8",
        url: "https://codeforces.com/profile/Varun_o8",
        iconName: "CodeForces", // We might need to add this to TechIcon or use a fallback
        rating: "Pupil",
        solved: "300+ Problems",
        description: "Solving algorithmic challenges and participating in rounds."
    },
    {
        name: "GeeksforGeeks",
        username: "varun28y2a4",
        url: "https://www.geeksforgeeks.org/profile/varun28y2a4?tab=activity",
        iconName: "GeeksforGeeks",
        rating: "Institute Rank 1",
        solved: "300+ Problems",
        description: "Mastering data structures and algorithms concepts."
    }
];

const CodingProfilesSection: React.FC = () => {
    return (
        <section id="achievements" className="section-padding relative bg-background transition-colors duration-300">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Section title */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                        Coding <span className="premium-gradient-text">Profiles</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        My competitive programming journey and problem-solving statistics across various platforms.
                    </p>
                </div>

                {/* Desktop Grid View */}
                <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {codingProfiles.map((profile, index) => (
                        <a
                            key={profile.name}
                            href={profile.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-6 rounded-xl bg-card border border-white/5 hover:border-premium-emerald/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-emerald flex flex-col items-center text-center"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-premium-emerald/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                            <div className="relative mb-4 p-3 rounded-full bg-background border border-white/10 group-hover:border-premium-emerald/50 transition-colors">
                                <TechIcon tech={profile.iconName} className="w-10 h-10 text-premium-emerald" />
                            </div>
                            <h3 className="text-xl font-bold mb-1 group-hover:text-premium-emerald transition-colors">{profile.name}</h3>
                            <p className="text-sm text-muted-foreground mb-4">@{profile.username}</p>
                            <div className="w-full space-y-2 mb-6">
                                {profile.rating && (
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-muted-foreground">Rating</span>
                                        <span className="font-mono text-premium-amber">{profile.rating}</span>
                                    </div>
                                )}
                                {profile.solved && (
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-muted-foreground">Solved</span>
                                        <span className="font-mono text-premium-emerald">{profile.solved}</span>
                                    </div>
                                )}
                            </div>
                            <p className="text-sm text-muted-foreground mb-6 flex-grow">{profile.description}</p>
                            <div className="mt-auto flex items-center text-sm font-medium text-premium-emerald opacity-80 group-hover:opacity-100 transition-opacity">
                                View Profile <ExternalLink className="ml-1 h-3 w-3" />
                            </div>
                        </a>
                    ))}
                </div>

                {/* Mobile Horizontal Scroll View */}
                <div className="sm:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 -mx-4 px-4 scrollbar-hide">
                    {codingProfiles.map((profile, index) => (
                        <a
                            key={profile.name}
                            href={profile.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="snap-center flex-shrink-0 w-[85vw] p-5 rounded-2xl bg-gradient-to-br from-card to-background border border-white/10 backdrop-blur-md flex flex-col items-center text-center shadow-lg shadow-black/20 relative overflow-hidden"
                        >
                            {/* Decorative gradient blob */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-premium-emerald/10 rounded-full blur-2xl"></div>
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-premium-amber/10 rounded-full blur-2xl"></div>

                            <div className="relative mb-3 p-3 rounded-full bg-background/80 border border-white/10 shadow-inner">
                                <TechIcon tech={profile.iconName} className="w-10 h-10 text-premium-emerald" />
                            </div>

                            <h3 className="text-xl font-bold mb-1 text-foreground">{profile.name}</h3>
                            <p className="text-sm text-muted-foreground mb-4">@{profile.username}</p>

                            <div className="w-full bg-black/20 rounded-lg p-3 mb-4 backdrop-blur-sm border border-white/5">
                                {profile.rating && (
                                    <div className="flex justify-between items-center text-sm mb-2">
                                        <span className="text-muted-foreground">Rating</span>
                                        <span className="font-mono text-premium-amber font-bold">{profile.rating}</span>
                                    </div>
                                )}
                                {profile.solved && (
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-muted-foreground">Solved</span>
                                        <span className="font-mono text-premium-emerald font-bold">{profile.solved}</span>
                                    </div>
                                )}
                            </div>

                            <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">{profile.description}</p>

                            <div className="mt-auto w-full py-2 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sm font-medium text-premium-emerald">
                                View Profile <ExternalLink className="ml-2 h-3 w-3" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute -bottom-20 right-0 w-96 h-96 bg-premium-emerald/5 rounded-full filter blur-3xl"></div>
            <div className="absolute -top-20 left-0 w-96 h-96 bg-premium-amber/5 rounded-full filter blur-3xl"></div>
        </section>
    );
};

export default CodingProfilesSection;
