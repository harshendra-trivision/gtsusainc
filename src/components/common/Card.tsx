'use client';

import React, { useRef, useState } from 'react';
import { cn } from '@/components/ui';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export default function Card({ children, className = '', glow = true, ...props }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      className={cn(
        'relative overflow-hidden rounded-[1.35rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/70 hover:shadow-xl hover:shadow-blue-100/60',
        className
      )}
      style={
        {
          '--mouse-x': `${coords.x}px`,
          '--mouse-y': `${coords.y}px`
        } as React.CSSProperties
      }
      {...props}
    >
      {glow && (
        <div
          className={cn(
            'pointer-events-none absolute inset-0 z-0 rounded-[inherit] transition-opacity duration-300',
            isFocused ? 'opacity-100' : 'opacity-0'
          )}
          style={{
            background: `radial-gradient(500px circle at ${coords.x}px ${coords.y}px, rgba(59, 130, 246, 0.10), transparent 70%)`
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
export { Card };
