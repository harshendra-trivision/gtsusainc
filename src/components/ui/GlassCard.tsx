import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from './utils';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  tone?: 'light' | 'dark';
}

export default function GlassCard({ children, className, tone = 'light', ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[1.5rem] border shadow-[0_24px_80px_rgba(2,6,23,0.10)] backdrop-blur-xl',
        'before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_40%,rgba(96,165,250,0.10))]',
        tone === 'dark'
          ? 'border-white/10 bg-white/[0.06] text-white'
          : 'border-white/70 bg-white/75 text-slate-900',
        className
      )}
      {...props}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export { GlassCard };
