import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import CustomCursor from '@/components/CustomCursor';
import SpaceBackground from '@/components/SpaceBackground';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import LeetCodeSection from '@/components/LeetCodeSection';
import AchievementsSection from '@/components/AchievementsSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import AnimatedIntro from '@/components/AnimatedIntro';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [introCompleted, setIntroCompleted] = useState(false);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setTimeout(() => {
      setIntroCompleted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background cursor-neon relative">
      <AnimatePresence mode="wait">
        {showIntro && (
          <AnimatedIntro onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>
      
      {introCompleted && (
        <>
          <CustomCursor />
          <SpaceBackground />
          <Navigation />
          
          <main className="relative z-10">
            <HeroSection />
            <AboutSection />
            <LeetCodeSection />
            <AchievementsSection />
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />
          </main>
          
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
