'use client';

import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

export default function About() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative z-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Content */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Text Content */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a <span className="text-accent font-semibold">BCA graduate</span> from{' '}
              <span className="text-accent font-semibold">Aachariya Arts and Science College</span>,
              Pondicherry University.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I am passionate about <span className="text-accent font-semibold">AI and software development</span> with
              a strong interest in building <span className="text-accent font-semibold">AI-powered applications</span>.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I am a <span className="text-accent font-semibold">positive thinker</span> and{' '}
              <span className="text-accent font-semibold">hardworking individual</span> committed to continuous
              learning and innovation in the field of technology.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-bold mb-4 text-accent">Key Strengths</h3>
              <ul className="space-y-2">
                {[
                  'Problem-solving and analytical thinking',
                  'Strong foundation in data science',
                  'Passion for generative AI technologies',
                  'Team collaboration and communication',
                ].map((strength, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-accent text-xl mt-1">✓</span>
                    <span className="text-gray-300">{strength}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Stats/Info Box */}
          <motion.div className="glass p-8 rounded-2xl" variants={itemVariants}>
            <div className="space-y-6">
              {[
                { label: 'Education', value: 'BCA' },
                { label: 'Location', value: 'Cuddalore, Tamil Nadu' },
                { label: 'Email', value: portfolioData.email },
                { label: 'Phone', value: portfolioData.phone },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="border-b border-gray-600 pb-4 last:border-b-0"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-sm text-gray-400 mb-2">{item.label}</p>
                  <p className="text-lg font-semibold text-accent">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
// In any component, e.g., About.tsx
<p className="italic">Your italic text here</p>