
import React from 'react';
import { Canvas } from '@react-three/fiber';
import AchievementBadge from './AchievementBadge';
import { achievements } from './achievementsData';

const AchievementBackground: React.FC = () => {
  return (
    <div className="h-60 w-full mb-12">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />

        {/* Only render 2 achievements to reduce complexity */}
        {achievements.slice(0, 2).map((achievement, index) => (
          <AchievementBadge
            key={achievement.id}
            position={[-2 + index * 4, 0, 0]}
            color={achievement.color === "premium-amber" ? "#f59e0b" : "#10b981"}
            value={achievement.value}
          />
        ))}
      </Canvas>
    </div>
  );
};

export default AchievementBackground;
