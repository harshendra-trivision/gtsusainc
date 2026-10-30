'use client';

import { useState } from 'react';
import heroCardDimensions from '@/constants/heroCardDimensions.json';

const dimensions: Record<string, { width: number; height: number }> = heroCardDimensions;

interface HeroCardImageProps {
  src: string;
  alt: string;
  className?: string;
  /** First-slide cards: fetch ahead of everything else on the page. */
  priority?: boolean;
}

/**
 * Hero card image that reserves its space (no layout shift), shows a shimmer until it has
 * decoded, then fades in. Render it with `key={src}` so each new slide starts from the shimmer.
 */
export default function HeroCardImage({ src, alt, className = '', priority = false }: HeroCardImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const size = dimensions[src];

  return (
    <span className="relative block">
      {!isLoaded && (
        <span
          aria-hidden="true"
          className="absolute inset-0 animate-pulse bg-gradient-to-br from-slate-800/80 via-blue-950/70 to-slate-900/80"
        />
      )}
      {/* Cards are pre-sized WebP from scripts/optimize-hero-cards.mjs; next/image optimization is off for static export. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        // Images already in the cache can finish before React attaches onLoad, so check on mount too.
        ref={(img) => {
          if (img?.complete && img.naturalWidth > 0) setIsLoaded(true);
        }}
        src={src}
        alt={alt}
        width={size?.width}
        height={size?.height}
        loading="eager"
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={() => setIsLoaded(true)}
        className={`transition-opacity duration-300 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      />
    </span>
  );
}
