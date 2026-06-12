import { cn } from './utils';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  theme = 'light',
  className
}: SectionHeadingProps) {
  const isCenter = align === 'center';
  const isDark = theme === 'dark';

  return (
    <div className={cn(isCenter && 'mx-auto text-center', 'max-w-3xl space-y-4', className)}>
      <div className={cn('text-xs font-mono font-semibold uppercase tracking-[0.24em]', isDark ? 'text-cyan-200' : 'text-accent')}>
        {eyebrow}
      </div>
      <h2 className={cn('font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl', isDark ? 'text-white' : 'text-primary')}>
        {title}
      </h2>
      {description && (
        <p className={cn('text-sm leading-7 sm:text-base', isDark ? 'text-slate-300' : 'text-slate-500')}>
          {description}
        </p>
      )}
    </div>
  );
}

export { SectionHeading };
