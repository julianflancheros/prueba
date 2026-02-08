'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { AnimatedLogo } from './AnimatedLogo';
import { content as contentEs } from '@/data/content-es';
import { content as contentEn } from '@/data/content-en';

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const pathname = usePathname();
  const currentLocale = pathname?.startsWith('/en')
    ? 'en'
    : pathname?.startsWith('/es')
      ? 'es'
      : 'es';
  const content = currentLocale === 'es' ? contentEs : contentEn;

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ backgroundColor: 'var(--color-body)' }}
        >
          {/* Animated Background Shapes */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Large floating circles */}
            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-10"
              style={{
                background: `radial-gradient(circle, var(--color-green), transparent)`
              }}
            />

            <motion.div
              animate={{
                x: [0, -80, 0],
                y: [0, 100, 0],
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-20 left-10 w-80 h-80 rounded-full opacity-10"
              style={{
                background: `radial-gradient(circle, var(--color-second-green), transparent)`
              }}
            />

            {/* Small floating dots */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.sin(i) * 20, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  backgroundColor: i % 2 === 0 ? 'var(--color-green)' : 'var(--color-second-green)',
                  top: `${20 + i * 10}%`,
                  left: `${10 + i * 12}%`,
                }}
              />
            ))}

            {/* Rotating geometric shapes */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-1/4 left-1/4 w-32 h-32 opacity-5"
              style={{
                border: `3px solid var(--color-green)`,
                borderRadius: '30%'
              }}
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-1/4 right-1/4 w-40 h-40 opacity-5"
              style={{
                border: `3px solid var(--color-second-green)`,
                borderRadius: '40%'
              }}
            />

            {/* Animated grid pattern */}
            <motion.div
              animate={{
                backgroundPosition: ['0px 0px', '50px 50px'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `linear-gradient(var(--color-green) 1px, transparent 1px),
                                 linear-gradient(90deg, var(--color-green) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
              }}
            />
          </div>

          {/* Logo Container */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Pulsing glow effect behind logo */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 blur-3xl"
              style={{
                background: `radial-gradient(circle, var(--color-green), transparent)`,
              }}
            />

            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <AnimatedLogo />
            </motion.div>

            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="flex flex-col items-center gap-4"
            >
              <p
                className="text-lg font-medium"
                style={{ color: 'var(--color-text)' }}
              >
                {content.nav.loading}
              </p>

              {/* Animated dots */}
              <div className="flex gap-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: 'var(--color-green)' }}
                  />
                ))}
              </div>

              {/* Progress bar */}
              <motion.div
                className="w-64 h-1 rounded-full overflow-hidden"
                style={{ backgroundColor: 'var(--color-container-light)' }}
              >
                <motion.div
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="h-full w-1/3 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, transparent, var(--color-green), transparent)`
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
