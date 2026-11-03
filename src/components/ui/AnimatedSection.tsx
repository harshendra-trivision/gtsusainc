'use client';

import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: 'section' | 'div' | 'article';
  delay?: number;
}

export default function AnimatedSection({
  children,
  className,
  id,
  as = 'section',
  delay = 0
}: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      id={id}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      // Trigger once the block's top edge is 10% into the viewport. A fractional `amount` (e.g. 0.18) can never be
      // reached by blocks taller than ~5 screens, which then stay invisible forever.
      viewport={{ once: true, amount: 'some', margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </Component>
  );
}

export { AnimatedSection };
