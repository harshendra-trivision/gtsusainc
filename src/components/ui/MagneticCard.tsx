'use client';

import type { ReactNode } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { cn } from './utils';

interface MagneticCardProps {
  children: ReactNode;
  className?: string;
  id?: string;
  intensity?: number;
}

export default function MagneticCard({
  children,
  className,
  intensity = 8,
  id
}: MagneticCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 180, damping: 22 });
  const smoothY = useSpring(pointerY, { stiffness: 180, damping: 22 });
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [intensity, -intensity]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-intensity, intensity]);

  return (
    <motion.div
      className={cn(
        'group relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition-colors hover:border-cyan-300/70',
        'before:pointer-events-none before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-300 before:content-[""] before:group-hover:opacity-100',
        'before:bg-[radial-gradient(600px_circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(59,130,246,0.13),transparent_42%)]',
        className
      )}
      style={shouldReduceMotion ? undefined : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
      whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.01 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        pointerX.set(x);
        pointerY.set(y);
        event.currentTarget.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`);
        event.currentTarget.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`);
      }}
      onMouseLeave={() => {
        pointerX.set(0);
        pointerY.set(0);
      }}
      id={id}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export { MagneticCard };
