import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleDelay: number;
  twinkleDuration: number;
}

interface ShootingStar {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  delay: number;
}

const SpaceBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);

  useEffect(() => {
    // Generate fewer stars for better performance (100 instead of 200)
    const newStars: Star[] = [];
    for (let i = 0; i < 100; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.7 + 0.3,
        twinkleDelay: Math.random() * 5,
        twinkleDuration: 3 + Math.random() * 4,
      });
    }
    setStars(newStars);

    const newShootingStars: ShootingStar[] = [];
    for (let i = 0; i < 2; i++) {
      newShootingStars.push({
        id: i,
        startX: Math.random() * 50,
        startY: Math.random() * 30,
        endX: Math.random() * 50 + 50,
        endY: Math.random() * 70 + 30,
        delay: Math.random() * 10,
      });
    }
    setShootingStars(newShootingStars);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none bg-[#020617]">
      {/* Nebula Clouds - Static gradient is much faster than animated one */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_20%_30%,hsl(var(--primary)/0.15)_0%,transparent_50%),radial-gradient(ellipse_at_80%_70%,hsl(var(--secondary)/0.1)_0%,transparent_50%)]" />

      {/* Main Star Field */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 0.3, star.opacity],
          }}
          transition={{
            duration: star.twinkleDuration,
            repeat: Infinity,
            delay: star.twinkleDelay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Simplified Shooting Stars */}
      {shootingStars.map((shootingStar) => (
        <motion.div
          key={shootingStar.id}
          className="absolute"
          style={{
            left: `${shootingStar.startX}%`,
            top: `${shootingStar.startY}%`,
          }}
          animate={{
            x: [`0%`, `${shootingStar.endX - shootingStar.startX}vw`],
            y: [`0%`, `${shootingStar.endY - shootingStar.startY}vh`],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: shootingStar.delay,
            ease: 'linear',
            repeatDelay: 12,
          }}
        >
          <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_10px_#fff]" />
          <div className="absolute top-0 left-0 w-12 h-[1px] bg-gradient-to-r from-white to-transparent origin-left rotate-[45deg]" />
        </motion.div>
      ))}

      {/* Single Parallax Layer (Consolidated from multiple layers) */}
      <motion.div
        className="absolute inset-0"
        animate={{
          x: [-10, 10, -10],
          y: [-5, 5, -5],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {[...Array(30)].map((_, i) => (
          <div
            key={`p-${i}`}
            className="absolute rounded-full bg-white/40"
            style={{
              left: `${(i * 137.5) % 100}%`,
              top: `${(i * 193.1) % 100}%`,
              width: '1px',
              height: '1px',
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default SpaceBackground;