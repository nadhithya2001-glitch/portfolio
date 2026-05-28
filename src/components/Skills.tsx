'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/portfolio';
import {
  Code,
  Database,
  Sparkles,
  Layout,
  Palette,
  Code2,
  GitBranch,
} from 'lucide-react';

const iconMap: { [key: string]: React.ComponentType<any> } = {
  code: Code,
  database: Database,
  sparkles: Sparkles,
  layout: Layout,
  palette: Palette,
  code2: Code2,
  gitBranch: GitBranch,
};

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as { [key: string]: typeof skills }
  );

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative z-20">
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
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        {Object.entries(groupedSkills).map(([category, categorySkills]) => (
          <motion.div key={category} className="mb-12">
            <h3 className="text-2xl font-bold text-accent mb-6">{category}</h3>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {categorySkills.map((skill) => {
                const IconComponent = iconMap[skill.icon] || Code;
                return (
                  <motion.div
                    key={skill.name}
                    className="glass p-6 rounded-lg hover-glow group"
                    variants={itemVariants}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-accent to-accent-secondary rounded-lg group-hover:scale-110 transition-transform">
                        <IconComponent className="text-dark" size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                        <p className="text-sm text-gray-400">{skill.category}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        ))}

        {/* Skills Overview */}
        <motion.div
          className="mt-16 glass p-8 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h3 className="text-2xl font-bold mb-4 text-accent">Overview</h3>
          <p className="text-gray-300 text-lg">
            I have a strong foundation in Python and Data Science with growing expertise in Generative AI. 
            My frontend skills include HTML, CSS, and JavaScript, along with version control using Git & GitHub. 
            I&apos;m continuously learning and expanding my technical skillset to stay current with industry trends.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
