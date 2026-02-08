'use client';

import { motion } from 'framer-motion';

/**
 * GlobalBackground - A single, consistent animated background for the entire page
 * This eliminates pattern inconsistencies between sections
 */
export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
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
      {[...Array(12)].map((_, i) => (
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
            top: `${15 + (i * 7)}%`,
            left: `${8 + (i * 8)}%`,
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

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-2/3 right-1/3 w-28 h-28 opacity-5"
        style={{
          border: `3px solid var(--color-green)`,
          borderRadius: '35%'
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

      {/* Diagonal lines */}
      {[...Array(7)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          animate={{
            scaleY: [1, 1.5, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut"
          }}
          className="absolute h-full w-px"
          style={{
            backgroundColor: 'var(--color-green)',
            left: `${15 + i * 12}%`,
            transform: 'skewX(-15deg)',
          }}
        />
      ))}
    </div>
  );
}
