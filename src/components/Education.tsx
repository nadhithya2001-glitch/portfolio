'use client';

import { motion } from 'framer-motion';
import { education } from '@/data/portfolio';
import { BookOpen, Award } from 'lucide-react';

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative z-20">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              className="glass p-6 rounded-lg border-l-4 border-accent hover-glow"
              variants={itemVariants}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-r from-accent to-accent-secondary rounded-lg flex-shrink-0 mt-2">
                  <BookOpen className="text-dark" size={24} />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <p className="text-accent font-semibold mb-1">{edu.institution}</p>
                  {edu.university && (
                    <p className="text-gray-400 mb-2">{edu.university}</p>
                  )}
                  <div className="flex flex-wrap gap-4 pt-3 border-t border-gray-600">
                    <div>
                      <span className="text-gray-400 text-sm">Percentage: </span>
                      <span className="text-accent font-semibold">{edu.percentage}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 text-sm">Year: </span>
                      <span className="text-accent font-semibold">{edu.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Box */}
        <motion.div
          className="mt-12 glass p-6 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="flex items-start space-x-4">
            <Award className="text-accent flex-shrink-0 mt-1" size={28} />
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Academic Achievement</h3>
              <p className="text-gray-300">
                Completed BCA from Pondicherry University with consistent academic performance. 
                Strong foundation in computer science principles and hands-on learning experience.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
