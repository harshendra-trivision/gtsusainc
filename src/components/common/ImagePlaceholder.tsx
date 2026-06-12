'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Eye } from 'lucide-react';

interface ImagePlaceholderProps {
  alt: string;
  src?: string;
  className?: string;
  width?: number;
  height?: number;
  aspectRatio?: 'video' | 'square' | 'wide' | 'auto';
  showOverlay?: boolean;
  overlayText?: string;
}

export default function ImagePlaceholder({
  alt,
  src = '/image/showcase1.png',
  className = '',
  width = 600,
  height = 400,
  aspectRatio = 'video',
  showOverlay = true,
  overlayText
}: ImagePlaceholderProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const aspectClass = {
    video: 'aspect-video',
    square: 'aspect-square',
    wide: 'aspect-[21/9]',
    auto: 'h-full w-full'
  }[aspectRatio];

  return (
    <div 
      className={`relative overflow-hidden bg-slate-900 border border-slate-800 rounded-lg group ${aspectClass} ${className}`}
    >
      {/* Engineering blueprint background animation prior to loading */}
      {!isLoaded && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-950 blueprint-grid-fine animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-950" />
          <div className="z-20 text-xs font-mono tracking-widest text-accent-light uppercase opacity-50">
            Initializing Asset...
          </div>
        </div>
      )}

      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`object-cover w-full h-full transition-all duration-700 ease-out 
          ${isLoaded ? 'scale-100 opacity-100' : 'scale-105 opacity-0'}
          group-hover:scale-105`}
        onLoad={() => setIsLoaded(true)}
      />

      {/* Modern glassmorphism blueprint details overlay */}
      {showOverlay && isLoaded && (
        <div className="absolute inset-0 flex flex-col justify-end p-4 transition-all duration-300 opacity-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent group-hover:opacity-100 z-20">
          <div className="flex items-center gap-2 text-white transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
            <span className="p-1.5 rounded-full bg-accent/80 backdrop-blur-sm">
              <Eye className="w-4 h-4 text-white" />
            </span>
            <div className="text-xs font-mono uppercase tracking-wider text-slate-200">
              {overlayText || alt}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export { ImagePlaceholder };
