import React from 'react';
import { ExternalLink, PawPrint, Footprints } from 'lucide-react';
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
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-outdoors-forest">
                        Coding <span className="text-outdoors-rust border-b-4 border-outdoors-rust/30">Journey</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto font-display tracking-wide">
                        My problem-solving expedition log and competitive achievements.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {codingProfiles.map((profile, index) => (
                        <a
                            key={profile.name}
                            href={profile.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-6 rounded-sm bg-texture-paper border-2 border-outdoors-bark/20 hover:border-outdoors-rust transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col items-center text-center"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* "Tape" effect */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-outdoors-rust/20 rotate-1"></div>

                            <div className="relative mb-4 p-3 rounded-full bg-outdoors-rust/10 border border-outdoors-rust/30 group-hover:bg-outdoors-rust/20 transition-colors">
                                <TechIcon tech={profile.iconName} className="w-10 h-10 text-outdoors-rust" />
                            </div>
                            <h3 className="text-xl font-bold mb-1 text-outdoors-forest font-display">{profile.name}</h3>
                            <p className="text-sm text-muted-foreground mb-4 font-mono">@{profile.username}</p>
                            <div className="w-full space-y-2 mb-6 border-t border-b border-dashed border-outdoors-bark/20 py-4">
                                {profile.rating && (
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-muted-foreground font-display uppercase text-xs">Rating</span>
                                        <span className="font-bold text-outdoors-rust">{profile.rating}</span>
                                    </div>
                                )}
                                {profile.solved && (
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-muted-foreground font-display uppercase text-xs">Solved</span>
                                        <span className="font-bold text-outdoors-forest">{profile.solved}</span>
                                    </div>
                                )}
                            </div>
                            <p className="text-sm text-muted-foreground mb-6 flex-grow font-serif italic">{profile.description}</p>
                            <div className="mt-auto flex items-center text-sm font-bold text-outdoors-rust uppercase tracking-wider group-hover:underline decoration-2 underline-offset-4">
                                View Log <ExternalLink className="ml-1 h-3 w-3" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Background elements */}
            {/* Background elements - Animal Tracks */}
            <div className="absolute bottom-10 right-10 opacity-[0.03] rotate-12 pointer-events-none">
                <div className="flex flex-col space-y-12">
                    <PawPrint size={40} className="text-outdoors-rust ml-12" />
                    <PawPrint size={40} className="text-outdoors-rust" />
                    <PawPrint size={40} className="text-outdoors-rust ml-12" />
                </div>
            </div>

            <div className="absolute top-20 left-10 opacity-[0.03] -rotate-12 pointer-events-none">
                <div className="flex flex-col space-y-16">
                    <Footprints size={50} className="text-outdoors-forest" />
                    <Footprints size={50} className="text-outdoors-forest ml-8" />
                </div>
            </div>
        </section>
    );
};

export default CodingProfilesSection;
