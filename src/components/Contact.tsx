'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram, FiFacebook, FiSend, FiHeart, FiStar } from 'react-icons/fi';
import { content as contentEs } from '@/data/content-es';
import { content as contentEn } from '@/data/content-en';

// ========================================
// OPTION 2: "Split Screen with Video Background"
// Dramatic, cinematic design with bold typography
// ========================================
export default function ContactOption2() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeInput, setActiveInput] = useState<string | null>(null);
  const pathname = usePathname();
  const locale = pathname.startsWith('/en') ? 'en' : 'es';

  const content = locale === 'es' ? contentEs : contentEn;

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/julianflancheros', label: 'GitHub' },
    { icon: FiLinkedin, href: 'http://www.linkedin.com/in/julianflancheros', label: 'LinkedIn' },
    { icon: FiInstagram, href: 'https://www.instagram.com/julianflancheros/', label: 'Instagram' },
    { icon: FiFacebook, href: 'https://www.facebook.com/julianflancheros/', label: 'Facebook' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormState({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSuccess(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="relative min-h-screen overflow-hidden" id="contact">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-40"
          animate={{
            background: [
              'radial-gradient(at 0% 0%, var(--color-green) 0px, transparent 50%), radial-gradient(at 100% 100%, var(--color-second-green) 0px, transparent 50%)',
              'radial-gradient(at 100% 0%, var(--color-second-green) 0px, transparent 50%), radial-gradient(at 0% 100%, var(--color-green) 0px, transparent 50%)',
              'radial-gradient(at 0% 0%, var(--color-green) 0px, transparent 50%), radial-gradient(at 100% 100%, var(--color-second-green) 0px, transparent 50%)',
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      
      </div>

      <div className="relative z-10 min-h-screen flex items-center py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-0 min-h-[80vh]">
            {/* Left Panel - Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center px-2 py-10 sm:px-6 sm:py-12 lg:p-16"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className="inline-block mb-6"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-5xl sm:text-6xl">💬</span>
                </motion.div>

                <h2 
                  className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 sm:mb-8 leading-none"
                  style={{ color: 'var(--color-text)' }}
                >
                  {content.contact.title}
                  <motion.span
                    className="block"
                    style={{ color: 'var(--color-green)' }}
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {content.contact.subtitle}
                    
                  </motion.span>
                </h2>

                <p 
                  className="text-lg sm:text-xl lg:text-2xl mb-10 sm:mb-12 leading-relaxed"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {content.contact.phase}
                  <span style={{ color: 'var(--color-green)' }}> 
                    {content.contact.CTA1}
                    
                    </span> 
                    {content.contact.CTA2}
                    
                </p>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
                  {[
                    { value: '50+', label: 'Projects' },
                    { value: '100%', label: 'Satisfaction' },
                    { value: '24/7', label: 'Support' },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="text-center p-4 rounded-2xl"
                      style={{
                        backgroundColor: 'var(--color-container)',
                        border: '2px solid var(--color-green)',
                      }}
                    >
                      <motion.div
                        className="text-2xl sm:text-3xl font-black mb-1"
                        style={{ color: 'var(--color-green)' }}
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      >
                        {stat.value}
                      </motion.div>
                      <div 
                        className="text-sm font-medium"
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links - Horizontal */}
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center group relative overflow-hidden"
                      style={{
                        backgroundColor: 'var(--color-container)',
                        border: '2px solid var(--color-green)',
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100"
                        style={{ backgroundColor: 'var(--color-green)' }}
                        transition={{ duration: 0.3 }}
                      />
                      <social.icon 
                        className="relative z-10 transition-colors"
                        style={{ color: 'var(--color-text)' }}
                      />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Panel - Glass Morphism Form */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center px-2 py-8 sm:px-6 lg:p-8"
            >
              <div className="w-full max-w-xl">
                <form
                  onSubmit={handleSubmit}
                  className="relative p-6 sm:p-8 lg:p-10 rounded-3xl space-y-5 sm:space-y-6 backdrop-blur-xl overflow-hidden"
                  style={{
                    backgroundColor: 'var(--color-container)cc',
                    border: '2px solid var(--color-green)44',
                    boxShadow: '0 25px 80px rgba(0,0,0,0.4)',
                  }}
                >
                  {/* Form glow effect */}
                  <motion.div
                    className="absolute inset-0 opacity-30 blur-3xl"
                    animate={{
                      background: [
                        'radial-gradient(circle at 20% 20%, var(--color-green), transparent)',
                        'radial-gradient(circle at 80% 80%, var(--color-second-green), transparent)',
                        'radial-gradient(circle at 20% 20%, var(--color-green), transparent)',
                      ]
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                  />

                  {/* Success State */}
                  <AnimatePresence>
                    {isSuccess && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        className="absolute inset-0 flex flex-col items-center justify-center z-50 rounded-3xl"
                        style={{ backgroundColor: 'var(--color-green)' }}
                      >
                        <motion.div
                          animate={{
                            scale: [1, 1.3, 1],
                          }}
                          transition={{ duration: 0.5, repeat: 2 }}
                        >
                          <FiHeart className="w-24 h-24 text-white mb-6" />
                        </motion.div>
                        <p className="text-3xl font-black text-white text-center px-8">
                         {content.contact.form.success} 
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.h3
                    className="text-3xl sm:text-4xl font-black text-center mb-6 sm:mb-8"
                    style={{ color: 'var(--color-text)' }}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    {content.contact.form.phaseMessage} <span style={{ color: 'var(--color-green)' }}>{content.contact.form.message}</span>
                  </motion.h3>

                  {['name', 'email', 'subject', 'message'].map((field, index) => {
                    const isTextarea = field === 'message';
                    const InputComponent = isTextarea ? motion.textarea : motion.input;
                    const fieldLabel = content.contact.form[field as keyof typeof content.contact.form];

                    return (
                      <motion.div
                        key={field}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative"
                      >
                        <motion.label
                          animate={{
                            y: activeInput === field ? -15 : 0,
                            scale: activeInput === field ? 0.90 : 1,
                            color: activeInput === field ? 'var(--color-green)' : 'var(--color-text-secondary)',
                          }}
                          className="absolute left-5 top-4 text-sm sm:text-base font-bold pointer-events-none transition-colors z-10"
                        >
                          {fieldLabel}
                        </motion.label>
                        
                        <InputComponent
                          type={field === 'email' ? 'email' : 'text'}
                          name={field}
                          value={formState[field as keyof typeof formState]}
                          onChange={handleChange}
                          onFocus={() => setActiveInput(field)}
                          onBlur={() => setActiveInput(null)}
                          required
                          rows={isTextarea ? 4 : undefined}
                          className="w-full px-5 pt-7 sm:pt-8 pb-4 rounded-2xl outline-none transition-all resize-none text-base sm:text-lg"
                          style={{
                            backgroundColor: 'var(--color-body)99',
                            border: `3px solid ${activeInput === field ? 'var(--color-green)' : 'transparent'}`,
                            color: 'var(--color-text)',
                          }}
                          whileFocus={{ scale: 1.02 }}
                        />
                      </motion.div>
                    );
                  })}

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 sm:py-5 rounded-2xl font-black text-lg sm:text-xl relative overflow-hidden group"
                    style={{
                      backgroundColor: 'var(--color-green)',
                      color: 'var(--color-body)',
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                            <FiSend />
                          </motion.div>
                          {content.contact.form.sending}...
                        </>
                      ) : (
                        <>
                          <FiSend />
                          {content.contact.form.send}
                          <FiStar className="group-hover:rotate-180 transition-transform duration-300" />
                        </>
                      )}
                    </span>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
