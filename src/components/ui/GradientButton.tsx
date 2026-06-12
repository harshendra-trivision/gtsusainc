'use client';

import type { PointerEvent, ReactNode } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from './utils';

interface GradientButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  showIcon?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const baseClass =
  'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl px-5 py-3 text-sm font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950';

const variantClasses = {
  primary:
    'bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 text-white shadow-[0_16px_40px_rgba(37,99,235,0.30)] hover:shadow-[0_20px_55px_rgba(34,211,238,0.28)]',
  secondary:
    'border border-slate-200 bg-white text-slate-900 shadow-sm hover:border-blue-300 hover:text-accent',
  ghost:
    'border border-white/20 bg-white/10 text-white backdrop-blur hover:border-white/40 hover:bg-white/15'
};

const glowClasses = {
  primary: 'bg-[radial-gradient(circle,rgba(255,255,255,0.62)_0%,rgba(125,211,252,0.34)_38%,transparent_72%)]',
  secondary: 'bg-[radial-gradient(circle,rgba(37,99,235,0.22)_0%,rgba(14,165,233,0.18)_42%,transparent_72%)]',
  ghost: 'bg-[radial-gradient(circle,rgba(255,255,255,0.34)_0%,rgba(125,211,252,0.22)_42%,transparent_72%)]'
};

export default function GradientButton({
  children,
  href,
  className,
  variant = 'primary',
  showIcon = true,
  type = 'button',
  onClick,
  ...props
}: GradientButtonProps) {
  const shouldReduceMotion = useReducedMotion();
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const smoothGlowX = useSpring(glowX, { stiffness: 260, damping: 28 });
  const smoothGlowY = useSpring(glowY, { stiffness: 260, damping: 28 });

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    glowX.set(event.clientX - rect.left);
    glowY.set(event.clientY - rect.top);
  };

  const content = (
    <>
      <motion.span
        className={cn(
          'pointer-events-none absolute h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 blur-xl transition-opacity duration-200 group-hover:opacity-100',
          glowClasses[variant]
        )}
        style={{ left: smoothGlowX, top: smoothGlowY }}
      />
      <motion.span
        className="absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-white/30 opacity-0 blur-sm"
        initial={false}
        animate={shouldReduceMotion ? undefined : { x: ['0%', '420%'], opacity: [0, 0.55, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
      />
      <span className="relative z-10">{children}</span>
      {showIcon && <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />}
    </>
  );

  const classes = cn(baseClass, variantClasses[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick} onPointerEnter={handlePointerMove} onPointerMove={handlePointerMove}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} type={type} onClick={onClick} onPointerEnter={handlePointerMove} onPointerMove={handlePointerMove} {...props}>
      {content}
    </button>
  );
}

export { GradientButton };
