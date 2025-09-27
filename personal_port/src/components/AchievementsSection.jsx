import { motion } from 'framer-motion';
import { Trophy, Award, Star, Target, Code, Zap, GitBranch, Users, InfinityIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

const AchievementsGrid = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Set visibility on component mount for animation
  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  // Floating particles animation
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({length: 15}, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
      size: Math.random() * 3 + 1,
    }));
    setParticles(newParticles);
  }, []);

  const achievements = [
    {
      icon: Trophy,
      title: 'LeetCode Knight',
      description: '120+ problems solved',
      color: 'text-yellow-400',
      borderColor: 'border-yellow-400/30',
      shadowColor: 'shadow-yellow-400/10',
      hoverShadowColor: 'hover:shadow-yellow-400/30',
      bgGradient: 'from-yellow-400/5 to-transparent',
    },
    {
      icon: Award,
      title: 'Performer',
      description: 'Contest top 70%',
      color: 'text-blue-400',
      borderColor: 'border-blue-400/30',
      shadowColor: 'shadow-blue-400/10',
      hoverShadowColor: 'hover:shadow-blue-400/30',
      bgGradient: 'from-blue-400/5 to-transparent',
    },
    {
      icon: Star,
      title: '50-Day Streak',
      description: 'Consistent coding',
      color: 'text-pink-400',
      borderColor: 'border-pink-400/30',
      shadowColor: 'shadow-pink-400/10',
      hoverShadowColor: 'hover:shadow-pink-400/30',
      bgGradient: 'from-pink-400/5 to-transparent',
    },
    {
      icon: Target,
      title: 'Goal Achiever',
      description: '2024 targets met',
      color: 'text-green-400',
      borderColor: 'border-green-400/30',
      shadowColor: 'shadow-green-400/10',
      hoverShadowColor: 'hover:shadow-green-400/30',
      bgGradient: 'from-green-400/5 to-transparent',
    },
    {
      icon: Code,
      title: 'Developer',
      description: '05+ projects built',
      color: 'text-yellow-400',
      borderColor: 'border-yellow-400/30',
      shadowColor: 'shadow-yellow-400/10',
      hoverShadowColor: 'hover:shadow-yellow-400/30',
      bgGradient: 'from-yellow-400/5 to-transparent',
    },
    {
      icon: Zap,
      title: 'Fast Learner',
      description: 'New tech mastery',
      color: 'text-blue-400',
      borderColor: 'border-blue-400/30',
      shadowColor: 'shadow-blue-400/10',
      hoverShadowColor: 'hover:shadow-blue-400/30',
      bgGradient: 'from-blue-400/5 to-transparent',
    },
    {
      icon: GitBranch,
      title: 'Open Source',
      description: 'Active contributor',
      color: 'text-pink-400',
      borderColor: 'border-pink-400/30',
      shadowColor: 'shadow-pink-400/10',
      hoverShadowColor: 'hover:shadow-pink-400/30',
      bgGradient: 'from-pink-400/5 to-transparent',
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborative spirit',
      color: 'text-green-400',
      borderColor: 'border-green-400/30',
      shadowColor: 'shadow-green-400/10',
      hoverShadowColor: 'hover:shadow-green-400/30',
      bgGradient: 'from-green-400/5 to-transparent',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 60,
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  return (
    <><section id="achievements" /><div className="w-full bg-gray-900 py-12 px-4 sm:px-6 relative overflow-hidden">
      {/* Floating Particles Background */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white/10"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 4 + particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }} />
        ))}
      </div>

      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-transparent to-yellow-400/5"
        animate={{
          background: [
            "linear-gradient(135deg, rgba(96, 165, 250, 0.05) 0%, transparent 50%, rgba(250, 204, 21, 0.05) 100%)",
            "linear-gradient(225deg, rgba(250, 204, 21, 0.08) 0%, transparent 50%, rgba(96, 165, 250, 0.08) 100%)",
            "linear-gradient(135deg, rgba(96, 165, 250, 0.05) 0%, transparent 50%, rgba(250, 204, 21, 0.05) 100%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="bg-gradient-to-r from-yellow-400 via-blue-400 to-yellow-400 bg-[length:200%_100%] bg-clip-text text-transparent">
            Strength
          </span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                variants={itemVariants}
                className="relative group"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <div className={`
                  relative h-40 p-6 rounded-2xl 
                  bg-gradient-to-br from-gray-800 to-gray-900 
                  ${achievement.borderColor}
                  border
                  shadow-lg ${achievement.shadowColor}
                  transition-all duration-300 ease-out
                  ${achievement.hoverShadowColor}
                  overflow-hidden
                  flex flex-col items-center justify-center text-center
                `}>
                  {/* Glow effect on hover */}
                  <div className={`
                    absolute inset-0 rounded-2xl 
                    bg-gradient-to-br ${achievement.bgGradient}
                    opacity-0 transition-opacity duration-300
                    group-hover:opacity-100
                  `} />

                  <motion.div
                    whileHover={{
                      scale: [1, 1.2, 1.1],
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                  >
                    <IconComponent
                      className={`w-8 h-8 mb-3 ${achievement.color} drop-shadow-lg`}
                      strokeWidth={1.5} />
                  </motion.div>

                  <h3 className={`font-bold text-lg mb-1 text-white ${achievement.color}`}>
                    {achievement.title}
                  </h3>

                  <p className="text-sm text-gray-400">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
                        
        </motion.div>
      </div>
    </div></>
  );
};

export default AchievementsGrid;