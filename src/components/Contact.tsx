'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative z-20">
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
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent-secondary mx-auto rounded-full" />
          <p className="text-gray-300 text-lg mt-4">
            Have a question or project in mind? Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Contact Information */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

            {/* Email */}
            <motion.a
              href={`mailto:${portfolioData.email}`}
              className="glass p-6 rounded-lg hover-glow flex items-start space-x-4 group"
              whileHover={{ x: 5 }}
            >
              <div className="p-3 bg-gradient-to-r from-accent to-accent-secondary rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                <Mail className="text-dark" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                <p className="text-gray-300">{portfolioData.email}</p>
              </div>
            </motion.a>

            {/* Phone */}
            <motion.a
              href={`tel:${portfolioData.phone.replace(/\s/g, '')}`}
              className="glass p-6 rounded-lg hover-glow flex items-start space-x-4 group"
              whileHover={{ x: 5 }}
            >
              <div className="p-3 bg-gradient-to-r from-accent to-accent-secondary rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                <Phone className="text-dark" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                <p className="text-gray-300">{portfolioData.phone}</p>
              </div>
            </motion.a>

            {/* Location */}
            <motion.div className="glass p-6 rounded-lg hover-glow flex items-start space-x-4 group">
              <div className="p-3 bg-gradient-to-r from-accent to-accent-secondary rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                <MapPin className="text-dark" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Location</h4>
                <p className="text-gray-300">{portfolioData.location}</p>
              </div>
            </motion.div>

            {/* Social Links */}
            <div className="pt-8 border-t border-gray-600">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {[
                  { icon: Github, label: 'GitHub', href: portfolioData.github },
                  { icon: Linkedin, label: 'LinkedIn', href: portfolioData.linkedin },
                  { icon: Mail, label: 'Email', href: `mailto:${portfolioData.email}` },
                ].map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-accent/20 text-accent rounded-lg hover:bg-accent hover:text-dark transition-all"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={24} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="glass p-8 rounded-lg space-y-6"
            variants={itemVariants}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-tertiary border border-gray-600 rounded-lg text-white focus:border-accent focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-tertiary border border-gray-600 rounded-lg text-white focus:border-accent focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-tertiary border border-gray-600 rounded-lg text-white focus:border-accent focus:outline-none transition-colors"
                placeholder="Project inquiry"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-dark-tertiary border border-gray-600 rounded-lg text-white focus:border-accent focus:outline-none transition-colors resize-none"
                placeholder="Your message here..."
              />
            </div>

            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-accent to-accent-secondary rounded-lg text-dark font-bold hover-glow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
