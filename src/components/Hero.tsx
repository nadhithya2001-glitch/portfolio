'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

const Typewriter = ({ text, speed = 50 }: { text: string; speed?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [index, text, speed]);

  return <>{displayText}</>;
};

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-accent opacity-20 rounded-full mix-blend-multiply filter blur-3xl"
        animate={{
          y: [0, -20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-accent-secondary opacity-20 rounded-full mix-blend-multiply filter blur-3xl"
        animate={{
          y: [0, 20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          delay: 2,
        }}
      />

      <motion.div
        className="relative z-20 max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting Badge */}
        <motion.div
          className="inline-block mb-6"
          variants={itemVariants}
        >
          <div className="glass px-4 py-2 rounded-full text-sm font-semibold">
            <span className="gradient-text">👋 Welcome to my portfolio</span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" variants={itemVariants}>
          <span className="gradient-text">
            <Typewriter text="Hi, I'm Adhithya N" speed={80} />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p className="text-2xl md:text-3xl text-accent mb-4 font-semibold" variants={itemVariants}>
          {portfolioData.title}
        </motion.p>

        {/* Description */}
        <motion.p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8" variants={itemVariants}>
          {portfolioData.intro}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center mb-12" variants={itemVariants}>
          <motion.a
            href={portfolioData.resumeUrl}
            download
            className="px-8 py-4 bg-gradient-to-r from-accent to-accent-secondary rounded-lg text-dark font-bold flex items-center justify-center space-x-2 hover-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            <span>Download Resume</span>
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-4 border-2 border-accent rounded-lg text-accent font-bold hover:bg-accent hover:text-dark transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          variants={itemVariants}
        >
          <ArrowDown className="text-accent" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}
