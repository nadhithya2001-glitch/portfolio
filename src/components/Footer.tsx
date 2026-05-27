'use client';

import Link from 'next/link';
import { portfolioData } from '@/data/portfolio';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.footer
      className="bg-dark-secondary/50 border-t border-gray-700 mt-20 relative z-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">{portfolioData.name}</h3>
            <p className="text-gray-400 text-sm">
              Data Science & Generative AI Enthusiast. Building AI-powered solutions and
              innovative applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Projects', href: '#projects' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Connect With Me</h4>
            <div className="flex gap-4">
              <motion.a
                href={portfolioData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-accent/20 text-accent rounded-lg hover:bg-accent hover:text-dark transition-all"
                whileHover={{ scale: 1.1, y: -3 }}
                aria-label="GitHub"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-accent/20 text-accent rounded-lg hover:bg-accent hover:text-dark transition-all"
                whileHover={{ scale: 1.1, y: -3 }}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href={`mailto:${portfolioData.email}`}
                className="p-2 bg-accent/20 text-accent rounded-lg hover:bg-accent hover:text-dark transition-all"
                whileHover={{ scale: 1.1, y: -3 }}
                aria-label="Email"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          {/* Bottom Text */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} {portfolioData.name}. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with <Heart size={16} className="text-accent" /> by Adhithya N
            </p>
            <p className="text-gray-400 text-sm">
              Designed & Built with React + Next.js + Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
