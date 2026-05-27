'use client';

import { motion } from 'framer-motion';
import { certifications } from '@/data/portfolio';
import { Award } from 'lucide-react';

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 relative z-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              className="glass p-6 rounded-lg hover-glow text-center group"
              variants={itemVariants}
            >
              <div className="p-3 bg-gradient-to-r from-accent to-accent-secondary rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform">
                <Award className="text-dark" size={28} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-accent text-sm mb-2">{cert.issuer}</p>
              <p className="text-gray-400 text-sm">{cert.date}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-16 glass p-8 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold gradient-text">{certifications.length}</p>
              <p className="text-gray-400 mt-2">Certifications</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold gradient-text">2024</p>
              <p className="text-gray-400 mt-2">Latest Year</p>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <p className="text-4xl font-bold gradient-text">100%</p>
              <p className="text-gray-400 mt-2">Completed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
