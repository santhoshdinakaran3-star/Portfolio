import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const AnimatedIntro = ({ onComplete }) => {
  const [currentPhase, setCurrentPhase] = useState('typing');
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [showDeveloper, setShowDeveloper] = useState(false);
  const [particles, setParticles] = useState([]);

  const fullText = "Hi, I'm SANTHOSH";

  // Create floating particles
  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      size: Math.random() * 3 + 1,
    }));
    setParticles(newParticles);
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (currentPhase === 'typing') {
      const timer = setTimeout(() => {
        if (displayText.length < fullText.length) {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        } else {
          setCurrentPhase('pause');
          setTimeout(() => {
            setShowCursor(false);
            setShowDeveloper(true);
            setCurrentPhase('reveal');
            
            // Start shimmer effect after reveal
            setTimeout(() => {
              setCurrentPhase('shimmer');
              
              // Complete intro after shimmer
              setTimeout(() => {
                onComplete();
              }, 1500);
            }, 800);
          }, 500);
        }
      }, 80);

      return () => clearTimeout(timer);
    }
  }, [displayText, currentPhase, onComplete]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  const developerVariants = {
    hidden: { 
      opacity: 0, 
      y: 30, 
      scale: 0.8 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    }
  };

  const shimmerVariants = {
    initial: { x: '-100%' },
    animate: { 
      x: '100%',
      transition: { 
        duration: 1.2, 
        ease: "easeInOut" 
      }
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-primary/30"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4 + particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Particle Burst Effect */}
      {currentPhase === 'reveal' && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 w-2 h-2 bg-accent rounded-full"
              initial={{ 
                scale: 0,
                x: 0,
                y: 0,
              }}
              animate={{
                scale: [0, 1, 0],
                x: Math.cos((i * Math.PI * 2) / 8) * 100,
                y: Math.sin((i * Math.PI * 2) / 8) * 100,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.div>
      )}

      <div className="text-center relative">
        {/* Main Text with Shimmer Effect */}
        <motion.div className="relative">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary mb-4 sm:mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {displayText}
            <AnimatePresence>
              {showCursor && (
                <motion.span
                  className="text-accent ml-1"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  exit={{ opacity: 0 }}
                >
                  |
                </motion.span>
              )}
            </AnimatePresence>
          </motion.h1>

          {/* Shimmer Effect */}
          {currentPhase === 'shimmer' && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/50 to-transparent"
              variants={shimmerVariants}
              initial="initial"
              animate="animate"
              style={{ 
                backgroundSize: '200% 100%',
                mixBlendMode: 'overlay',
              }}
            />
          )}
        </motion.div>

        {/* Developer Text */}
        <AnimatePresence>
          {showDeveloper && (
            <motion.p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium"
              variants={developerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              Developer
            </motion.p>
          )}
        </AnimatePresence>

        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
};

export default AnimatedIntro;