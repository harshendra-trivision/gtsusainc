import { cn } from './utils';

interface BackgroundGridProps {
  className?: string;
  variant?: 'fine' | 'standard';
  glow?: boolean;
}

export default function BackgroundGrid({ className, variant = 'standard', glow = true }: BackgroundGridProps) {
  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden="true">
      <div className={cn('absolute inset-0', variant === 'fine' ? 'blueprint-grid-fine' : 'blueprint-grid')} />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(96,165,250,0.08),transparent)]" />
      {glow && (
        <>
          <div className="absolute -left-28 top-16 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-cyan-400/16 blur-3xl" />
        </>
      )}
    </div>
  );
}

export { BackgroundGrid };
