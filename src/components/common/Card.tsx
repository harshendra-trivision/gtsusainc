'use client';

import React, { useRef, useState } from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export default function Card({ children, className = '', glow = true, ...props }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      className={`relative overflow-hidden bg-white border border-slate-200 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md hover:border-slate-300 p-6 ${className}`}
      style={{
        ['--mouse-x' as any]: `${coords.x}px`,
        ['--mouse-y' as any]: `${coords.y}px`
      }}
      {...props}
    >
      {/* Premium background spotlight glow */}
      {glow && isFocused && (
        <div 
          className="absolute pointer-events-none rounded-xl inset-0 z-0 transition-opacity duration-300 opacity-100"
          style={{
            background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, rgba(37, 99, 235, 0.04), transparent 80%)`
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
export { Card };
