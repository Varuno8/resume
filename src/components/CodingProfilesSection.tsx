
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
        username: "Varuno8",
        url: "https://leetcode.com/Varuno8/",
        iconName: "LeetCode",
        rating: "1800+",
        solved: "500+ Problems",
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
        rating: "Specialist",
        solved: "300+ Problems",
        description: "Solving algorithmic challenges and participating in rounds."
    },
    {
        name: "GeeksforGeeks",
        username: "varun28y2a4",
        url: "https://www.geeksforgeeks.org/profile/varun28y2a4?tab=activity",
        iconName: "GeeksforGeeks",
        rating: "Institute Rank 1",
        solved: "800+ Problems",
        description: "Mastering data structures and algorithms concepts."
    }
];

const CodingProfilesSection: React.FC = () => {
    return (
        <section id="achievements" className="section-padding relative bg-dark-lighter">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Section title */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                        Coding <span className="text-gradient">Profiles</span>
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        My competitive programming journey and problem-solving statistics across various platforms.
                    </p>
                </div>

                {/* Coding Profiles Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {codingProfiles.map((profile, index) => (
                        <a
                            key={profile.name}
                            href={profile.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-4 sm:p-6 rounded-xl bg-white/5 border border-white/10 hover:border-neon-purple/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-purple flex flex-col items-center text-center"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Icon Background Glow */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

                            {/* Profile Icon */}
                            <div className="relative mb-3 sm:mb-4 p-2 sm:p-3 rounded-full bg-dark border border-white/10 group-hover:border-neon-purple/50 transition-colors">
                                <TechIcon tech={profile.iconName} className="w-8 h-8 sm:w-10 sm:h-10" />
                            </div>

                            {/* Profile Name */}
                            <h3 className="text-lg sm:text-xl font-bold mb-1 group-hover:text-neon-purple transition-colors">{profile.name}</h3>
                            <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">@{profile.username}</p>

                            {/* Stats */}
                            <div className="w-full space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                                {profile.rating && (
                                    <div className="flex justify-between items-center text-xs sm:text-sm">
                                        <span className="text-gray-400">Rating</span>
                                        <span className="font-mono text-neon-cyan">{profile.rating}</span>
                                    </div>
                                )}
                                {profile.solved && (
                                    <div className="flex justify-between items-center text-xs sm:text-sm">
                                        <span className="text-gray-400">Solved</span>
                                        <span className="font-mono text-neon-teal">{profile.solved}</span>
                                    </div>
                                )}
                            </div>

                            {/* Description */}
                            <p className="text-xs sm:text-sm text-gray-300 mb-4 sm:mb-6 flex-grow">{profile.description}</p>

                            {/* Link Button */}
                            <div className="mt-auto flex items-center text-xs sm:text-sm font-medium text-neon-purple opacity-80 group-hover:opacity-100 transition-opacity">
                                View Profile <ExternalLink className="ml-1 h-3 w-3" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute -bottom-20 right-0 w-96 h-96 bg-neon-purple/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -top-20 left-0 w-96 h-96 bg-neon-cyan/10 rounded-full filter blur-3xl"></div>
        </section>
    );
};

export default CodingProfilesSection;
