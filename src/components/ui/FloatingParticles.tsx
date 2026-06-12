'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from './utils';

const particles = [
  { left: '8%', top: '18%', size: 3, delay: 0 },
  { left: '18%', top: '70%', size: 2, delay: 0.7 },
  { left: '32%', top: '32%', size: 4, delay: 1.1 },
  { left: '48%', top: '76%', size: 2, delay: 0.4 },
  { left: '63%', top: '22%', size: 3, delay: 1.6 },
  { left: '76%', top: '64%', size: 2, delay: 1.0 },
  { left: '88%', top: '28%', size: 4, delay: 0.2 },
  { left: '92%', top: '82%', size: 2, delay: 1.4 }
];

interface FloatingParticlesProps {
  className?: string;
}

export default function FloatingParticles({ className }: FloatingParticlesProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden="true">
      {particles.map((particle, index) => (
        <motion.span
          key={`${particle.left}-${particle.top}`}
          className="absolute rounded-full bg-cyan-200/70 shadow-[0_0_18px_rgba(125,211,252,0.8)]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size
          }}
          initial={shouldReduceMotion ? false : { opacity: 0.25, y: 0 }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: [0.25, 0.9, 0.25],
                  y: [-6, 10, -6],
                  x: index % 2 === 0 ? [0, 8, 0] : [0, -8, 0]
                }
          }
          transition={{
            duration: 5 + index * 0.35,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  );
}

export { FloatingParticles };
